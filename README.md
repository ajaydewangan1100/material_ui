# Material UI - Code Evolution

## Typography - (variants -)

- h1 - `<Typography variant="h1">H1 Heading </Typography>`
- h2 - `<Typography variant="h2">H2 Heading </Typography>`
- h3 - `<Typography variant="h3">H3 Heading </Typography>`
- h4 - `<Typography variant="h4">H4 Heading </Typography>`
- h5 - `<Typography variant="h5">H5 Heading </Typography>`
- h6 - `<Typography variant="h6">H6 Heading </Typography>`
-

### 2 variants of h6 -

- subtitle1 - `<Typography variant="subtitle1">Sub Title 1</Typography>`
- subtitle2 - `<Typography variant="subtitle2">Sub Title 2 </Typography>`

### 2 variants for body text - body1 & body2

- `<Typography variant="body1">Lorem20...</Typography>`
- `<Typography variant="body2">Lorem25...</Typography>`

### component as props for semantics -

> we can give any component as props - (in example - all properties like h4 but it will be h1)

```
<Typography variant="h4" component="h1">
    h4 Tag but showing as h1 - because of component='h1' props
</Typography>
```

### gutterBottom - (bottom margin - it can adjust according to heading size)

```
<Typography variant="h4" component="h1" gutterBottom>
    gutterBottom - h4 as h1 - because of component='h1' props
</Typography>
```

## Button - (variants - )

- text - `<Button variant="text">Text</Button>`
- contained - `<Button variant="contained">Contained</Button>`
- outlined - `<Button variant="outlined">Outlined</Button>`

### stack (component for making gap - )

```
<Stack spacing={2} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
</Stack>
```

### Button colors - (default - 6)

> goto - *https://mui.com/material-ui/customization/palette/*

- primary - for primary interface elements.
- secondary - for secondary interface elements.
- error - for elements that the user should be made aware of.
- warning - for potentially dangerous actions or important messages.
- info - for highlighting neutral information.
- success - for indicating the successful completion of an action that the user triggered.

> example - `<Button variant="contained" color="primary">Primary</Button>`

### Button size - (3 options )

- small - `<Button variant="contained" size="small">Small</Button>`
- medium - `<Button variant="contained" size="medium">Medium</Button>`
- large - `<Button variant="contained" size="large">Large</Button>`

### MUI/icons - (install it first and import) -

> goto - `https://mui.com/material-ui/icons/`

#### Icons with button - (2 variants - startIcon & endIcon)

- startIcon - `<Button variant="contained" startIcon={<SendIcon />}>Send</Button>`
- endIcon - `<Button variant="contained" endIcon={<SendIcon />}>Send</Button>`

#### Icon without text (freely use like this - we can also give color and size props) -

> import IconButton

```
<IconButton aria-label="send" color="success" size="large">
    <SendIcon />
</IconButton>
```

_Note - aria-label is for accessibility reason_
_Can give color size according to you_

#### disabling elevation - (_disableElevation_ - shadow not show on hover - with contained variant) -

```
<Button variant="contained" endIcon={<SendIcon />} disableElevation>
    Send - disableElevation
</Button>
```

#### disabling ripple - (disableRipple - riple not show [effect on click] - with contained variant) -

```
<Button variant="contained" startIcon={<SendIcon />} disableRipple>
    Send - disbaleRipple
</Button>
```

#### onclick feature - (same as button) -

```
<Button
    variant="contained"
    color="secondary"
    onClick={() => alert("Onclick sample button")}
>
    Onclick sample button
</Button>
```

### ButtonGroup - Button related component - (put button under it and give variants to this) -

**Properties we can give -**

- variant - `variant="contained"` - text, contained, outlined
- size - `size="small"` - small, medium, large
- color - `color="secondary"`
- orientation - `orientation="vertical"`
- aria-label - `alignment button group` - (just for accessibility)

> _note_ - onclick we need to give to everybutton

```
<ButtonGroup
    variant="contained"
    size="small"
    color="secondary"
    orientation="vertical"
    aria-label="alignment button group"
>
    <Button onClick={() => alert("left Clicked")}>Left</Button>
    <Button>Center</Button>
    <Button>Right</Button>
</ButtonGroup>
```

### ToggleButton & TogglButtonGroup -

**props we can pass -**

- aria-label="text formatting"
- value={formats}
- onChange= (event listener and handler)
- size="small"
- color="secondary"
- orientation="row"

```
<ToggleButtonGroup
    aria-label="text formatting"
    value={formats}
    onChange={handleFormatChange}
    size="small"
    color="secondary"
    orientation="vertical"
>
    <ToggleButton value="bold" aria-label="bold">
    <FormatBoldIcon />
    </ToggleButton>
    <ToggleButton value="italic" aria-label="italic">
    <FormatItalicIcon />
    </ToggleButton>
    <ToggleButton value="underlined" aria-label="underlined">
    <FormatUnderlinedIcon />
    </ToggleButton>
</ToggleButtonGroup>
```

> _note_ - created state (formats) and method (handleFormatChange) and used

> **exclusive** - if we want only one element selectable at a time
> _but for exclusive we need to chnage state type as - string | null_

### text field - video - 7

**Properties we can give -**

- variant - (outlined/filled/standard)
- label - (labelled text)
- size - (small/medium/large)
- color - (can give default themes)
- required - (for required input field)
- helperText - (show texts below input field like - do not share password)
- type - (we can make password type it show star inplace of text)
- disabled - (dsabled input field)

> go to - [MuiTextField.tsx - for all things](src/components/MuiTextField.tsx)

### Select - video 8

> **Box** - _same as div tag - we can give width and height just added for good looking_

- **2 methods to use select** - via textField and direct select component given by mui

**Properties we can give -**

- label
- select - (making it select dropdown)
- fullwidth - (full width according to parent)
- SelectProps - (similar to InputProps) (give multiple true to selct multiple)
  `SelectProps = {{multiple: true}}`
- size="small"
- color="secondary"
- helperText="Select your country"
- error

```
<TextField
    label="Select Countries"
    select
    value={countries}
    onChange={handleMultipleChange}
    fullWidth
    SelectProps={{
    multiple: true,
    }}
    size="small"
    color="secondary"
    helperText="Select your country"
    error
>
    <MenuItem value="IN">India</MenuItem>
    <MenuItem value="US">USA</MenuItem>
    <MenuItem value="Au">Australia</MenuItem>
</TextField>
```

-
-

-
-
-
-
-
-
-
-
-

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
