import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import axios from "axios";

import { ALL_COUNTRIES } from "../config";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const MainPage = ({ countries, setCountries }) => {
  const navigate = useNavigate();
  const [filterCountries, setFilterCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    console.log("data", data);
    setFilterCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        setCountries(data);
      });
    }
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} countries={countries} />
      <List>
        {filterCountries.map((country) => {
          const cardProps = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              { title: "Region", description: country.region },
              { title: "Capital", description: country.capital },
            ],
          };

          return (
            <Card
              key={country.name}
              {...cardProps}
              onClick={() => navigate(`/country/${country.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};

export default MainPage;
