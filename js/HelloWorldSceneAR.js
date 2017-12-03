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
  ViroNode
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();
    this.state = {
      rotation: [0, 0, 0],
      text: 'VIRO Media',
      source: [require('./resources/coffee_table/CoffeeTable.obj'), require('./resources/Wood_Bench/Wood_Bench.obj')],
      material: ['coffee_table', 'wood_bench']
      current_furniture: 0,
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._rotate = this._rotate.bind(this);
    this._onInitialized = this._onInitialized.bind(this);
    this._onLoadEnd = this._onLoadEnd.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingInitialized={this._onInitialized}>
        <ViroText
          text={this.state.text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
        <ViroButton scale=0.5 source={require("./resources/Icons/Plus-Sign.png")}>


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
            materials={['coffee_table']}
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
    this.state.current_furniture = (this.state.current_furniture + 1) % 2
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
  wood_bench: {
    diffuseTexture: require('./resources/Wood_Bench/Wood2.jpg')
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
