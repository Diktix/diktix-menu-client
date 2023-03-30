import {PayloadAction} from '@reduxjs/toolkit';
import ServiceFactory from '../../../../Services/ServiceFactory';
import {tableService} from '../../../../Services/table.service';
import {TableRoot} from '../slice';

function* basyTableSaga(action: PayloadAction<TableRoot>) {
	try {
		const response: Response = yield tableService.basy(action.payload);
	} catch (error) {
		ServiceFactory.error(error, {saga: 'basyTableSaga'});
	}
}

export default basyTableSaga;
