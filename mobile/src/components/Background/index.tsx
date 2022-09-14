import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy/background/.png';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.container}>
      {children}
    </ImageBackground>
  );
}