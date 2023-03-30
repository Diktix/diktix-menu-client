import _ from 'lodash';
import {createSelector} from '../../../../Utils/Redux';
import {selectDataTableRoot} from './selectDataTableRoot';

export const selectDishesList = createSelector([selectDataTableRoot], (dataTable) => {
	return !_.isUndefined(dataTable.restaurant_id) && !_.isUndefined(dataTable.table_id);
});
