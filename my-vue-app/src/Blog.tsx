import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Avatar, Box, Flex, Link as LinkChakra } from "@chakra-ui/react";
import {
  Card,
  Textarea,
  CardHeader,
  Center,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Stack,
  Divider,
  ButtonGroup,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  ModalCloseButton,
  useDisclosure,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
export default function Blog() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comment, setComment] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const id = location.pathname.split("/")?.[2];
  console.log(location.pathname.split("/")?.[2]);
  const handleClick = () => setShow(!show);
  const [blog, setBlog] = useState();
  console.log(blog)
  useEffect(() => {
    fetch(`http://localhost:3001/getBlog/${id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setBlog(data.post);
      });
  }, []);
  return (
    <>
      <Modal colorScheme={"blackAlpha"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"black"}>
            {isSignIn ? "SignIn" : "SignUp"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              m={3}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputGroup m={3}>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Center>
              {" "}
              <LinkChakra
                onClick={() => {
                  setIsSignIn((isSignIn) => !isSignIn);
                }}
              >
                {isSignIn ? "SignUp?" : "SignIn?"}
              </LinkChakra>
            </Center>
          </ModalBody>

          <ModalFooter color={"white"}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                if (isSignIn) {
                  fetch("http://localhost:3001/signin", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: email,
                      password: password,
                    }),
                  })
                    .then((data) => data.json())
                    .then((data) => {
                      console.log(data);
                      if (data.status == "error user not found") {
                        toast({
                          status: "error",
                          duration: 1000,
                          title: "Error",
                          description: data.status,
                        });
                      } else {
                        sessionStorage.setItem("token", data.token);
                        toast({
                          status: "success",
                          duration: 1000,
                          title: "Success",
                          description: data.status,
                        });
                      }
                    });
                } else {
                  fetch("http://localhost:3001/signup", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: email,
                      password: password,
                    }),
                  })
                    .then((data) => data.json())
                    .then((data) => {
                      console.log(data);
                      if (data.status == "error") {
                        toast({
                          status: "error",
                          duration: 1000,
                          title: "Error",
                          isClosable: true,
                          description: data.status,
                        });
                      } else {
                        sessionStorage.setItem("token", data.token);
                        toast({
                          status: "success",
                          duration: 1000,
                          title: "Success",
                          isClosable: true,
                          description: data.status,
                        });
                      }
                    });
                }
              }}
            >
              {" "}
              {isSignIn ? "SignIn" : "SignUp"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="nav container">
        <a href="#" className="logo">
          Ace <span>Sports</span>
        </a>

        <Button className="login" onClick={onOpen}>
          login
        </Button>
      </div>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> {blog?.title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{blog?.content}</Text>
        </CardBody>

        <Textarea
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder="Comment"
        ></Textarea>
        <CardFooter>
          <Button
            onClick={() => {
              fetch("http://localhost:3001/comment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  content: comment,
                  token: sessionStorage.getItem("token"),
                  postId: id,
                }),
              })
                .then((data) => data.json())
                .then((data) => {
                  console.log(data);
                  if (data.status == "error submitting content") {
                    toast({
                      status: "error",
                      duration: 1000,
                      title: "Error",
                      description: data.status,
                    });
                  } else {
                   
                    toast({
                      status: "success",
                      duration: 1000,
                      title: "Success",
                      description: data.status,
                    });
                  }
                });
            }}
            colorScheme="blue"
          >
            Comment
          </Button>
        </CardFooter>
      </Card>
      {blog?.Comment?.map((val,index)=>{
        return(
        <Flex m={3} flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='' />

        <Box>
          <Heading size='sm'>Comment</Heading>
          <Text>{val.content}</Text>
        </Box>
      </Flex>)
      })}
    </>
  );
}
