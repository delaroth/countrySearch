function Popup ({country}) {
    return (
        <div className='popUp'>
            <div><span>{country.name}</span>-<span>{country.nativeName}</span></div>
            <div className='flag' id='big' style={{backgroundImage: `url(${country.flag})`}}></div>
            <div className='capitalAndRegion'>
               <div className='region'><h4>Region: <span>{country.region}</span></h4>  </div>
               <div className='capital'><h4>Capital: <span>{country.capital}</span></h4>  </div>  
            </div>
           
            {/* <div><h4>Languages:</h4> <ul>{country.languages.map((language)=> <li>language</li>)}</ul></div> */}

        </div>
    )
}

export default Popup