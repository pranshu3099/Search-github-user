import React from "react";
import { GithubContext } from "../context/context";
import { Card, CardHeader, CardBody, Flex, Avatar, Box, Heading, Text, IconButton, Image, CardFooter} from "@chakra-ui/react";
const CardInfo = () => {
    const {githubUser} = React.useContext(GithubContext);
    const {avatar_url, html_url, name, company, blog, bio, location, twitter_username} = githubUser;
    return ( 
        <>
        <div className="card">
        <Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='img' src={avatar_url} />

        <Box>
        <div className="card-info">
        <div>
         <Heading size='sm'>{name}</Heading>
          <Text>@{twitter_username || 'john doe'}</Text>
         </div>
         <div>
         <a href={html_url}>Follow</a>
         </div>
        </div>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
     {bio}
    </Text>
  </CardBody>
<CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
<img src="src/icons/programming-code-signs.png" alt="" className="card-icon" />
<p>{company}</p>
<img src="src/icons/location.png" alt=""className="card-icon" />
<p>{location}</p>
<img src="src/icons/link.png" alt=""className="card-icon" />
<a style={{cursor:"pointer"}}>{blog}</a>

  </CardFooter>
</Card>
        </div>
        </>
     );
}
 
export default CardInfo;