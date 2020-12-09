import { useQuery, } from '@apollo/client';
import React from 'react';

import { COUNTRY_QUERY_SERVER } from '../../queries/countryQueries';
import { Route, Switch} from 'react-router-dom'
import List from '../List/List';
import Detail from '../Detail/Detail';
import useFunctions from '../../functions/functions'

export default function Recipient () {
    const { loading, error} = useQuery(
      COUNTRY_QUERY_SERVER, {
        onCompleted: onQueryComplete
      }
    );

    const {handleSetCountries, handleSetDefaultCountries} = useFunctions();

    function onQueryComplete(data) {
      handleSetCountries(data.countries)
      handleSetDefaultCountries(data.countries);
    }

    if (loading) return <p>Loading</p>;
    if (error) return <p  role="alert">Error</p>;

    return (
        <Switch>
        <Route exact path='/' component={List} />
        <Route path='/country/:name' component={Detail} />
    </Switch>
    )
}