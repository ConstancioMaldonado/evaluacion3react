import { useRef, useState } from 'react'
import './App.css'
import MainContent from './components/MainContent'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'

const App = () => {

  const [inputValue, setInputValue] = useState(getRandomLocation())

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, hasError] = useFetch(url)

  const inputLocation = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    
    setInputValue(inputLocation.current.value)
  }


  return (
    <div className='app'>
      <h1 className='app_title'>Rick And Morthy</h1>
      <form className='app_form' onSubmit={handleSubmit}>
        <input className='app_input' ref={inputLocation} type="text" />
        <button className='app_btn' >Buscar</button>
      </form>
      {
        hasError
        ? <h2 className='app_error' >❎ Hey..! Ingresa los de 1 a 126..😊</h2>
        : <MainContent location={location} />
      }
      <MainContent location={location} />
    </div>
  )
}

export default App
