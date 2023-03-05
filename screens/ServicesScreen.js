import { FlatList, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { SERVICES } from '../shared/services';

const ServicesScreen = ({ route }) => {

  const renderService = ({ item }) => {
    return (
      <Animatable.View animation='fadeInLeft' duration={1000}>
        <Card>
          <Card.Title>{item.name}</Card.Title>
          <Text>{item.description}</Text>
        </Card>
      </Animatable.View>
    )
  }

  return (
    <FlatList
      data={SERVICES.filter((service) => service.category === route.params.category)}
      renderItem={renderService}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default ServicesScreen;