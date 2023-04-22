import { Box, Flex, Input, Button } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

// importing the 'onAddTodo' fun in {} is mandatory
export default function TodoForm({ onAddTodo }) {
  // make the input focused after submition
  const inputRef = useRef();

  // input text
  const [text, setText] = useState("");

  // handlling submit
  function onSubmit(event) {
    if (text.trim()) {
      event.preventDefault();
      onAddTodo({
        id: Date.now(),
        text,
      });
      setText("");
      inputRef.current.focus();
    }
  }

  return (
    <Box w={"80%"}>
      <form onSubmit={onSubmit}>
        <Flex
          w={"70%"}
          mx={"auto"}
          gap={15}
          bgColor={"#999"}
          borderRadius={12}
          overflow={"hidden"}
          py={10}
          px={10}
        >
          <Input
            fontSize={24}
            px={20}
            borderRadius={12}
            outline={"none"}
            border={"none"}
            htmlSize={4}
            flex={2}
            type="text"
            value={text}
            placeholder="Enter New Todo"
            onChange={(event) => setText(event.target.value)}
            ref={inputRef}
          />
          <Button
            px={15}
            border={"none"}
            outline={"none"}
            borderRadius={12}
            onClick={onSubmit}
            fontSize={24}
            fontWeight={"bold"}
          >
            Add Todo
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
