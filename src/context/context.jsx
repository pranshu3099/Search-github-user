import { useState, useEffect } from "react";
import React from "react";
import mockUser from './mockdata/mockUser'
import mockFollower from './mockdata/mockFollower'
import mockRepos from './mockdata/mockRepos'
const rootUrl = 'https://api.github.com';

const GithubContext =   React.createContext();

const GithubProvider = ({children})=>{
   const [githubUser, setGithubUser] = useState(mockUser);
   const [githubFollower, setGithubFollower] = useState(mockFollower);
   const [githubRepos, setGithubrepos] = useState(mockRepos);
   return <GithubContext.Provider value = {{githubUser, githubRepos, githubFollower}}>{children}</GithubContext.Provider>
}

export {GithubContext, GithubProvider};