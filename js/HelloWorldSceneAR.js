'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  Viro3DObject,
  ViroSpotLight,
  ViroAmbientLight,
  ViroNode,
  ViroButton
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();
    this.state = {
      rotation: [0, 0, 0],
      text: 'VIRO Media',
      source: [
        require('./resources/coffee_table/CoffeeTable.obj'),
        require('./resources/coffee_table/CoffeeTable.obj'),
        require('./resources/coffee_table/CoffeeTable.obj')
      ],
      material: ['coffee_table', 'coffee_table_2', 'coffee_table_3'],
      current_furniture: 0
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._rotate = this._rotate.bind(this);
    this._onInitialized = this._onInitialized.bind(this);
    this._onLoadEnd = this._onLoadEnd.bind(this);
    this._increment_furniture = this._increment_furniture.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingInitialized={this._onInitialized}>
        <ViroText
          text={this.state.text}
          scale={[0.5, 1.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />

        <ViroButton
          position={[0, 0, -1]}
          scale={[0.2, 0.2, 0.2]}
          source={require('./resources/Icons/arrow.png')}
          onClick={this._increment_furniture}
        />

        <ViroAmbientLight color={'#aaaaaa'} />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
        />
        <ViroNode
          position={[0, -1, -1]}
          dragType="FixedToWorld"
          onDrag={() => {}}
        >
          <Viro3DObject
            source={this.state.source[this.state.current_furniture]}
            materials={[this.state.material[this.state.current_furniture]]}
            //  materials={['coffee_table']}
            //source={require('./resources/coffee_table/CoffeeTable.obj')}
            position={this.state.position}
            scale={[0.5, 0.5, 0.5]}
            rotation={this.state.rotation}
            type="OBJ"
            onLoadEnd={this._onLoadEnd}
            onRotate={this._rotate}
          />
        </ViroNode>
      </ViroARScene>
    );
  }
  _rotate(rotateState, rotationFactor, source) {
    if (rotateState == 2) {
      this.setState({
        rotation: [
          this.state.rotation[0],
          this.state.rotation[1] + rotationFactor * 0.05,
          this.state.rotation[2]
        ]
      });
      return;
    }
  }
  _increment_furniture() {
    this.setState({
      current_furniture: (this.state.current_furniture + 1) % 3
    });
    return;
  }
  _onLoadEnd() {
    console.log('Coffee Table finished initializing');
  }
  _onInitialized() {
    this.setState({
      text: ''
    });
  }
}

ViroMaterials.createMaterials({
  coffee_table: {
    diffuseTexture: require('./resources/coffee_table/WoodTexture.jpg')
  },
  coffee_table_2: {
    diffuseTexture: require('./resources/coffee_table/marble.jpg')
  },
  coffee_table_3: {
    diffuseTexture: require('./resources/Bed/mohagony.jpg')
  }
});
var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

module.exports = HelloWorldSceneAR;
