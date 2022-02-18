import React from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
// import parse from "html-react-parser";

const EditorComponent = () => {
  const [state, setState] = useState(EditorState.createEmpty());
  const options = {
    replace: domNode => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <></>;
      }
    },
  };
  return (
    <div className="mx-4 my-2">
      <Editor
        editorState={state}
        wrapperClassName="wrapper-class"
        editorClassName="demo-editor-custom"
        toolbarClassName="toolbar-class"
        onEditorStateChange={state => {
          setState(state);
        }}
        toolbar={{
          options: ["fontFamily", "fontSize", "inline", "list", "textAlign"],
          inline: {
            className: "inline-group",
            options: ["bold", "italic", "underline", "strikethrough"],
            bold: { className: "demo-option-custom" },
            italic: { className: "demo-option-custom" },
            underline: { className: "demo-option-custom" },
            strikethrough: { className: "demo-option-custom" },
          },
          list: {
            className: "inline-group",
            unordered: { className: "demo-option-custom" },
            ordered: { className: "demo-option-custom" },
            indent: { className: "demo-option-custom" },
            outdent: { className: "demo-option-custom" },
          },
          textAlign: {
            className: "inline-group",
            left: { className: "demo-option-custom" },
            center: { className: "demo-option-custom" },
            right: { className: "demo-option-custom" },
            justify: { className: "demo-option-custom" },
          },
          fontFamily: {
            className: "demo-option-custom-wide",
          },
          fontSize: {
            className: "demo-option-custom-medium",
          },
        }}
      />
      <textarea
        disabled
        value={draftToHtml(convertToRaw(state.getCurrentContent()))}
        className="w-100"
      />
      {/* <div>
        {parse(draftToHtml(convertToRaw(state.getCurrentContent())), options)}
      </div> */}
    </div>
  );
};

export default EditorComponent;
