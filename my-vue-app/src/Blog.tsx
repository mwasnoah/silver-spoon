import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Textarea,CardHeader,Center, CardBody, CardFooter,Image,Heading,Text,Stack,Divider,Button,ButtonGroup } from '@chakra-ui/react'
export default function Blog() {
    const location = useLocation()
    const id = location.pathname.split("/")?.[2];
    console.log(location.pathname.split("/")?.[2])
    const [blog, setBlog] = useState();
    useEffect(() => {
        fetch(`http://localhost:3001/getBlog/${id}`).then(data=>data.json()).then(data=>{console.log(data);
    setBlog(data.post)})
    }, []);
    return(<Card align='center'>
    <CardHeader>
      <Heading size='md'> {blog?.title}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{blog?.content}</Text>
    </CardBody>
    
    <Textarea placeholder="Comment"></Textarea>
    <CardFooter>
      <Button colorScheme='blue'>Comment</Button>
    </CardFooter>
  </Card>)
}