
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import SinglePage from './Pages/SinglePage';

export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single/:id' element={<SinglePage/>}/>
      </Routes>
    </div>
  )
}
