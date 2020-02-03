import { ADD_PERSON, RESET_PEOPLE} from './action-types';

export function addPerson(payload) {
    return function (dispatch) {
        return fetch("https://localhost:44377/api/Users")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: ADD_PERSON, payload: json });
            });
    }
}

export function resetPeople() {
    return ({ type: RESET_PEOPLE })
}