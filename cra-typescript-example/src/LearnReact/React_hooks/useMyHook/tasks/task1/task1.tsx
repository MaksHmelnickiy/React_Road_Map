import React from "react";
import { myHookTask1 } from "./hook";

export const UseMyHookTask1 = () => {
  const [key, setKey] = React.useState('');
  const [result, setResult] = React.useState<any>(null);
  const { getStorage, setStorage, removeStorage } = myHookTask1();

  const handleGet = () => {
    const value = getStorage(key);
    setResult(value);
  };

  const handleSet = () => {
    const success = setStorage(key, "Value");
    setResult(success ? "Successfully set" : "Failed to set");
  };

  const handleRemove = () => {
    const success = removeStorage(key);
    setResult(success ? "Successfully removed" : "Failed to remove");
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKey(e.target.value)}
        />
      </div>
      <button onClick={handleGet}>Get</button>
      <button onClick={handleSet}>Set</button>
      <button onClick={handleRemove}>Remove</button>
      {result && <div>Result: {result}</div>}
    </>
  );
};