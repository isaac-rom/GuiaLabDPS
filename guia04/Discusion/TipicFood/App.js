import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import data from './data.json';
import { Text, Card} from '@rneui/themed';

const CardItems = ({item}) => {
  return (
    <Card>
      <Card.Title>{item.name}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{uri:item.image}}
      />
      <Text style={{ marginBottom: 10 }}>
        {item.description}
      </Text>
    </Card>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
        {
          data.map((item, index) => {
              return (
                <CardItems
                    key={index}
                    item = {item}
                />
              )
          })
        }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
