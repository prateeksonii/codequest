import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { atomoneInit } from "@uiw/codemirror-theme-atomone";
import { useState } from "react";

export default function () {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="h-12 flex items-center justify-end">
        <span className="py-2 px-4 rounded-md bg-emerald-600">Test</span>
      </div>
      <ReactCodeMirror
        placeholder="Type/Paste your html here"
        value={value}
        theme={atomoneInit({
          settings: {
            fontFamily: "Hack",
          },
        })}
        onChange={(val) => setValue(val)}
        height="100%"
        className="h-[calc(100vh-7rem)] text-lg !font-mono"
        extensions={[html({})]}
      />
    </>
  );
}
