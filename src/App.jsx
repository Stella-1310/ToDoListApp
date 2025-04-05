import { useState } from 'react'

function App() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [mode, setMode] = useState(0);

  const addItem = () => {
    console.log(task)
    setTaskList([...taskList, task])
    setMode(0);
    setTask("");
    console.log(taskList)

  }

  const handleGetTask = (e) => {
    setTask(e.target.value);
    console.log("Someone clicked lol ")
  }

  const deleteItem = (idx) => {
    const updated = [];
    for (let i = 0; i < taskList.length; i++) {
      if (i == idx)
        continue;
      else
        updated.push(taskList[i]);
    }
    console.log(updated);
    setTaskList(updated);
  }

  const editItem = (idx) => {
    setMode(1);
    const toEdit = taskList[idx];
    setTask(toEdit)
    deleteItem(idx);
    console.log("ready to edit!!")

  }

  return (
    <div className="app">
      <div className="box">
        <h3>Todo List</h3>

        <div className="header">
          <input type='text' placeholder='Enter your task' onChange={handleGetTask} value={task} className='input-field'/>
          <button onClick={addItem} className='add-button'>{mode === 0 ? "Add" : "Update"}</button>
        </div>

        <div className="body">
          {
            taskList.map((t, index) => {
              return (
                <div className="label" key={index}>
                  <div className="task">{t}</div>
                  <div className='button-grp'>
                    <button onClick={() => editItem(index)} disabled={mode} className='edit-button'>Edit</button>
                    <button onClick={() => deleteItem(index)} disabled={mode} className='delete-button'>Delete</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
