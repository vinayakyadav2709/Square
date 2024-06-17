import { create } from "zustand";

const sizePageIndex = (set,get) => ({
    unitIndex:0,
    setunitIndex:(i) =>  set((state) => ({unitIndex:i}))

})


const usesizePageUnit = create(sizePageIndex)

export {usesizePageUnit}


