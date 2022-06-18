import React,{useEffect} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function TextEditor() {
    useEffect(() => {
        new Quill("#editor", {theme: "snow"});
    }, []); 
  return (
    <div>
          <h1>Text Editor</h1>
          <div className="editor">
              <div className="ql-editor" />
          </div>
              
    </div>
  );
}
export default TextEditor;
