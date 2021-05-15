import React from "react";

export const LearningOptions = (props) => {
  const options = [
    {
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Data visualization", handler: () => {}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="btn btn-outline-primary p-1  m-1"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (
    <div
      className="d-flex  align-items-start flex-wrap container-sm"
      style={{ maxWidth: "100px" }}
    >
      {optionsMarkup}
    </div>
  );
};
