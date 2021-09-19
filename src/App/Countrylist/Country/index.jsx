function Country ({country, click}) {
    return (
        <div className='country' onClick={() => {
            console.log(country.name + " clicked")
            click(country)
            }}>
            {/* <img className='flag' src={country.flag} alt="" /> */}
            <div className='flag' style={{backgroundImage: `url(${country.flag})`}}></div>
            <div className='country_continent'>
                  <div className='countryName'>{country.name} - {country.nativeName}</div>
                  <div className='continent'>{country.region}</div>
            </div>
            
        </div>
    )
}


export default Country