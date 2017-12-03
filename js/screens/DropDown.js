import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ListItem, Separator } from '../components/ListItem';
import furniture from '../data/furniture';
class DropDown extends Component {
  handlePress = () => {
    console.log('row press');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={furniture}
          renderItem={({ item }) =>
          <ListItem
              name={item.name}
              dimensions={item.dimensions}
              price={item.price}
              imageurl={item.imageurl}
              onPress={this.handlePress}
            />
          }
          keyExtractor={item => item}
          ItemSeperatorComponent = {Separator}
        />
      </View>
    );
  }
}

export default DropDown;
