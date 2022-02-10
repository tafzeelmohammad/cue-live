import React from "react";
import { format } from 'date-fns';

export const isNotNullAndUndefined = (variable) => {
    if (typeof variable !== 'undefined' && variable !== null) {
      return true;
    }
    return false;
}

export const datePipe = (date) => {
  return format(date, 'dd MMM yyyy hh:mm a');
}

export const nameCombined = (nameList) => {
  console.log(nameList);
}