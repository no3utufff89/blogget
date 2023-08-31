import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { assignId } from '../../../utils/generateRandomId';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { debounceRaw } from '../../../utils/debounce';
import { useNavigate } from 'react-router-dom';

const LIST = [
  { value: 'Главная', Icon: HomeIcon, link: 'rising' },
  { value: 'Топ', Icon: TopIcon, link: 'top' },
  { value: 'Лучшие', Icon: BestIcon, link: 'best' },
  { value: 'Горячие', Icon: HotIcon, link: 'hot' },
].map(assignId);
export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [tabTitle, setTabTitle] = useState(LIST[0].value);
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaw(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  // const handleClick = id => {
  //   setList(list.filter(item => item.id !== id));
  // };

  return (
    <div className={style.container}>
      {isDropdown && <div className={style.wrapperBtn}>
        <button
          className={style.btn}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {tabTitle}
          <ArrowIcon width={15} height={15}/>
        </button>
      </div>}

      {(isDropdownOpen || !isDropdown) &&
      <ul className={style.list} onClick={() =>
        setIsDropdownOpen(false)}>
        {LIST.map(({ value, link, id, Icon }) => (
          <li
            key={id}
            className={style.item}>
            <button
              className={style.btn}
              onClick={() => {
                setTabTitle(value);
                navigate(`/category/${link}`);
              }}
            >
              {value}
              {Icon && <Icon width={30} height={30}/>}
            </button>
          </li>
        ))}
      </ul>}
    </div>

  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
