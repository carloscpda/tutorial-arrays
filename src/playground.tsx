import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";

const MonacoEditor = ({
  initialValue,
  testCases,
  solution,
}: {
  initialValue: string;
  testCases: { input: unknown[]; output: unknown }[];
  solution: string;
}) => {
  const [feedback, setFeedback] = useState<{
    state: "idle" | "correct" | "incorrect" | "error";
    message: string;
    result: string;
  }>({
    state: "idle",
    message: "",
    result: "-",
  });

  const statusColorMap = {
    idle: "black",
    correct: "green",
    incorrect: "black",
    error: "black",
  };

  const onCodeChange = (code: string) => {
    try {
      const userFunction = new Function(code + "; return myFunction;")();

      const result = userFunction();

      const isOk = testCases.every(({ input, output }) => {
        const testResult = userFunction(...input);

        return JSON.stringify(testResult) === JSON.stringify(output);
      });

      setFeedback(
        isOk
          ? {
              state: "correct",
              message: "✅ ¡Bien hecho! 🎉",
              result: JSON.stringify(result),
            }
          : {
              state: "incorrect",
              message: "❌ Wooops 🤔, algo no está bien",
              result: JSON.stringify(result),
            }
      );
    } catch (error) {
      setFeedback({
        state: "error",
        message: "❌ Wooops 🤔, algo no está bien",
        result: `Error: ${(error as Error).message}`,
      });
    }
  };

  return (
    <div style={{ marginBottom: "64px" }}>
      <CodeMirror
        extensions={[javascript({ jsx: true })]}
        defaultValue={initialValue}
        onChange={onCodeChange}
        value={initialValue}
        style={{ border: `1px solid black` }}
      />
      <div style={{ marginTop: "16px" }}>
        <h4>Output</h4>
        <pre
          style={{
            border: `1px solid black`,
            marginTop: "2px",
            padding: "4px 8px",
            backgroundColor: feedback.state === "correct" ? "#def2da" : "#fff",
            borderColor: statusColorMap[feedback.state],
          }}
        >
          {feedback.result}
        </pre>
      </div>
      {/* <div style={{ marginTop: "16px" }} className="solution">
        <h4>Solución</h4>
        <details>
          <summary>Ver solución</summary>
          <pre
            style={{
              padding: "8px",
              margin: "8px 0",
              backgroundColor: "#fefefe",
              border: "1px solid #eee",
            }}
          >
            {solution}
          </pre>
        </details>
      </div> */}
    </div>
  );
};

export default MonacoEditor;
