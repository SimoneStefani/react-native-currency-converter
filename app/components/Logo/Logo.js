import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Logo = ({ tintColor }) => {
  const imageStyles = [styles.image, tintColor ? { tintColor } : null];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          resizeMode="contain"
          style={styles.containerImage}
          source={require('./images/background.png')}
        />
        <Image resizeMode="contain" style={imageStyles} source={require('./images/logo.png')} />
      </View>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
};

Logo.propTypes = {
  tintColor: PropTypes.string,
};

export default Logo;
