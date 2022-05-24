import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	posts: [
		{
			id: 0,
			message: 'Hic vitae hic dolorem possimus non incidunt deleniti ut.',
			LikesCount: 19,
			key: 0,
		},
		{
			id: 1,
			message: `Laudantium quas tempore.Voluptatibus sit necessitatibus quisquam itaque iure rem.
								Laborum est et recusandae voluptatum.
								Et dolores dolore qui reiciendis.`,
			LikesCount: 20,
			key: 1,
		},
		{
			id: 2,
			message:
				'Aut reprehenderit architecto eum in. Est ad doloribus iusto qui modi repudiandae dolores quia veritatis. Consequuntur quia est voluptates officia impedit et totam. Iusto nam dolore tenetur et incidunt rerum eos doloribus. Voluptas nihil blanditiis.',
			LikesCount: 23,
			key: 2,
		},
	],
	profile: null,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 4,
				message: action.newPostText,
				LikesCount: 0,
			};
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, newPost],
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => {
	return {
		type: 'ADD-POST',
		newPostText,
	};
};
export const setUserProfile = (profile) => {
	return {
		type: 'SET_USER_PROFILE',
		profile,
	};
};
export const setStatusAC = (status) => {
	return {
		type: 'SET_STATUS',
		status,
	};
};

export const getUserProfileTC = (userId) => (dispatch) => {
	profileAPI.getProfile(userId).then((response) => {
		dispatch(setUserProfile(response.data));
	});
};
export const getStatusTC = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then((response) => {
		dispatch(setStatusAC(response.data));
	});
};
export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(setStatusAC(status));
		}
	});
};

export default profileReducer;
