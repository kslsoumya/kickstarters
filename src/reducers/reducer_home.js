export default function (state = [] ,action) {

    // console.log('Action received'+action)
    switch(action.type) {
        case 'HOME_PAGE':
        return action.payload.data;

        case 'TITLE_FILTER':
        return action.payload;
    }
    return state;
}