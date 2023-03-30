import EnumStore from '../../../../BusinessLogic/EnumStore';

export const selectDataTableRoot = (state: any) => {
	return state[EnumStore.TABLES];
};
