import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsRequestAsync } from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.commentsReducer.comments);
  const postData = useSelector(state => state.commentsReducer.postData);
  const token = useSelector(state => state.tokenReducer.token);

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);

  return [comments, postData];
};
