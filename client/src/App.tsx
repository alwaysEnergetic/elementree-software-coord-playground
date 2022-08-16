import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import {COORD_QUERY} from './graphql/queries';
import './App.css';
import MapView from './components/MapView';
import InputView from './components/InputView';
const App = ()=> {
  const [bbox, setBbox] = useState("-0.489,151.28,50.236,51.686"); //default to -0.489,151.28,50.236,51.686
  const { data, loading, error } = useQuery(COORD_QUERY,{
  variables:{bbox:bbox}
  });

  return (
    <div>
      <InputView setBbox={setBbox}/>
      {!loading && data.getCoords && <MapView getCoords={data.getCoords} />}
    </div>
  );
}
export default App;
