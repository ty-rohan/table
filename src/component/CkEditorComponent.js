import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

// import { BalloonEditor } from "@ckeditor/ckeditor5-editor-balloon";
// import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";

console.log(DecoupledEditor.builtinPlugins.map(plugin => plugin.pluginName));

const CkEditorComponent = () => {
  const [state, setState] = useState();

  return (
    <div>
      {/* <div className="editor"></div> */}
      <div className="document-editor__toolbar"></div>
      <CKEditor
        editor={DecoupledEditor}
        data={state}
        onReady={editor => {
          window.editor = editor;

          // Add these two lines to properly position the toolbar
          const toolbarContainer = document.querySelector(
            ".document-editor__toolbar"
          );
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          editor.ui
            .getEditableElement()
            .parentElement.append(editor.ui.view.toolbar.element);
        }}
        config={{
          plugins: [
            "Essentials",
            "Alignment",
            "FontSize",
            "FontFamily",
            "FontColor",
            "FontBackgroundColor",
            "Bold",
            "Italic",
            "Strikethrough",
            "Underline",
            "BlockQuote",
            "Heading",
          ],
        }}
        onChange={(event, editor) => console.log(event, editor.getData())}
      />
      <div>{state}</div>
    </div>
  );
};

export default CkEditorComponent;
