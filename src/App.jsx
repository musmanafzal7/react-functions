import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Locations from './location/containers/Locations';
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'


import Users from './user/containers/Users'
import NewLocation from './location/containers/NewLocation'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Calendar from './shared/components/Navigation/calander'
const App = () => {
  // const [count, setCount] = useState(0)
  return (
    <Router>
      <MainNavigation />
      <main className='flex-1 mt-20 m-4'>
        <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/locations" exact element={<Locations />} />
        <Route path="/calendar" exact element={<Calendar />} />
        <Route path="/locations/new" exact element={<NewLocation />} />
          {/* <Redirect to="/" /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App
