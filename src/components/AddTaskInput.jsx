import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddTaskInput = () => {
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (taskName.trim()) {
      // Add task logic here
      setTaskName("");
    }
  };

  return (
    <div className="flex items-center mb-4">
      <Input
        placeholder="Add a task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="mr-2"
      />
      <Button onClick={addTask}>Add</Button>
    </div>
  );
};

export default AddTaskInput;