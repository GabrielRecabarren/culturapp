import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, FlatList, View } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const talleres = [
  { id: '1', title: 'Taller de Teatro', icon: 'body' }, // Ícono para Teatro
  { id: '2', title: 'Taller de Fotografía', icon: 'camera' }, // Ícono para Fotografía
  { id: '3', title: 'Taller de Pintura', icon: 'color-palette' }, // Ícono para Pintura
  { id: '4', title: 'Taller de Música', icon: 'musical-notes' }, // Ícono para Música
];

export default function TabTwoScreen() {
  const renderTaller = ({ item }) => (
    <View style={styles.tallerItem}>
      <Ionicons name={item.icon} size={24} style={styles.icon} />
      <ThemedText style={styles.tallerText}>{item.title}</ThemedText>
    </View>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={340} name="school" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Talleres Disponibles</ThemedText>
      </ThemedView>

      <FlatList
        data={talleres}
        renderItem={renderTaller}
        keyExtractor={(item) => item.id}
        style={styles.tallerList}
      />

<Collapsible title="¿Cómo inscribirse?">
  <ThemedText>
    Para inscribirte en uno de nuestros talleres, sigue estos pasos:
  </ThemedText>
  <ThemedText>
    1. Selecciona el taller que te interesa de la lista disponible.
  </ThemedText>
  <ThemedText>
    2. Haz clic en el botón "Inscribirse" que aparecerá junto a cada taller.
  </ThemedText>
  <ThemedText>
    3. Completa el formulario de inscripción con tus datos personales.
  </ThemedText>
  <ThemedText>
    4. Revisa la información y confirma tu inscripción.
  </ThemedText>
  <ThemedText>
    Si tienes alguna duda, no dudes en ponerte en contacto con nosotros.
  </ThemedText>
  <ExternalLink href="mailto:cultura@cisterna.cl">
    <ThemedText type="link">Contáctanos por correo electrónico</ThemedText>
  </ExternalLink>
</Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    margin: 16,
  },
  tallerList: {
    margin: 16,
  },
  tallerItem: {
    flexDirection: 'row', // Alinea el ícono y el texto en fila
    alignItems: 'center', // Centra verticalmente el ícono y el texto
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 8, // Espaciado entre el ícono y el texto
    color: '#333', // Cambia esto si necesitas un color diferente
  },
  tallerText: {
    color: '#333', // Cambia esto si necesitas un color diferente
  },
});
