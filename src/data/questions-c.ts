import { Question } from '../types';

export const examQuestionsC: Question[] = [
  {
    "id": 1,
    "text": "Which of the following is a typical test objective?",
    "options": [
      {
        "key": "A",
        "text": "Validating that documented requirements are met"
      },
      {
        "key": "B",
        "text": "Causing failures and identifying defects"
      },
      {
        "key": "C",
        "text": "Initiating errors and identifying root causes"
      },
      {
        "key": "D",
        "text": "Verifying the test object meets user expectations"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 2,
    "text": "Which of the following statements BEST describes the difference between testing and debugging?",
    "options": [
      {
        "key": "A",
        "text": "Testing causes failures while debugging fixes failures"
      },
      {
        "key": "B",
        "text": "Testing is a negative activity while debugging is a positive activity"
      },
      {
        "key": "C",
        "text": "Testing determines that defects exist while debugging removes defects"
      },
      {
        "key": "D",
        "text": "Testing finds the cause of defects while debugging fixes the cause of defects"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 3,
    "text": "The 'absence-of-defects fallacy' is one of the principles of testing.\nWhich of the following is an example of addressing this principle in practice?",
    "options": [
      {
        "key": "A",
        "text": "Explaining that it is not possible for testing to show the absence of defects"
      },
      {
        "key": "B",
        "text": "Supporting the end users to perform acceptance testing"
      },
      {
        "key": "C",
        "text": "Ensuring that no implementation defects remain in the delivered system"
      },
      {
        "key": "D",
        "text": "Modifying tests that cause no failures to ensure few defects remain"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 4,
    "text": "Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?",
    "options": [
      {
        "key": "A",
        "text": "Test implementation"
      },
      {
        "key": "B",
        "text": "Test design"
      },
      {
        "key": "C",
        "text": "Test execution"
      },
      {
        "key": "D",
        "text": "Test monitoring"
      },
      {
        "key": "E",
        "text": "Test analysis"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ]
  },
  {
    "id": 5,
    "text": "Given the following testware:\n1. Coverage items\n2. Change requests\n3. Test execution schedule\n4. Prioritized test conditions\nAnd the following test activities\nA. Test analysis\nB. Test design\nC. Test implementation\nD. Test completion\nWhich of the following BEST shows the testware produced by the activities?",
    "options": [
      {
        "key": "A",
        "text": "1B, 2D, 3C, 4A"
      },
      {
        "key": "B",
        "text": "1B, 2D, 3A, 4C"
      },
      {
        "key": "C",
        "text": "1D, 2C, 3A, 4B"
      },
      {
        "key": "D",
        "text": "1D, 2C, 3B, 4A"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 6,
    "text": "Which of the following statements about the different testing roles is MOST likely to be CORRECT?",
    "options": [
      {
        "key": "A",
        "text": "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team"
      },
      {
        "key": "B",
        "text": "The testing role is primarily responsible for test monitoring and control, while the test management role is primarily responsible for test planning and test completion"
      },
      {
        "key": "C",
        "text": "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself"
      },
      {
        "key": "D",
        "text": "The test management role is primarily responsible for test analysis and test\ndesign, while the testing role is primarily responsible for test implementation and execution"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 7,
    "text": "Which of the following is an advantage of the whole-team approach?",
    "options": [
      {
        "key": "A",
        "text": "Teams with no testers"
      },
      {
        "key": "B",
        "text": "Improved team dynamics"
      },
      {
        "key": "C",
        "text": "Specialist team members"
      },
      {
        "key": "D",
        "text": "Larger team sizes"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 8,
    "text": "Which of the following statements about the independence of testing is CORRECT?",
    "options": [
      {
        "key": "A",
        "text": "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers"
      },
      {
        "key": "B",
        "text": "Developers' familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers"
      },
      {
        "key": "C",
        "text": "Independent testing requires testers who are outside the developer's team and ideally from outside the organization, however these testers find it difficult to understand the application domain"
      },
      {
        "key": "D",
        "text": "Testers from outside the developer's team are more independent than testers from within the team,\nbut the testers from within the team are more likely to be blamed for delays in product release"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 9,
    "text": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "options": [
      {
        "key": "A",
        "text": "For each test level, there is a corresponding development level"
      },
      {
        "key": "B",
        "text": "For each test objective, there is a corresponding development objective"
      },
      {
        "key": "C",
        "text": "For every software test activity, there is a corresponding user activity"
      },
      {
        "key": "D",
        "text": "For every software development activity, there is a corresponding test activity"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 10,
    "text": "Which of the following is an example of a test-first approach to development?",
    "options": [
      {
        "key": "A",
        "text": "Component Test-Driven Development"
      },
      {
        "key": "B",
        "text": "Integration Test-Driven Development"
      },
      {
        "key": "C",
        "text": "System Test-Driven Development"
      },
      {
        "key": "D",
        "text": "Acceptance Test-Driven Development"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 11,
    "text": "Which of the following provides the BEST description of the shift-left approach?",
    "options": [
      {
        "key": "A",
        "text": "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of 'early testing saves time and money'"
      },
      {
        "key": "B",
        "text": "Where cost-effective, test activities are moved to be performed earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC"
      },
      {
        "key": "C",
        "text": "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests"
      },
      {
        "key": "D",
        "text": "When available, testers are trained to perform tasks early in the SDLC to allow\nmore test activities to be automated later in the SDLC"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 12,
    "text": "Which of the following is LEAST likely to occur as a result of a retrospective?",
    "options": [
      {
        "key": "A",
        "text": "The quality of future test objects improves by identifying improvements in development practices"
      },
      {
        "key": "B",
        "text": "Test efficiency improves by speeding up the configuration of test environments through automation"
      },
      {
        "key": "C",
        "text": "End users' understanding of the development and test processes is improved"
      },
      {
        "key": "D",
        "text": "Automated test scripts are enhanced through feedback from developers"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 13,
    "text": "Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?",
    "options": [
      {
        "key": "A",
        "text": "Component testing"
      },
      {
        "key": "B",
        "text": "Component integration testing"
      },
      {
        "key": "C",
        "text": "System integration testing"
      },
      {
        "key": "D",
        "text": "Acceptance testing"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 14,
    "text": "The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets.\nWhich of the following BEST describes the testing that will be performed?",
    "options": [
      {
        "key": "A",
        "text": "Only confirmation testing"
      },
      {
        "key": "B",
        "text": "Confirmation testing then regression testing"
      },
      {
        "key": "C",
        "text": "Only regression testing"
      },
      {
        "key": "D",
        "text": "Regression testing then confirmation testing"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 15,
    "text": "Given the following example defects:\ni. Two different parts of the design specification disagree due to the complexity of the design\nii. A response time is too long and so makes users lose patience\niii. A path in the code cannot be reached during execution\niv. A variable is declared but never subsequently used in the program\nv. The amount of memory needed by the program to generate a report is too high\nWhich of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?",
    "options": [
      {
        "key": "A",
        "text": "ii, v"
      },
      {
        "key": "B",
        "text": "iii, v"
      },
      {
        "key": "C",
        "text": "i, ii, iv"
      },
      {
        "key": "D",
        "text": "i, iii, iv"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 16,
    "text": "Which of the following is a benefit of early and frequent stakeholder feedback?",
    "options": [
      {
        "key": "A",
        "text": "Changes to requirements are understood and implemented earlier"
      },
      {
        "key": "B",
        "text": "It ensures business stakeholders understand user requirements"
      },
      {
        "key": "C",
        "text": "It allows product owners to change their requirements as often as they want"
      },
      {
        "key": "D",
        "text": "End users are told which requirements will not be implemented prior to release"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 17,
    "text": "Given the following review types:\n1. Technical review\n2. Informal review\n3. Inspection\n4. Walkthrough\nAnd the following descriptions:\nA. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve\nB. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects\nC. The main objective is detecting potential defects and it requires metrics collection to support process improvement\nD. The main objective is detecting potential defects and it generates no formal documented output\nWhich of the following BEST matches the review types and the descriptions?",
    "options": [
      {
        "key": "A",
        "text": "1A, 2B, 3C, 4D"
      },
      {
        "key": "B",
        "text": "1A, 2D, 3C, 4B"
      },
      {
        "key": "C",
        "text": "1B, 2C, 3D, 4A"
      },
      {
        "key": "D",
        "text": "1C, 2D, 3A, 4B"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 18,
    "text": "Which of the following is a factor that contributes to a successful review?",
    "options": [
      {
        "key": "A",
        "text": "Ensure management participate as reviewers"
      },
      {
        "key": "B",
        "text": "Split large work products into smaller parts"
      },
      {
        "key": "C",
        "text": "Set reviewer evaluation as an objective"
      },
      {
        "key": "D",
        "text": "Plan to cover one document per review"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 19,
    "text": "What is the MAIN difference between black-box test techniques and experience-based test techniques?",
    "options": [
      {
        "key": "A",
        "text": "The test object"
      },
      {
        "key": "B",
        "text": "The test level at which the test technique is used"
      },
      {
        "key": "C",
        "text": "The test basis"
      },
      {
        "key": "D",
        "text": "The software development lifecycle (SDLC) in which the test technique can be used"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 20,
    "text": "You are testing a PIN validator which accepts valid PINs and rejects invalid PINs.\nA PIN is a sequence of digits. A PIN is valid if it consists of four digits and at least two of them are different.\nWhich of the following sets of input test data cover all equivalence partitions for this scenario?",
    "options": [
      {
        "key": "A",
        "text": "112, 1111, 1234, 123456"
      },
      {
        "key": "B",
        "text": "1, 123, 1111, 1234"
      },
      {
        "key": "C",
        "text": "12, 112, 1112, 11112"
      },
      {
        "key": "D",
        "text": "1, 111, 1111, 11111"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 21,
    "text": "A developer was asked to implement the following business rule:\nINPUT: value (integer number)\n$F(value\\le100~OR~value\\ge200)$ THEN write \"value incorrect\"\nELSE write \"value OK\"\nYou design the test cases using 2-value boundary value analysis.\nWhich of the following sets of test inputs achieves the greatest coverage?",
    "options": [
      {
        "key": "A",
        "text": "100, 150, 200, 201"
      },
      {
        "key": "B",
        "text": "99, 100, 200, 201"
      },
      {
        "key": "C",
        "text": "98, 99, 100, 101"
      },
      {
        "key": "D",
        "text": "101, 150, 199, 200"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 22,
    "text": "You are working on a project to develop a system to analyze driving test results.\nYou have been asked to design test cases based on the following decision table.\nR1 R2 R3\nC1: First attempt at the exam? F\nC2: Theoretical exam passed? T F\nC3: Practical exam passed?\nT F\nIssue a driving license? X\nRequest additional driving lessons? X\nRequest to take the exam again?\nX\nWhat test data will show that there are contradictory rules in the decision table?",
    "options": [
      {
        "key": "A",
        "text": "$C1=T,$ $C2=T$ $C3=F$"
      },
      {
        "key": "B",
        "text": "$C1=T$ $C2=F$, $C3=T$"
      },
      {
        "key": "C",
        "text": "$C1=T$ $C2=T$, $C3=T$ and $C1=F$ $C2=T$ $C3=T$"
      },
      {
        "key": "D",
        "text": "$C1=F$ $C2=F$ $C3=F$"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 23,
    "text": "You are designing test cases based on the following state transition diagram:\nRoom request\nNot available\nSTART\nREQUESTING\nWAITING LIST\nAvailable\nAvailable\nCONFIRMED\nCancel\nPay\nEND\nWhat is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 24,
    "text": "You want to apply branch testing to the code represented by the following control flow graph.\nHow many coverage items do you need to test?",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "7"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 25,
    "text": "How can white-box testing be useful in support of black-box testing?",
    "options": [
      {
        "key": "A",
        "text": "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests"
      },
      {
        "key": "B",
        "text": "White-box coverage analysis can help testers identify unreachable fragments of the source code"
      },
      {
        "key": "C",
        "text": "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique"
      },
      {
        "key": "D",
        "text": "White-box test techniques can provide coverage items for black-box techniques"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 26,
    "text": "Consider the following list:\nCorrect input not accepted\nIncorrect input accepted\nWrong output format\nDivision by zero\nWhat test technique is MOST PROBABLY used by the tester who uses this list when performing testing?",
    "options": [
      {
        "key": "A",
        "text": "Exploratory testing"
      },
      {
        "key": "B",
        "text": "Fault attack"
      },
      {
        "key": "C",
        "text": "Checklist-based testing"
      },
      {
        "key": "D",
        "text": "Boundary value analysis"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 27,
    "text": "Which of the following BEST describes how using checklist-based testing can result in increased coverage?",
    "options": [
      {
        "key": "A",
        "text": "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items"
      },
      {
        "key": "B",
        "text": "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage"
      },
      {
        "key": "C",
        "text": "Each checklist item should be tested separately and independently, so the elements cover different areas of the software"
      },
      {
        "key": "D",
        "text": "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 28,
    "text": "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
    "options": [
      {
        "key": "A",
        "text": "The application must allow users to delete their account and all associated data upon request"
      },
      {
        "key": "B",
        "text": "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven't already done so"
      },
      {
        "key": "C",
        "text": "IF (contain(product(23). Name, cart.products())) THEN return FALSE"
      },
      {
        "key": "D",
        "text": "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 29,
    "text": "You are using acceptance test-driven development and designing test cases based on the following user story:\nAs a Regular or Special user, I want to be able to\nuse my electronic floor card, to access specific floors.\nAcceptance Criteria:\nAC1: Regular users have access to floors 1 to 3\nAC2: Floor 4 is only accessible to Special users\nAC3: Special users have all the access rights of Regular users\nWhich test case is the MOST reasonable one to test AC3?",
    "options": [
      {
        "key": "A",
        "text": "Check that a Regular user can access floors 1 and 3"
      },
      {
        "key": "B",
        "text": "Check that a Regular user cannot access floor 4"
      },
      {
        "key": "C",
        "text": "Check that a Special user can access floor 5"
      },
      {
        "key": "D",
        "text": "Check that a Special user can access floors 1, 2 and 3"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 30,
    "text": "Which of the following is NOT a purpose of a test plan?",
    "options": [
      {
        "key": "A",
        "text": "To define test data and expected results for component tests and component integration tests"
      },
      {
        "key": "B",
        "text": "To define as exit criteria from the component test level that \"100% statement coverage and 100% branch coverage must be achieved\""
      },
      {
        "key": "C",
        "text": "To describe what fields the test progress report shall contain and what should be the form of this report"
      },
      {
        "key": "D",
        "text": "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 31,
    "text": "At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration.\nLet $E(n)$ be the estimated amount of work for iteration n, and let $A(n)$ be the actual amount of work done in iteration n.\nFrom the third iteration, the team uses the following estimation model based on extrapolation:\nE(n)\n3*A(n-1) + A(n-2)\n4\nThe graph shows the estimated and actual amount of work for the first four iterations.\nEstimated and actual effort (in person-days)\nWhat is the estimated amount of work for iteration #5?",
    "options": [
      {
        "key": "A",
        "text": "10.5 person-days"
      },
      {
        "key": "B",
        "text": "8.25 person-days"
      },
      {
        "key": "C",
        "text": "6.5 person-days"
      },
      {
        "key": "D",
        "text": "9.4 person-days"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 32,
    "text": "You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7.\nThe following figure includes the priorities of these test cases ( $1=$ highest priority, $3=$ lowest priority).\nThe figure also shows the dependencies between test cases using arrows.\nFor instance, the arrow from TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed.\nWhich test case should be executed sixth?",
    "options": [
      {
        "key": "A",
        "text": "TC 3"
      },
      {
        "key": "B",
        "text": "TC 5"
      },
      {
        "key": "C",
        "text": "TC 6"
      },
      {
        "key": "D",
        "text": "TC 2"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 33,
    "text": "What does the test pyramid model show?",
    "options": [
      {
        "key": "A",
        "text": "That tests may have different priorities"
      },
      {
        "key": "B",
        "text": "That tests may have different granularity"
      },
      {
        "key": "C",
        "text": "That tests may require different coverage criteria"
      },
      {
        "key": "D",
        "text": "That tests may depend on other tests"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 34,
    "text": "What is the relationship between the testing quadrants, test levels and test types?",
    "options": [
      {
        "key": "A",
        "text": "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle"
      },
      {
        "key": "B",
        "text": "Testing quadrants describe the degree of granularity of individual test types performed at each test level"
      },
      {
        "key": "C",
        "text": "Testing quadrants assign the test types that can be performed to the test levels"
      },
      {
        "key": "D",
        "text": "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 35,
    "text": "Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?",
    "options": [
      {
        "key": "A",
        "text": "Continuous risk monitoring allows us to identify emerging risk as soon as possible"
      },
      {
        "key": "B",
        "text": "Risk identification allows us to implement risk mitigation activities and reduce the risk level"
      },
      {
        "key": "C",
        "text": "The assessed risk level helps us to select the rigor of testing"
      },
      {
        "key": "D",
        "text": "Risk analysis allows us to derive coverage items"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 36,
    "text": "Which of the following activities in the test process makes the MOST use of test progress reports?",
    "options": [
      {
        "key": "A",
        "text": "Test design"
      },
      {
        "key": "B",
        "text": "Test completion"
      },
      {
        "key": "C",
        "text": "Test analysis"
      },
      {
        "key": "D",
        "text": "Test planning"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 37,
    "text": "Which of the following is NOT an example of how configuration management supports testing?",
    "options": [
      {
        "key": "A",
        "text": "All commits to the repository are uniquely identified and version controlled"
      },
      {
        "key": "B",
        "text": "All changes in the test environment elements are tracked"
      },
      {
        "key": "C",
        "text": "All requirement specifications are referenced unambiguously in test plans"
      },
      {
        "key": "D",
        "text": "All identified defects have an assigned status"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 38,
    "text": "Consider the following defect report for a web-based shopping application:\nApplication: WebShop v0.99\nDefect: Login button not working\nSteps to Reproduce:\nLaunch the website\nClick on the login button\nExpected result: The user should be redirected to the login page.\nActual result: The login button does not respond when clicked.\nSeverity: High\nPriority: Urgent\nWhat is the MOST important information that is missing from this report?",
    "options": [
      {
        "key": "A",
        "text": "Name of the tester and date of the report"
      },
      {
        "key": "B",
        "text": "Test environment elements and their version numbers"
      },
      {
        "key": "C",
        "text": "Identification of the test object"
      },
      {
        "key": "D",
        "text": "Impact on the interests of stakeholders"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 39,
    "text": "Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?",
    "options": [
      {
        "key": "A",
        "text": "Test execution and coverage tools"
      },
      {
        "key": "B",
        "text": "Test design and implementation tools"
      },
      {
        "key": "C",
        "text": "Defect management tools"
      },
      {
        "key": "D",
        "text": "Test management tools"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 40,
    "text": "Which of the following is MOST likely to be a benefit of test automation?",
    "options": [
      {
        "key": "A",
        "text": "The capability of generating test cases without access to the test basis"
      },
      {
        "key": "B",
        "text": "The achievement of increased coverage through more objective assessment"
      },
      {
        "key": "C",
        "text": "The increase in test execution times available with higher processing power"
      },
      {
        "key": "D",
        "text": "The prevention of human errors through greater consistency and repeatability"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  }
];