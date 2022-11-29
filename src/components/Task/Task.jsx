import React, { useState, useEffect } from "react";
import { getCollection } from "../../helpers/Action";
import "./Task.css";
import { size } from 'lodash';

const Task = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  
  useEffect(() => {
    (async () => {

      const result = await getCollection("task")
      console.log(result);
      result.statusResponse&&setTasks(result.data)

    })()
  }, [])
  


  return (
    <div className="conatiner mt-5">
      <h1 className="text-primary text-center">Tareas</h1>
      <hr />

      <div className="row">
        <div className="col-md-8 col-sm-12">
          <h4 className="text-center">lista de tareas</h4>
          {
            size(tasks)===0?  (<h4>No hay tareas</h4>):(
              <ul className="list-group">
                {
                  tasks.map((taskInfo)=>(
                    <li className="list-group-item" key={taskInfo.id}>
                      <span className="lead">
                        {taskInfo.name}
                      </span>
                    </li>
                  ))
                }
              </ul>
            )
          }
        </div>

        <div className="col-md-4 col-sm-12">
          <h4>{editMode ? "Modificar Tarea" : "Agregar Tarea"}</h4>
          <form>
            <textarea
              type="input"
              placeholder="Ingrese tarea..."
              className="form-control input-task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />

            <button type="submit" className="btn btn-dark w-100 mt-2">
              {editMode ? "Guardar Tarea" : "Agregar Tarea"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Task;
