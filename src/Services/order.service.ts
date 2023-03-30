import {ApiUrl} from '../const';
import {Order} from '../Lib/Redux/Order/slice';
import {TableRoot} from '../Lib/Redux/Table/slice';
import {fetchWrapper} from '../Utils/fetch-wrapper';

export const orderService = {
	orderProcess,
	getAllOrder,
};

const URL_TABLE = 'client-menu/restaurant';

async function orderProcess(data: TableRoot & {orders: Order[]}) {
	const {restaurant_id, table_id, orders} = data;
	return fetchWrapper.post(
		`${ApiUrl}/${URL_TABLE}/${restaurant_id}/tables/${table_id}/add-orders/`,
		orders,
	);
}

async function getAllOrder(table: TableRoot) {
	const {restaurant_id, table_id} = table;
	return fetchWrapper.get(`${ApiUrl}/${URL_TABLE}/${restaurant_id}/tables/${table_id}/orders/`);
}
