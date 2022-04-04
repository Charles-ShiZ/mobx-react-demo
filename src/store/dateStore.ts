import { makeAutoObservable } from "mobx";

export class DateStore {
  date = new Date()
  constructor() {
    makeAutoObservable(this)
  }
  updateDate = () => {
    this.date = new Date()
  }
  get dateStr() {
    return this.date.toString()
  }
}
export default new DateStore()