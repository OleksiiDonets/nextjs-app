import { gql } from "@apollo/client";
import client from "../../apollo-client";

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

export interface IData {
  launches: ILaunch[];
};

export const getLaunches =  async (offset:number = 0, limit:number = 12) => {
  const { data }: {data:IData} = await client.query({
    query: gql`{
    launches(offset: ${offset}, limit: ${limit}) {
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

      details
      id
    }
  }
    `
  })
  return data
}

export const getLaunch = async (id:number) => {
  const {data} = await client.query({
    query: gql`
      {
        launch(id: ${id}) {
          details
          id
          launch_date_local
          launch_success
          launch_year
          links {
            article_link
            flickr_images
            mission_patch_small
            presskit
            reddit_campaign
            video_link
            wikipedia
          }
          mission_name
          rocket {
            fairings {
              recovered
              recovery_attempt
              reused
              ship
            }
            rocket {
              id
              wikipedia
              stages
              payload_weights {
                kg
              }
              name
              mass {
                kg
              }
            }
          }
        }
      }
    `
  });
  return data
}