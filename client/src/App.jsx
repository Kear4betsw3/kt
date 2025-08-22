import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [mode, setMode] = useState("sarcastic");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      const reply =
        mode === "sarcastic"
          ? `Oh really? "${input}"… genius.`
          : `Okay, I hear you: "${input}" 😎`;
      setMessages((m) => [...m, { role: "bot", text: reply }]);
    }, 500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0f14",
        color: "#e6e8eb",
        fontFamily: "system-ui, sans-serif",
        padding: "40px 16px",
        maxWidth: 720,
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: 22, marginBottom: 12 }}>KeaTwin</h1>

      {/* Mode Toggle */}
      <div style={{ marginBottom: 12 }}>
        <button
          onClick={() => setMode("sarcastic")}
          style={{
            padding: "6px 12px",
            marginRight: 6,
            background: mode === "sarcastic" ? "#18202a" : "#0f141a",
            borderRadius: 8,
            border: "1px solid #202733",
            cursor: "pointer",
          }}
        >
          Sarcastic
        </button>
        <button
          onClick={() => setMode("chill")}
          style={{
            padding: "6px 12px",
            background: mode === "chill" ? "#18202a" : "#0f141a",
            borderRadius: 8,
            border: "1px solid #202733",
            cursor: "pointer",
          }}
        >
          Chill
        </button>
      </div>

      {/* Chat Window */}
      <div
        style={{
          minHeight: 300,
          border: "1px solid #1f2630",
          borderRadius: 12,
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              background: m.role === "user" ? "#18202a" : "#121a22",
              padding: 10,
              borderRadius: 12,
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
        <input
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 12,
            border: "1px solid #202733",
            background: "#0f141a",
            color: "#e6e8eb",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message…"
        />
        <button
          onClick={sendMessage}
          style={{ padding: "10px 16px", borderRadius: 12, cursor: "pointer" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
