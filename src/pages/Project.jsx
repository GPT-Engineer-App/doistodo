import { useParams } from "react-router-dom";
import TaskList from "@/components/TaskList";
import AddTaskInput from "@/components/AddTaskInput";

const ProjectPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Project: {id}</h1>
      <AddTaskInput />
      <TaskList />
    </div>
  );
};

export default ProjectPage;