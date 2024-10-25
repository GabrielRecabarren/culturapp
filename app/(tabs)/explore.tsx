import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, FlatList, View } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const talleres = [
  { id: '1', title: 'Taller de Teatro', icon: 'body' },
  { id: '2', title: 'Taller de Fotografía', icon: 'camera' },
  { id: '3', title: 'Taller de Pintura', icon: 'color-palette' },
  { id: '4', title: 'Taller de Música', icon: 'musical-notes' },
];

export default function TabTwoScreen() {
  const renderTaller = ({ item }) => (
    <View style={styles.tallerItem}>
      <Ionicons name={item.icon} size={24} style={styles.icon} />
      <ThemedText style={styles.tallerText}>{item.title}</ThemedText>
    </View>
  );

  return (
    <FlatList
      data={talleres}
      renderItem={renderTaller}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <>
          <Ionicons size={340} name="school" style={styles.headerImage} />
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Talleres Disponibles</ThemedText>
          </ThemedView>
        </>
      }
      ListFooterComponent={
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
      }
      style={styles.tallerList}
    />
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    marginBottom: 16,
    alignSelf: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 8,
    color: '#333',
  },
  tallerText: {
    color: '#333',
  },
});
