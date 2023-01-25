import React from "react";
import { GithubContext } from "../context/context";
import '../styles/styles.css'   
import { Card, CardHeader, CardBody, Flex, Avatar, Box, Heading, Text, IconButton, Image, CardFooter} from "@chakra-ui/react";
const Followers = () => {
    const {githubFollower} = React.useContext(GithubContext);
    return ( 
        <div className="followers-container" id="followers-container">
        {githubFollower.map((follower, index)=>{
            const {avatar_url:img,html_url, login} = follower;
            return (
               <div key={index} className="followers">
                <div>
                <img src={img} alt={login} style = {{width:"60px"}} />

                </div>
                    <div>
                        <h4>{login}</h4>
                        <a href={html_url}>{html_url}</a>
                    </div>
               </div>
            )
        })}
        </div>
     );
}
 
export default Followers;