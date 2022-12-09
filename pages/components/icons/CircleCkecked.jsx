import styled from "@emotion/styled";
import React from "react";

const Checked = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  position: "relative",
  display: "block",
  transform: "scale(var(--ggs,1))",
  width: "30px",
  height: "30px",
  border: "1px solid",
  borderRadius: "100px",
  color: "#dbd6d6",
  "&::after": {
    content: "''",
    display: "block",
    boxSizing: "border-box",
    position: "absolute",
    left: "4px",
    top: "-4px",
    width: "10px",
    height: "18px",
    borderColor: "currentColor",
    borderWidth: "0 2px 2px 0",
    borderStyle: "solid",
    transformOrigin: "bottom left",
    transform: "rotate(45deg)",
    color: "#dbd6d6",
  },
}));

const CircleCkecked = () => {
  return <Checked />;
};

export default CircleCkecked;
