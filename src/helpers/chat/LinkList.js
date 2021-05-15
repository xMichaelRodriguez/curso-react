import React from "react";

export const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item mb-2 shadow-sm">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="list-group-item"
      >
        {link.text}
      </a>
    </li>
  ));
  return <ul className="list-group mb-5">{linkMarkup}</ul>;
};
