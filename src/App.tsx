import React, { memo, useState } from "react";
import useUnMount from "./hooks/useUnmount";
import useMount from "./hooks/useMount";
import useUpdate from "./hooks/useUpdate";

const Child = () => {

  useMount(() => console.log('mount'))
  useUnMount(() => console.log('unmount'))
  return <div>child</div>;
};

const App = memo(() => {
  // const [flag, setFlag] = useState(true);
  const update = useUpdate();
  return (
    <div>
      {/* {flag && <Child />}
      <button onClick={() => setFlag(!flag)}>按钮</button> */}
       <div>时间：{Date.now()}</div>
       <button onClick={update}>按钮</button>
    </div>
  );
});

export default App;
