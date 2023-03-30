import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';
import EnumStore from '../../../BusinessLogic/EnumStore';
import {Dish} from '../Dishes/slice';
import {orderClientOnlyActions} from './Actions/orderClientOnlyActions';
import _ from 'lodash';

const initialState = {
	current_order: [],
	all_order: [],
	isLoading: false,
};

export const orderSlice = createSlice<OrderRoot, SliceCaseReducers<OrderRoot>, EnumStore>({
	name: EnumStore.ORDER,
	initialState,
	reducers: {
		[orderClientOnlyActions.addDish.type]: (state, action) => {
			const dish: Dish & {table: string} = action.payload;
			const order = _.find(state.current_order, {dish: dish.id});
			if (_.isUndefined(order)) {
				state.current_order.push({
					dish: dish.id,
					count: 1,
					table: dish.table,
					price: dish.price,
				});
			} else {
				order.count = order.count + 1;
				order.price = (Number(order.price) + Number(dish.price)).toString();
			}
		},
		[orderClientOnlyActions.deleteDish.type]: (state, action) => {
			const dish: Dish & {table: string} = action.payload;
			const order = _.find(state.current_order, {dish: dish.id});
			if (!_.isUndefined(order)) {
				order.count = order.count - 1;
				order.price = (Number(order.price) - Number(dish.price)).toString();
				if (order.count === 0) {
					state.current_order = _.filter(state.current_order, (o) => o.dish !== dish.id);
				}
			}
		},
		[orderClientOnlyActions.clearOrder.type]: (state) => {
			state.current_order = [];
		},
		[orderClientOnlyActions.getAllOrder.type]: (state) => {
			state.isLoading = true;
		},
		[orderClientOnlyActions.allOrderEntryList.type]: (state, action) => {
			state.all_order = action.payload;
			state.isLoading = false;
		},
		[orderClientOnlyActions.orderProcess.type]: (state) => {
			state.current_order = [];
		},
	},
	extraReducers: {},
});

export type Order = {
	count: number;
	dish: number;
	table?: string;
	// Приходят с сервера
	status?: StatusOrder;
	price?: string;
};

export type OrderRoot = {
	current_order: Order[];
	all_order: Order[];
	isLoading: boolean;
};

export enum StatusOrder {
	NR = 'NR',
	PREPARING = 'PREPARING',
	READY = 'READY',
}

export const orderActions = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
