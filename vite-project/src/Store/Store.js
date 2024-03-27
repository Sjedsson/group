import { configureStore } from "@reduxjs/toolkit";
 import counter from "../Counter/Counter"

 const store = configureStore({
     reducer:{
         cartCounter: counter
     }
 })


 export default store;