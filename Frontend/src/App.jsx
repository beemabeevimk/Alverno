import { useState } from 'react'
import './App.css'
import router from './Components/Routers/Routes'
import { BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Profile from './pages/StudentSide/Profile';
import Course from './pages/StudentSide/Course';
import Timetable from './pages/StudentSide/Timetable';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
     <Sidebar>
        <Routes>
          <Route path="/"element={<Profile/>}/>
          <Route path="/profile"element={<Profile/>}/>
          <Route path="/course"element={<Course/>}/>
          <Route path="/timetable"element={<Timetable/>}/>
        </Routes>
     </Sidebar>
    </BrowserRouter>

    {/* <RouterProvider router={router} />  */}
      
    </>
  )
}

export default App
