import React from 'react';
import { FlatList } from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { Launch } from './types';
import { LaunchesListQuery } from './__generated__/LaunchesListQuery.graphql';
import LaunchesListItem from './LaunchesListItem';

const LaunchesList: React.FC = () => {
  const response = useLazyLoadQuery<LaunchesListQuery>(
    graphql`
      query LaunchesListQuery {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            flickr_images
          }
          rocket {
            rocket_name
          }
          ships {
            name
            home_port
            image
          }
        }
      }
    `,
    {},
    {
      fetchPolicy: 'network-only',
    }
  );

  const { launchesPast } = response;

  console.log('launchesPast ___', launchesPast);

  return (
    <FlatList
      data={launchesPast}
      keyExtractor={(item: Launch) => `${item.id}_${item.mission_name}`}
      renderItem={({ item }: { item: Launch }) => (
        <LaunchesListItem item={item} />
      )}
    />
  );
};

export default LaunchesList;
