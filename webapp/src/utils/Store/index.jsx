import store from '../../store';

export const getDispatcher = () => {
	return store.dispatch;
};

export const getState = () => {
	return store.getState();
};
