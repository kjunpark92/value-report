const cookieparser = process.server ? require('cookieparser') : undefined
import {login, check} from '../store/apis'
export const state = () => {
    return {
        showFullNav: true,
        auth: {
            user: null,
            pass: null,
            loggedIn: false
        },
        token: ''
    }
}
export const mutations = {
    // async checkValidToken(state, payload){
    //     let key = localStorage.getItem('jwt')
    //     let params = {token: key}
    //     if(key.length > 0){
    //         try{
    //             await this.$axios.post(check, params).then(async data => {
    //                 console.log(data)
    //                 if(data.status == 200){
    //                     console.log('inside 200 res')
    //                     this.commit('authModule/setAuth', true)
    //                     this.commit('authModule/set_nav', false)
    //                     this.$router.push("/main/")
    //                 }
    //             })
    //         }catch{
    //             console.log('not valid JWT')
    //         }
    //     }
    // },
    // async setAuth(state, payload){
    //     console.log('inside set auth')
    //     state.auth.auth.user.loggedIn = payload
    //     state.auth.auth.loggedIn = payload;
    //     console.log(payload)
    //     // state.auth.auth.user.loggedIn = payload;
    //     if(payload){
    //         this.$router.push("/main/")
    //     }
    // },
    async login(state, auth) {
        state.auth = auth;
        let params = {
            username: auth.auth.user.username,
            password: auth.auth.user.password
        }
        await this.$axios.post(login, params).then( data => {
            localStorage.setItem('jwt', data.data.token)
            state.auth.auth.loggedIn = true;
            state.auth.auth.user.loggedIn = true;
            this.commit('authModule/set_nav', false)
            // state.showFullNav = false;
            this.$router.push("/main/")
        }).catch(err => alert(err))
    },
    set_nav(state, payload){
        state.showFullNav = payload;
    },
    logout(state){
        localStorage.setItem('jwt', '')
        state.auth.auth.user.loggedIn = false;
        this.commit('authModule/set_nav', true)
        // state.showFullNav = true;
    }
}

export const getters = {
    userEmail: state => {
        return state.auth.auth.user.username
    },
    logginStatus: state => {
        try{
            return state.showFullNav
        } catch {

        }
    },
    token : state => state.token
}
// export const actions = {
//     nuxtServerInit({ commit }, { req }) {
//         let auth = null
//         if (req.headers.cookie) {
//             const parsed = cookieparser.parse(req.headers.cookie)
//             try {
//                 auth = JSON.parse(parsed.auth)
//             } catch (err) {
//                 // No valid cookie found
//             }
//         }
//         commit('setAuth', auth)
//     }
// }
