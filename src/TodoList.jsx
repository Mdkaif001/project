import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
/// project 1=>
// const TodoList = (props) => {
//   return (
//     <>
//       <div className="todo_style">
//       <i class="fa-solid fa-xmark"
//        onClick={()=>{
//         props.onSelect(props.id)
//        }}></i>
//         <li>{props.text}</li>
//       </div>
//     </>
//   );
// };

/// project 2=>

const TodoList = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const [line,setLine] = useState(false);
  const itemEvent = (e) => {
    setItem(e.target.value);
  };
  const onSubmit = () => {
    setNewItem((preVal) => {
      return [...preVal, item];
    });
    setItem(" ");
  };
  const cutIt=()=>{
    setLine(true);
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add an Item"
            onChange={itemEvent}
          />
          <Button style={{background : "#8566aa", borderRadius : "5px",}} className="button" onClick={onSubmit}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val) => {
              return (
                <div className="todo_style">
                  <span onClick={cutIt}>
                    <DeleteIcon  className="icon" />
                  </span>
                  <li style={{textDecoration :line? "line-through": "none"}}>{val}</li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoList;
