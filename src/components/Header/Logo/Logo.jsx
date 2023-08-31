import style from './Logo.module.css';
import SVG from '../../../UI/SVG';
export const Logo = () => (
  <>
    <a className={style.link} href='/'>
      <SVG
        name ='logo'
        width={50}
        height={50}
        title='Логотип'
      />
    </a>

  </>

);
