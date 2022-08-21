import { observable } from "mobx";

export const store = observable({
  tabbarVisible: true,
  city: '',
  list: []
})