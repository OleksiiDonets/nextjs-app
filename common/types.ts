/**
 * Interfaces
 */
export interface IHeader {
  children: JSX.Element | JSX.Element[],
}

export interface IPropsSelect {
  name: string;
  value: string | number;
};
export interface ISelect {
  labelSelect: string;
  arrItems: IPropsSelect[];
  filterName: string;
  onSelect: (value:IPropsSelect) => void;
};
export interface IButton {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  label: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void
}
export interface ICard {
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
export interface IGrid {
  children: React.ReactNode | React.ReactNode[],
}
export interface ILayout {
  children: React.ReactNode
}

export interface ILaunch {
  id: string
  date_utc?:string
  launch_site?: {
    site_id?:string,
    site_name?:string,
    site_name_long?:string
  },
  launch_success?:boolean,
  links?: {
    patch:{
      small:string;
      large:string;
    }
  }
  mission_id?: string[],
  name?: string,
  details?: string | null,
  
}
export interface IDetailLaunch {
  details?: string | null;
  id: string;
  date_utc: string;
  success: boolean;
  links: LaunchLinks;
  name: string;
  rocket:{
    rocket:LaunchRocket
  };
}
export interface LaunchRocket {
  id: string;
  mass: {
    kg: number;
  }
  name: string;
  wikipedia: string;
  stages: number;
}
export interface LaunchLinks {
  article_link?: string;
  flickr_images: string[] | any[];
  mission_patch_small: string;
  mission_patch: string;
  presskit: string;
  reddit_campaign?: string | null;
  video_link: string;
  wikipedia: string;
  webcast:string;
  flickr:{
    original: string[];
    small: string[];
  };
  patch:{
    small:string;
    large:string;
  }
}
export interface IFilter {
  [x:string]: string | number;
};

export interface ILaunchResponse {
  docs: ILaunch[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter:number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number| null;
  nextPage: number | null;
}

/**
 * Constants
 */
export const sortItems:IPropsSelect[] = [
  {
    name: 'Launch year',
    value:'date_utc',
  },
  {
    name: 'Launch sucess',
    value: 'success',
  }
]
export const orderItems:IPropsSelect[] = [
  {
    name: ' growth',
    value: 'asc',
  },
  {
    name: ' decline',
    value: 'desc',
  }
];
