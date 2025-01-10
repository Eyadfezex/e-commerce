/**
 * This component renders a filter sidebar for a shopping or product list page.
 * It provides filtering options for product categories, price, color, size, and dress styles,
 * allowing users to customize their product search.
 *
 * The `Filter` component utilizes the `Accordion` for collapsible sections and
 * `CheckboxGroup` and `Checkbox` for selectable filters. Additionally, a `Slider` is used
 * for price filtering. The component also includes a button for applying selected filters.
 */

"use client";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { color, DressCategories, sizes, styles } from "@/constants";
import { CheckboxGroup, Checkbox, Button } from "@nextui-org/react";
import Accordion from "@/components/ui/Accordion";
import { ColorCheckBox, SizeCheckBox } from "@/components/ui/CheckBox";
import { Slider } from "@nextui-org/react";

/**
 * Filter Component
 * @returns {JSX.Element} - A sidebar component with filter options
 */
export const Filter = () => {
  return (
    <div className="rounded-t-2xl lg:rounded-2xl border py-5  px-6  lg:w-[300px] font-sans left-0 bg-white h-fit  lg:block">
      <div className="flex flex-col items-center divide divide-y">
        {/* Header section displaying the title "Filters" with an icon */}
        <div className="flex justify-between items-center w-full pb-5">
          <h2 className="font-Bold text-xl">Filters</h2>
          <FaFilter className="opacity-40" width={24} height={24} />
        </div>

        {/* Categories Filter */}
        <div className="py-5 w-full">
          <Accordion key="1" heading="Categories" defaultExpanded={true}>
            <CheckboxGroup>
              {DressCategories.map((item) => (
                <div
                  className="w-full flex justify-between items-center"
                  key={item.id}
                >
                  <h2 className="text-zinc-500 capitalize">{item.category}</h2>
                  <Checkbox value={item.category} className="!p-0" />
                </div>
              ))}
            </CheckboxGroup>
          </Accordion>
        </div>

        {/* Price Filter using a Slider */}
        <div className="w-full py-5">
          <Accordion key="2" heading="Price" defaultExpanded={true}>
            <Slider
              label="Range"
              step={30}
              minValue={0}
              showTooltip={true}
              maxValue={1000}
              size="sm"
              defaultValue={[100, 500]}
              formatOptions={{ style: "currency", currency: "USD" }}
              tooltipValueFormatOptions={{
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }}
              disableThumbScale={true}
              showOutline={true}
              classNames={{
                base: "max-w-md",
                filler: "bg-black",
                labelWrapper: "mb-2",
                label: "font-medium text-default-700 text-medium",
                value: "font-medium text-default-500 text-small",
                thumb: [
                  "bg-black",
                  "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                  "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
                ],
              }}
              tooltipProps={{
                placement: "bottom",
                classNames: {
                  base: ["before:bg-black"],
                  content: ["bg-black"],
                },
              }}
            />
          </Accordion>
        </div>

        {/* Color Filter */}
        <div className="w-full py-5">
          <Accordion key="3" heading="Color">
            <div className="flex flex-wrap gap-2 py-2">
              {color.map((item) => (
                <ColorCheckBox color={item.color} key={item.id} />
              ))}
            </div>
          </Accordion>
        </div>

        {/* Size Filter */}
        <div className="w-full py-5">
          <Accordion key="4" heading="Size">
            <CheckboxGroup>
              <div className="flex flex-row flex-wrap gap-1">
                {sizes.map((item) => (
                  <SizeCheckBox value={item.size} key={item.id}>
                    {item.size}
                  </SizeCheckBox>
                ))}
              </div>
            </CheckboxGroup>
          </Accordion>
        </div>

        {/* Dress Style Filter */}
        <div className="w-full py-5">
          <Accordion key="5" heading="Dress Style">
            <CheckboxGroup>
              {styles.map((item) => (
                <div
                  className="w-full flex justify-between items-center"
                  key={item.id}
                >
                  <h2 className="text-zinc-500 capitalize">{item.style}</h2>
                  <Checkbox value={item.style} className="!p-0" />
                </div>
              ))}
            </CheckboxGroup>
          </Accordion>
        </div>

        {/* Button to apply the selected filters */}
        <Button className="bg-black text-white w-full rounded-full py-6 mt-2">
          Apply Filter
        </Button>
      </div>
    </div>
  );
};
