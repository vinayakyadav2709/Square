import { create } from "zustand"

const MainPageHook = (set,get) => ({
    sizePageUnit:0,
    
    setsizePageUnit: (id) => set((state) => ({sizePageUnit:id})),
})


const OrderIDHook = (set,get) => ({
    currentProductID:0,
    currentOrderID:0,
  
    setcurrentOrderID: (id) => set((state) => ({currentOrderID:id})),
    setcurrentProductID: (id) => set((state) => ({currentProductID:id})),
    
  
  })


  const SizeHook = (set,get) => ({
    
    sizeObj : {
      unit:0,
      pcs:0,
      priLen:0,
      secLen:0,
      priBred:0,
      secBred:0,
    },
  
    setUnit: (unit) => set((state) => ({sizeObj:{...state.sizeObj,...{unit:unit}}})),
    setPcs: (pcs) => set((state) => ({sizeObj:{...state.sizeObj,pcs:pcs}})),
    setPriLen: (data) => set((state) => ({sizeObj:{...state.sizeObj,priLen:data}})),
    setSecLen: (data) => set((state) => ({sizeObj:{...state.sizeObj,secLen:data}})),
    setPriBred: (data) => set((state) => ({sizeObj:{...state.sizeObj,priBred:data}})),
    setSecBred: (data) => set((state) => ({sizeObj:{...state.sizeObj,secBred:data}})),
    
    
  
  })

  const ProductHook = (set,get) => ({
    productObj: {
      productname:"",
      rate:0,
      sizes:[],
    },
    
    setProductname: (d) => set((state) => ({productObj:{...state.productObj,productname:d}})),
    setRate: (d) => set((state) => ({productObj:{...state.productObj, rate:d}}))
  })

  const OrderPageHook = (set,get) => ({
    OrderObj: {
      name:"",
      phone:"",
      location:"",
      products:[],
    },


    setName: (d) => set((state) => ({OrderObj:{...state.OrderObj,...{name:d}}})),
    setPhone: (d) => set((state) => ({OrderObj:{...state.OrderObj,...{phone:d}}})),
    setLocation: (d) => set((state) => ({OrderObj:{...state.OrderObj,...{location:d}}})),
  })

 const useOrderidHook = create(OrderIDHook)
 const useSizeObj = create(SizeHook)
 const useMainSizePageUnit = create(MainPageHook)
 const useOrderHook = create(OrderPageHook)
 const useProductHook = create(ProductHook)

 export {useOrderidHook , useSizeObj, useMainSizePageUnit, useOrderHook, useProductHook}
