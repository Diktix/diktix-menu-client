import {ApiUrl} from '../const';
import {TableRoot} from '../Lib/Redux/Table/slice';
import {fetchWrapper} from '../Utils/fetch-wrapper';

export const dishService = {
	getList,
};

const URL_TABLE = 'client-menu/restaurant';

async function getList(table: TableRoot) {
	const {restaurant_id} = table;
	return fetchWrapper.get(`${ApiUrl}/${URL_TABLE}/${restaurant_id}/dishes/`);
}
