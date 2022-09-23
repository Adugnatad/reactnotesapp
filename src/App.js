import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import * as FA from "react-icons/fa";
import { HiMoon } from "react-icons/hi";

const App = () => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "thru dat",
      date: "09/27/09",
    },
    {
      id: nanoid(),
      text: "My second note",
      date: "10/27/09",
    },
    {
      id: nanoid(),
      text: "My third note",
      date: "11/27/09",
    },
    {
      id: nanoid(),
      text: "My fourth note",
      date: "12/27/09",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    setNotes([
      ...notes,
      { id: nanoid(), text: text, date: date.toLocaleDateString() },
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    console.log("SavedNotes");
    console.log(savedNotes);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <div className="header">
          <h1> Notes </h1>
          <HiMoon
            className="icon"
            onClick={() => {
              setDarkMode((previousMode) => !previousMode);
            }}
          />
        </div>

        <div className="search-bar">
          <button className="searchBtn">
            <FA.FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={handleSearch}
          />
        </div>
        <NotesList
          notes={notes.filter((note) =>
            note.text.toUpperCase().includes(search.toUpperCase())
          )}
          addNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
