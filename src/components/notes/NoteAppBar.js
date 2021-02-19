import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { SaveNote, startAsyncUploading } from "../../actions/notes";
import moment from "moment";
export const NoteAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
   
    dispatch(SaveNote(active));
  };

  const handlePicture = () => {
    document.getElementById("fileSelector").click();
  };
  const handleChangeInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startAsyncUploading(file));
    }
  };

  const date = moment(new Date().getTime());
  return (
    <div className="notes__appbar">
      <span>{date.format("MMMM Do YYYY")}</span>
      <input
        type="file"
        style={{ display: "none" }}
        id="fileSelector"
        onChange={handleChangeInput}
      />
      <div>
        <button className="btn" onClick={handlePicture}>
          picture
        </button>
        <button className="btn" onClick={handleSave}>
          save
        </button>
      </div>
    </div>
  );
};
