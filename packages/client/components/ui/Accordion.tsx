/**
 * Accordion Component
 *
 * This component wraps around Material-UI's Accordion component to create a styled collapsible section with a summary (heading) and detailed content.
 * The accordion can be optionally expanded by default.
 * It uses a customized Material-UI accordion with styling adjustments for flexibility in various UI contexts.
 */

import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FaAngleDown } from "react-icons/fa6";

/**
 * Accordion Component
 * @param {React.ReactNode} children - The content to display inside the accordion when expanded.
 * @param {string} heading - The heading or summary text displayed in the closed state of the accordion.
 * @param {boolean} [defaultExpanded=false] - Indicates whether the accordion is expanded by default.
 * @returns {JSX.Element} - A styled accordion component with a collapsible section.
 */
const Accordion = ({
  children,
  heading,
  defaultExpanded = false,
}: {
  children: React.ReactNode;
  heading: string;
  defaultExpanded?: boolean;
}) => {
  return (
    <div>
      {/* Custom-styled Material-UI Accordion */}
      <MuiAccordion className="!shadow-none" defaultExpanded={defaultExpanded}>
        <AccordionSummary
          className="!px-0 !min-h-0 !my-0 font-bold text-xl capitalize"
          sx={{
            // Override specific Material-UI styles
            "& .css-eqpfi5-MuiAccordionSummary-content": {
              margin: "0px !important",
            },
          }}
          expandIcon={<FaAngleDown />} // Custom icon for expanding/collapsing
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {heading}
        </AccordionSummary>

        {/* Content displayed when the accordion is expanded */}
        <AccordionDetails className="!px-0 !gap-2 !flex !flex-col !w-full">
          {children}
        </AccordionDetails>
      </MuiAccordion>
    </div>
  );
};

export default Accordion;
