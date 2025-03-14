import React, { useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { createSnippet } from "../../utils/createSnippet";

const CodeSnippet = ({
  id,
  content,
  space,
  height = 400,
  animate = false,
  clicked = false,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [animateScroll, setAnimateScroll] = useState(0);
  const code = createSnippet(id, content, space);


  useEffect(() => {
    if (animate) {
      setAnimateScroll(0);
    } else {
      setAnimateScroll(height);
    }
  }, []);

  useEffect(() => {
    if (clicked && animate) {
      setAnimateScroll(height);
    }
    if (!clicked && animate) {
      setAnimateScroll(0);
    }
  }, [height, clicked]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="relative">
      <SyntaxHighlighter
        customStyle={{
          opacity: `${!clicked && animate ? 0 : 100}`,
          borderRadius: "16px",
          whiteSpace: "nowrap",
          overflowX: "auto",
          maxHeight: `${animateScroll}px`,
          scrollbarWidth: "none",
          transition: "all 0.5s ease-in-out",
        }}
        language="javascript"
        style={materialDark}
      >
        {code}
      </SyntaxHighlighter>
      <div
        onClick={handleCopy}
        className={`absolute top-4 right-2 transition-all duration-500 ${
          !clicked && animate ? "opacity-0" : "opacity-100"
        }`}
      >
        {isCopied ? (
          <span className="cursor-text">"Copied"</span>
        ) : (
          <MdOutlineContentCopy size={24} className="cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default CodeSnippet;
