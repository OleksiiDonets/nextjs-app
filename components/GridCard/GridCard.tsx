import classnames from 'classnames';
import styles from './GridCard.module.css';

const cx = classnames.bind(styles);
interface IGrid {
  children: React.ReactNode | React.ReactNode[]
}
export const GridCard = ({children}: IGrid) => {
  const gridClasses = cx({
    [styles.grid_container]: true
  });
  return (
    <div className={gridClasses}>
      {children}
    </div>
  )
}