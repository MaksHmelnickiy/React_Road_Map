import React from "react"
import { myUseHookTask2 } from "./hook"

export const UseMyHookTask2 = () => {
  const {useTheme, useFont} = myUseHookTask2()
  const [font, setFont] = React.useState<string>('')
  const [stateTheme, setStateTheme] = React.useState<string>('')
  
  useTheme(stateTheme)
  useFont(font)
  return <>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id soluta ea ratione quo amet voluptatibus, 
  quae debitis cum dignissimos ad obcaecati voluptatem totam quis modi expedita architecto. Natus, impedit!
    <div>
      <input type="radio" value='white' name="theme" onChange={(e) => setStateTheme(e.target.value)} checked={stateTheme === 'white'} />
      <input type="radio" value='green' name="theme" onChange={(e) => setStateTheme(e.target.value)} checked={stateTheme === 'green'} />
      <input type="radio" value='blue' name="theme" onChange={(e) => setStateTheme(e.target.value)} checked={stateTheme === 'blue'} />
    </div>
    <div>
      <input type="radio" value='32px' name="font" onChange={(e) => setFont(e.target.value)} checked={font === '32px'} />
      <input type="radio" value='42px' name="font" onChange={(e) => setFont(e.target.value)} checked={font === '42px'} />
      <input type="radio" value='52px' name="font" onChange={(e) => setFont(e.target.value)} checked={font === '52px'} />
    </div>
  </>
}