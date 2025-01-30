```javascript
//index.js
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```