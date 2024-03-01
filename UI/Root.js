import { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

import ProductPage from './Page/ProductPage.js';
import HomeTitle from './Uielements/HomeTitle.js'
import OrderCard from './Containers/OrderCard.js';

import { useFishStore } from './logic/Start.js';






export default function Root() {
  const fishes = useFishStore((state)=>state.fishes)
  const addAFishbutton = useFishStore((state)=>state.addAFish)
  const killAFishbutton = useFishStore((state)=>state.killAFish)
  const clearTankbutton = useFishStore((state)=>state.clearTank)


  const [modalState,stateSetter] = useState(false);
  function addHandler () {
    console.log("in adHanler")
    stateSetter(true)
  }
  return (
    <View style={styles.container}>
      <HomeTitle title = {"Square Order"}></HomeTitle>

      <OrderCard id={1} name={"Name Surname"} date={"12 Feb"} modalVisibility={stateSetter}></OrderCard>
      <OrderCard id={2} name={"Surname Name"} date={"12 Jan"} modalVisibility={stateSetter}></OrderCard>
      
      <Modal visible={modalState}>
       <ProductPage modalState={stateSetter}></ProductPage>
      </Modal>
      

      <Button title={"Add"} onPress={addHandler}></Button>
      <View>
        <Button title='test' onPress={addAFishbutton}></Button>
        <Button title='clear Tank' onPress={clearTankbutton}></Button>
        <Button title='kill' onPress={killAFishbutton}></Button>
        <Text>{fishes}</Text>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
