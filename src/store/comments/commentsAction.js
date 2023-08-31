import { URL_API } from '../../api/const';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const commentsRequestAsync = createAsyncThunk(
  '/comments/fetch',
  (id, { getState }) => {
    const token = getState().tokenReducer.token;
    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        'Authorization': `bearer ${token}`,
      },
    })
      .then(({ data }) => {
        const comments = data[1].data.children;
        const postData = data[0].data.children[0].data;
        return { postData, comments };
      })
      .catch((error) => ({ error: error.toString() }));
  },
);
