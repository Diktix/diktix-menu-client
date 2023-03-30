import React from 'react';

import './TableList.scss';
import '../../../UIKit/Theme/Styles/_fonts_global.scss';

type ITableItemProps = {
	data: any;
	onHandlerClick: (value: any) => void;
};

const TableItem = (props: ITableItemProps) => {
	const {data, onHandlerClick} = props;
	return (
		<div onClick={() => onHandlerClick(data)} className="table-list__item">
			<div className="table-list__item__header">
				<div className="table-list__item__header__name CustomFontMedium">{data.name}</div>
				<div className="table-list__item__header__status -is-online CustomFontRegular">
					<div className="table-list__item__header__status__cr -is-online"></div>
					Online
				</div>
			</div>
			{/* <div className="table-list__item__address CustomFontRegular">{data.price}</div> */}
		</div>
	);
};

export default TableItem;
