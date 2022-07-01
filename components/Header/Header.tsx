import classNames from 'classnames';
import styles from './Header.module.css';
const cx = classNames.bind(styles);

interface IHeader {
  children: JSX.Element | JSX.Element[],
}


export const Header = ({
  children,
}:IHeader) => {

  const headerClasses = cx({
    [styles.header_container]: true,
  })
  return (
    <header className={headerClasses}>
      <div className='header_container__wrap'>
        {
          children
        }
      </div>
    </header>
  )
}