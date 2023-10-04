import { Box } from "@mui/material";
import { DateRange } from "@mui/lab";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import React, { SetStateAction, useState } from "react";

export const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log(value);
  return (
    <Box width="500px">
      {/* <DateRangePicker
        startText="check-in"
        endText="check-out"
        value={value}
        onChange={(newValue: SetStateAction<DateRange<Date>>) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      /> */}
      <DateRangePicker
        localeText={{ start: "Check-in", end: "Check-out" }}
        value={value}
        onChange={(newValue: SetStateAction<DateRange<Date>>) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};
