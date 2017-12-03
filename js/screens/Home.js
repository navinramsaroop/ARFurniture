import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native';
import { Container } from '../components/Container';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';
import {Text, FlatList} from 'react-native';




  render() {
    return (
      <Container>
			<ScrollView>
				<FlatList
					renderItem={({item}) => <Text>{item}</Text>}
				/>
			</ScrollView>
      </Container>
    );
  }
}

export default Home;
