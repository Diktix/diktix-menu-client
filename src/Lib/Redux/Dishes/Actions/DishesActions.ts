import EnumStore from '../../../../BusinessLogic/EnumStore';
import {ClientOnlyActions} from '../../../Hooks/ActionCreator';

enum EnumActions {
	HANDLER_ITEM = 'HANDLER_ITEM',
	GET_LIST = 'GET_LIST',
	ENTRY_LIST = 'ENTRY_LIST',
}

class DishesActions extends ClientOnlyActions<EnumStore.DISHES> {
	readonly scope = EnumStore.DISHES;

	handler = this.createAction(EnumActions.HANDLER_ITEM);

	getList = this.createAction(EnumActions.GET_LIST);

	entryList = this.createAction(EnumActions.ENTRY_LIST);
}

export const dishesActions = new DishesActions();
