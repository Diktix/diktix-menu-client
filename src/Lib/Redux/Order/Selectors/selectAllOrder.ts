import _ from 'lodash';
import {createSelector} from '../../../../Utils/Redux';
import {selectOrderState} from './selectOrderState';

export const selectAllOrder = createSelector([selectOrderState], (orderState) => {
	return orderState.all_order;
});
