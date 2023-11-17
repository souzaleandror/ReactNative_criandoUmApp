import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import Cesta from './src/telas/Cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MonteserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!fonteCarregada) {
    return <View></View>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}