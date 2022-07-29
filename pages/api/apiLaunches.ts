// import gql from 'graphql-tag';
import { gql } from '@apollo/client';
// import client from "../../lib/apollo-client";

export interface ILaunch {
  launch_date_utc?:string
  launch_site?: {
    site_id?:string,
    site_name?:string,
    site_name_long?:string
  },
  launch_success?:boolean,
  launch_year?:string,
  links?: {
    mission_patch?:string,
  }
  mission_id?: string[],
  mission_name?: string,
  details?: string | null,
  id: string
}
export interface IDetailLaunch {
  details?: string | null;
  id: string;
  launch_date_utc: string;
  launch_success: boolean;
  launch_year: string;
  links: LaunchLinks;
  mission_name: string;
  rocket:{
    rocket:LaunchRocket
  };
}
interface LaunchRocket {
  id: string;
  mass: {
    kg: number;
  }
  name: string;
  wikipedia: string;
}
interface LaunchLinks {
  article_link?: string;
  flickr_images: string[] | any[];
  mission_path_small: string;
  presskit: string;
  reddit_campaign?: string | null;
  video_link: string;
  wikipedia: string;
  
}

// export const getLaunch = async (id:string) => {
//   const {data} = await client.query({
//     query: gql`
//       {
//         launch(id: ${id}) {
//           id
//           details
//           launch_date_utc
//           launch_success
//           launch_year
//           links {
//             article_link
//             flickr_images
//             mission_patch_small
//             presskit
//             reddit_campaign
//             video_link
//             wikipedia
//           }
//           mission_name
//           rocket {
//             rocket {
//               id
//               wikipedia
//               stages
//               name
//               mass {
//                 kg
//               }
//             }
//           }
//         }
//       }
//     `
//   });
//   return data
// }

export const GET_LAUNCHES = gql`
  query GetLaunches($offset: Int!){
    launches(offset: $offset, limit:12){
      id
        details
        launch_date_utc
        launch_site {
          site_id
          site_name
          site_name_long
        }
        launch_success
        launch_year
        links {
          mission_patch
        }
        mission_id
        mission_name
    }
  }`
