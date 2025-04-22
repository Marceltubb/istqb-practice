import { Question } from '../types';

export const examQuestionsA: Question[] = [
  {
    "id": 1,
    "text": "Which of the following statements describe a valid test objective?",
    "options": [
      {
        "key": "A",
        "text": "To prove that there are no unfixed defects in the system under test"
      },
      {
        "key": "B",
        "text": "To prove that there will be no failures after the implementation of the system into production"
      },
      {
        "key": "C",
        "text": "To reduce the risk level of the test object and to build confidence in the quality level"
      },
      {
        "key": "D",
        "text": "To verify that there are no untested combinations of inputs"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 2,
    "text": "Which of the following options shows an example of test activities that contribute to success?",
    "options": [
      {
        "key": "A",
        "text": "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products"
      },
      {
        "key": "B",
        "text": "Testers try not to disturb the developers while coding, so that the developers write better code"
      },
      {
        "key": "C",
        "text": "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing"
      },
      {
        "key": "D",
        "text": "Certified testers will design much better test cases than non-certified testers"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 3,
    "text": "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
    "options": [
      {
        "key": "A",
        "text": "Tests wear out"
      },
      {
        "key": "B",
        "text": "Absence-of-errors fallacy"
      },
      {
        "key": "C",
        "text": "Defects cluster together"
      },
      {
        "key": "D",
        "text": "Exhaustive testing is impossible"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 4,
    "text": "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
    "options": [
      {
        "key": "A",
        "text": "Estimating that testing the integration with the payment service will take 8 person-days"
      },
      {
        "key": "B",
        "text": "Deciding that the team should test if it is possible to properly share payment between many users"
      },
      {
        "key": "C",
        "text": "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid"
      },
      {
        "key": "D",
        "text": "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 5,
    "text": "Which of the following factors have a SIGNIFICANT influence on the test approach?\ni. The SDLC\nii. The number of defects detected in previous projects\niii. The identified product risks\niv. New regulatory requirements forcing formal white-box testing\nv. The test environment setup",
    "options": [
      {
        "key": "A",
        "text": "i, ii have significant influence"
      },
      {
        "key": "B",
        "text": "i, iii, iv have significant influence"
      },
      {
        "key": "C",
        "text": "ii, iv, v have significant influence"
      },
      {
        "key": "D",
        "text": "iii, v have significant influence"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 6,
    "text": "Which TWO of the following tasks belong MAINLY to a testing role?",
    "options": [
      {
        "key": "A",
        "text": "Configure test environments"
      },
      {
        "key": "B",
        "text": "Maintain the product backlog"
      },
      {
        "key": "C",
        "text": "Design solutions to new requirements"
      },
      {
        "key": "D",
        "text": "Create the test plan"
      },
      {
        "key": "E",
        "text": "Analyze the test basis"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ]
  },
  {
    "id": 7,
    "text": "Which of the following skills (i-v) are the MOST important skills of a tester?\ni. Having domain knowledge\nii. Creating a product vision\niii. Being a good team player\niv. Planning and organizing the work of the team\nv. Critical thinking",
    "options": [
      {
        "key": "A",
        "text": "ii and iv are important"
      },
      {
        "key": "B",
        "text": "i, iii and v are important"
      },
      {
        "key": "C",
        "text": "i, ii and v are important"
      },
      {
        "key": "D",
        "text": "iii and iv are important"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 8,
    "text": "How is the whole team approach present in the interactions between testers and business representatives?",
    "options": [
      {
        "key": "A",
        "text": "Business representatives decide on test automation approaches"
      },
      {
        "key": "B",
        "text": "Testers help business representatives to define test strategy"
      },
      {
        "key": "C",
        "text": "Business representatives are not part of the whole team approach"
      },
      {
        "key": "D",
        "text": "Testers help business representatives to create suitable acceptance tests"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 9,
    "text": "Consider the following rule: \"for every SDLC activity there is a corresponding test activity\". In which SDLC models does this rule hold?",
    "options": [
      {
        "key": "A",
        "text": "Only in sequential SDLC models"
      },
      {
        "key": "B",
        "text": "Only in iterative SDLC models"
      },
      {
        "key": "C",
        "text": "Only in iterative and incremental SDLC models"
      },
      {
        "key": "D",
        "text": "In sequential, incremental, and iterative SDLC models"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 10,
    "text": "Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?",
    "options": [
      {
        "key": "A",
        "text": "In ATDD, acceptance criteria are typically created based on the given/when/then format"
      },
      {
        "key": "B",
        "text": "In ATDD, test cases are mainly created at component testing and are code-oriented"
      },
      {
        "key": "C",
        "text": "In ATDD, tests are created, based on acceptance criteria to drive the development of the related software"
      },
      {
        "key": "D",
        "text": "in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 11,
    "text": "Which of the following is NOT an example of the shift left approach?",
    "options": [
      {
        "key": "A",
        "text": "Reviewing the user requirements before they are formally accepted by the stakeholders"
      },
      {
        "key": "B",
        "text": "Writing a component test before the corresponding code is written"
      },
      {
        "key": "C",
        "text": "Executing a performance efficiency test for a component during component testing"
      },
      {
        "key": "D",
        "text": "Writing a test script before setting up the configuration management process"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 12,
    "text": "Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?",
    "options": [
      {
        "key": "A",
        "text": "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes"
      },
      {
        "key": "B",
        "text": "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product"
      },
      {
        "key": "C",
        "text": "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization's continuous process improvement program"
      },
      {
        "key": "D",
        "text": "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 13,
    "text": "Which types of failures (1-4) fit which test levels (A-D) BEST?",
    "options": [
      {
        "key": "A",
        "text": "1D, 2B, 3A, 4C"
      },
      {
        "key": "B",
        "text": "1D, 2B, 3C, 4A"
      },
      {
        "key": "C",
        "text": "1B, 2A, 3D, 4C"
      },
      {
        "key": "D",
        "text": "1C, 2B, 3A, 4D"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "image": "/images/questions-a-13.png"
  },
  {
    "id": 14,
    "text": "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows. Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available. Which of the above tests are executed as regression tests?",
    "options": [
      {
        "key": "A",
        "text": "Only 4, 7, 8, 9"
      },
      {
        "key": "B",
        "text": "Only 5, 7"
      },
      {
        "key": "C",
        "text": "Only 4, 6, 8, 9"
      },
      {
        "key": "D",
        "text": "Only 5, 6"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "image": "/images/questions-a-14.png"
  },
  {
    "id": 15,
    "text": "Which of the following is NOT a benefit of static testing?",
    "options": [
      {
        "key": "A",
        "text": "Having less expensive defect management due to the ease of detecting defects later in the SDLC"
      },
      {
        "key": "B",
        "text": "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing"
      },
      {
        "key": "C",
        "text": "Finding coding defects that might not have been found by only performing dynamic testing"
      },
      {
        "key": "D",
        "text": "Detecting gaps and inconsistencies in requirements"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 16,
    "text": "Which of the following is a benefit of early and frequent feedback?",
    "options": [
      {
        "key": "A",
        "text": "It improves the test process for future projects"
      },
      {
        "key": "B",
        "text": "It forces customers to prioritize their requirements based on agreed risks"
      },
      {
        "key": "C",
        "text": "It provides a measure for the quality of changes"
      },
      {
        "key": "D",
        "text": "It helps avoid requirements misunderstandings"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 17,
    "text": "The reviews being used in your organization have the following attributes:\n• There is the role of a scribe\n• The main purpose is to evaluate quality\n• The meeting is led by the author of the work product\n• There is individual preparation\n• A review report is produced\nWhich of the following review types is MOST likely being used?",
    "options": [
      {
        "key": "A",
        "text": "Informal review"
      },
      {
        "key": "B",
        "text": "Walkthrough"
      },
      {
        "key": "C",
        "text": "Technical review"
      },
      {
        "key": "D",
        "text": "Inspection"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 18,
    "text": "Which of these statements is NOT a factor that contributes to successful reviews?",
    "options": [
      {
        "key": "A",
        "text": "Participants should dedicate adequate time for the review"
      },
      {
        "key": "B",
        "text": "Splitting large work products into small parts to make the required effort less intense"
      },
      {
        "key": "C",
        "text": "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants"
      },
      {
        "key": "D",
        "text": "Failures found should be acknowledged, appreciated, and handled objectively"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 19,
    "text": "Which of the following is a characteristic of experience-based test techniques?",
    "options": [
      {
        "key": "A",
        "text": "Test cases are created based on detailed design information"
      },
      {
        "key": "B",
        "text": "Items tested within the interface code section are used to measure coverage"
      },
      {
        "key": "C",
        "text": "The techniques heavily rely on the tester's knowledge of the software and the business domain"
      },
      {
        "key": "D",
        "text": "The test cases are used to identify deviations from the requirements"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 20,
    "text": "You are testing a simplified apartment search form which has only two search criteria:\nfloor (with three possible options: ground floor; first floor; second or higher floor)\ngarden type (with three possible options: no garden; small garden; large garden)\nOnly apartments on the ground floor have gardens. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule. Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests. What is the minimal number of test cases to achieve 100% EP coverage?",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
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
      "B"
    ]
  },
  {
    "id": 21,
    "text": "You are testing a system that calculates the final course grade for a given student. What is the 2-value Boundary Value Analysis (BVA) coverage for the final result that is achieved with the existing test cases?",
    "options": [
      {
        "key": "A",
        "text": "50%"
      },
      {
        "key": "B",
        "text": "60%"
      },
      {
        "key": "C",
        "text": "33.3%"
      },
      {
        "key": "D",
        "text": "100%"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "image": "/images/questions-a-21.png"
  },
  {
    "id": 22,
    "text": "Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it. Based ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?",
    "options": [
      {
        "key": "A",
        "text": "R4"
      },
      {
        "key": "B",
        "text": "R2"
      },
      {
        "key": "C",
        "text": "R6"
      },
      {
        "key": "D",
        "text": "R8"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "image": "/images/questions-a-22.png"
  },
  {
    "id": 23,
    "text": "You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state.",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "image": "/images/questions-a-23.png"
  },
  {
    "id": 24,
    "text": "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
    "options": [
      {
        "key": "A",
        "text": "Each instruction in the code that contains a defect has been executed at least once"
      },
      {
        "key": "B",
        "text": "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage"
      },
      {
        "key": "C",
        "text": "Each path in the code has been executed at least once"
      },
      {
        "key": "D",
        "text": "Every combination of input values has been tested at least once"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 25,
    "text": "Which of the following is NOT true for white-box testing?",
    "options": [
      {
        "key": "A",
        "text": "During white-box testing the entire software implementation is considered"
      },
      {
        "key": "B",
        "text": "White-box coverage metrics can help identify additional tests to increase code coverage"
      },
      {
        "key": "C",
        "text": "White-box test techniques can be used in static testing"
      },
      {
        "key": "D",
        "text": "White-box testing can help identify gaps in requirements implementation"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 26,
    "text": "Which of the following BEST describes the concept behind error guessing?",
    "options": [
      {
        "key": "A",
        "text": "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers"
      },
      {
        "key": "B",
        "text": "Error guessing involves using your personal experience of development and the errors you made as a developer"
      },
      {
        "key": "C",
        "text": "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it"
      },
      {
        "key": "D",
        "text": "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 27,
    "text": "In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented. Which test technique fits BEST in this situation?",
    "options": [
      {
        "key": "A",
        "text": "Checklist-based testing"
      },
      {
        "key": "B",
        "text": "Error guessing"
      },
      {
        "key": "C",
        "text": "Exploratory testing"
      },
      {
        "key": "D",
        "text": "Branch testing"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 28,
    "text": "Which of the following BEST describes the way acceptance criteria can be documented?",
    "options": [
      {
        "key": "A",
        "text": "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story"
      },
      {
        "key": "B",
        "text": "Using the given/when/then format to describe an example test condition related to a given user story"
      },
      {
        "key": "C",
        "text": "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others"
      },
      {
        "key": "D",
        "text": "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  },
  {
    "id": 29,
    "text": "Consider the following user story:",
    "options": [
      {
        "key": "A",
        "text": "Test if the editor can save the document after edit the page content"
      },
      {
        "key": "B",
        "text": "Test if the content owner can log in and make updates to the content"
      },
      {
        "key": "C",
        "text": "Test if the editor can schedule the edited content for publication"
      },
      {
        "key": "D",
        "text": "Test if the editor can reassign to another editor to make updates"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "image": "/images/questions-a-29.png"
  },
  {
    "id": 30,
    "text": "How do testers add value to iteration and release planning?",
    "options": [
      {
        "key": "A",
        "text": "Testers determine the priority of the user stories to be developed"
      },
      {
        "key": "B",
        "text": "Testers focus only on the functional aspects of the system to be tested"
      },
      {
        "key": "C",
        "text": "Testers participate in the detailed risk identification and risk assessment of user stories"
      },
      {
        "key": "D",
        "text": "Testers guarantee the release of high-quality software through early test design during the release planning"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 31,
    "text": "Which TWO of the following options are the exit criteria for testing a system?",
    "options": [
      {
        "key": "A",
        "text": "Test environment readiness"
      },
      {
        "key": "B",
        "text": "The ability to log in to the test object by the tester"
      },
      {
        "key": "C",
        "text": "Estimated defect density is reached"
      },
      {
        "key": "D",
        "text": "Requirements are translated into given/when/then format"
      },
      {
        "key": "E",
        "text": "Regression tests are automated"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ]
  },
  {
    "id": 32,
    "text": "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made:\nMost optimistic estimation: 2 person-hours\nMost likely estimation: 11 person-hours\nMost pessimistic estimation: 14 person-hours\nWhat is the final estimate?",
    "options": [
      {
        "key": "A",
        "text": "9 person-hours"
      },
      {
        "key": "B",
        "text": "14 person-hours"
      },
      {
        "key": "C",
        "text": "11 person-hours"
      },
      {
        "key": "D",
        "text": "10 person-hours"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 33,
    "text": "You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies: Which of the following test cases should be executed as the third one?",
    "options": [
      {
        "key": "A",
        "text": "TC 003"
      },
      {
        "key": "B",
        "text": "TC 005"
      },
      {
        "key": "C",
        "text": "TC 002"
      },
      {
        "key": "D",
        "text": "TC 001"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "image": "/images/questions-a-33.png"
  },
  {
    "id": 34,
    "text": "Consider the following test categories (1-4) and agile testing quadrants (A-D):\n1. Usability testing\n2. Component testing\n3. Functional testing\n4. Reliability testing\nA. Agile testing quadrant Q1: technology facing, supporting the development team\nB. Agile testing quadrant Q2: business facing, supporting the development team\nC. Agile testing quadrant Q3: business facing, critique the product\nD. Agile testing quadrant Q4: technology facing, critique the product\nHow do the following test categories map onto the agile testing quadrants?",
    "options": [
      {
        "key": "A",
        "text": "1C, 2A, 3B, 4D"
      },
      {
        "key": "B",
        "text": "1D, 2A, 3C, 4B"
      },
      {
        "key": "C",
        "text": "1C, 2B, 3D, 4A"
      },
      {
        "key": "D",
        "text": "1D, 2B, 3C, 4A"
      }
    ],
    "correctAnswers": [
      "A"
    ]
  },
  {
    "id": 35,
    "text": "During a risk analysis the following risk was identified and assessed:\n• Risk: Response time is too long to generate a report\n• Risk likelihood: medium; risk impact: high\nResponse to risk:\n• An independent test team performs performance testing during system testing\n• A selected sample of end users performs alpha and beta acceptance testing before the release\nWhat measure is proposed to be taken in response to this analyzed risk?",
    "options": [
      {
        "key": "A",
        "text": "Risk acceptance"
      },
      {
        "key": "B",
        "text": "Contingency plan"
      },
      {
        "key": "C",
        "text": "Risk mitigation"
      },
      {
        "key": "D",
        "text": "Risk transfer"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 36,
    "text": "Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?",
    "options": [
      {
        "key": "A",
        "text": "Acceptance criteria"
      },
      {
        "key": "B",
        "text": "Defect report"
      },
      {
        "key": "C",
        "text": "Test completion report"
      },
      {
        "key": "D",
        "text": "Burndown chart"
      }
    ],
    "correctAnswers": [
      "D"
    ]
  },
  {
    "id": 37,
    "text": "You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
    "options": [
      {
        "key": "A",
        "text": "Traceability management"
      },
      {
        "key": "B",
        "text": "Maintenance testing"
      },
      {
        "key": "C",
        "text": "Configuration management"
      },
      {
        "key": "D",
        "text": "Requirements engineering"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 38,
    "text": "You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible. What critical information is MISSING from this test report that would have been useful for the developers?",
    "options": [
      {
        "key": "A",
        "text": "Expected result and actual result"
      },
      {
        "key": "B",
        "text": "References and defect status"
      },
      {
        "key": "C",
        "text": "Test environment and test item"
      },
      {
        "key": "D",
        "text": "Priority and severity"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "image": "/images/questions-a-38.png"
  },
  {
    "id": 39,
    "text": "Which test activity does a data preparation tool support?",
    "options": [
      {
        "key": "A",
        "text": "Test monitoring and control"
      },
      {
        "key": "B",
        "text": "Test analysis"
      },
      {
        "key": "C",
        "text": "Test design and implementation"
      },
      {
        "key": "D",
        "text": "Test completion"
      }
    ],
    "correctAnswers": [
      "C"
    ]
  },
  {
    "id": 40,
    "text": "Which item correctly identifies a potential risk of performing test automation?",
    "options": [
      {
        "key": "A",
        "text": "It may introduce unknown regressions in production"
      },
      {
        "key": "B",
        "text": "Sufficient efforts to maintain testware may not be properly allocated"
      },
      {
        "key": "C",
        "text": "Testing tools and associated testware may not be sufficiently relied upon"
      },
      {
        "key": "D",
        "text": "It may reduce the time allocated for manual testing"
      }
    ],
    "correctAnswers": [
      "B"
    ]
  }
];