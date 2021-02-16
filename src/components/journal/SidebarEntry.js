import React from "react";
import { useSelector } from "react-redux";
import { JournaEntries } from "./JournaEntries";

export const SidebarEntry = () => {
  const { notes } = useSelector((state) => state.notes);


 
  return (
    <div className="journal__entries">
      {notes.map((note) => (
        <JournaEntries  key={note.id} {...note} />
      ))}
    </div>
  );
};
