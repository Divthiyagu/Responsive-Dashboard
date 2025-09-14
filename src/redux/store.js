import { configureStore } from '@reduxjs/toolkit';
import widgetsReducer from './widgetsSlice';
import themeReducer from './themeSlice';

export default configureStore({
  reducer: {
    widgets: widgetsReducer,
    theme: themeReducer,
  },
});
  