export default function CountryDetailsCard(props: {country?:{name:string, capital: string, population: number}}  ) {
    console.log(props)
    if (props.country) {
        return (
            <div>
                <h1>Country Details</h1>
                <h2>Name: {props.country.name}</h2>
                <h2>Capital: {props.country.capital}</h2>
                <h2>Poulation: {props.country.population}</h2>

            </div>
        )
    } else {
        return (
            <div>
                <h2>No country found</h2>
            </div>
        )
    }
}
