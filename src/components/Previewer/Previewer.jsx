import { faEye } from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";
import React, { useEffect, useRef } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Previewer.scss";
import Prism from "prismjs";

const Previewer = ({ markdown }) => {
  const previewRef = useRef();
  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });
  useEffect(() => {
    previewRef.current.innerHTML = marked.parse(markdown);
  }, [markdown]);

  return (
    <Wrapper icon={faEye} title="Preview" className="preview">
      <div id="preview" ref={previewRef}></div>
    </Wrapper>
  );
};

export default Previewer;
