
import './App.css'
import Card from './component/Card/Card'
import AddItem from './component/AddItem/AddItem'
import MainLoading from './component/Loading/MainLoading'
import { Route, Routes  } from 'react-router'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

function App() {

  const [isLoading, setIsLoading ] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(!isLoading)
      navigate('/card')
    },5000)
    return () => clearTimeout(timer)
  },[isLoading, navigate])

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
