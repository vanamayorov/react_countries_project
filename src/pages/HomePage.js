import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config/config';


const HomePage = ({ countries, setCountries }) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const navigate = useNavigate();

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
        }
    }, []); //eslint-disable-line

    useEffect(() => {
        handleSearch();
    }, [countries]); //eslint-disable-line


    const handleSearch = (search = '', region = '') => {
        let data = [...countries];
        if (region) {
            data = data.filter(c => c.region.toLowerCase().includes(region.toLowerCase()));
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredCountries(data);
    }

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((c, index) => {
                    const data = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: "Population",
                                description: c.population.toLocaleString()
                            },
                            {
                                title: "Region",
                                description: c.region
                            },
                            {
                                title: "Capital",
                                description: c.capital
                            },
                        ]
                    }

                    return (<Card key={c.name + index} {...data} onClick={() => navigate(`country/${c.name}`)} />)
                })}
            </List>
        </>
    )
}

export { HomePage };