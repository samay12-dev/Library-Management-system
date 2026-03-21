import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Image from './components/Image'
import Category1 from './components/Category1'
import Library from './components/Library'
import BookDetails from './components/BookDetails'
import About from './components/About'
import AddBooks from './components/AddBooks'
import BookDetails1 from './components/BookDetails1'
import ErrorElement from './components/ErrorElement'
import './App.css'

function App() {
  return (
    <Routes>
      {/* Pages rendered inside header/footer layout */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<>
          <Image />
         
        </>} />
        <Route path='/bookdetails' element={<BookDetails />} />
      </Route>

      {/* Library shown standalone (no Header/Footer) */}
      <Route path='/library' element={<Library />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/addbooks' element={<AddBooks/>}/>
      <Route path='/bookdetails1' element={<BookDetails1/>}/>
       <Route path="*" element={<ErrorElement />} />
    </Routes>
  )
}

export default App
