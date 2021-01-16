import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	login: {
		userId: 0,
		accessToken: null,
		statusMessage: '',
	},
};

export const user = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setAccessToken: (state, action) => {
			const { accessToken } = action.payload;
			console.log(`Access Token:${accessToken}`);
			state.login.accessToken = accessToken;
		},
		setUserId: (state, action) => {
			const { userId } = action.payload;
			console.log(`UserId:${userId}`);
			state.login.userId = userId;
		},
		setStatusMessage: (state, action) => {
			const { statusMessage } = action.payload;
			console.log(`Statusmessage:${statusMessage}`);
			state.login.statusMessage = statusMessage;
		},
		logout: (state, action) => {
			console.log('Logging out');
			state.login.userId = 0;
			state.login.accessToken = null;
		},
	},
});
