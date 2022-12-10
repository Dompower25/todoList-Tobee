import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";
import { useState, useCallback } from "react";

const InputTodoText = ({ onInsert }) => {
  const [bodyText, setBodyText] = useState("");

  const enterDown = (e) => {
    if (e.key === "Enter") {
      onAddNote();
    }
  };

  const onAddNote = () => {
    if (bodyText.length > 0) {
      const newTodo = { id: Date.now(), text: bodyText, completed: false };
      onInsert(newTodo);
      setBodyText("");
    }
  };
  return (
    <Box>
      <ArrowForwardIosIcon
        sx={{
          position: "absolute",
          color: "#737373",
          fontSize: "35px",
          rotate: "90deg",
          margin: "15px 0 0 10px",
        }}
      />
      <input
        value={bodyText}
        onChange={(e) => setBodyText(e.target.value)}
        className="inputText"
        placeholder="What needs to be done?"
        onKeyDown={enterDown}
      />
    </Box>
  );
};

export default InputTodoText;
