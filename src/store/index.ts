import CounterStore from './counterStore';
import DateStore from './dateStore'

class RootStore {
  CounterStore
  DateStore
  constructor() {
    this.CounterStore = CounterStore
    this.DateStore = DateStore
  }
}

export default new RootStore()