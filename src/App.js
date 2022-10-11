//React
import { useEffect, useState } from "react";
//Icons
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
//Styling file
import "./App.scss";
//Components
import Editor from "./components/Editor/Editor";
import Previewer from "./components/Previewer/Previewer";
import Wrapper from "./components/Wrapper/Wrapper";
import WrapperSmall from "./components/WrapperSmall/WrapperSmall";

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);
  const [windowWidth, setWindowWidth] = useState(getWindowDimensions());
  //Listner for window resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header>Markdown Previewer</header>
      <main>
        {windowWidth.width <= 768 && (
          <WrapperSmall markdown={markdownText} setMarkdown={setMarkdownText} />
        )}
        {windowWidth.width > 768 && (
          <>
            {/* Editor */}
            <Wrapper icon={faPen} title="Editor" className="editor">
              <Editor markdown={markdownText} setMarkdown={setMarkdownText} />
            </Wrapper>
            {/* Previewer */}
            <Wrapper icon={faEye} title="Preview" className="preview">
              <Previewer markdown={markdownText} />
            </Wrapper>
          </>
        )}
      </main>
    </>
  );
}

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;
