import React from 'react';

import {THomeContainerProps} from '../Home/HomeContainer';
import {EnumItemsMenu} from '../../Lib/Redux/Menu/slice';

import DishContainer from './NestedAddresses/DishContainer';

import './PanelContainer.scss';

const PanelContainer = (props: THomeContainerProps) => {
	const menu_item = props.address.split('>')[0];

	switch (menu_item) {
		case EnumItemsMenu.HOME:
			return <DishContainer {...props} />;
		case EnumItemsMenu.BASKET:
			return <DishContainer {...props} />;
		default:
			return null;
	}
};

export default PanelContainer;
