import React from "react";
import CurrentDate from "../components/Current-Date";
import { CurrentYear } from "../components/Year";
import { stockData } from "./solstice-equinox";

let stockYear = stockData.find((year) => {
    return year.year === CurrentYear;
})
const fall = stockYear.fall;
const winter = stockYear.winter;

console.log(fall);

export const isFall = Date(CurrentDate) >= Date(fall) && Date(CurrentDate) < Date(winter)
       


