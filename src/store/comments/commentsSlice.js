import { createSlice } from '@reduxjs/toolkit';
import { commentsRequestAsync } from './commentsAction';

const initialState = {
  status: '',
  comments: [],
  postData: {},
  error: '',
};

export const commentsSlice = createSlice({
  name: 'Comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.comments = action.payload.comments;
      state.postData = action.payload.postData;
      state.error = '';
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload.error;
    },
  },
});
export default commentsSlice.reducer;
