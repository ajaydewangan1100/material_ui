import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  console.log({ selectedDate });
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  console.log({
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  });
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  console.log({ selectedDateTime });

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      {/* Date picker */}
      <DatePicker
        label="Date Picker"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
      {/* Time picker */}
      <TimePicker
        label="Time Picker"
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}
      />

      {/* Date and time picker at same */}
      <DateTimePicker
        label="Date & Time Picker"
        value={selectedDateTime}
        onChange={(newValue) => setSelectedDateTime(newValue)}
      />
    </Stack>
  );
};
