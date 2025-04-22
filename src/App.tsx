import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Select,
  HStack,
  Tooltip,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/table';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { ExamType, ExamState, ExamResult } from './types';
import { examQuestions } from './data/questions';

function App() {
  const [examState, setExamState] = useState<ExamState>({
    answers: {},
    startTime: null,
    examType: null,
  });
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<ExamResult[]>([]);
  const [elapsedTime, setElapsedTime] = useState<string>("00:00:00");
  const [isPaused, setIsPaused] = useState(false);
  const [pausedTime, setPausedTime] = useState<number>(0);
  const [finalTime, setFinalTime] = useState<string>("00:00:00");
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());

  useEffect(() => {
    let intervalId: number;
    if (examState.startTime && !isPaused && !showResults) {
      intervalId = setInterval(() => {
        const now = new Date();
        const diff = now.getTime() - examState.startTime!.getTime() - pausedTime;
        const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
        const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
        const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
        setElapsedTime(`${hours}:${minutes}:${seconds}`);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [examState.startTime, isPaused, pausedTime, showResults]);

  const startExam = (type: ExamType | null = null) => {
    setExamState({
      answers: {},
      startTime: new Date(),
      examType: type,
    });
    setShowResults(false);
    setResults([]);
    setIsPaused(false);
    setPausedTime(0);
  };

  const togglePause = () => {
    if (isPaused) {
      // Resume timer
      const now = new Date();
      const pauseDuration = now.getTime() - examState.startTime!.getTime() - pausedTime;
      setPausedTime(pauseDuration);
    }
    setIsPaused(!isPaused);
  };

  const handleAnswerChange = (questionId: number, optionKey: string) => {
    setExamState((prev: ExamState) => {
      const currentAnswers = prev.answers[questionId] || [];
      const question = examQuestions[prev.examType!].find(q => q.id === questionId);
      const maxAnswers = question?.correctAnswers.length || 1;

      // For single-answer questions (maxAnswers === 1)
      if (maxAnswers === 1) {
        // If clicking the currently selected answer, deselect it
        if (currentAnswers.includes(optionKey)) {
          return {
            ...prev,
            answers: {
              ...prev.answers,
              [questionId]: []
            }
          };
        }
        // Otherwise, select the new answer (replacing any existing answer)
        return {
          ...prev,
          answers: {
            ...prev.answers,
            [questionId]: [optionKey]
          }
        };
      }

      // For multiple-answer questions (maxAnswers > 1)
      // If the option is already selected, deselect it
      if (currentAnswers.includes(optionKey)) {
        return {
          ...prev,
          answers: {
            ...prev.answers,
            [questionId]: currentAnswers.filter(key => key !== optionKey)
          }
        };
      }

      // If we've reached the maximum number of answers, don't allow new selections
      if (currentAnswers.length >= maxAnswers) {
        return prev;
      }

      // Otherwise, add the new answer
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [questionId]: [...currentAnswers, optionKey]
        }
      };
    });
  };

  const submitExam = () => {
    if (!examState.examType) return;

    // Calculate final time before showing results
    const now = new Date();
    const diff = now.getTime() - examState.startTime!.getTime() - pausedTime;
    const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
    setFinalTime(`${hours}:${minutes}:${seconds}`);

    const examResults = examQuestions[examState.examType].map((question) => {
      const userAnswers = examState.answers[question.id] || [];
      const isCorrect = 
        userAnswers.length === question.correctAnswers.length &&
        userAnswers.every(answer => question.correctAnswers.includes(answer)) &&
        question.correctAnswers.every(answer => userAnswers.includes(answer));

      return {
        questionId: question.id,
        userAnswers,
        correctAnswers: question.correctAnswers,
        isCorrect
      };
    });

    setResults(examResults);
    setShowResults(true);
  };

  const score = results.filter(r => r.isCorrect).length;
  const totalQuestions = results.length;

  const toggleQuestionExpansion = (questionId: number) => {
    setExpandedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  if (!examState.examType) {
    return (
      <ChakraProvider>
        <Box p={8}>
          <VStack spacing={6}>
            <Heading>ISTQB Practice Exam</Heading>
            <Text>Select an exam to begin:</Text>
            <Select 
              placeholder="Choose exam" 
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                startExam(e.target.value as ExamType)
              }
            >
              <option value="A">Exam A</option>
              <option value="B">Exam B</option>
              <option value="C">Exam C</option>
              <option value="D">Exam D</option>
            </Select>
          </VStack>
        </Box>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Box p={8}>
        <VStack spacing={6} align="stretch">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Heading size="lg">ISTQB Practice Exam {examState.examType}</Heading>
            <HStack spacing={4}>
              <Text fontSize="xl">Time: {showResults ? finalTime : elapsedTime}</Text>
              {examState.startTime && !showResults && (
                <Button
                  colorScheme={isPaused ? "green" : "yellow"}
                  onClick={togglePause}
                >
                  {isPaused ? "Play" : "Pause"}
                </Button>
              )}
            </HStack>
          </Box>

          {!showResults ? (
            <>
              {examQuestions[examState.examType].map((question) => (
                <Box key={question.id} p={6} borderWidth={1} borderRadius="lg" bg="white" shadow="md">
                  <Text fontWeight="bold" mb={4}>
                    {question.id}. {question.text}
                  </Text>
                  {question.image && (
                    <Box mb={4} maxW="100%" overflow="hidden">
                      <img 
                        src={question.image} 
                        alt={`Question ${question.id} diagram`}
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </Box>
                  )}
                  <VStack align="stretch" spacing={3}>
                    {question.options.map((option) => (
                      <Button
                        key={option.key}
                        variant={examState.answers[question.id]?.includes(option.key) ? "solid" : "outline"}
                        colorScheme={examState.answers[question.id]?.includes(option.key) ? "blue" : "gray"}
                        onClick={() => handleAnswerChange(question.id, option.key)}
                        size="lg"
                        justifyContent="flex-start"
                        whiteSpace="normal"
                        height="auto"
                        py={4}
                        textAlign="left"
                      >
                        <HStack align="start" spacing={4} width="100%">
                          <Text fontWeight="bold" minWidth="24px">{option.key}.</Text>
                          <Text>{option.text}</Text>
                        </HStack>
                      </Button>
                    ))}
                  </VStack>
                </Box>
              ))}
              <Button colorScheme="green" size="lg" onClick={submitExam}>
                Submit Exam
              </Button>
            </>
          ) : (
            <VStack spacing={6} align="stretch">
              <Heading size="md">
                Your Score: {score}/{totalQuestions} ({Math.round((score/totalQuestions) * 100)}%)
              </Heading>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Question</Th>
                    <Th>Your Answers</Th>
                    <Th>Correct Answers</Th>
                    <Th>Result</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {results.map((result) => {
                    const question = examQuestions[examState.examType!].find(q => q.id === result.questionId);
                    const isExpanded = expandedQuestions.has(result.questionId);
                    
                    return (
                      <>
                        <Tooltip label="Click to view question details" hasArrow>
                          <Tr 
                            key={result.questionId}
                            bg={result.isCorrect ? "green.50" : "red.50"}
                            onClick={() => toggleQuestionExpansion(result.questionId)}
                            cursor="pointer"
                            _hover={{ bg: result.isCorrect ? "green.100" : "red.100" }}
                          >
                            <Td>
                              <HStack spacing={2}>
                                {isExpanded ? 
                                  <ChevronUpIcon boxSize={5} /> : 
                                  <ChevronDownIcon boxSize={5} />
                                }
                                <Text>{result.questionId}</Text>
                              </HStack>
                            </Td>
                            <Td>
                              {result.userAnswers.length > 0 
                                ? result.userAnswers.join(", ") 
                                : '(No answer)'}
                            </Td>
                            <Td>{result.correctAnswers.join(", ")}</Td>
                            <Td color={result.isCorrect ? "green.500" : "red.500"}>
                              {result.isCorrect ? "Correct" : "Incorrect"}
                            </Td>
                          </Tr>
                        </Tooltip>
                        {isExpanded && question && (
                          <Tr bg={result.isCorrect ? "green.50" : "red.50"}>
                            <Td colSpan={4} p={4}>
                              <VStack align="stretch" spacing={4}>
                                <Text fontWeight="bold">{question.text}</Text>
                                <VStack align="stretch" spacing={2}>
                                  {question.options.map(option => (
                                    <Text 
                                      key={option.key}
                                      color={
                                        result.correctAnswers.includes(option.key) 
                                          ? "green.500" 
                                          : result.userAnswers.includes(option.key) 
                                            ? "red.500" 
                                            : "gray.500"
                                      }
                                      fontWeight={
                                        result.correctAnswers.includes(option.key) || 
                                        result.userAnswers.includes(option.key)
                                          ? "bold"
                                          : "normal"
                                      }
                                    >
                                      {option.key}. {option.text}
                                    </Text>
                                  ))}
                                </VStack>
                              </VStack>
                            </Td>
                          </Tr>
                        )}
                      </>
                    );
                  })}
                </Tbody>
              </Table>
              <Button colorScheme="blue" onClick={() => startExam(null)}>
                Start New Exam
              </Button>
            </VStack>
          )}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
