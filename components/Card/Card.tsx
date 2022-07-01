import Link from "next/link";
import classNames from "classnames";
import styles from "./Card.module.css";
import Image from "next/image"
import { Button } from "../Button/Button";

let cx = classNames.bind(styles);

interface ICard {
  title?: string;
  size?: 'small' | 'default';
  bordered?: true | false;
  hoverable?: true | false;
  children: JSX.Element|JSX.Element[],
  cover?: string,
  description?: string | null,
  idLaunch?: string,
  onClick?: () => void; 
}
//   const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

export const Card = ({
  title,
  bordered = false,
  size = 'default',
  hoverable = false,
  onClick,
  children,
  cover,
  description,
  idLaunch,
  ...rest
}: ICard) => {

  const cardClasses = cx({
    [styles.card]: true,
    [styles.card_small]: size === 'small',
    [styles.card_hoverable]: hoverable,
    [styles.card_bordered]: bordered
  });

  return (
    <div className={cardClasses}>
      {
        cover ? (
          <div className={styles.card_cover}>
              <Image layout='fill'  unoptimized  loader={() => cover} src={cover} alt={title} />
          </div>
        ) : ('')
      }
      <div className={styles.card_body}>
        <div className={styles.card_title}>
          { title }
        </div>
        <div className={styles.card_descritpion}>
          { description }
        </div>
        { children }
      </div>
      <div className={styles.card_more}>
        <Link href='/launches/[id]' as={`/launches/${idLaunch}`}>
            <Button  variant="link" label="Read more" />
        </Link>
      </div>
    </div>
  )
}