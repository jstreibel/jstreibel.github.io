import { configureStore } from '@reduxjs/toolkit';

import notesReducer from '../features/notes/notesSlice';
import siteReducer from '../features/site/siteSlice';

export const store = configureStore({
  reducer: {
    site: siteReducer,
    notes: notesReducer,
  },
});
