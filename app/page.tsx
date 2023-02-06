"use client";
import { Button, Container, Text, Input } from "@chakra-ui/react";
import { use, useState } from "react";
import Image from "next/image";
import TrashIcon from "../public/trashIcon.png";

export default function Home() {
  const [tasks, setTasks] = useState(["Sample task"]);
  const [Item, setItem] = useState("");
  function removeItem(taskName: string) {
    setTasks(
      tasks.filter((task) => {
        return task != taskName;
      })
    );
  }

  function AddItem() {
    if (Item != "" && !tasks.includes(Item)) {
      let temp = tasks;
      temp.push(Item);
      setTasks(temp);
      setItem("");
    }
  }
  return (
    <>
      <Text textAlign="center" fontSize="40px" color="#002147">
        TODO-APP BY DANIYAL SADIQ
      </Text>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        gap="20px"
        mt="50px"
      >
        <Input
          width="280px"
          height="40px"
          pl="10px"
          border="2px solid #A9A9A9"
          borderRadius="5px"
          fontSize="15px"
          fontWeight="500"
          color="#A9A9A9"
          outline="none"
          placeholder="Add Todo"
          value={Item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        ></Input>
        <Button
          width="130px"
          height="45px"
          cursor="pointer"
          border="none"
          borderRadius="5px"
          fontSize="15px"
          fontWeight="600"
          backgroundColor="#73C2FB"
          color="white"
          onClick={AddItem}
        >
          Add Todo
        </Button>
      </Container>{" "}
      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        {tasks.map((task) => {
          return (
            <Container
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              width="400px"
              height="50px"
              borderRadius="5px"
              key={task}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pr="20px"
              pl="20px"
              mt="25px"
            >
              <Text fontSize="18px">{task}</Text>
              <Image
                style={{ width: "30px", height: "28px", cursor: "pointer" }}
                src={TrashIcon}
                onClick={() => {
                  removeItem(task);
                }}
                alt="trash"
              />
            </Container>
          );
        })}
      </Container>
    </>
  );
}
