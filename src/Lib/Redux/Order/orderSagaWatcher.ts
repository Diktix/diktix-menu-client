import {takeEvery} from 'typed-redux-saga';
import {orderClientOnlyActions} from './Actions/orderClientOnlyActions';
import getAllOrderSaga from './Sagas/getAllOrderSaga';

export default function* orderSagaWatcher() {
	yield* takeEvery(orderClientOnlyActions.getAllOrder.type, getAllOrderSaga);
}
