import { Box, Button, Flex, Input, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";

export default function TodoComponent({
  id,
  text,
  onDeleteTodo,
  onChangeTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newInputText, setNewInputText] = useState(text);

  function handleDeleteTodo() {
    onDeleteTodo(id);
  }

  function handleNewInputChange(event) {
    setNewInputText(event.target.value);
  }

  function handleCancel() {
    setIsEditing(false);
    setNewInputText(text);
  }

  function handleSaveChange() {
    const updatedTodo = { id, text: newInputText };
    onChangeTodo(updatedTodo);
    setIsEditing(false);
  }
  if (isEditing) {
    return (
      <Flex
        gap={5}
        bgColor={"#444"}
        w={"90%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={10}
        borderRadius={12}
        my={5}
      >
        <Input
          flex={1}
          outline={"none"}
          border={"none"}
          borderRadius={8}
          p={5}
          type="text"
          value={newInputText}
          onChange={handleNewInputChange}
        />
        <Flex gap={5}>
          <Button
            borderRadius={8}
            outline={"none"}
            border={"none"}
            type="submit"
            onClick={handleSaveChange}
          >
            Save
          </Button>
          <Button
            borderRadius={8}
            outline={"none"}
            border={"none"}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex
      gap={5}
      bgColor={"#444"}
      w={"90%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={10}
      borderRadius={12}
      my={5}
    >
      <Box as="span" color={"white"}>
        {text}
      </Box>
      <Flex gap={5}>
        <Button
          borderRadius={8}
          outline={"none"}
          border={"none"}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
        <Button
          borderRadius={8}
          outline={"none"}
          border={"none"}
          onClick={handleDeleteTodo}
        >
          Completed
        </Button>
      </Flex>
    </Flex>
  );
}
