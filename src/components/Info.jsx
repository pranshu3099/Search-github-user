import { GithubContext } from "../context/context";
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, Button, CardFooter, Heading, Text, IconButton } from "@chakra-ui/react";
import '../styles/styles.css'
const Info = ()=>{
    const  {githubUser} = React.useContext(GithubContext);
    const {public_repos, followers, following, public_gists} = githubUser;
    const items = [{id:1, label:"Repos",icon:<img src="src/icons/server.png" className="icon"/>, value:public_repos}, {id:2, label:"Followers",icon:<img src="src/icons/followers.png" className="icon"/>, value:followers}, {id:3, label:"Following",icon:<img src="src/icons/add.png" className="icon"/>, value:following}, {id:4, label:"Gists",icon:<img src="src/icons/less-than-symbol.png" className="icon"/>, value:public_gists}]
    return(
        <>
        <div className="info">
            {items.map((item)=>{
                return <Item key={item.id} {...item}/>
            })}
        </div>
        </>
    )
}
const Item = ({label, value,icon})=>{
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Card>
          <CardHeader>
            <Heading size='md'>{label}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{value}</Text>
            <IconButton>{icon}</IconButton>
          </CardBody>   
        </Card>
      </SimpleGrid>
    )
}
export default Info;