import styles from './Header.module.css';

interface IHeader {
  children: JSX.Element | JSX.Element[],
}


export const Header = ({
  children,
}:IHeader) => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_container__wrap}>
        {
          children
        }
      </div>
    </header>
  )
}