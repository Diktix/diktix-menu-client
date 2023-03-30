import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';
import EnumStore from '../../../BusinessLogic/EnumStore';
import {tableClientOnlyActions} from './Actions/tableClientOnlyActions';

const initialState = {};

export const tableSlice = createSlice<TableRoot, SliceCaseReducers<TableRoot>, EnumStore>({
	name: EnumStore.TABLE,
	initialState,
	reducers: {
		[tableClientOnlyActions.basy.type]: (state, action) => {
			state.restaurant_id = action.payload.restaurant_id;
			state.table_id = action.payload.table_id;
		},
	},
	extraReducers: {},
});

export type TableRoot = {
	restaurant_id?: number;
	table_id?: string;
};

export const tableActions = tableSlice.actions;
export const tableReducer = tableSlice.reducer;
