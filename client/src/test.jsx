


import { useState, useEffect } from 'react'


function App() {
  const [users, setUsers] = useState([]);
  const [formData, useFormData] = useState({
    name: "",
    email: "",
    website: ""
  })
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => setUsers(json))
  })

  const handleSubmit = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const website = formData.website.trim();

    if(name && email && website){
      fetch("https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          email, 
          website
        }), 
        headers: {
          "Content-Type" : "application/json"
        }
      }
    ). then((res) => res.json())
    .then((json))
    }
  }

  return (
    <div>
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
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
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

  <tfoot>
    <tr>
      <td></td>
      <td><input value = {formData.name} onChange={(e) => setUsers(e.target.value)} placeholder='Enter User...' /></td>
      <td><input value = {formData.email} onChange={(e) => setUsers(e.target.value)} placeholder='Enter Email...' /></td>
      <td><input value = {formData.website} onChange={(e) => setUsers(e.target.value)} placeholder='Enter Website...' /></td>
      <td colSpan={2}><button onClick={handleSubmit} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Save
</button></td>
    </tr>
  </tfoot>
</table>
    </div>
  )
}
export default App
