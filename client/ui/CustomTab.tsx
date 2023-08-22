import React from "react";
import { Tab } from "@mui/material";

type Props = {
  [key: string]: any;
}

const CustomTab = (props: Props) => {
    const {...other } = props;
  return (
    <Tab
      sx={{
        backgroundColor: "#fffff",
        textTransform: "capitalize",
        fontSize: {xs: "0.8rem", lg: "1rem"},
        color: "#808080",
        whiteSpace: "nowrap",
        "&.Mui-selected": {
          backgroundColor: "#766df4",
          color: "white",
          textTransform: "capitalize",
          fontSize: {xs:"0.8rem", lg: "1rem"},
          border: "none",
          borderRadius: 3,

        },
        px: 5,
        py: 0.5,
        minWidth: {
          xs: "100%",
          md: "auto",
        },
      }}
      {...other}
    />
  );
};

export default CustomTab;
