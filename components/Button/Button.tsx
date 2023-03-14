import classNames from 'classnames';
import styles from './Button.module.css';
import { IButton } from '../../common/types';
let cx = classNames.bind(styles);

export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  ...rest
}:IButton) => {

  const classStr = cx({
    [styles.button]: true,
    [styles.primary]:variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.outline]: variant === 'outline',
    [styles.link]: variant === 'link',
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large'
  })

  return (
    <button
    className={classStr}
    {...rest}
    >
      {label}
    </button>
  )
}