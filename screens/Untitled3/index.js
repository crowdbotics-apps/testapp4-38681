import { Text } from "react-native";
import { FlatList } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.pDdgPwBJ} renderItem={() => <View style={styles.xXdUJkHS}></View>} ItemSeparatorComponent={() => <View style={styles.ekilBNgg} />} data={[1, 2, 3, 4, 5]} keyExtractor={item => item.toString()} horizontal={false} ListHeaderComponent={() => <Text>My list header</Text>} ListFooterComponent={() => <Text>My list footer</Text>}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  pDdgPwBJ: {
    position: "absolute",
    width: 313,
    height: 343,
    left: 22.5,
    top: 122,
    backgroundColor: "#d5c5c5",
    flexWrap: "wrap"
  },
  xXdUJkHS: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  ekilBNgg: {
    backgroundColor: "#000000",
    height: 1
  },
  zeTprzbC: {
    flex: 1
  },
  vxPllABQ: {
    flex: 1
  },
  FJMkjtwb: {
    flex: 1
  },
  vJOHlCxW: {
    flex: 1
  },
  oSuFaDlq: {
    flex: 1
  },
  tZcxuTbJ: {
    flex: 1
  },
  KLGCXQqk: {
    flex: 1
  },
  VDEammvH: {
    flex: 1
  },
  NLWbTGGD: {
    flex: 1
  },
  qVnVgMzT: {
    flex: 1
  },
  SrLTTTxr: {
    flex: 1
  },
  JnpIqvEg: {
    flex: 1
  },
  dCdwoELi: {
    flex: 1
  },
  rrpROKHq: {
    flex: 1
  },
  wQehJgcJ: {
    flex: 1
  },
  DCqrBIbA: {
    flex: 1
  },
  aZFpzDaz: {
    flex: 1
  },
  dwSkumlw: {
    flex: 1
  },
  xmNtUyKW: {
    flex: 1
  },
  VYjMxVmg: {
    flex: 1
  }
});
export default Untitled3;