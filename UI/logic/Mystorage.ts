import {MMKV} from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware'

const Storage = new MMKV({
    id:"storage",
  })

export const Mystorage : StateStorage = {
    setItem : (name,value) =>{
      return Storage.set(name,value)
    },
    getItem: (name) =>{
      return Storage.getString(name)
    },
    removeItem: (name) => {
      return Storage.delete(name)
    }
  
  }
  