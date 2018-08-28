const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
    }

    const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
    const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
    const UPDATE_CITY = "UPDATE_CITY";
    const UPDATE_PROP = "UPDATE_PROP";
    const UPDATE_FOUND = "UPDATE_FOUND";
    const UPDATE_AGENT = "UPDATE_AGENT";
    const UPDATE_COST = "UPDATE_COST";
    const UPDATE_PAYMENT = "UPDATE_PAYMENT";
    const UPDATE_CREDIT = "UPDATE_CREDIT";
    const UPDATE_HISTORY = "UPDATE_HISTORY";
    const UPDATE_ADDONE = "UPDATE_ADDONE";
    const UPDATE_ADDTWO = "UPDATE_ADDTWO";
    const UPDATE_ADDTHREE = "UPDATE_ADDTHREE";
    const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
    const UPDATE_LASTNAME = "UPDATE_LASTNAME";
    const UPDATE_EMAIL = "UPDATE_EMAIL";


function reducer(state = initialState, action ) {
    switch(action.type) {
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, { loanType: action.payload });
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, { propertyType: action.payload });
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload});
        case UPDATE_PROP:
            return Object.assign({}, state, { propToBeUsedOn: action.payload });
        case UPDATE_FOUND:
            return Object.assign({}, state, { found: action.payload });
        case UPDATE_AGENT:
            return Object.assign({}, state, { realEstateAgent: action.payload });
        case UPDATE_COST:
            return Object.assign({}, state, { cost: action.payload });
        case UPDATE_PAYMENT:
            return Object.assign({}, state, { downPayment: action.payload })
        case UPDATE_CREDIT:
            return Object.assign({}, state, { credit: action.payload });
        case UPDATE_HISTORY:
            return Object.assign({}, state, { history: action.payload });
        case UPDATE_ADDONE:
            return Object.assign({}, state, { addressOne: action.payload });
        case UPDATE_ADDTWO:
            return Object.assign({}, state, { addressTwo: action.payload });
        case UPDATE_ADDTHREE:
            return Object.assign({}, state, { addressThree: action.payload });
        case UPDATE_FIRSTNAME:
            return Object.assign({}, state, { firstName: action.payload });
        case UPDATE_LASTNAME:
            return Object.assign({}, state, { lastName: action.payload });
        case UPDATE_EMAIL:
            return Object.assign({}, state, { email: action.payload });
        default: return state;
    }

}

export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export function updateLastName(lastName) {
    return {
        type: UPDATE_LASTNAME,
        payload: lastName
    }
}

export function updateFirstName(firstName) {
    return {
        type: UPDATE_FIRSTNAME,
        payload: firstName
    }
}

export function updateAddThree(addressThree) {
    return {
        type: UPDATE_ADDTHREE,
        payload: addressThree
    }
}

export function updateAddTwo(addressTwo) {
    return {
        type: UPDATE_ADDTWO,
        payload: addressTwo
    }
}

export function updateAddOne(addressOne) {
    return {
        type: UPDATE_ADDONE,
        payload: addressOne
    }
}

export function updateHistory(history) {
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}

export function updateCredit(credit) {
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updatePayment(downPayment) {
    return {
        type: UPDATE_PAYMENT,
        payload: downPayment
    }
}

export function updateCost(cost) {
    return {
        type: UPDATE_COST,
        payload: cost
    }
}

export function updateAgent(realEstateAgent) {
    return {
        type: UPDATE_AGENT,
        payload: realEstateAgent
    }
}

export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp(prop) {
    return{
        type: UPDATE_PROP,
        payload: prop
    }
}

export default reducer;