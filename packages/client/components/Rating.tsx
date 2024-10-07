import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <Box sx={{ display: "flex", gap: "0.5rem" }}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <p>
        {value}
        <span className="opacity-70">/5</span>
      </p>
    </Box>
  );
}
