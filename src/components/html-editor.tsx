import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { atomoneInit } from "@uiw/codemirror-theme-atomone";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

interface EditorProps {
  endpoint: string;
}

export default function Editor(props: EditorProps) {
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    const response = await fetch(props.endpoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        html: value,
      }),
    });

    if (!response.ok) {
      const errJson = await response.json();
      toast.error(errJson.error.message);
    } else {
      toast.success("All tests passed");
    }
  };

  return (
    <>
      <div className="absolute right-10 bottom-10 z-10">
        <button
          className="py-3 px-6 rounded-md bg-sky-600"
          onClick={handleSubmit}
        >
          Test
        </button>
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
        className="h-[calc(100vh-4rem)] text-lg !font-mono"
        extensions={[html({})]}
      />
      <Toaster />
    </>
  );
}
