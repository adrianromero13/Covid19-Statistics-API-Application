import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';
// import styling
import styles from './CountryPicker.module.css';


const CountryPicker = () => {
const { fetchedCountries, setFectchedCountries } = useState([]);

    // useEffect
    useEffect(() => {
        const fetchAPI = async () => {
            setFectchedCountries( await fetchCountries);
        }

        fetchAPI();
    }, [setFectchedCountries]);

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value='global'>Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
