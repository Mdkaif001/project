import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const addEvent = (e) => {
    e.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <form className="main-note">
        <input
          type="text"
          placeholder="Title"
          autoComplete="off"
          onChange={InputEvent}
          name="title"
          value={note.title}
        />
        <textarea
          rows=""
          cols=""
          placeholder="Write a note..."
          onChange={InputEvent}
          name="content"
          value={note.content}
        />
        <button onClick={addEvent}>
          <AddIcon />
        </button>
      </form>
    </>
  );
};

export default CreateNote;
