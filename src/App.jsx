import UserCard  from "./components/userCard/UserCard"
import AddToList from "./components/add_to_list/AddToList"
import './App.css'
import Counter from "./components/counter/Counter"
const App = () => {
  return (
    <div>
      <UserCard />
      <AddToList />
      <Counter />
    </div>
  )
}

export default App