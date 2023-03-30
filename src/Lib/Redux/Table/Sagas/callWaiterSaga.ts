import {select} from 'typed-redux-saga';

import ServiceFactory from '../../../../Services/ServiceFactory';
import {tableService} from '../../../../Services/table.service';
import {selectDataTableRoot} from '../Selectors/selectDataTableRoot';

function* callWaiterSaga() {
	try {
		const {restaurant_id, table_id} = yield* select(selectDataTableRoot);
		const response: Response = yield tableService.callWaiter({restaurant_id, table_id});
	} catch (error) {
		ServiceFactory.error(error, {saga: 'loginUserSaga'});
	}
}

export default callWaiterSaga;
