import { createSelector, createSlice } from '@reduxjs/toolkit';

import { selectNotes } from '../site/siteSlice';

const initialState = {
  activeFilter: 'All',
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setActiveFilter(state, action) {
      state.activeFilter = action.payload;
    },
  },
});

export const { setActiveFilter } = notesSlice.actions;

export const selectActiveFilter = (state) => state.notes.activeFilter;

export const selectNoteFilters = createSelector([selectNotes], (notes) => [
  'All',
  ...new Set(notes.map((note) => note.category)),
]);

export const selectFilteredNotes = createSelector(
  [selectNotes, selectActiveFilter],
  (notes, activeFilter) =>
    activeFilter === 'All'
      ? notes
      : notes.filter((note) => note.category === activeFilter),
);

export const selectLatestNote = createSelector([selectNotes], (notes) => notes[0] ?? null);

export default notesSlice.reducer;
