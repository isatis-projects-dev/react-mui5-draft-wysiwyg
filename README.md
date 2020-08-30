# react-mui-draft-wysiwyg

> React component that allows to use a rich editor based on Material UI and Draft-js

[![NPM](https://img.shields.io/npm/v/react-mui-draft-wysiwyg.svg)](https://www.npmjs.com/package/react-mui-draft-wysiwyg) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Documentation in progress...

## Install
if you don't have Material UI installed yet:

https://material-ui.com/getting-started/installation/

Then install the editor:

With npm:
```bash
npm install --save @material-ui/icons draft-js react-mui-draft-wysiwyg
```
Or with yarn:
```bash
yarn add @material-ui/icons draft-js react-mui-draft-wysiwyg
```

## Usage

```jsx
import React from 'react'
import MUIEditor from 'react-mui-draft-wysiwyg'

function Example() {
  const [editorState, setEditorState] = React.useState(MUIEditorState.createEmpty());

  const onChange = (newState) => {
    setEditorState(newState);
  };

  <MUIEditor editorState={editorState} onChange={onChange} />
}
```

## License

MIT © [Kelsier90](https://github.com/Kelsier90)
