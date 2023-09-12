import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      {/* Typography variats */}
      <Typography variant="h1">H1 Heading </Typography>
      <Typography variant="h2">H2 Heading </Typography>
      <Typography variant="h3">H3 Heading </Typography>
      <Typography variant="h4">H4 Heading </Typography>
      <Typography variant="h5">H5 Heading </Typography>
      <Typography variant="h6">H6 Heading </Typography>

      {/*  2 variants of h6 */}
      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2 </Typography>

      {/* 2 variants for body text - can use for paragraph texts */}
      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
        dolor?
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam
        debitis amet tempore? At laudantium totam officiis obcaecati quidem
        laboriosam.
      </Typography>

      {/* can give component as props for semantics - all properties like h4 but it will be h1 */}
      <Typography variant="h4" component="h1">
        h4 Tag but showing as h1 - because of component='h1' props
      </Typography>

      {/* gutterBottom - use for bottom margin under heading with components props */}
      <Typography variant="h4" component="h1" gutterBottom>
        gutterBottom - h4 as h1 - because of component='h1' props
      </Typography>
    </div>
  );
};
