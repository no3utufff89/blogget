import style from './Delete.module.css';
import { ReactComponent as DelIcon } from './img/delete.svg';

export const Delete = () => {
  console.log();
  return (
    <button className={style.delete}>
      <DelIcon/>
    </button>
  );
};
