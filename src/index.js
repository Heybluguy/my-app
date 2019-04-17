import Counter from './counter'; // import the Counter component from counter.jsx
import React from 'react';
import ReactDOM from 'react-dom'; // On the first 2 lines, we are importing a couple of React objects from their corresponding module.

const element = <h1>Hello World</h1>; // we are defining a constant called an element.

ReactDOM.render(<Counter />, document.getElementById('root'));

// Here we have Hot Module Reloading(HMR).
// That basically means that whenever we change any of our files,
// our React app will automatically restart in the browser.
// We don’t have to manually refresh the page.Switch back
// to your browser, and you should see the Hello World message on the page.

