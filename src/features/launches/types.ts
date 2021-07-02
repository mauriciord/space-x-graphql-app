/* eslint-disable camelcase */

export type Ship = {
  name: string;
  home_port: string;
  image: string;
};

export type Launch = {
  id: string;
  mission_name: string;
  launch_date_local: string | Date;
  launch_site: {
    site_name_long: string;
  };
  links: {
    article_link: string | null;
    flickr_images: string[];
  };
  rocket: {
    rocket_name: string;
  };
  ships: Ship[];
};
