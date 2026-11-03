import {Routes, Route, Link} from 'react-router-dom';

import List from './pages/list';
import Add from './pages/add'
import Edit from './pages/edit'

function App(){
  return (
    <div>
      <nav>
        <Link to="/">Employee List</Link> | {' '}
        <Link to="/add">Add Employee</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<List/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </div>
  )
}

export default App;