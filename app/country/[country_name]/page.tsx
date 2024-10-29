import CountryDetailsCard from "@/components/CountryDetailsCard";

export default function CountryName({ params }: { params: { country_name: string } }) {


  const countries = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: 30000000,
    },
    {
      name: "India",
      capital: "New Delhi",
      population: 1300000000,
    },
    {
      name: "China",
      capital: "Beijing",
      population: 1400000000,
    },
    {
      name: "Afghanistan",
      capital: "Kabul",
      population: 40000000,
    },
    {
      name: "Iran",
      capital: "Tehran",
      population: 80000000,
    },
  ];
  const country = countries.find(
    (country) => country.name.toLocaleLowerCase() === params.country_name
  );

  console.log(country)

  return (
    <CountryDetailsCard country={country} />
  )


}