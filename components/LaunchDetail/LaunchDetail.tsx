import classNames from "classnames"
import styles from './LaunchDetail.module.scss';
import { IDetailLaunch } from '../../pages/api/apiLaunches';
import { Slider } from "../Slider/Slider";

export const LaunchDetail = ({launch} :{ launch:IDetailLaunch }) => {
  const date = new Date(launch.launch_date_utc).toLocaleDateString("en-US");
  const videoLink = launch.links.video_link.replace('watch?v=','embed/');
  return (
    <div className={styles.detail_container}>
      <div className={styles.detail_slider}>
        <Slider imageArr={launch.links.flickr_images}/>
      </div>
      <div className={styles.detail_content}>
        <h1>{launch.mission_name}</h1>
        <div className={styles.detail_meta}>
          <div>
            <span>Launch date: </span>
            {date}
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
              launch.links.video_link ? (
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