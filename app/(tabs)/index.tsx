import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Logo-Cultura.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenidos a la Casa de la Cultura Virtual!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Revisa nuestra Cartelera</ThemedText>
        <ThemedText>
          Ingresa a <ThemedText type="defaultSemiBold">Instagram.com/culturaenlacisterna</ThemedText> para ver todos nuestros eventos.
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Conoce nuestros talleres</ThemedText>
        <ThemedText>
          Contamos con más de 40 talleres a disposición de la comunidad ¡Conócelos!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Únete a nuestro boletin mensual.</ThemedText>
        <ThemedText>
          ¡Dejanos tus datos y no te pierdas ningun evento!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 290,
    top:20,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
