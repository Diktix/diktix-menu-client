import React from 'react';

import './TableList.scss';
import '../../../UIKit/Theme/Styles/_fonts_global.scss';
import List from '../List';
import {useStoreSelector} from '../../../Lib/Hooks/useStoreSelector';
import TableItem from './TableItem';

const TableList = () => {
	const addButtonHandler = () => {};

	return (
		<List
			id={'list-tables'}
			label={'Tables'}
			labelAddButton={'Add table'}
			addButtonHandler={addButtonHandler}
		>
			{/* {tablesData?.map((item: Table) => (
				<TableItem onHandlerClick={} data={item} key={item.id} />
			))} */}
		</List>
	);
};

export default TableList;
