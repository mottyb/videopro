import { Route, Routes } from 'react-router-dom'
import SongsList from '../Songs/SongsList'
import Header from '../Header'
import Footer from '../Footer'
import MyAcount from '../MyAcount'
import ToDoProject from '../Todo/ToDoProject'
import About from '../About'

export default function Layout() {
    return (
      <>
  <Routes>
    <Route path="/" element={<><Header /> <SongsList /> <Footer /></>} />
    <Route path="about" element={<><Header /> <About /> <Footer /></>} /> 
    <Route path="myacount" element={<><Header /> <MyAcount /> <Footer /></>} /> 
    <Route path="todo" element={<><Header /> <ToDoProject /> <Footer /></>} /> 
  </Routes>
      </>
    )
  }