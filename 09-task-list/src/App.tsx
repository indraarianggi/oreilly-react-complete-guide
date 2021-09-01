import { useCallback, useEffect, useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/useFetch";
import Tasks, { ITask } from "./Tasks/Tasks";

interface IResponse {
  [key: string]: {
    text: string;
  };
}

const App = () => {
  const { isLoading, error, sendRequest } = useFetch();

  const [tasks, setTasks] = useState<ITask[]>([]);

  const fetchTasks = useCallback(() => {
    sendRequest<IResponse>(
      "https://oreily-react-http-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      {},
      (data: IResponse) => {
        const loadedTasks: ITask[] = [];

        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }

        setTasks(loadedTasks);
      }
    );
  }, [sendRequest]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const taskAddHandler = (task: ITask) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={!!error}
        onFetch={fetchTasks}
      />
    </>
  );
};

export default App;
