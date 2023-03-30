import React, {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import './DishList.scss';
import '../../../UIKit/Theme/Styles/_fonts_global.scss';
import List from '../List';
import {useStoreSelector} from '../../../Lib/Hooks/useStoreSelector';
import {selectDishesList} from '../../../Lib/Redux/Dishes/Selectors/selectDishesList';
import {Dish} from '../../../Lib/Redux/Dishes/slice';
import DishItem from './DishItem';
import {popupActions} from '../../../Lib/Redux/Popup/Actions/PopupActions';
import {dishesActions} from '../../../Lib/Redux/Dishes/Actions/DishesActions';

const DishList = () => {
	const dishesData = useStoreSelector(selectDishesList);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(dishesActions.getList());
	}, []);

	const itemClickHandler = useCallback(
		(data: Dish | null = null) => {
			console.log('gg');
		},
		[popupActions.close],
	);

	return (
		<List
			id={'list-dishes'}
			label={'Dishes'}
			labelAddButton={'Add dish'}
			addButtonHandler={itemClickHandler}
		>
			{dishesData?.map((item: Dish) => (
				<DishItem onHandlerClick={itemClickHandler} key={item.id} data={item} />
			))}
		</List>
	);
};

export default DishList;
