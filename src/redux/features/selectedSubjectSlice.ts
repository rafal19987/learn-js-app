import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../store';
import { type TSubjects } from './subjectsSlice';
import { type TQuestions } from './questionsSlice';

export type TSelectedSubject = {
  subjectId: TSubjects['id'] | null;
  questionId?: Pick<TQuestions, 'id'> | null;
};

const initialState: TSelectedSubject = {
  subjectId: null,
  questionId: null,
};

const selectedSubjectSlice = createSlice({
  name: 'selectedSubject',
  initialState,
  reducers: {
    selectSubject: (state, action: PayloadAction<TSelectedSubject>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { selectSubject } = selectedSubjectSlice.actions;

export const selectSelectedSubject = (state: RootState) =>
  state.selectedSubject;

export default selectedSubjectSlice.reducer;
