import {PayloadAction} from '@reduxjs/toolkit';
import {put, select} from 'typed-redux-saga';

import {orderService} from '../../../../Services/order.service';
import ServiceFactory from '../../../../Services/ServiceFactory';
import {selectDataTableRoot} from '../../Table/Selectors/selectDataTableRoot';
import {orderClientOnlyActions} from '../Actions/orderClientOnlyActions';
import {Order} from '../slice';

function* orderProcessSaga(action: PayloadAction<Order[]>) {
	try {
		const {restaurant_id, table_id} = yield* select(selectDataTableRoot);
		const response: Response = yield orderService.orderProcess({
			restaurant_id,
			table_id,
			orders: action.payload,
		});
		yield* put(orderClientOnlyActions.getAllOrder);
	} catch (error) {
		ServiceFactory.error(error, {saga: 'orderProcessSaga'});
	}
}

export default orderProcessSaga;
