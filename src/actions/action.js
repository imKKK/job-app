export const ADD_SEARCH = "ADD_SEARCH";

export function addSearch(title, content) {
    return { type: ADD_SEARCH, title: title, content: content }
}
