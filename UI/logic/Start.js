import {create} from 'zustand';
// import { Mystorage } from './Mystorage';
// import { persist, createJSONStorage } from 'zustand/middleware'

const setOrder = (state,orderid,OrderObj) => {
  temp = state.Orders
  temp[orderid] = OrderObj 
  
  return temp
}

const setProduct = (state,orderid,productID, ProductObj) => {
  temp = state.Orders
  temp[orderid].products[productID] = ProductObj

  return temp
}

const setSize = (state,orderid,productID,sizeid,Objsize) => {
  temp = state.Orders 
  temp[orderid].products[productID].sizes[sizeid] = Objsize
  
  return temp
}






const naam = (set, get) => ({
  Orders :[],

  setOrder: (orderid,OrderObj) => set((state) => ({Orders: setOrder(state,orderid,OrderObj)})),
  setProduct: (orderid,productID, ProductObj) => set((state) => ({Orders: setProduct(state,orderid,productID,ProductObj)})),
  setSize: (orderid,productID,sizeid,Objsize) => set((state) => ({Orders: setSize(state,orderid,productID,sizeid,Objsize)})),

})


export const useStore = create(naam)










