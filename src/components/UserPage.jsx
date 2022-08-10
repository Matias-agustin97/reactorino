import React,{useState} from 'react'
import UserRow from './UserRow'

const UserPage = ({userList}) => {

  const [users, setusers] = useState(userList)

  const truthy = true
  const falsy= false


  function RenderList(){
    users.map((user,index)=>{
      return <UserRow user={user} key={index}/>
    })
  }

  return (
   <table>
    <thead>
      <tr>
      <th>Id</th>
      <th>Nombre</th>
      <th>UserName</th>
      <th>Email</th>
      <th>Website</th>
      <th>Phone</th>
      </tr>
    </thead>
    <tbody>
    { users.map((user,index)=>{
      return <UserRow user={user} key={index}/>
    })
    
    }
    </tbody>

    
   </table>
  )
}

export default UserPage

/*
 /*truthy && <h1>el otro es true</h1>*/
    /*<h1>el otro es false</h1> && falsy
    /*falsy || <h1>El otro es falsy</h1>
    /*<h1>El otro es falsy</h1> || falsy
*/