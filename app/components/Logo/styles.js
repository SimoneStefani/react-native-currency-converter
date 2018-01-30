import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  innerContainer: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    position: 'absolute',
    width: imageWidth,
    height: imageWidth,
  },
  image: {
    width: imageWidth / 2,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 40,
    color: '$white',
  },
});
