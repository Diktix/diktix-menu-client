import {put, select} from 'typed-redux-saga';

import {dishService} from '../../../../Services/dish.service';
import ServiceFactory from '../../../../Services/ServiceFactory';
import {selectDataTableRoot} from '../../Table/Selectors/selectDataTableRoot';
import {dishesActions} from '../Actions/DishesActions';
import {Dish} from '../slice';

function* getDishesSaga() {
	try {
		const {restaurant_id, table_id} = yield* select(selectDataTableRoot);
		const response: Response = yield dishService.getList({restaurant_id, table_id});
		const data: Dish[] = yield response.json();
		yield* put(dishesActions.entryList(data));
	} catch (error) {
		ServiceFactory.error(error, {saga: 'loginUserSaga'});
	}
}

export default getDishesSaga;
