import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../store';

export type TSubjects = {
  id: string;
  title: string;
};

const initialState: TSubjects[] = [
  {
    id: '1',
    title: 'Core concepts',
  },
  {
    id: '2',
    title: 'JS Arrays Methods',
  },
  {
    id: '3',
    title: 'yemen',
  },
];

const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    addSubject: (state, action: PayloadAction<TSubjects>) => {
      state = [...state, action.payload];
      return state;
    },
  },
});

export const { addSubject } = subjectsSlice.actions;

export const selectSubjects = (state: RootState) => state.subjects;

export default subjectsSlice.reducer;
