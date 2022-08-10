import React from 'react'

const UserRow = ({user}) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
      <td>{user.phone}</td>
    </tr>
  )
}

export default UserRow