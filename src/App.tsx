import React, { useRef, useState } from "react";
import { BsCheckBox, BsFillTrashFill, BsXCircle } from "react-icons/bs";
import "./bootstrap.min.css";

interface inTask {
  name: String;
  done: Boolean;
}

export const App = (): JSX.Element => {
  const taskRef = useRef<HTMLInputElement>(null);
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<inTask[]>([]);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (newTask.trim().length > 6) {
      addTask(newTask);
      setNewTask("");
      taskRef.current?.focus();
    }
  };

  const addTask = (name: string): void => {
    const newTasks: inTask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };
  const handleToggleTask = (i: number): void => {
    const newTasks: inTask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;

    setTasks(newTasks);
  };

  const handleRemoveTask = (i: number): void => {
    const removeTast: inTask[] = [...tasks];
    removeTast.splice(i, 1);
    setTasks(removeTast);
  };
  return (
    <div className="body">
      <div className="container p-4">
        <div className="row px-4">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>New Task</label>
                <input
                  className="form-control text-light"
                  type="text"
                  value={newTask}
                  name="task"
                  autoFocus
                  ref={taskRef}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <span>Save Task</span>
              </button>
            </form>
          </div>
          <div className="col-md-6 ">
            <ul className="list-group p-4">
              {tasks.map((task: inTask, i: number) => (
                <li
                  className="list-group-item mb-3   bg-dark text-light shadow-p "
                  key={i}
                >
                  <div className=" row  d-flex justify-content-between align-items-end">
                    <div className="col-md-6 text-break">
                      <h4
                        style={{ textDecoration: task.done && "line-through" }}
                      >
                        {task.name}
                      </h4>
                    </div>
                    <div className="col-md-6 d-flex flex-row-reverse justify-content-between">
                      <button
                        className="btn btn-secondary btn-lg"
                        onClick={() => {
                          handleToggleTask(i);
                        }}
                      >
                        {task.done ? <BsCheckBox /> : <BsXCircle />}
                      </button>
                      <button
                        className="btn btn-danger "
                        onClick={() => {
                          handleRemoveTask(i);
                        }}
                      >
                        <BsFillTrashFill />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
