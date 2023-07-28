import React from "react";

interface IParentUseCallback {
  counter: () => void;
}

const ChildUseCallback = ({counter}: IParentUseCallback) => {
  console.log('render child')

  return <button onClick={counter}>Click</button>
}

export default React.memo(ChildUseCallback)