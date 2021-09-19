import Country from "./Country"
import Popup from "./Popup"
import {  useState } from "react";

function CountryList ({countryList})
{
    const [count, setPopup] = useState()

    function popup (country) {
        setPopup(country)
    }
    function noPopup () {
        if (count) {
         setPopup(null)
        }
        
    }

    return ( 
    <div id='countryList'  >
        {
         count ? <div className='background' onClick={noPopup}><Popup key={count.name + " big"} country={count}/></div>:<div></div>
         }
         {countryList.map( (country) => <Country key={country.name} country={country} click={popup}/>)}
         
    </div>
    )
    
}


export default CountryList