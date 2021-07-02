import React from 'react';
import { Div, Skeleton } from 'react-native-magnus';

const Loading = () => {
  return (
    <>
      <Div flexDir="row" mt="md">
        <Skeleton.Circle h={40} w={40} />
        <Div ml="md" flex={1}>
          <Skeleton.Box mt="sm" />
          <Skeleton.Box mt="sm" w="80%" />
          <Skeleton.Box mt="sm" />
        </Div>
      </Div>
      <Div flexDir="row" mt="md">
        <Skeleton.Circle h={20} w={20} rounded="lg" />
        <Skeleton.Circle h={20} w={20} rounded="lg" ml="md" />
        <Div alignItems="flex-end" flex={1}>
          <Skeleton.Box h={20} w={100}></Skeleton.Box>
        </Div>
      </Div>
    </>
  );
};

export default Loading;
