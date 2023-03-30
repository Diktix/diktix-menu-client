import EnumStore from '../../../../BusinessLogic/EnumStore';
import {ClientOnlyActions} from '../../../Hooks/ActionCreator';

enum EnumActions {
	ORDER_PROCESS = 'ORDER_PROCESS',
	ADD_DISHE = 'ADD_DISHE',
	DELETE_DISHE = 'DELETE_DISHE',
	GET_ALL_ORDER = 'GET_ALL_ORDER',
	CLEAR_ORDER = 'CLEAR_ORDER',
	ALL_ORDER_ENTRY_LIST = 'ALL_ORDER_ENTRY_LIST',
}

class OrderClientOnlyActions extends ClientOnlyActions<EnumStore.TABLE> {
	readonly scope = EnumStore.TABLE;

	orderProcess = this.createAction(EnumActions.ORDER_PROCESS);

	getAllOrder = this.createAction(EnumActions.GET_ALL_ORDER);

	addDish = this.createAction(EnumActions.ADD_DISHE);

	deleteDish = this.createAction(EnumActions.DELETE_DISHE);

	clearOrder = this.createAction(EnumActions.CLEAR_ORDER);

	allOrderEntryList = this.createAction(EnumActions.ALL_ORDER_ENTRY_LIST);
}

export const orderClientOnlyActions = new OrderClientOnlyActions();
