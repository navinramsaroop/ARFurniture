import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

const ListItem = ({ name, dimensions, price, imageurl, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor="#D3D3D3">
    <View style={styles.row}>
      <View style={styles.nameView}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.dimensions}>{dimensions}</Text>
        <View style={styles.priceView}>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <View style={styles.image}>
        {(() => {
          switch (imageurl) {
            case 'sofo.png':
              return (
                <Image
                  resizeMode={'contain'}
                  style={{ width: 120, height: 80 }}
                  source={require('../../data/sofo.png')}
                />
              );
            case 'maho.png':
              return (
                <Image
                  resizeMode={'contain'}
                  style={{ width: 120, height: 80 }}
                  source={require('../../data/maho.png')}
                />
              );
            case 'steelo.png':
              return (
                <Image
                  resizeMode={'contain'}
                  style={{ width: 120, height: 80 }}
                  source={require('../../data/steelo.png')}
                />
              );
            case 'cabo.png':
              return (
                <Image
                  resizeMode={'contain'}
                  style={{ width: 120, height: 80 }}
                  source={require('../../data/cabo.png')}
                />
              );
            case 'RockingChair.png':
              return (
                <Image
                  resizeMode={'contain'}
                  style={{ width: 120, height: 80 }}
                  source={require('../../data/RockingChair.png')}
                />
              );
            case 'Cabinet.png':
              return (
                <Image
                  resizeMode={'contain'}
                  style={{ width: 120, height: 80 }}
                  source={require('../../data/Cabinet.png')}
                />
              );
            case 'Bed.png':
              return (
                <Image
                  resizeMode={'contain'}
                  style={{ width: 120, height: 80 }}
                  source={require('../../data/Bed.png')}
                />
              );
            case 'FancyChair.png':
              return (
                <Image
                  resizeMode={'contain'}
                  style={{ width: 120, height: 80 }}
                  source={require('../../data/FancyChair.png')}
                />
              );
          }
        })()}
      </View>
    </View>
  </TouchableHighlight>
);

export default ListItem;
