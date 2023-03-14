import classnames from 'classnames';
import styles from './GridCard.module.css';
import { IGrid } from '../../common/types';
const cx = classnames.bind(styles);

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