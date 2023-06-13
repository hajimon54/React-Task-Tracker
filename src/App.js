import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointments",
      day: "Fed 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Fed 8th at 3:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Fix car",
      day: "Fed 7th at 6:30pm",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
