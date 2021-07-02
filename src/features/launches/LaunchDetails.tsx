import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Div, Icon, Text } from 'react-native-magnus';
import { TouchableOpacity } from 'react-native';

import { RootStackParamList } from '../../routes/types';
import { useFavorites } from '../../shared/hooks/useFavorites';

type LaunchDetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

const LaunchDetails: React.FC = () => {
  const route = useRoute<LaunchDetailsRouteProp>();
  const {
    data,
    helpers: { pushNewFavorite, removeFromFavoriteList },
  } = useFavorites();
  const rocketLaunch = route?.params?.item;
  const flickerImages = rocketLaunch?.links?.flickr_images;

  const { favoritesList } = data;
  const articleLink = rocketLaunch?.links?.article_link;

  return (
    <Div>
      {articleLink && (
        <Div>
          <Text textAlign="left" fontSize="lg">
            Article
          </Text>
          <Text color="gray600" fontSize="2xl">
            {articleLink}
          </Text>
        </Div>
      )}

      {flickerImages.length > 0 ? (
        flickerImages?.slice(0, 3).map((flickerImage) => {
          const imageIsInTheList = favoritesList.includes(flickerImage);
          const handleIconPress = () => {
            if (imageIsInTheList) {
              removeFromFavoriteList(flickerImage);
            } else {
              pushNewFavorite(flickerImage);
            }
          };

          return (
            <Div key={flickerImage} row p="lg">
              <Div flex={1}>
                <Div rounded="sm" h={250} bgImg={{ uri: flickerImage }}>
                  <Div row flexWrap="wrap" p="md" m="lg" alignSelf="flex-end">
                    <TouchableOpacity onPress={handleIconPress}>
                      <Icon
                        fontFamily="Fontisto"
                        color={imageIsInTheList ? 'red' : 'red100'}
                        name="heart"
                        fontSize={32}
                      />
                    </TouchableOpacity>
                  </Div>
                </Div>
              </Div>
            </Div>
          );
        })
      ) : (
        <Div row>
          <Text fontSize="2xl">No image : (</Text>
        </Div>
      )}
    </Div>
  );
};

export default LaunchDetails;
