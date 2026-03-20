import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Image from './components/Image'
import Category1 from './components/Category1'
import Library from './components/Library'
import BookDetails from './components/BookDetails'
import './App.css'

function App() {
  return (
    <Routes>
      {/* Pages rendered inside header/footer layout */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<>
          <Image />
          <Category1 />
        </>} />
        <Route path='/bookdetails' element={<BookDetails />} />
      </Route>

      {/* Library shown standalone (no Header/Footer) */}
      <Route path='/library' element={<Library />} />
    </Routes>
  )
}

export default App
