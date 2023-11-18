import { useMatch } from "react-router-dom"
import { CustomLink } from "../../../../Components/CastomLink"

export const About = () => {
  const match = useMatch('/contact')
  console.log(match)
  return <div>
    <h1>About</h1>
    <CustomLink to="test">Test</CustomLink>
  </div>
}