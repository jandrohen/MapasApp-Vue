export interface IPlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; // [lat, lng]
}

function state(): IPlacesState {
    return {
        isLoading: false,
        userLocation: undefined
    }
}

export default state;