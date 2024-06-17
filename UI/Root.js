import { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, ScrollView } from 'react-native';

import ProductPage from './Page/ProductPage.js';
import HomeTitle from './Uielements/HomeTitle.js'
import OrderCard from './Containers/OrderCard.js';

import Pdf from './pdf/Pdf.js';

import { useStore } from './logic/Start.js';
import { useOrderidHook } from './logic/manager.js';







export default function Root() {


  const [Orders] = useStore((state)=>[
     state.Orders
    ])

  const [currentOrderID,setcurrentOrderID] = useOrderidHook((state) => [
    state.currentOrderID,
    state.setcurrentOrderID
  ])


  const [modalState, stateSetter] = useState(false);





  const addHandler = () => {
    setcurrentOrderID(Orders.length)
    stateSetter(true)
    console.log(currentOrderID)
  }

 
  return (
    <ScrollView>
    <View style={styles.container}>
      <HomeTitle title={"Square Order"}></HomeTitle>

      
      
    <View>
    <View>
      <Pdf></Pdf>
    </View>

      {Orders.map((data,i) => {
        return(
          <OrderCard key={i} id={i} name={data.name} date={data.date} modalVisibility={stateSetter}></OrderCard>
        )
      })}
    </View>
      <Modal visible={modalState}>
        <ProductPage modalState={stateSetter}></ProductPage>
      </Modal>


      <Button title="Add" onPress={addHandler}></Button>
      
      <View>
        
       
        <Text>{currentOrderID}</Text>

      </View>

     

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
