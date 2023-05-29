import React, { FunctionComponent, useEffect, useState } from 'react';
import PokemonList from './pages/pokemon-list';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import PokemonSearch from './pages/pokemon-search';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className='nav-wrapper teal'>
            <Link to="/" className='brand-logo center'> Pokédex</Link>
          </div>
        </nav>

        <Switch>
          <PrivateRoute exact path="/" component={PokemonList}/>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/pokemons" component={PokemonList}/>
          <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit}/>
          <PrivateRoute exact path="/pokemons/add" component={PokemonAdd}/>
          <PrivateRoute exact path="/pokemons/search" component={PokemonSearch}/>
          <PrivateRoute path="/pokemons/:id" component={PokemonsDetail}/>
          
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  )
}
  
export default App;