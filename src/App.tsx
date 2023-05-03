
import './App.css'
import Card from './component/Card/Card'
import AddItem from './component/AddItem/AddItem'
import MainLoading from './component/Loading/MainLoading'
import { Route, Routes  } from 'react-router'

function App() {

  return (
    <div className='main--container'>
      <Routes>
        <Route path='/' element={<MainLoading/>}></Route>
        <Route path="/card" element= {<Card />}/>
        <Route path='/add-item' element={<AddItem />}/>
      </Routes>
    </div>
  )
}

export default App
