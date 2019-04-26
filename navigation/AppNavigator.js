import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-native';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
}))