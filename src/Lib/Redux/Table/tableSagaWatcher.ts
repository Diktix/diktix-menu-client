import {takeEvery} from 'typed-redux-saga';

import basyTableSaga from './Sagas/basyTableSaga';
import {tableClientOnlyActions} from './Actions/tableClientOnlyActions';

export default function* tableSagaWatcher() {
	yield* takeEvery([tableClientOnlyActions.basy.type], basyTableSaga);
}
