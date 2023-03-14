import styles from './Header.module.css';
import { IHeader } from '../../common/types'



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