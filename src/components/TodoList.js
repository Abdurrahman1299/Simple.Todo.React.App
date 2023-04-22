import { Box, Flex } from "@chakra-ui/react";
import TodoComponent from "./TodoComponent";

export default function TodoList({ todos, onDeleteTodo, onChangeTodo }) {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      py={40}
      pt={20}
      backgroundColor={"#999"}
      width={"60%"}
      mx={"auto"}
      mt={"50"}
      borderRadius={24}
    >
      {todos.map((todo) => (
        <TodoComponent
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onDeleteTodo={onDeleteTodo}
          onChangeTodo={onChangeTodo}
        />
      ))}
    </Flex>
  );
}
