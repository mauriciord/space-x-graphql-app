import React, { useMemo } from 'react';
import { Div, Text } from 'react-native-magnus';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { ASSETS } from '../../shared/constants/assets';

import { Launch } from './types';

type Props = {
  item: Launch;
};

const LaunchesListItem: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation();
  const itemLaunchDate = item?.launch_date_local;
  const formattedDate = useMemo(
    () => format(new Date(itemLaunchDate), 'MM/dd/yyyy'),
    [itemLaunchDate]
  );
  const handleOnPress = () =>
    navigation.navigate('Details', {
      item,
      name: item?.mission_name,
    });
  const bannerUrl = item.ships[0]?.image || ASSETS.PLACEHOLDER;

  return (
    <>
      <TouchableOpacity onPress={handleOnPress}>
        <Div row my="xl" px="lg">
          <Div flex={1}>
            <Div
              rounded="lg"
              h={150}
              bgImg={{
                uri: bannerUrl,
              }}
            >
              <Div
                bg="pink600"
                rounded="sm"
                row
                flexWrap="wrap"
                p="md"
                m="lg"
                alignSelf="flex-start"
              >
                <Text color="white" fontSize="md">
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
                  {item?.launch_site?.site_name_long}
                </Text>
              </Div>
            </Div>
          </Div>
        </Div>
      </TouchableOpacity>
    </>
  );
};

export default LaunchesListItem;
