import styled from "@emotion/styled";
import React from "react";

const CloseIcon = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  position: "relative",
  display: "block",
  transform: "scale(var(--ggs,1))",
  width: "22px",
  height: "22px",
  border: "2px solid transparent",
  borderRadius: "40p",

  "&::after": {
    content: "''",
    display: "block",
    boxSizing: "border-box",
    position: "absolute",
    width: "16px",
    height: "2px",
    background: "currentColor",
    transform: "rotate(45deg)",
    borderRadius: "5px",
    top: "8px",
    left: "1px",
    transform: "rotate(-45deg)",
  },
  "&:before": {
    content: "''",
    display: "block",
    boxSizing: "border-box",
    position: "absolute",
    width: "16px",
    height: "2px",
    background: "currentColor",
    transform: "rotate(45deg)",
    borderRadius: "5px",
    top: "8px",
    left: "1px",
  },
}));

const Close = () => {
  return <CloseIcon />;
};

export default Close;
