// We use an enum to identify allowed actions. This is better than using strings.
export enum ActionType {
    ADD_PRODUCT,
    LIKE_PRODUCT,
    REMOVE_PRODUCT,
    SORT_PRODUCTS
}

// We use an interface to specify the properties of any action.
export interface Action {
    type: ActionType,
    payload: any
}

export enum SortedBy {
    DESCRIPTION,
    PRICE,
    LIKES
}

