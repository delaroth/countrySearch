
import Header from "./Header"
import CountryList from "./Countrylist";
import PopUp2 from "../PopUp2";
import { createContext, useEffect, useState } from "react";
import axios from 'axios'




const PopUpContext = createContext()

function App () {
       
    const [list, setList] = useState([])

    function getList () {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(res=> {
            setList(res.data)
            console.log(res.data)
        })
    }

    const [search, setSearch] = useState()

    function searchForCountry(str) {
         setSearch(list.filter((item)=> item.name.toLowerCase().includes(str.toLowerCase())))
    }
    
    

useEffect(getList, [])

// const amountOfCountries = list.length
if (search) {
    return(
      <div className='container' >
       <div id='app'>
        <PopUp2 />
        <Header countryCount={search.length} func={searchForCountry} />
        <CountryList countryList={search} />
      </div>
     </div>  
    )
    
}
else {
    return (
        
       <div className='container'>
           <div id='app'>
              <PopUp2 />
              <Header countryCount={list.length} func={searchForCountry} />
              <CountryList countryList={list} />
           </div>
       </div>
      )  
}
        
}


export default App



