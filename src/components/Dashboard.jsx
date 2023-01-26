import React from 'react'
import {Info, Repos, User, Search, Navbar} from './Index'
const Dashboard = () => {
  return (
   <main>
    {/* <Navbar/> */}
    {/* <Search/> */}
    <Info/>
    <User/>
    <Repos/>
   </main>
  )
}

export default Dashboard