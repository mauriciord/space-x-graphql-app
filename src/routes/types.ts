import { Launch } from '../features/launches/types';

export type RootStackParamList = {
  Home: undefined;
  Details: { item: Launch; name: string };
};
