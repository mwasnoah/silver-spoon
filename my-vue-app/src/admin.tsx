import { Button, Container, Input, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'

function Admin() {
    const toast = useToast();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)
    console.log({title,content})
    return (
        <Container m={3}>
            <h1>Add blog</h1>
            <Input onChange={(e) => {
                setTitle(e.target.value);
            }} m={3} placeholder='Title' />

            <Textarea onChange={(e) => {
                setContent(e.target.value);
            }} m={3} placeholder='article' />
            <Button loadingText="submitting" isLoading={isSubmitting} onClick={async () => {
                setIsSubmitting(true);
                fetch("http://localhost:3001/addBlog", {
                    method: "POST", 
                    headers: {
                       
                        "Content-Type": "application/json", 
                       
                    }, body: JSON.stringify({ title: title, content: content })
                }).then(data =>data.json()).then(data=>{ 
                    setIsSubmitting(false);
                    if (data.status == "success") {
                        toast({
                            title: 'Post submitted',
                            description: "Post submitted successfully",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                        })

                    } if (data.status == "error") {
                        toast({
                            title: 'Error submitting post.',
                            description: "There was an Error submitting post",
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        })
                    }


                })
                
                
               
            }}>Submit</Button>
        </Container>


    )
}
export default Admin;