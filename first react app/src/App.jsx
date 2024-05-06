import { useState } from 'react'
import './App.css'
import Header from './assets/layout/Header'
import Main from './assets/components/Main'
import Footer from './assets/layout/Footer'
import { students } from './assets/data/data'

function App() {

  return (
    <>
    <Header/>
    <Main  students={students}/>
    <Footer/>
    </>
  )
}

export default App
