import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text>Test</Text>
                <Text>Test</Text>
                <Text style={{ marginBottom: 10 }}>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
            </Card>
        </ScrollView>
    )
}

export default ContactScreen;