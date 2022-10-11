//React
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
//Libraries
import { marked } from "marked";
import Prism from "prismjs";
//Styling file
import "./Previewer.scss";

const Previewer = ({ markdown, className }) => {
  const previewRef = useRef();
  //Setting marked library options
  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });
  //Refresh html content when variable updates
  useEffect(() => {
    previewRef.current.innerHTML = marked.parse(markdown);
  }, [markdown]);

  return <div id="preview" ref={previewRef} className={className}></div>;
};
//Props validation
Previewer.propTypes = {
  markdown: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Previewer;
