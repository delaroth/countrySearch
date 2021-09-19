// import SearchBar from "./SearchBar"
// import { useRef } from "react"
import Title from "./Title"

function Header ({countryCount, func}) {

    // const inputRef = useRef()
    // onclick={()=>{
    //     inputRef.current.value = ''
    // }}
    return <header>
        <Title countryCount={countryCount}/>
        <input name='countrySearch' type="text" onChange={(event)=>func(event.target.value)} placeholder='Search country by name' />
    </header>
}

export default Header