# Material UI - Code Evolution

## Typography - (variants -) - v3

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

## Button - (variants - ) - v4

> [goto - src/components/MuiButtons.tsx](src/components/MuiButtons.tsx)

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

### ButtonGroup - Button related component - (put button under it and give variants to this) - v5

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

### ToggleButton & TogglButtonGroup - v6

**props we can pass -**

- aria-label="text formatting"
- value={formats}
- onChange= (event listener and handler)
- size="small"
- color="secondary"
- orientation="vertical | horizontal"

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

## text field - v7

> [goto - src/components/MuiTextField.tsx](src/components/MuiTextField.tsx)

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

## Select - video 8

> [goto - src/components/MuiSelect.tsx](src/components/MuiSelect.tsx)

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

## Radio Button - video 9

> [goto - src/components/MuiRadioButton.tsx](src/components/MuiRadioButton.tsx)

**things we need to use**

- FormControl - (Eery thing wrapes under it) - (props) ->

  1. error

- FormLabel - (label of form) - (props ) ->

  1.  id="Labeled" - (can use it as label)

- FormControlLabel - (Label of radio to control) - (props) ->

  1.  control={<Radio size="small" color="secondary" />}
  2.  label="0-2"
  3.  value="0-2"

- RadioGroup - (All option under it) - (props) ->

  1.  name="job-experience-group"
  2.  aria-labelledby="job-experience-group-label"
  3.  value={value}
  4.  onChange={handleChange}
  5.  row

- Radio - (give as props - so it will behave as radio) - (usage) ->

```
<FormControlLabel
    control={<Radio color="primary" />}
    label="6-10"
    value="6-10"
/>
```

- FormHelperText - (Same as helperText, but use as element ) ->

```
<FormHelperText>Invalid selection</FormHelperText>
```

## checkbox - video 10

> [goto - src/components/MuiCheckbox.tsx](src/components/MuiCheckbox.tsx)

**things we need to use**

- FormControlLabel - (wrap the things under it) - (props) ->

  1. label
  2. control - `control={<Checkbox checked={acceptTnC} onChange={handleChange} />}`

- Checkbox - (same as checkbox) - (props) ->

  1. FormControlLabel,
  2. Checkbox - (use same as checkbox)
  3. FormControl - (use when multiple checkbox)
  4. FormLabel - (label for checkbox)
  5. FormGroup - (group all checkbox)
  6. FormHelperText - (same as helper text)

```
<FormControlLabel
    label="I accept terms and conditions"
    control={
    <Checkbox
        checked={acceptTnC}
        onChange={handleChange}
        size="small"
        color="secondary"
        required
    />
    }
/>
```

## Swtich - video 11

> [goto - src/components/MuiSwitch.tsx](src/components/MuiSwitch.tsx)

```
<FormControlLabel
    label="dark mode"
    control={<Switch checked={checked} onChange={handleChange} size="small" color="success" />}
/>
```

## Rating - video 12 -

> [goto - src/components/MuiRating.tsx](src/components/MuiRating.tsx)

**props we can give**

- precision={0.5} (devided value)
- size="large | medium | small"
- highlightSelectedOnly - (hightlight only one)
- readonly (not clickable)
- emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} - (can use different icon)
- icon={<FavoriteIcon fontSize="inherit" color="error" />} - (can use different icon)

```
<Rating
    value={value}
    onChange={handleChange}
    precision={0.5}
    size="large"
    highlightSelectedOnly
    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
    icon={<FavoriteIcon fontSize="inherit" color="error" />}
/>
```

## Autocmplete - video 13

> [goto - src/components/MuiAutocomplete.tsx](src/components/MuiAutocomplete.tsx)

- options={skills} - (array of options)
- renderInput={(params) => <TextField {...params} label="skills" />} - (textfield rendering)
- value={value} - (useState variable value)
- onChange={(event: any, newValue: string | null) => setValue(newValue)} - (handlechange)
- freeSolo - (boolean - for entering new option)

```
<Autocomplete
    options={skills}
    renderInput={(params) => <TextField {...params} label="skills" />}
    value={value}
    onChange={(event: any, newValue: string | null) => setValue(newValue)}
    freeSolo
/>
```

## Layout Comp -

### Box (Layout Comp) - video 14

- > [goto - src/components/MuiLayout.tsx](src/components/MuiLayout.tsx)

**props we can give-**

1. component="span" - (can give any component, box will become that component)
2. sx - (it is an object, where we can give all css properties)

```
<Box
    sx={{
    backgroundColor: "primary.main",
    color: "white",
    width: "200px",
    height: "150px",
    padding: "14px",
    "&:hover": {
        backgroundColor: "primary.light",
    },
    }}
>
    Mui Layout component - Box
</Box>
```

_We can use system properties with - Box (means we can use alot of css properties as a props directly)_
_can also use shorthand for that css properties(shorthand is given by materialUI)_

```
<Box
    display="flex"
    height="150px"
    width="150px"
    bgcolor="success.light"
    m="50px"
    color="error.dark"
>
css directly used - Box
</Box>
```

### Use full propeties table for box -

- > [goto - web - propeties table](https://mui.com/system/properties/#properties-reference-table)
- > [goto - border](https://mui.com/system/borders/)
- > [goto - display](https://mui.com/system/display/)
- > [goto - flexbox](https://mui.com/system/flexbox/)
- > [goto - sizing](https://mui.com/system/sizing/)

_can find all things under same place_

### Stack (Layout Comp) - video 15 -

_Stack is used to manage layout in one dimension - vertical or horizontal - (default - collumn)_

**props we can use-**

- sx={{ border: "1px solid", width: "80%" }} - (sx - common css things)
- direction="row-reverse" - (direction of flex)
- spacing={2} - (spacing between childs)
- divider - (Divider component)

**Divider props-**

- orientation="vertical" - (for defining which side)
- flexItem - (booleean - telling that divider is flexitem)

```
<Stack
    sx={{ border: "1px solid", width: "80%" }}
    direction="row-reverse"
    spacing={2}
    divider={<Divider orientation="vertical" flexItem />}
>
<Box>Box1</Box>
<Box>Box2</Box>
</Stack>
```

### Grid - (Layout Comp) - video 16 -

_usefull when creating 2-dimensional responsive layout_

#### 2 variations -

1. Grid container - for parent - (container devides into 12 collumns based on that we can give width according to screen) (props ) -

   - container - (behave as a container)
   - spacing={2} - (multiple of 8px)
   - rowSpacing-{4} - (multiple of 8px)
   - columnSpacing-{3} - (multiple of 8px)

2. grid item - for children - (props) -
   - item - (behave as a item)
   - xs | sm | md | lg | xl = "auto" | {1-12} (give any value according to screen size ) (screen sizes)

```
<Grid container my={4} p={1} rowSpacing={3} columnSpacing={4}>
    <Grid item xs="auto" md={6}>
        <Box bgcolor="primary.light" p={2}>
        Item 1
        </Box>
    </Grid>
    <Grid item xs={12} md={4}>
        <Box bgcolor="primary.light" p={2}>
        Item 2
        </Box>
    </Grid>
    <Grid item xs={12} md={4}>
        <Box bgcolor="primary.light" p={2}>
        Item 3
        </Box>
    </Grid>
    <Grid item xs={12} md={6}>
        <Box bgcolor="primary.light" p={2}>
        Item 4
        </Box>
    </Grid>
    </Grid>
```

### Paper - (surface layout related component) - video 17 -

**Props we can use -**

- sx - (for css)
- elevation - (for shadow )

```
<Paper sx={{ padding: "32px", margin: "25px" }} elevation={16}>
    <Stack>Things between</Stack>
    <Box>Things between</Box>
</Paper>
```

### Cards - (For making card) - video - 18 -

> [goto - src/components/MuiCards.tsx](src/components/MuiCards.tsx)

**Components we can need to use-**

- Card,
- CardContent,
- Typography,
- CardActions,
- Button,
- CardMedia

```
<Box width="300px" sx={{ padding: "20px" }}>
    <Card>
    <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="Unsplash image"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        React
        </Typography>
        <Typography variant="body2" color="text.secondary">
        React lets you build user interfaces out of individual pieces called
        components. Create your own React components like Thumbnail,
        LikeButton, and Video. Then combine them into entire screens, pages,
        and apps.
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn more</Button>
    </CardActions>
    </Card>
</Box>
```

### Accordian - (for show and hide sections of page & can contain any content) - video 19

> [goto - src/components/MuiAccordian.tsx](src/components/MuiAccordian.tsx)

> **Components we need in Accordion-**

1. Accordion - (for grouping) - (props-)

   - expanded={expanded === "panel1"}
   - onChange

2. AccordionDetails - (accorddion details of topic)
3. AccordionSummary - (Summary of topic) - (props) -

   - id="panel1-header" - (for targetting)
   - aria-controls="panel1-content" - (for controls)
   - expandIcon={<ExpandMoreIcon />} - (icon we can give)

```
<Accordion
    expanded={expanded === "panel1"}
    onChange={(_event, isExapnded) => handleChange(isExapnded, "panel1")}
    >
    <AccordionSummary
        id="panel1-header"
        aria-controls="panel1-content"
        expandIcon={<ExpandMoreIcon />}
    >
        <Typography>Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        voluptates dolores eius expedita omnis inventore officia nulla quae
        repudiandae temporibus.
        </Typography>
    </AccordionDetails>
</Accordion>
```

### Imagelist - video 20 -

> [goto - src/components/MuiImageList.tsx](src/components/MuiImageList.tsx)

**Used to display collection of images in an organized grid**

**Variants** - normal, woven, masonry

_Components_ -

1. ImageList - (Wrap all images) - (props)

   - variant - "normal, woven, masonry" - (for give variant)
   - sx - (css)
   - cols - (collumn sount)
   - gap - (gap between items) - (in woven and masonry variant)
   - rowHeight - (in normal variant)

2. ImageListItem - (Listing elements wrapper) - (wrap `<img />` under it) - (props)

   - onClickCapture={() => alert(item.title)} - (can give method on click)

3. ImageListItemBar - (Bar to show something) - (props)
   - title - (if we want to show)
   - subtitle - (subtitle of title)
   - position - (top | bottom | below )
   - onClickCapture={() => alert(item.title)} - (can give method on click)
   - sx - (css)

## NavBar - (Navigation bar) - video 21

> [goto - src/components/MuiNavBar.tsx](src/components/MuiNavBar.tsx)

_Components and props to use-_

1. AppBar - (container in which position can apply) - (props)
   - position - static
2. Toolbar - (Second container )
3. IconButton - (for logo or icon) - (props)
   - size - (size)
   - edge="start | end" - (for icon place)
   - color="inherit" - (color for icon)
   - aria-label - (for seect or target)

```
<AppBar position="static">
    <Toolbar>
    <IconButton size="large" edge="start" color="inherit" aria-label="logo">
        <CatchingPokemonIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        POKEMONAPP
    </Typography>
    <Stack direction="row" spacing={2}>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Pricing</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Login</Button>
    </Stack>
    </Toolbar>
</AppBar>
```

## Menu - video 22 -

- > [goto - src/components/MuiNavBar.tsx](src/components/MuiNavBar.tsx)

_Components we need -_

1. Menu - (Container of menuitems) - (props)
   - id - (for target)
   - anchorEl - (Pass the Element we are targetting)
   - open - (state as true and false)
   - MenuListProps - (give button name which is targeting this menu)
   - onClose - (function on close)
   - anchorOrigin - (Menu origin)
   - transformOrigin - (set origin for popuped box)

> [Docs to read about position of menuitem](https://mui.com/material-ui/react-popover/)

2. MenuItem - (Menu items) - (props)
   - onClick - (pass function for any action like - close)

## Link - (To easily customize anchor tag with theme colors and typography styles) - video 23 -

> [goto - src/components/MuiLink.tsx](src/components/MuiLink.tsx)

**Props we can pass -**

    - href - (url)
    - variant - (same as typography variant)
    - color - (can use default colors)
    - underline - "none | hover | always" - (unserline applied)
    - (we can also use it under typography and can give variant to typography)

```
<Link href="#" varint="h5" color="secondary" underline="hover">
    Link - Secondary
</Link>
```

### Breadcrumbs - (Link) - (Type of secondary navigation scheme that reveals the users location in a website) - video - 24

> [goto - src/components/MuiBreadcrumbs.tsx](src/components/MuiBreadcrumbs.tsx)

**Props we can use -**

    - aria-label - (for target)
    - separator - (optional - default - "/") - (can give symbol to separate) - (we can also give icon)
    - maxItems - (number that tells how much breadcrumbs it will show)
    - itemsAfterCollapse - (after collapse how much we want to show)
    - itemsBeforeCollapse - (before collapse how much we want to show)

```
<Breadcrumbs
    aria-label="breadcrumbs"
    separator="-"
    maxItems={2}
    itemsBeforeCollapse={2}
>
    <Link href="#" underline="hover">
        Home
    </Link>
    <Link href="#" underline="hover">
        Catalog
    </Link>
    <Link href="#" underline="hover">
        Accessories
    </Link>
    <Typography color="text.primary">Shoes</Typography>
</Breadcrumbs>
```

## Drawer - (used to create sidebar, can contain links to other pages, switch accounts etc ) - video 25 -

> [goto - src/components/MuiDrawer.tsx](src/components/MuiDrawer.tsx)

**Components we need to use -**

1. Drawer - (all drawer things wrapper) - (props)

   - anchor - "left | right | top | bottom" - (position of drawer)
   - open - (boolean state for open close)
   - onClose - (function on close)

2. IconButton - (for icon to click)

   - size="large" - (size of icon)
   - edge="start" - ()
   - color="inherit"
   - aria-label="logo"
   - onClick - (function run when click on icon)

3. MenuItem - (icon used under IconButton) - (props - can give props which used in props)

```
<Drawer
    anchor="left"
    open={isDrawerOpen}
    onClose={() => setIsDrawerOpen(false)}
>
    <Box p={2} width="250px" textAlign="center" role="presentation">
        <Typography variant="h6" component="div">
        Side Panel
        </Typography>
    </Box>
</Drawer>
```

## Speed Dial - (for mobile and tablet - ) - video 26 -

> [goto - src/components/MuiSpeedDial.tsx](src/components/MuiSpeedDial.tsx)

**Components to use -**

1. SpeedDial - (container) - (props)

   - ariaLabel - (for accessibility)
   - sx - (css properties)
   - icon - (icon for showing under Speed Dial)

2. SpeedDialAction - (ction to show on when open) - (props)

   - icon - (icon of actions)
   - tooltipTitle - (title to show on hover)
   - tooltipOpen - (boolean for tooltip on hover)

3. SpeedDialIcon - (pass as icon) - (porps)
   - openIcon - (icon to show when open speed dial)

```
<SpeedDial
    ariaLabel="Navigation Speed dial"
    sx={{ position: "absolute", bottom: 16, right: 16 }}
    icon={<SpeedDialIcon openIcon={<EditIcon />} />}
>
<SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" tooltipOpen />
    <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Print"
        tooltipOpen
    />
    <SpeedDialAction
        icon={<ShareIcon />}
        tooltipTitle="Share"
        tooltipOpen
    />
</SpeedDial>
```

## Bottom Navigation - (used to switch between primary destination on an application - for mobile and tablet) - video 27 -

> [goto - src/components/MuiBottomNavigation.tsx](src/components/MuiBottomNavigation.tsx)

**Components we need -**

1. BottomNavigation - (Container of actions) - (props)

   - sx - (css)
   - value - (state value for get)
   - onChange - (function for control)
   - showLabels - (boolean - for show text lables of action)

2. BottomNavigationAction - (for action) - (props)
   - label - (for label text)
   - icon - (icon for action)

```
<BottomNavigation
    sx={{ width: "100%", position: "absolute", bottom: 0 }}
    value={value}
    onChange={(event, newValue) => {
        setValue(newValue);
    }}
    showLabels
>
    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
</BottomNavigation>
```

## Data Display components -

### Avatar - video 28 -

> [goto - src/components/MuiAvatar.tsx](src/components/MuiAvatar.tsx)

**Components we need to use -**

1. Avatar - (for avatar) - (props) -

   - sx - (for css)
   - variant - "circular | rounded | square" - (shape)
   - src - (if we want to fetch by link)
   - alt - (alternate text)

2. AvatarGroup - (for grouping avatar) - (props) -
   - max - (maximum number to show)

```
<AvatarGroup max={4}>
    <Avatar
        src="https://randomuser.me/api/portraits/women/79.jpg"
        alt="John Doe"
    />
    <Avatar
        src="https://randomuser.me/api/portraits/men/51.jpg"
        alt="John Doe"
    />
    <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
    <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
    <Avatar sx={{ bgcolor: "info.light" }}>AD</Avatar>
</AvatarGroup>
```

### Badge - (Generates small badge to the top right of child component ) - video 29 -

> [label](src/components/MuiBadge.tsx)

**Component we need -**

1. Badge - (component for Badge & wrapper for icon if any) - (props)
   - badgeContent - (number which is showing, eg -> studentList.length)
   - color - (color of showed number)
   - max - (when number is bigger than max it will show with "+")
   - showZero - (boolean - when zero it will show)
   - invisible - (boolean - to show or hide)

```
<Badge badgeContent={100} color="secondary" showZero max={999}>
    <MailIcon />
</Badge>
```

### List - (Display data as a list) - video 30 -

> [label](src/components/MuiList.tsx)

**Components we need -**

1. List - (whole container)

2. ListItem - (list Items under it) - (props) -

   - disablePadding - (boolean - use for alignment)

3. ListItemText - (text which shows) - (props) -

   - primary - (main text of list item)
   - secondary - (secondary text of list item)

4. ListItemIcon - (if icon cover under it)

5. ListItemAvatar - (if want icon as avatar wrap under it)

6. Avatar - (wrap it under - ListItemAvatar)

7. ListItemButton - (if we want list item as button cover under it)

8. Divider - (divider for list items)

```
<ListItem disablePadding>
    <ListItemButton>
    <ListItemIcon>
        <ListItemAvatar>
        <Avatar>
            <MailIcon />
        </Avatar>
        </ListItemAvatar>
    </ListItemIcon>
    <ListItemText primary="List item 4 - with Avatar" />
    </ListItemButton>
</ListItem>
<Divider />
```


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

```

```
