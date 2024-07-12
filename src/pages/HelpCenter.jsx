import Lower from "../components/HelpCenter/lower"
import Example from "../components/HelpCenter/Listing"
import Search from "../components/HelpCenter/search"
import Search2 from "../components/HelpCenter/Search2"
function HelpCenter(){
  return (
    <>
      <Search />
      <Search2 />
      <Example />
      <Lower />
    </>
  )
}

export default HelpCenter
