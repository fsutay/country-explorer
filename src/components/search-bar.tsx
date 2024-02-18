import { Form, InputGroup } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addCountry, setLoading } from "../store/country-slice"
import { searchCountries } from "../service/service"
import { useLazyQuery } from "@apollo/client"
import React, { useState } from 'react';
import { SEARCH_GROUP_PATTERN, SEARCH_PATTERN } from "../constants"


const CountrySearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const [fetchCountries, { loading, error, data }] = useLazyQuery(searchCountries);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        const isSearchGroupText = SEARCH_GROUP_PATTERN.test(e.target.value);
        let inputText=e.target.value;
        if(isSearchGroupText){
            const matches = e.target.value.match(SEARCH_GROUP_PATTERN);
            if(matches != null){
                //Query group u desteklemediğinden dolayı burada sadece search kısmmını alıp sorguluyorum. 
                inputText=matches[1];
            }
        }
        const searchText = SEARCH_PATTERN.replace('{searchText}', inputText);
        dispatch(setLoading(true));
        fetchCountries({ variables: { searchText } }).then((result) => {
            dispatch(addCountry(result.data.countries));
            dispatch(setLoading(false));
        });
    }
    return (
        <InputGroup className="mb-3">
            <Form.Control
                type="text"
                value={searchText}
                onChange={handleInputChange}
            />
            <InputGroup.Text>search</InputGroup.Text>
        </InputGroup>
    )
}

export default CountrySearchBar
