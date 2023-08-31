import style from './FormComment.module.css';
import { Text } from '../../../../../UI/Text';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../../../store/commentReducer';


export const FormComment = () => {
  const [textArea, setTextArea] = useState(false);
  const value = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();

  const commentSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setTextArea(false);
  };

  const handleClick = () => {
    setTextArea(true);
    setTimeout(() => {
    }, 0);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <>
      {!textArea ? (
        <button
          className={style.btn}
          onClick={handleClick}
        >
          Написать коммент
        </button>
      ) : (
        <form className={style.form} onSubmit={commentSubmit}>
          <Text
            As="h3"
            size={14}
            tsize={18}>
            Имя авторизованного пользователя
          </Text>
          <textarea className={style.textarea} value={value}
            onChange={handleChange}/>
          <button className={style.btn} type="submit">Отправить</button>
        </form>
      )}
    </>
  );
};

