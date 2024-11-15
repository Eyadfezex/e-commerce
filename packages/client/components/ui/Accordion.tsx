import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FaAngleDown } from "react-icons/fa6";

const Accordion = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) => {
  return (
    <div>
      <MuiAccordion className="!shadow-none">
        <AccordionSummary
          className="!px-0 !min-h-0 !my-0  font-bold text-xl capitalize"
          sx={{
            "& .css-eqpfi5-MuiAccordionSummary-content": {
              margin: "0px !important",
            },
          }}
          expandIcon={<FaAngleDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {heading}
        </AccordionSummary>
        <AccordionDetails className="!px-0 !gap-2 !flex !flex-col !w-full">
          {children}
        </AccordionDetails>
      </MuiAccordion>
    </div>
  );
};

export default Accordion;
