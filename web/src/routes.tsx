import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import Landing from "./pages/LandingPage";
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'


function Routes() {
  return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route path="/app">
					<OrphanagesMap />
				</Route>
				<Route path="/orphanages/create">
					<CreateOrphanage />
				</Route>
				<Route path="/orphanages/:id">
					<Orphanage />
				</Route>
			</Switch>
		</BrowserRouter>
  );
}

export default Routes