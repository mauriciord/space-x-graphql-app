import React, { useMemo } from 'react';
import { Div, Text } from 'react-native-magnus';
import { format } from 'date-fns';

import { Launch } from './types';

type Props = {
  item: Launch;
};

const LaunchesListItem: React.FC<Props> = ({ item }) => {
  const itemLaunchDate = item?.launch_date_local;
  const formattedDate = useMemo(
    () => format(new Date(itemLaunchDate), 'MM/dd/yyyy'),
    [itemLaunchDate]
  );

  return (
    <>
      <Div row m="lg">
        <Div flex={1}>
          <Div
            rounded="xl"
            h={150}
            bgImg={{
              uri: item.ships[0]?.image,
            }}
          >
            <Div
              bg="gray800"
              rounded="md"
              row
              flexWrap="wrap"
              px="md"
              m="lg"
              alignSelf="flex-start"
            >
              <Text color="white" fontSize="sm">
                {formattedDate}
              </Text>
            </Div>
          </Div>
          <Div row alignItems="center">
            <Div flex={1}>
              <Text fontWeight="bold" fontSize="xl" mt="sm">
                {item.mission_name}
              </Text>
              <Text color="gray500" fontSize="sm">
                Gurgoan, India
              </Text>
            </Div>
            <Div row alignItems="center">
              <Text color="blue500" fontWeight="bold" fontSize="xl">
                $500
              </Text>
              <Text color="gray500" ml="md">
                / per day
              </Text>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default LaunchesListItem;
