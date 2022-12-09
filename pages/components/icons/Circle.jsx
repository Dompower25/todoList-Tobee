import { Box } from "@mui/system";
import React from "react";

const Circle = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        position: "relative",
        display: "block",
        width: "30px",
        height: "30px",
        border: "1px solid",
        borderRadius: "100px",
        color: "#dbd6d6",
      }}
    ></Box>
  );
};

export default Circle;
