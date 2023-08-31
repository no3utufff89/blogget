import { URL_API } from '../../api/const';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, { getState }) => {
    const page = newPage || getState().postsReducer.page;
    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    // const loading = getState().postsReducer.loading;
    const isLast = getState().postsReducer.isLast;

    if (!token || isLast) return;
    return axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({ data }) => data.data)
      .catch((error) => ({ error: error.toString() }));
  },
);
