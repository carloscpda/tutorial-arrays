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
  }>({
    state: "idle",
    message: "",
  });

  const statusColorMap = {
    idle: "black",
    correct: "green",
    incorrect: "orange",
    error: "red",
  };

  const onCodeChange = (code: string) => {
    try {
      const userFunction = new Function(code + "; return myFunction;")();

      const isOk = testCases.every(({ input, output }) => {
        const testResult = userFunction(...input);
        return JSON.stringify(testResult) === JSON.stringify(output);
      });

      setFeedback(
        isOk
          ? {
              state: "correct",
              message: "✅ ¡Bien hecho! 🎉",
            }
          : {
              state: "incorrect",
              message: "❌ Wooops 🤔, algo no está bien",
            }
      );
    } catch (error) {
      setFeedback({
        state: "error",
        message: `❌ Error: ${(error as Error).message}`,
      });
    }
  };

  return (
    <div>
      <CodeMirror
        extensions={[javascript({ jsx: true })]}
        defaultValue={initialValue}
        onChange={onCodeChange}
        value={initialValue}
        style={{ border: `2px solid ${statusColorMap[feedback.state]}` }}
      />
      <div style={{ marginTop: "8px", marginBottom: "24px" }}>
        {feedback.message}
      </div>
      <details style={{ marginBottom: "64px" }}>
        <summary>💡 Ver solución</summary>
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
    </div>
  );
};

export default MonacoEditor;
