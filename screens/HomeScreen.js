import { ScrollView, Text, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import PT from '../assets/pt-tile.jpg';
import Fitness from '../assets/fitness-tile.jpg'
import * as Animatable from 'react-native-animatable'

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
                <Animatable.View animation='fadeInDown' duration={1000}>
                    <Tile 
                        imageSrc={PT}
                        title='Physical Therapy'
                        caption='For all your rehabilitative needs.'
                        featured
                        onPress={() => 
                            navigation.navigate('Services', { category: 'Physical Therapy' })
                        }
                    />
                </Animatable.View>
                <Animatable.View animation='fadeInDown' duration={1000} delay={250}>
                    <Tile animation='fadeInDown' duration={1500} delay={500}
                        imageSrc={Fitness}
                        title='Fitness'
                        caption='Look your absolute best.'
                        featured
                        onPress={() => 
                            navigation.navigate('Services', { category: 'Fitness' })
                        }
                    />
                </Animatable.View>
        </ScrollView>
    )
}

export default HomeScreen;