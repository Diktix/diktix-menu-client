import {takeEvery} from 'typed-redux-saga';

import {dishesActions} from './Actions/DishesActions';
import getDishesSaga from './Sagas/getDishesSaga';

export default function* dishSagaWatcher() {
	yield* takeEvery([dishesActions.getList.type], getDishesSaga);
}
