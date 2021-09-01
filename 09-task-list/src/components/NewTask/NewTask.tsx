import useFetch from "../../hooks/useFetch";
import { ITask } from "../../Tasks/Tasks";
import Section from "../../UI/Section";
import TaskForm from "./TaskForm";

interface IResponse {
  name: string;
}

type TNewTaskProps = {
  onAddTask: (task: ITask) => void;
};

const NewTask = ({ onAddTask }: TNewTaskProps) => {
  const { isLoading, error, sendRequest } = useFetch();

  const enterTaskHandler = (taskText: string) => {
    sendRequest<IResponse>(
      "https://oreily-react-http-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: { "Content-Type": "application/json" },
      },
      (data: IResponse) => {
        const generatedId = data.name;
        const createdTask: ITask = { id: generatedId, text: taskText };
        onAddTask(createdTask);
      }
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
