import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import _ from 'lodash';

import './HomeContainer.scss';
import '../../UIKit/Theme/Styles/_fonts_global.scss';

import PanelContainer from '../Panel/PanelContainer';
import Menu from '../../Components/Menu/Menu';
import {MenuType} from '../../Lib/Redux/Menu/slice';
import {menuActions} from '../../Lib/Redux/Menu/Actions/menuActions';
import {selectMenuState} from '../../Lib/Redux/Menu/Selectors/selectMenuState';
import {tableClientOnlyActions} from '../../Lib/Redux/Table/Actions/tableClientOnlyActions';

const HomeContainer = (props: THomeContainerProps) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const [__, restaurant_id, table_id] = _.split(window.location.pathname, '/');
		dispatch(tableClientOnlyActions.basy({restaurant_id, table_id}));
	}, []);

	return (
		<div className="root-container">
			<div className="root-wrapper">
				<div className="panel-container">
					<PanelContainer {...props} />
				</div>
				<Menu {...props} />
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	handlerMenu: (updates: Partial<MenuType>) => dispatch(menuActions.handler({...updates})),
});

type TContentUpsellContainerStateProps = ReturnType<typeof selectMenuState>;

export default connect(selectMenuState, mapDispatchToProps)(HomeContainer);

export type THomeContainerProps = THomeContainerConnectedDispatches &
	TContentUpsellContainerStateProps;

type THomeContainerConnectedDispatches = ReturnType<typeof mapDispatchToProps>;
