import  Image  from 'next/image'
import { IDetailLaunch } from '../../common/types';
import { Slider } from "../Slider/Slider";
import classNames from 'classnames';
import styles from './LaunchDetail.module.css';
const cx = classNames.bind(styles);

export const LaunchDetail = ({launch} :{ launch:IDetailLaunch }) => {
  const date = new Date(launch.date_utc).toLocaleDateString("en-US");
  const videoLink  = [launch.links.webcast.slice(0,23), '/embed', launch.links.webcast.slice(23)].join('');
  const  sliderClasses = cx({
    [styles.detail_slider] : launch.links.flickr.original.length > 0,
    [styles.detail_slider_single]:  launch.links.flickr.original.length === 0
  })
  return (
    <div className={styles.detail_container}>
      <div className={ sliderClasses}>
        {
          launch.links.flickr.original.length > 0 ? (
           <Slider imageArr={launch.links.flickr.original}/>
          ):(
            <Image layout="fill" unoptimized  loader={() => launch.links.patch.large}  src={launch?.links.patch.large} alt="Mission path" />
          )
        }
      </div>
      <div className={styles.detail_content}>
        <h1>{launch.name}</h1>
        <div className={styles.detail_meta}>
          <div>
            <span>Launch date: </span>
            {date}
          </div>
          <div>
            <span>Rocket name: </span>
            {launch.rocket?.rocket?.name}
          </div>
          <div>
            <span>Rocket stages: </span>
            {launch.rocket?.rocket?.stages}
          </div>
          <div>
            <span>Rocket mass: </span>
            {launch.rocket?.rocket?.mass?.kg}
          </div>
        </div>
        <div className={styles.detail_description}>
          <p>{launch.details}</p>
        </div>
      </div>
      <div className={styles.detail_links}>
        <div className={styles.detail_links__title}>
          <h3>Additional info</h3>
        </div>
        <div className={styles.detail_info}>
          <ul>
            {
              launch.links.wikipedia ? (
                  <li>
                    <span>
                      Read at Wikipedia:
                    </span>
                    <a href={launch.links.wikipedia}>Source at wiki...</a>
                  </li>
              ):('')
            }
            {
              launch.links.article_link ? (
                <li>
                  <span>Read at SpaceFlight: </span>
                  <a href={launch.links.article_link}> Source at SpaceFlight...</a>
                </li>    
              ) : ('')
            }
            {
              launch.links.webcast ? (
                <li className={styles.detail_info__video}>
                  <span>Video on youtube</span>
                  <iframe width="100%" height="100%" src={videoLink} frameBorder="0" allowFullScreen></iframe>

                </li>
              ):('')
            }
          </ul>
        </div>
        <div className={styles.detail_video}>
           
        </div>
      </div>
     
    </div>
  )
}