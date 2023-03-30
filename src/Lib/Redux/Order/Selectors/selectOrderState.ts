import _ from 'lodash';
import EnumStore from '../../../../BusinessLogic/EnumStore';

export const selectOrderState = (state: any) => {
	return state[EnumStore.ORDER];
};
