//Icons
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//React
import React, { useState } from "react";
import PropTypes from "prop-types";
//Comonents
import Editor from "../Editor/Editor";
import Previewer from "../Previewer/Previewer";
//Styling file
import "./WrapperSmall.scss";

const WrapperSmall = ({ markdown, setMarkdown }) => {
  const [viewEditor, setViewEditor] = useState(true);
  return (
    <div className="wrapper-small">
      <div className="wrapper-small__container">
        {/* Header */}
        <div className="wrapper-small__head">
          {/* Editor button */}
          <button
            onClick={() => {
              setViewEditor(true);
            }}
          >
            <FontAwesomeIcon icon={faPen} /> &nbsp; Editor
          </button>
          {/* Preview button */}
          <button
            onClick={() => {
              setViewEditor(false);
            }}
          >
            <FontAwesomeIcon icon={faEye} /> &nbsp; Preview
          </button>
        </div>
        <Editor
          markdown={markdown}
          setMarkdown={setMarkdown}
          className={viewEditor ? "show" : "hide"}
        />
        <Previewer
          markdown={markdown}
          className={!viewEditor ? "show" : "hide"}
        />
      </div>
      <div></div>
    </div>
  );
};
//Props validation
WrapperSmall.propTypes = {
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
};

export default WrapperSmall;
