import PropTypes from 'prop-types';
import style from './Rating.module.css';
import { Text } from '../../../../../UI/Text';

export const Rating = ({ ups }) => (
  <div className={style.rating}>
    <button className={style.up} aria-label="Увеличить рейтинг"/>
    <Text
      As="p"
      size={12}
      tsize={16}
      bold
      className={style.ups}
    >{ups}</Text>
    <button className={style.down} aria-label="Уменьшить рейтинг"/>
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
