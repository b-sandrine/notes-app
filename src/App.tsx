
import './App.css'
import Card from './component/Card/Card'
import AddItemIcon from './component/AddItemIcon/AddItemIcon'
import AddItem from './component/AddItem/AddItem'
import { Route, Routes  } from 'react-router'
import { Link } from 'react-router-dom'
function App() {

  return (
    <div className='main--container'>
      <Routes>
        <Route path="/card" element= {<Card />}/>
        <Route path='/add-item' element={<AddItem />}/>
      </Routes>
      
      <Link to='/add-item'>
        <AddItemIcon />
      </Link>
    </div>
  )
}

export default App
