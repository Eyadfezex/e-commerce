"use client";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { color, DressCategories, sizes, styles } from "@/constants";
import { CheckboxGroup, Checkbox, Button } from "@nextui-org/react";
import Accordion from "./Accordion";
import { CheckBox as ColorCheckBox } from "@/components/colorCheckBox/CheckBox";
import { CheckBox as SizeCheckBox } from "@/components/sizeCheckBox/CheckBox";
import { Slider } from "@nextui-org/react";

export const Filter = () => {
  return (
    <div className="rounded-2xl border py-5 px-6 w-[295px] font-sans bg-white">
      <div className="flex flex-col items-center divide divide-y">
        <div className="flex justify-between items-center w-full pb-5">
          <h2 className="font-Bold text-xl">Filters</h2>
          <FaFilter className="opacity-40" width={24} height={24} />
        </div>
        <div className="py-5 w-full">
          <Accordion key="1" heading="Categories">
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
        <div className="w-full py-5">
          <Accordion key="2" heading="Price">
            <Slider
              step={30}
              minValue={0}
              showTooltip={true}
              maxValue={1000}
              size="sm"
              defaultValue={[100, 500]}
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
        <div className="w-full py-5">
          <Accordion key="3" heading="Color">
            <div className="flex flex-wrap gap-2 py-2">
              {color.map((item) => (
                <ColorCheckBox color={item.color} key={item.id} />
              ))}
            </div>
          </Accordion>
        </div>
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
        <Button className="bg-black text-white w-full rounded-full py-6 mt-2">
          Apply Filter
        </Button>
      </div>
    </div>
  );
};
