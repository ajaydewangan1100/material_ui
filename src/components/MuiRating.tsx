import { Stack, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  // for noraml icon
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      {/* simple with star */}
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        highlightSelectedOnly
      />

      <Stack spacing={2}>
        {/* icon changed */}
        <Rating
          precision={0.5}
          size="large"
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        {/* icon change and default value */}
        <Typography variant="subtitle1" color="error">
          Readonly
        </Typography>
        <Rating
          value={value}
          precision={0.5}
          size="large"
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          icon={<FavoriteIcon fontSize="inherit" color="success" />}
          readOnly
        />
      </Stack>
    </Stack>
  );
};
