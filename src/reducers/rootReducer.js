const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
        {id: '3', title: 'Helix Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
    ]
}

const rootReducer = (state = initState, action) => { //arrow function

    if (action.type === 'DELETE_POST') {
         let newPosts = state.posts.filter(post => {
             return action.id !== post.id
         });
         return {
             ...state,
             posts: newPosts //overwrite the old posts inside the state'store
         }
    }
    console.log(action);
    return state;
}

export default rootReducer;