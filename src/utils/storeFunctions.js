export const storeReducer = (state, action) => {
	switch (action.type) {
		case "FECTHING_INIT":
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case "FECTHING_SUCCESS":
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case "FECTHING_FAILURE":
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
		// throw new Error("11 reducer default case error");
	}
};

export const initialState = {
	isLoading: false,
	isError: false,
	data: "",
};

export const actionTypes = {
	init: "FECTHING_INIT",
	success: "FECTHING_SUCCESS",
	fail: "FECTHING_FAILURE",
};
