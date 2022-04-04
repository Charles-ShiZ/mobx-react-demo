import { makeAutoObservable, observable } from "mobx";

export class CounterStore {
  count = 0
  list = [1, 2, 3, 4, 5, 6]
  constructor() {
    makeAutoObservable(this)
  }
  addCount = () => {
    this.count++
  }
  get listStr() {
    return this.list.join(', ')
  }
}
export default new CounterStore()