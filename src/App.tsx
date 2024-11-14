import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./module/Home";
import { Register } from "./module/Register";
import { TaskManager } from "./module/TaskManager";
import { useState } from "react";


function App() {

  const [userName, setUserName] = useState<string>(''); // Estado para armazenar o nome do usuário

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<TaskManager userName={userName} />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;