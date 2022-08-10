import {useState,useEffect} from "react"
import Loading from "./components/Loading"
import UserPage from "./components/UserPage"
function App() {

  const [loading, setloading] = useState(true)
  const [userList, setuserList] = useState([])

  useEffect(() => {
    async function fetchUsers(){

    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const body= await res.json()
    console.log(body);

    setloading(!loading)
    setuserList(body)
    }
    fetchUsers()
  }, [])
  
  function RenderViews(){
    if(loading){
      return <Loading/>
    }
    return <UserPage userList={userList}/>
  }

  return (
    <div className="App">
      <RenderViews/>
    </div>
  );
}

export default App;
