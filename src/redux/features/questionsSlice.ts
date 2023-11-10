import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../store';
import { type TSubjects } from './subjectsSlice';

export type TQuestions = {
  subjectId: TSubjects['id'];
  id: string;
  question: string;
  answer: string;
};

const initialState: TQuestions[] = [
  {
    subjectId: '1',
    id: '1',
    question: 'What are first-class functions?',
    answer:
      'In some programming languages, there is a concept of first-class functions. First-class functions are those treated like ordinary variables. You can assign them to some other variable, pass them as an argument to other functions, and return them from another function.',
  },
  {
    subjectId: '1',
    id: '2',
    question: 'What are the function statements and function expressions?',
    answer:
      'When a function gets created using the function keyword, it’s called a function statement. Assigning a function to a variable is a function expression.',
  },
  {
    subjectId: '1',
    id: '3',
    question: 'What are first-order functions?',
    answer:
      'A first-order function does not take another function as an argument or return a function.',
  },
];

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addSubject: (state, action: PayloadAction<TQuestions>) => {
      state = [...state, action.payload];
      return state;
    },
  },
});

export const { addSubject } = questionsSlice.actions;

export const selectQuestions = (state: RootState) => state.questions;

export default questionsSlice.reducer;
