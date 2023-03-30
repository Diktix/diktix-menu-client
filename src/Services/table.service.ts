import {ApiUrl} from '../const';
import {TableRoot} from '../Lib/Redux/Table/slice';
import {fetchWrapper} from '../Utils/fetch-wrapper';

export const tableService = {
	basy,
	callWaiter,
};

const URL_TABLE = 'client-menu/restaurant';

async function basy(table: TableRoot) {
	const {restaurant_id, table_id} = table;
	return fetchWrapper.post(
		`${ApiUrl}/${URL_TABLE}/${restaurant_id}/tables/${table_id}/to-book/`,
		{},
	);
}

async function callWaiter(table: TableRoot) {
	const {restaurant_id, table_id} = table;
	return fetchWrapper.get(
		`${ApiUrl}/${URL_TABLE}/${restaurant_id}/tables/${table_id}/call-waiter/`,
	);
}
