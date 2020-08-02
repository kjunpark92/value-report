export default function ({ store, redirect }) {
    // If the user is not authenticated
    // console.log(store.state.authModule.auth.auth.loggedIn)
    if (store.state.authModule.auth.auth == undefined || !store.state.authModule.auth.auth.loggedIn ) {
        return redirect('/login')
    } else {
        // console.log(store.state.authModule.auth.auth)
    }
}
