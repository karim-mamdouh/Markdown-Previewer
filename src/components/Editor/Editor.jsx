//React
import React from "react";
import PropTypes from "prop-types";
//Styling file
import "./Editor.scss";

const Editor = ({ markdown, setMarkdown, className }) => {
  const classes = className + " editor";
  return (
    <div className={classes}>
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => {
          setMarkdown(e.target.value);
        }}
      />
    </div>
  );
};
//Props validation
Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Editor;
