import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sample Task 1", completed: false },
    { id: 2, name: "Sample Task 2", completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Checkbox checked={task.completed} onCheckedChange={() => toggleTaskCompletion(task.id)} />
            <span className={`ml-2 ${task.completed ? "line-through" : ""}`}>{task.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">Edit</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Task</DialogTitle>
                  <DialogDescription>
                    Make changes to your task here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <Input placeholder="Task Name" defaultValue={task.name} />
                <Textarea placeholder="Description" />
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;