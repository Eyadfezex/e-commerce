import * as React from "react";
import Box from "@mui/material/Box"; // Material UI Box component to wrap elements with custom styles
import Rating from "@mui/material/Rating"; // Material UI Rating component to display rating stars

// Defining the interface for the props of the BasicRating component
interface PROPS {
  value: number; // Rating value (out of 5)
}

/**
 * BasicRating component to display a star rating and the corresponding value.
 *
 * @param {number} value - The rating value to be displayed (out of 5).
 *
 * @returns JSX.Element - The JSX rendering the star rating and value.
 */
export default function BasicRating({ value }: PROPS) {
  return (
    <Box sx={{ display: "flex", gap: "0.5rem" }}>
      {/* Material UI Rating component to display the rating as stars */}
      <Rating name="simple-controlled" value={value} precision={0.5} readOnly />
      {/* Display the numerical rating value */}
      <p>
        {value} {/* Rating value */}
        <span className="opacity-70">/5</span>{" "}
        {/* Label indicating max rating */}
      </p>
    </Box>
  );
}
