import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4f6D7A',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  // $outline: 1,
});

export default () => <Home />;
