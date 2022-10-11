import React from "react";
import "./Editor.scss";
import Wrapper from "../Wrapper/Wrapper";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <Wrapper icon={faPen} title="Editor" className="editor">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => {
          setMarkdown(e.target.value);
        }}
      />
    </Wrapper>
  );
};

export default Editor;
