```javascript
//bugSolution.js
import { useState, useRef, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [forceRender, setForceRender] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if(buttonRef.current){
      buttonRef.current.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded')
    }
  }, [count, forceRender]);

  return (
    <div className="p-4">
      <button ref={buttonRef} onClick={() => {
        setCount(count + 1);
        setForceRender(!forceRender);
      }}>
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```