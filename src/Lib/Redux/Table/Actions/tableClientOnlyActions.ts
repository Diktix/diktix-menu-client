import EnumStore from '../../../../BusinessLogic/EnumStore';
import {ClientOnlyActions} from '../../../Hooks/ActionCreator';

enum EnumActions {
	BASY = 'BASY',
	CALL_WAITER = 'CALL_WAITER',
}

class TableClientOnlyActions extends ClientOnlyActions<EnumStore.TABLE> {
	readonly scope = EnumStore.TABLE;

	basy = this.createAction(EnumActions.BASY);

	callWaiter = this.createAction(EnumActions.CALL_WAITER);
}

export const tableClientOnlyActions = new TableClientOnlyActions();
