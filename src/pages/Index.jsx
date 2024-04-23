import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-6">Todo App</h1>
      <div className="flex justify-center mb-4">
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add a new todo" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddTodo}>
          <FaPlus />
        </button>
      </div>
      <ul className="list-disc">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 my-2">
            <span className="text-lg">{todo}</span>
            <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteTodo(index)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
