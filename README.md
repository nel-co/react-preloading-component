# React-Preloading-Component

**React-Preloading-Component** is a css loading animation component library to use in React projects.

[Live demo](https://nel-co.github.io/react-preloading-component-demo/)

![alt text](https://raw.githubusercontent.com/nel-co/react-preloading-component/master/loading-demo.gif)
## Getting Started

```
npm install --save react-preloading-component
```

## Usage
Here is a quick example using the ```<Wave />``` component to get you started:

```javascript
import React from 'react';
import { render } from 'react-dom';

import { Wave } from 'react-preloading-component';

const App = () => (
  <div>
    <Wave />
  </div>
);

render(<App />, document.querySelector('#app'));
```

### Options
#### ```<Bounce />```
```javascript
<Bounce
  color="#FF4601" // Default hex color (string)
  size="40" // Default Size in px (number)
/>
```

#### ```<Grid />```
```javascript
<Grid
  color="#FF4601" // Default hex color (string)
  size="20" // Default Size in px (number)
/>
```

#### ```<Grow />```
```javascript
<Grow
  color="#FF4601" // Default hex color (string)
  size="40" // Default Size in px (number)
/>
```

#### ```<Lines />```
```javascript
<Lines
  color="#FF4601" // Default hex color (string)
  size="30" // Default Size in px (number)
/>
```

#### ```<Pop />```
```javascript
<Pop
  color="#FF4601" // Default hex color (string)
  size="10" // Default Size in px (number)
/>
```

#### ```<Progress />```
```javascript
<Progress
  background="#EEEEEE" // Default hex background color (string)
  color="#FF4601" // Default hex color (string)
  speed="12s" // Default speed of bar (string)
/>
```

#### ```<Pulse />```
```javascript
<Pulse
  color="#FF4601" // Default hex color (string)
  size="10" // Default Size in px (number)
/>
```

#### ```<Scan />```
```javascript
<Scan
  color="#FF4601" // Default hex color (string)
  size="25" // Default Size in px (number)
/>
```

#### ```<Spinner />```
```javascript
<Spinner
  color="#FF4601" // Default hex color (string)
  secondaryColor="#E6E6E6" // Default hex color of ring (string)
  size="40" // Default Size in px (number)
/>
```

#### ```<Text />```
```javascript
<Text
  color="#FF4601" // Default hex color (string)
  fontSize="1.5em" // Default font size (string)
  text="Loading" // Default text (string)
/>
```

#### ```<Triple />```
```javascript
<Triple
  color="#FF4601" // Default hex color (string)
  size="40" // Default Size in px (number)
/>
```

#### ```<Wave />```
```javascript
<Wave
  color="#FF4601" // Default hex color (string)
  size="12" // Default Size in px (number)
/>
```

## Contributing

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Add** your component and **Update** the  ```README.md```
 4. **Commit** changes to your own branch
 5. **Push** your work back up to your fork
 6. Submit a **Pull request**

## License

This project is licensed under the MIT License.