import React from "react";
import { NoteAppBar } from "./NoteAppBar";

export const NoteScreen = () => {
  return (
    <div className="note__main-content">
      <NoteAppBar />

      <div className="note__content">
        <input
          type="text"
          placeholder="some aweson title"
          className="note__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="what happened today?"
          className="notes__textarea"
        ></textarea>

        <div className="note__image">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};
