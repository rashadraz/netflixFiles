
import React from 'react'
import {originals , action , comedy , romance , horror , document , trending} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/NavBar/Navbar'
import RowPost from './Components/RowPost/RowPost'



function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={trending} title='Trending' />
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={document} title='Documentaries' isSmall/>
     </div>
  )
}

export default App
