import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './postsAction';


const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.data = [];
    },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.data = [...state.data, ...action.payload.children];
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default postsSlice.reducer;
