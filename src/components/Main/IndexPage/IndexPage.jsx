import style from './IndexPage.module.css';
import { useSelector } from 'react-redux';

export const IndexPage = () => {
  const token = useSelector(state => state.tokenReducer.token);

  console.log(style);
  return (
    <>
      {!token ? <p>Сначала выполните авторизацию!!!</p> :
        <div>Это главная страница после авторизации, выберите категорию</div>}
    </>
  );
};

