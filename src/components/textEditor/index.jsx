import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const TextEditor = ({ placeholder, label }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // const config = useMemo(
  //   {
  //     readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  //     placeholder: placeholder || "Start typings...",
  //   },
  //   [placeholder]
  // );

  return (
    <>
      {label && (
        <>
          <label className="block capitalize text-sm sm:text-[20px] mb-4     text-[#232321]  font-semibold ">
            {label}
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            // config={config}
            className="border-3  border-red-700"
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
        </>
      )}
    </>
  );
};
export default TextEditor;
