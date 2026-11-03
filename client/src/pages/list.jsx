


import { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';


function List() {
    const navigate = useNavigate();
    const goToAdd = () => {
        navigate('/add')
    }

    const goToEdit = (id) => {
        navigate(`/edit/${id}`)
    }
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => setUsers(json))
  }, [])




  return (
    <div>
         <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={goToAdd}>
  Add
</button>
<br></br>
    <table className="border-collapse border border-gray-400">
    <thead>
    <tr>
      <th className='border border-gray-300'>Id</th>
      <th className='border border-gray-300'>Name</th>
      <th className='border border-gray-300'>Email</th>
      <th className='border border-gray-300'>Website</th>
      <th className='border border-gray-300'>Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) => {
      return (
    <tr key={user.id}>
      <td className='border border-gray-300'>{user.id}</td>
      <td className='border border-gray-300'>{user.name}</td>
      <td className='border border-gray-300'>{user.email}</td>
      <td className='border border-gray-300'>{user.website}</td>
      <td className='border border-gray-300'>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => goToEdit(user.id)}>
  Edit
</button>
      </td>

            <td className='border border-gray-300'>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
  Delete
</button>
      </td>
    </tr>
      )
    })}
    
    
  </tbody>

</table>
    </div>
  )
}
export default List;
