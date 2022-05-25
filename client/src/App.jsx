import { useState } from 'react'
import Nav from './components/Navbar'
import Header from './sections/Header'
import Info from './sections/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Header />
      <Info />
    </div>
  )
}

export default App
