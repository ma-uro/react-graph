import React, { useState} from 'react';

import useFunctions from '../../functions/functions';
import { Input, Button } from 'antd';
import "./Search.scss";

const { Search } = Input;

export default function SearchInput() {
    const {handleSearchCountries, handleSetCountries} = useFunctions();
    const [searchValue, setSearchValue] = useState("");
  
    function handleChangeCountries(value) {

      const countries = handleSearchCountries(value)
      handleSetCountries(countries)

    }

    function handleClearSearch() {
      
      setSearchValue("");
      const countries = handleSearchCountries("")
      handleSetCountries(countries)

      handleChangeCountries("")
    }
    
    function handleSearch(value){
      setSearchValue(value);
      handleChangeCountries(value)
    }

    function handleOnChange(event) {
      setSearchValue(event.target.value)
    }


  
    return (
      <div data-testid="search-container" className="search-container" >

      <Search
            onChange={handleOnChange}
            value={searchValue}
            placeholder="Search...."
            onSearch={handleSearch}
            enterButton
          />
      <Button type="primary" onClick={handleClearSearch} > Limpar</Button>

      </div>
    )
  }