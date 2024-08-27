  import React, { useRef, useState } from "react";
  import Form from "react-bootstrap/Form";
  import InputGroup from "react-bootstrap/InputGroup";
  import Button from "react-bootstrap/Button";
  
   function App() {
    const [todo, setTodo] = useState([]);
    let todoVal = useRef();
    function addTodo(e) {
      e.preventDefault();
      if (!todoVal.current.value) {
        alert("Please Enter Todo");
      } else {
        todo.push(todoVal.current.value);
        setTodo([...todo]);
      }
    }
    const deleteTodo = (index) => {
      todo.splice(index, 1);
      setTodo([...todo]);
    };
    const editTodo = (index) => {
      let editVal = prompt("Enter Update Todo Value");
      if (editVal) {
        todo[index] = editVal;
        setTodo([...todo]);
      }
    };
  
    return (
      <div className="todo-container">
        <h1 className="text-center mb-4 text-primary todo-heading" id="t">Todo App</h1>
        <div className="todo-div">
          <form className="todo-form" onSubmit={addTodo}>
            <InputGroup className="mb-3 todo-inp">
              <Form.Control
                placeholder=" Enter Your Task"
                ref={todoVal}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              <Button type="submit" variant="primary">
                Add Todo
              </Button>{" "}
            </InputGroup>
            <ul className={todo.length > 0 ? "todo-list" : "none"}>
              {todo.map((singalTodo, index) => {
                return (
                  <div className="singal-todo" key={index}>
                    <li>{singalTodo}</li>
                    <div>
                      <Button onClick={() => editTodo(index)} variant="info">
                        Edit
                      </Button>{" "}
                      <Button onClick={() => deleteTodo(index)} variant="danger">
                        Delete
                      </Button>{" "}
                    </div>
                  </div>
                );
              })}
            </ul>
          </form>
        </div>
      </div>
    );
  }


  // return (<>

  // </>
  // )


 export default App;















// import React from "react";
// import { useState } from "react";

// function App() {
// let [counter,setCounert] = useState(6)
//  // let counter = 6


//   const addValue = () =>{
//   console.log("clicked",counter)
//   counter = counter + 1
//   setCounert(counter)
//   }
//  const removeValue = () =>{
//   console.log("clicked",counter)
//   counter = counter - 1
//   setCounert(counter)
// }

//   return (<>
//   <h1>Rafay Ali</h1>
//   <h2>counter value:{counter} </h2>

//     <button
//     onClick={addValue}
//     >add value{counter}
//     </button>

//     <br />
//     <button
//     onClick={removeValue}
//     >remove value {counter}</button>

//   </>
//   )
// }

// export default App;
