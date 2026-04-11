```javascript
new LayoutBlock(options)
```
LayoutBlock helps to create `flexbox` and `grid` layout systems in canvas. If you're familiar with css layouts this is not gonna be odd. You need to pass a option to `layout` property for defining your layout type default `flex`.

## Options

### layout
Layout defines which layout system to use in LayoutBlock. 
Implementation based on https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox
```javascript
block.layout(option)
```

**Option**
* **type** : "flex" | "inline-flex" | "grid" | "inline-grid" | undefined
* **default**: "flex"

**Returns**
* **layout** : "flex" | "inline-flex" | "grid" | "inline-grid" | undefined
---
### justifyContent
Justify content defines how to distribute the space on LayoutBlock.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-content

```javascript
block.justifyContent(option)
```

**Option**
* **type** : "normal" | "space-evenly" | "space-around" | "space-between" | "center" | "start" | "end" | "stretch" | undefined
* **default**: "normal" 

**Returns**
* **justifyContent** : "normal" | "space-evenly" | "space-around" | "space-between" | "center" | "start" | "end" | "stretch" | undefined
---
### alignContent
Align content defines how to distribute the space on LayoutBlock.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-content

```javascript
block.alignContent(option)
```

**Option**
* **type** : "normal" | "space-evenly" | "space-around" | "space-between" | "center" | "start" | "end" | "stretch" | undefined
* **default**: "normal"

**Returns**
* **alignContent** : "normal" | "space-evenly" | "space-around" | "space-between" | "center" | "start" | "end" | "stretch" | undefined
---
### alignItems
Align content defines how to align blocks on LayoutBlock.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-content

```javascript
block.alignItems(option)
```

**Option**
* **type** : "normal" | "start" | "center" | "end" | "stretch" | undefined
* **default**: "normal"

**Returns**
* **alignItems** : "normal" | "start" | "center" | "end" | "stretch" | undefined
---
### placeContent
Place content defines both align and justify content in one property.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/place-content

```javascript
block.placeContent(option)
```

**Option**
* **type** : (AlignContent & JustifyContent) | undefined
* **default**: ["normal", "normal"]

**Returns**
* **placeContent** : (AlignContent & JustifyContent) | undefined
---
### placeItems
Place content defines both align and justify items in one property.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/place-items

```javascript
block.placeItems(option)
```

**Option**
* **type** : (AlignItems & JustifyItems) | undefined
* **default**: ["normal", "normal"]

**Returns**
* **placeItems** : (AlignItems & JustifyItems) | undefined
---
### flexDirection
Flex direction defines how to align blocks in LayoutBlock.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex-direction

```javascript
block.flexDirection(option)
```

**Option**
* **type** : "column" | "column-reverse" | "row" | "row-reverse" | undefined
* **default**: "column"

**Returns**
* **flexDirection** : "column" | "column-reverse" | "row" | "row-reverse" | undefined
---
### flexWrap
Flex wrap defines how to wrap flex layout system.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex-direction

```javascript
block.flexWrap(option)
```

**Option**
* **type** : "nowrap" | "wrap" | "wrap-reverse" | undefined
* **default**: "nowrap"

**Returns**
* **flexWrap** : "nowrap" | "wrap" | "wrap-reverse" | undefined
---
### flexFlow
Flex flow defines both flexdirection and flexwrap in one array for LayoutBlock.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex-flow

```javascript
block.flexFlow(option)
```

**Option**
* **type** : ([FlexDirecton, FlexWrap]) | undefined
* **default**: ["row", "nowrap"]

**Returns**
* **flexFlow** : ([FlexDirecton, FlexWrap]) | undefined
---
### justifyItems
Justify items defines how to align blocks in grid layout system for LayoutBlock.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-items

```javascript
block.justifyItems(option)
```

**Option**
* **type** : "normal" | "stretch" | "start" | "end" | "center" | "left" | "right" | undefined
* **default**: "normal"

**Returns**
* **justifyItems** : "normal" | "stretch" | "start" | "end" | "center" | "left" | "right" | undefined
---
### gap
Gap defines how much space to take in x or y axis for both flexbox and grid layout systems.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/gap

```javascript
block.gap(option)
```

**Option**
* **type** : number | number[] | undefined
* **default**: 0

**Returns**
* **gap** : number | number[] | undefined
---
### columnGap
Gap column defines how much space to take in y axis for both flexbox and grid layout systems.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/column-gap

```javascript
block.columnGap(option)
```

**Option**
* **type** : number | undefined
* **default**: 0

**Returns**
* **columnGap** : number | undefined
---
### rowGap
Gap row defines how much space to take in x axis for both flexbox and grid layout systems.
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/row-gap

```javascript
block.rowGap(option)
```

**Option**
* **type** : number | undefined
* **default**: 0

**Returns**
* **rowGap** : number | undefined
---
### gridAutoRows
Grid auto rows defines how much size each row will take in rows related to block size. 
Implimentatino based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-auto-rows

```javascript
block.gridAutoRows(option)
```

**Option**
* **type** : number[] | undefined
* **default**: []

**Returns**
* **gridAutoRows** : number[] | undefined
---
### gridAutoColumns
Grid auto columns defines how much size each column will take in columns related to block size. 
Implimentatino based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-auto-columns

```javascript
block.gridAutoColumns(option)
```

**Option**
* **type** : number[] | undefined
* **default**: []

**Returns**
* **gridAutoColumns** : number[] | undefined
---
### gridAutoFlow
Grid auto flow defines how each block will place in grid related to child blocks size. 
Implimentatino based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-auto-flow


```javascript
block.gridAutoFlow(option)
```

**Option**
* **type** : "row" | "column" | "dense" | "row dense" | "column dense" | undefined
* **default**: "row"

**Returns**
* **gridAutoFlow** : "row" | "column" | "dense" | "row dense" | "column dense" | undefined
---
### gridTemplateAreas
Implimentatino based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-areas

```javascript
block.gridTemplateAreas(option)
```

**Option**
* **type** : string[] | undefined
* **default**: []

**Returns**
* **gridTemplateAreas** : string[] | undefined
---
### gridTemplate
Grid template defines grid template columns, rows and areeas in one parameter.
Implimentatino based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template

```javascript
block.gridTemplate(option)
```

**Option**
* **type** : number[] | undefined
* **default**: []

**Returns**
* **gridTemplate** : number[] | undefined
---
### gridTemplateColumns
Grid template columns defines column sizes in grid layout system.
Implimentatino based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-columns

```javascript
block.gridTemplateColumns(option)
```

**Option**
* **type** : number[] | number | undefined
* **default**: []

**Returns**
* **gridTemplateColumns** : number[] | number | undefined
---
### gridTemplateRows
Grid template rows defines row sizes in grid layout system.
Implimentatino based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-rows

```javascript
block.gridTemplateRows(option)
```

**Option**
* **type** : number[] | number | undefined
* **default**: 0

**Returns**
* **gridTemplateRows** : number[] | number | undefined
---
### grid
Grid template defines gridAutoColumns, gridAutFlow, gridAutoRows, gridTemplateAreas, gridTemplateColumns, gridTemplateRows in one parameter.
Implimentatino based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid

```javascript
block.grid(option)
```

**Option**
* **type** : number[] | undefined
* **default**: []

**Returns**
* **grid** : number[] | undefined