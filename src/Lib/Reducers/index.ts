import {combineReducers} from 'redux';
import {enableBatching} from 'redux-batched-actions';
import EnumStore from '../../BusinessLogic/EnumStore';
import {menuReducer} from '../Redux/Menu/slice';
import {orderReducer} from '../Redux/Order/slice';
import {popupReducer} from '../Redux/Popup/slice';
import {tableReducer} from '../Redux/Table/slice';

const reducers = {
	[EnumStore.TABLE]: tableReducer,
	[EnumStore.MENU]: menuReducer,
	[EnumStore.POPUP]: popupReducer,
	[EnumStore.ORDER]: orderReducer,
};

const rootReducer = enableBatching(combineReducers(reducers));

export default rootReducer;
