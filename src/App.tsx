import React, { memo, useState } from "react";
import useUnMount from "./hooks/useUnmount";
import useMount from "./hooks/useMount";

const Child = () => {

  useMount(() => console.log('mount'))
  useUnMount(() => console.log('unmount'))
  return <div>child</div>;
};

const App = memo(() => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      {flag && <Child />}
      <button onClick={() => setFlag(!flag)}>按钮</button>
    </div>
  );
});

export default App;
