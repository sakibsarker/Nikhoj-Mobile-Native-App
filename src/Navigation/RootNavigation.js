import React from 'react';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const RootNavigation = () => {
  const user = true;
  if (user) {
    return <HomeStack />;
  } else {
    return <AuthStack />;
  }
};

export default RootNavigation;
