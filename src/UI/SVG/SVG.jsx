import SvgSprite from './icons.svg';
import PropTypes from 'prop-types';

export const SVG = ({ name, color, width, height, className, title }) => (
  <svg className={`icon icon-${name} ${className ? className : ''}`}
    fill={color ? color : null} stroke={color ? color : null} width={width}
    height={height} aria-label={title}>
    <use xlinkHref={`${SvgSprite}#${name}`}/>
  </svg>
);
SVG.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  title: PropTypes.string,
};

