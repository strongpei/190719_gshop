//方法可以包括异步和逻辑处理代码
import {
  reqAddress,
  reqCategorys,
  reqShops,
} from '@/api'

import { 
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
 } from "./mutation-types"

export default{
  /*
  获取当前地址信息对象的异步action
  */
  async getAddress({commit,state}){
   //发异步请求
   //请求成功后,提交mutation
  const {longitude,latitude} =state
  const result = await reqAddress(longitude, latitude)  
  if (result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  /*
  获取商品分类的异步action
  */
 async getCategorys({commit}){
  //发异步请求
 const result = await reqCategorys()  
 if (result.code===0) {
     const categorys = result.data
     commit(RECEIVE_CATEGORYS,categorys)
   }
 },
 /*
  获取商家数组的异步action
  */
 async getShops({commit,state}){
  //发异步请求
  //请求成功后,提交mutation
 const {longitude,latitude} =state
 const result = await reqShops({longitude, latitude})  
 if (result.code===0) {
     const shops = result.data
     commit(RECEIVE_SHOPS,shops)
   }
 }
}