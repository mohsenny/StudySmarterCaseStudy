import { generate } from 'randomstring';

const createStudySetButton = "//button/span[text()='Create Study Set']";
const studySetNameField = "//input[@id='text']";
const createSetButton = "//button[text()=' Create Study Set ']";
const flashcardsTab = "//span[text()='Flashcards']";
const createFlashcardsButton = "//button/span[text()='Create flashcards']";
const flashcardQuestion = "(//div[@contenteditable='true'])[1]";
const flashcardAnswer = "(//div[@contenteditable='true'])[2]";
const flashcardCreate = "(//button[@id='flashcard-create'])[1]";
// const studySetMoreOptions = "(//div[@class='more-icon ng-star-inserted'])[1]";
const studySet = "//div[text()=' :studySetName ']";
const studySetMoreOptions = "//div[text()=' :studySetName ']/following-sibling::div//div[@class='more-icon ng-star-inserted']";
const studySetDeleteButton = "//button[text()=' Delete ']";
const studySetDeletionMessage = "Sure you want to delete this Study Set including all its documents and flashcards?";
const promptYesButton = "//button[text()=' Yes ']";
const noStudySetMessage = "You don't have any Study Sets yet. Find existing Study Sets or create a new one to get started.";
const flashcardQandA = [
  {
    question: '2+2', answer:'4'
  },
  {
    question: 'Color of blood?', answer:'Red'
  },
  {
    question: 'speed of light?', answer:'299,792,458 m/s'
  },
  {
    question: 'Capital of Kenya', answer:'Nairobi'
  },
  {
    question: 'The most expensive herb?', answer:'Saffron'
  },
]
export let studySetName;

export function createStudySet() {
  cy.visit('/studysets');
  cy.xpath(createStudySetButton).click()
  studySetName = `Study set ${generate(8)}`;
  cy.xpath(studySetNameField).type(studySetName);
  cy.xpath(createSetButton).click();
}

export function createFlashcards(count) {
  cy.xpath(flashcardsTab).click();
  cy.xpath(createFlashcardsButton).click();
  cy.url().should('include', '/flashcards/trainer');
  for (let i = 0; i <count; i++) {
    cy.xpath(flashcardQuestion).type(flashcardQandA[i].question);
    cy.xpath(flashcardAnswer).type(flashcardQandA[i].answer);
    cy.xpath(flashcardCreate).click();
    cy.wait(1000);
  }
}

export function deleteStudySet(studySetName) {
  cy.visit('/studysets');
  cy.xpath(studySetMoreOptions.replace(':studySetName', studySetName)).click();
  cy.xpath(studySetDeleteButton).click();
  cy.contains(studySetDeletionMessage);
  cy.xpath(promptYesButton).click();
  cy.xpath(studySet.replace(':studySetName', studySetName)).should('not.exist');
  cy.contains(noStudySetMessage);
}