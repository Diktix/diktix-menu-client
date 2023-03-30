import {select, put} from 'typed-redux-saga';

import {orderService} from '../../../../Services/order.service';
import ServiceFactory from '../../../../Services/ServiceFactory';
import {selectDataTableRoot} from '../../Table/Selectors/selectDataTableRoot';
import {orderClientOnlyActions} from '../Actions/orderClientOnlyActions';
import {Order} from '../slice';

function* getAllOrderSaga() {
	try {
		const {restaurant_id, table_id} = yield* select(selectDataTableRoot);
		const response: Response = yield orderService.getAllOrder({restaurant_id, table_id});
		const orders: Order[] = yield response.json();
		yield* put(orderClientOnlyActions.allOrderEntryList(orders));
	} catch (error) {
		ServiceFactory.error(error, {saga: 'getAllOrderSaga'});
	}
}

export default getAllOrderSaga;
