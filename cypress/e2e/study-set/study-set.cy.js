import { createStudySet, createFlashcards, deleteStudySet, studySetName } from './study-set.po';
import { login, email, password } from '../authentication/auth.po';

describe('Study set', () => {
  beforeEach(() => {
    login(email, password);
  });

  it('Should create a study set with 3 flashcards', () => {
    createStudySet();
    createFlashcards(3);
  })
  
  it('Should delete the created set', () => {
    deleteStudySet(studySetName);
  })
})