import React, { useState } from "react";

const AddNote = ({ addNote }) => {
  const [note, setNote] = useState("");
  const remainingChar = 200;
  const handleAdd = () => {
    if (note.trim().length > 0) {
      addNote(note);
      setNote("");
    }
  };
  const handleNoteChange = (e) => {
    if (remainingChar - e.target.value.length >= 0) {
      setNote(e.target.value);
    }
  };
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        value={note}
        placeholder="Type to add a note..."
        onChange={handleNoteChange}
      ></textarea>
      <div className="note-footer">
        <small>{remainingChar - note.length} Remaining</small>
        <button className="save" onClick={handleAdd}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
