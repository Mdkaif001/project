import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import MainNote from "./MainNote";

// project 1//
// function App() {
//   const [inputList, setInputList] = useState("");
//   const [item, setItem] = useState([]);

//   const itemEvent = (e) => {
//     setInputList(e.target.value);
//   };
//   const onSubmit = () => {
//     setItem((oldItem) => {
//       return [...oldItem, inputList];
//     });
//     console.log(item)
//     localStorage.setItem("oldItem",JSON.stringify(item))
//     setInputList('')

//   };
//   const deleteItem = (id)=>{
//     console.log("deleted");
//     setItem((oldItem)=>{
//        return oldItem.filter((arrEle,index)=>{
//         return index !== id;
//        })
//     })
//   }

//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <h1>ToDo List</h1>
//           <div className="input">
//             <input type="text" placeholder="Add a Item"
//             value={inputList}
//             onChange={itemEvent} />
//             <button className="btn" onClick={onSubmit}>
//               +
//             </button>
//           </div>

//           <ol>
//             {item.map((itemVal,index) => {
//               return<TodoList
//               text={itemVal}
//               key={index}
//               id={index}
//               onSelect={deleteItem}
//               />

//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// }

/// project 2=>

// const App =()=>{
//   return(
//     <>
//       <TodoList/>
//     </>
//   )
// }

/* Google keep project */

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((preData) => {
      return [...preData, note];
    });
  };
  const removeNote = (id) => {
    setAddItem((oldData) => {
      oldData.filter((currVal, indx) => {
        return indx !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((currVal, index) => {
        return (
          <MainNote
            key={index}
            id={index}
            title={currVal.title}
            content={currVal.content}
            removeNote={removeNote}
          />
        );
      })}
      <Footer />
    </>
  );
};
export default App;
