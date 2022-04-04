import RootStore from './store'
import {observer} from 'mobx-react-lite'
const {CounterStore, DateStore} = RootStore

function App() {
  const { count, addCount, listStr } = CounterStore
  const {date, dateStr, updateDate} = DateStore
  return (
    <div className="App">
      <div style={{ fontSize: 20 }}>{listStr}</div>
      <div style={{ fontSize: 20 }}>{count}</div>
      <button onClick={() => addCount()}>+1</button>
      <div>{date.toDateString()}</div>
      <div>{dateStr}</div>
    </div>
  )
}

export default observer(App)
