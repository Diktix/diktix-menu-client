import _ from 'lodash';
import {createSelector} from '../../../../Utils/Redux';
import {selectOrderState} from './selectOrderState';

export const selectCurrentOrder = createSelector([selectOrderState], (orderState) => {
	return orderState.current_order;
});
