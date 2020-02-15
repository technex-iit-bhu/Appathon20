const initialState = {
	isSideBarOpen: true,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_DRAWER':
			return Object.assign({}, state, {
				isSideBarOpen: action.data,
			});
		
		default: return state;
	}
};

export default reducer;
