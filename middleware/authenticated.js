export default function ({ store, redirect }) {
    // If the user is authenticated redirect to residential home page
    if (store.state.auth) {
        return redirect('/main/residential')
    }
}
