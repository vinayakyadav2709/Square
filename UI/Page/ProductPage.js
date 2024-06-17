import {useState} from 'react';
import { StyleSheet, Text, View, Button, Modal, TextInput, ScrollView } from 'react-native';


import HomeTitle from '../Uielements/HomeTitle';
import ProductCard from '../Containers/ProductCard';
import SizePage from './SizePage'

import { useStore } from '../logic/Start';
import { useOrderidHook , useOrderHook } from '../logic/manager';



export default function ProductPage(props) {
    
    const [sizepageState,sizemodalSetter] = useState(false);

    const [currentOrderID, currentProductID, setcurrentOrderID, setCurrentProductID] = useOrderidHook((state) => [
        state.currentOrderID,
        state.currentProductID,
        state.setcurrentProductID,
        state.setcurrentProductID,
    ])

    const [Orders, setOrder] = useStore((state) => [
        state.Orders,
        state.setOrder
    ])

    const [OrderObj, setName, setPhone, setLocation] = useOrderHook((state) => [
        state.OrderObj,
        state.setName,
        state.setPhone,
        state.setLocation
    ])
    
    const savebuttonHandler = () => {
        props.modalState(false)
        
        temp = OrderObj
        delete temp.products

        setOrder(currentOrderID,temp)
    }

    const addProductHandler = () => {
        sizemodalSetter(true)
        setCurrentProductID(Orders[currentOrderID].products.length) 
    }
    
    
    return (
     
        <View>
          <ScrollView>

         
            <HomeTitle title="Product Page"></HomeTitle>


            <View style={styles.inputcontainer}>
                <TextInput placeholder='Name' value={OrderObj.name} onChangeText={(data)=>setName(data)}></TextInput>
                <TextInput placeholder='Phone number' value={OrderObj.phone} onChangeText={(data)=>setPhone(data)}></TextInput>
                <TextInput placeholder='Location' value={OrderObj.location} onChangeText={(data)=>setLocation(data)}></TextInput>
            </View>


            <View>
                <Text>Products</Text>
                <View>
                 
            {
                   (typeof Orders[currentOrderID] == "undefined" || typeof Orders[currentOrderID].products == "undefined" ) ?
                     <Text>No Products</Text> :
                     Orders[currentOrderID].products.map((data,i) => {
                        return (
                            <ProductCard key={i} id={i} productname={data.productname} rate={data.rate} modalVisibility={sizemodalSetter}></ProductCard>
                        )
                     })
                   
                        
            }
                  
                </View>
                
            </View>
            <View>
                <Text>Total pcs: {4545}</Text>
                <Text>Total amount: {454577}</Text>
                {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
               
                <Modal visible={sizepageState}><SizePage sizeModal={sizemodalSetter}></SizePage></Modal>
                <Button title="Add Product" onPress={addProductHandler}></Button>
                <Button title="Save" onPress={savebuttonHandler}></Button>
            </View>
            
                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    titletext: {
        color: 'white',
    },
    inputcontainer: {
        backgroundColor: "#8884e2",
        padding: 20,
        marginTop: 20,
    },
});