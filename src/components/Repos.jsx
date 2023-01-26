import React from 'react'
import { GithubContext } from '../context/context'
import { Examplechart, Column3D, Pie3D, Bar3D, Doughnut2D } from '../charts/Index';
const Repos = () => {
  const {githubRepos} = React.useContext(GithubContext);
  return (
    <div>
      <Examplechart/>
    </div>
  )
}

export default Repos