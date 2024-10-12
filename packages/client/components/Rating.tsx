import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
interface PROPS {
  value: number;
}
export default function BasicRating({ value }: PROPS) {
  return (
    <Box sx={{ display: "flex", gap: "0.5rem" }}>
      <Rating name="simple-controlled" value={value} readOnly />
      <p>
        {value}
        <span className="opacity-70">/5</span>
      </p>
    </Box>
  );
}
