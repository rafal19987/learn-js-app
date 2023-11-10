import { configureStore } from '@reduxjs/toolkit';
import subjectsReducer from './features/subjectsSlice';
import selectedSubjectReducer from './features/selectedSubjectSlice';
import questionsReducer from './features/questionsSlice';

export const store = configureStore({
  reducer: {
    subjects: subjectsReducer,
    selectedSubject: selectedSubjectReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
