import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";

const InputTodoText = () => {
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
      <input className="inputText" placeholder="What needs to be done?" />
    </Box>
  );
};

export default InputTodoText;
