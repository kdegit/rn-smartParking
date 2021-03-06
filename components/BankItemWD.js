import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ContentLoader from '@sarmad1995/react-native-content-loader';

import { navigate, navigateReplace } from '../utils/navigationRef';

import vp from '../assets/vp.png';

import vc from '../assets/vc.png'

const BankItem = ({ item, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={() => navigateReplace('WithDraw', { sourceId: item._id })}
    >
      {/* <ContentLoader active title={false} loading={isLoading} avatar pRows={1}> */}
        <View style={styles.boxstyle}>
          <View style={{ alignItems: 'center', padding: 10 }}>
            <Image source={item.bank === 'VCB' ? vc : vp} />
          </View>
          <Text style={styles.numbertext}>
            ************{item.cardnumbersliced}
          </Text>
        </View>
      {/* </ContentLoader> */}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  numbertext: {
    color: '#0090FE',
    fontWeight: 'bold',
    paddingRight: 60,
    paddingLeft: 30,
    fontSize: 18,
  },
  boxstyle: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
});

export default BankItem;
