import { ScrollView, Text, View } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import PT from '../assets/pt-tile.jpg';

const HomeScreen = () => {
    return (
            <ScrollView>
                <Tile
                    imageSrc={PT}
                    title='Physical Therapy'
                    caption='For all your rehabilitative needs'
                    featured
                />
            </ScrollView>
    )
}

export default HomeScreen;