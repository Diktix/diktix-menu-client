import React, {FC, lazy, Suspense} from 'react';
import {Route, Routes, useLocation} from 'react-router';
import _ from 'lodash';

import EnumRoutes from './EnumRoutes';
import Spinner from '../Components/Spinner/Spinner';
import Home from './VirtualPage/Home';

const NotFound = lazy(() => import('./VirtualPage/NotFound'));

const RouterContainer: FC = () => {
	const location = useLocation();
	const state = location.state;

	return (
		<Suspense fallback={<Spinner />}>
			<Routes location={state?.backgroundLocation}>
				<Route path={EnumRoutes.HOME} element={<Home />} />
				<Route element={<NotFound />} path="*" />
			</Routes>
		</Suspense>
	);
};

export default RouterContainer;
