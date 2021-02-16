import React from "react";
import momentjs from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";
export const JournaEntries = ({ id, date, title, body, url }) => {

  const dispatch = useDispatch();

  const noteDate = momentjs(date);

  const handleEntryClick = () => {
  
    dispatch(activeNote(id, { date, title, body, url }));
  };

  return (
    <div className="journal__entry pointer" onClick={() => handleEntryClick()}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-text">{body}</p>
      </div>
      <div className="journal__entry-date">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};
