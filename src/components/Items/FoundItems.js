import React from 'react';
import { ScrollView } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { FoundData } from '../../assets/dummy/posts';
import Card from '../Card';
import Post from '../Post';

const FoundItems = () => {
  return (

    <ScrollView>
      {FoundData.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </ScrollView>

  );
};

const styles = StyleSheet.create({});

export default FoundItems;
