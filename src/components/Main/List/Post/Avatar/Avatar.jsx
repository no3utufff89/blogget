import PropTypes from 'prop-types';
import style from './Avatar.module.css';

export const Avatar = ({ title, img }) => (
  <img className={style.img} src={img} alt={title}/>
);

Avatar.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
};
