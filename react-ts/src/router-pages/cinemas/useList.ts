import { useEffect, useState } from "react"
import axios from 'axios'
import type { Result, CinemaItem } from '../type'
import { store, RootState } from "../../redux"
import { getCinemaListAction } from "../../redux/actionCreators/getCinemaListAction"
import { useSelector, useDispatch } from 'react-redux'

/*
 影院列表数据保存在redux中， index 和 search 页面共用
 初始化时如果数据为空，请求后台接口
*/

export const useList = () => {
  const cinemaList = useSelector((state: RootState) => state.cinameReducer.list)
  const dispatch = useDispatch()
  // TODO: 暂时使用TS断言
  // const cinemaList = (store.getState().cinameReducer as any).list as CinemaItem[]
  // const [list, setList] = useState<CinemaItem[]>(cinemaList) // 默认值

  useEffect(() => {
    // const cinemaList = (store.getState().cinameReducer as any).list as CinemaItem[]
    if (cinemaList.length) {
      // setList(cinemaList) // 如果没有设置默认值， 加上这一行
    } else {
      // dispatch(getCinemaListAction() as any)
      dispatch(getCinemaListAction() as any)
    }

    // const unsubscribe = store.subscribe(() => {
    //   const cinemaList = (store.getState().cinameReducer as any).list as CinemaItem[]
    //   setList(cinemaList)
    // })


    return () => {
      // 取消订阅
      // unsubscribe()
    }
  }, [dispatch, cinemaList]);



  return {
    cinemaList
  }
}