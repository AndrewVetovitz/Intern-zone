interface Action {
    type: string;
    payload: object;
}

interface State {
    companies: object[];
    fetching: boolean;
    fetched: boolean;
    error: null;
}

let defaultState: State = {
    companies: [],
    fetching: false,
    fetched: false,
    error: null
};

export default function reducer(state: State = defaultState, action: Action) {
    switch (action.type) {
        case 'FETCH_COMPANIES': {
            return {...state, fetching: true};
        }
        case 'FETCH_COMPANIES_REJECTED' : {
            return {...state, fetching: false, error: action.payload};
        } 
        case 'FETCH_COMPANIES_FULFILLED' : {
            return {...state, companies: action.payload, fetching: false, fetched: true};
        }
        default : {
            return state;
        }
    }
}