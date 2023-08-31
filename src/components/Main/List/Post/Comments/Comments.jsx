import PropTypes from 'prop-types';
import style from './Comments.module.css';
import Comment from './Comment';
import { Text } from '../../../../../UI/Text';

export const Comments = (postData) => {
  const arr = [...postData.comments];
  arr.pop();
  return (
    <ul className={style.list}>
      {arr.length > 0 ? (
        arr.map(item => (
          <Comment key={item.data.id} item={item.data}/>
        ))
      ) : (
        <Text as="p">Нет комментариев</Text>
      )}
    </ul>
  );
};
Comments.propType = {
  comments: PropTypes.object,
};
