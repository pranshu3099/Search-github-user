import React from 'react'
import { GithubContext } from '../context/context'
import { Examplechart, Column3D, Pie3D, Bar3D, Doughnut2D } from '../charts/Index';
const Repos = () => {
  const {githubRepos} = React.useContext(GithubContext);
  const languages = githubRepos.reduce((total, item)=>{
    const {language} = item;
    if(!language) return total;
    if(!total[language]){
      total[language] = {label:language, value:1};
    }
    else{
      total[language] = {...total[language], value:total[language].value+1}
    }
    return total;
  },{})
  let lang = Object.values(languages).sort((a,b)=>{
    return b.value-a.value
  }).slice(0, 4);
  return (
    <div>
      {/* <Examplechart data = {chartData}/> */}
      <Pie3D data = {lang}/>
    </div>
  )
}

export default Repos