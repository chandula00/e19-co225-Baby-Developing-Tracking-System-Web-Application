### useState
In React, useState is a hook that allows functional components to have stateful behavior. It was introduced in React 16.8 to enable developers to use state and other React features without writing a class.

Using useState:

To use useState, you need to import it from the 'react' library in your component:

```jsx
import React, { useState } from 'react';
```

Then, you can call the useState function to declare state variables within your functional component:

```jsx
const [stateVariable, setStateVariable] = useState(initialValue);
```

Here's a breakdown of the above line:

- **stateVariable:** This is the name of the state variable you want to declare. You can give it any valid JavaScript identifier name.
- **setStateVariable:** This is the updater function for the state variable. It is used to update the state and trigger re-renders of the component.
- **initialValue:** This is the initial value for the state variable. It can be a primitive value like a string, number, boolean, etc., or even an object or an array.

#### Example using useState:

Let's create a simple counter component using useState:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

In this example, we create a Counter component that uses useState to manage the count state variable. The initial value of count is set to 0, and we have two functions, handleIncrement and handleDecrement, that update the count state by using setCount.

### useEffect
In React, `useEffect` is another important hook that allows functional components to perform side effects. Side effects are actions that occur outside of the component rendering process, such as data fetching, subscriptions, or manually interacting with the DOM.

**Using `useEffect`**:

To use `useEffect`, you need to import it from the 'react' library in your component:

```javascript
import React, { useEffect } from 'react';
```

Then, you can call the `useEffect` function within your functional component:

```javascript
useEffect(() => {
  // Side effect logic goes here
}, [dependencyArray]);
```

Here's a breakdown of the above code:

- The first argument to `useEffect` is a callback function that contains the side effect logic. This function will be executed after the component renders.
- The second argument is an optional dependency array. It allows you to control when the side effect will be executed. If the dependency array is empty (`[]`), the side effect will run only once, after the initial render. If you pass dependencies in the array, the side effect will re-run whenever any of those dependencies change.

**Example using `useEffect`**:

Let's create a simple component that fetches data from an API using `useEffect`:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Data from API:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
```

In this example, we create a `DataFetchingComponent` that uses `useState` to manage the `data` state variable, which will store the data fetched from the API. We use `useEffect` to perform the data fetching side effect. The effect will run once, after the initial render, because the dependency array is empty (`[]`). When the API response is received, we update the `data` state using the `setData` function, and the component re-renders with the fetched data.

**Cleaning up with `useEffect`**:

Sometimes, side effects need cleanup, especially when dealing with subscriptions or event listeners to prevent memory leaks. In such cases, you can return a cleanup function from the `useEffect` callback:

```javascript
useEffect(() => {
  // Side effect logic

  return () => {
    // Cleanup logic goes here
  };
}, [dependencyArray]);
```

The cleanup function will be executed before the component is removed from the UI or before the side effect is re-run (if the dependencies change).

That's a brief introduction to `useEffect` in React. It's a powerful hook that enables you to handle side effects in functional components, making it a crucial part of many React applications.

### Axios

A JavaScript library that serves to create HTTP requests that are present externally in both Node.js and the browser.

Axios is a promise-based HTTP client that allows you to make asynchronous HTTP requests to interact with APIs or fetch data from a server. It provides a simple and easy-to-use API that works well with modern JavaScript frameworks, including React.

1. Making a GET request: 
   ```jsx
    import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.example.com/data')
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
        {data.map(item => (
            <p key={item.id}>{item.name}</p>
        ))}
        </div>
    );
    };

    export default MyComponent;
    ```

2. Making a POST request:
    ```jsx
    import React, { useState } from 'react';
    import axios from 'axios';

    const MyComponent = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://api.example.com/submit', formData)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <button type="submit">Submit</button>
        </form>
    );
    };

    export default MyComponent;
    ```

