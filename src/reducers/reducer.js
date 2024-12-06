export const reducer = (state, action) => {
    switch(action.type){
        case "GET_DENTISTS":
            return {...state, dentists: action.payload}
        case "ADD_FAVORITE":
            return { ...state, favs: [...state.favs, action.payload] };
        case "DELETE_FAVORITE":
            const filterFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
            return {...state, favs: filterFavs}
        case "TOOGLE_THEME":
            return {...state, theme: "valores"}
    }
};