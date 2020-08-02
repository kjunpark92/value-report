export const state = () => {
    return {
        resInitialView: true,
        resAddressView: false,
        resApartmentView: false,
        resBlockView: false,
        resEstimateView: false,
        comInitialView: true,
        comAddressView: false,
        comEstimateView: false
    }
}

export const mutations = {
    SET_RES_INITIAL_VIEW(state){
        state.resInitialView = true;
        state.resAddressView = false;
        state.resBlockView = false;
        state.resApartmentView = false;
        state.resEstimateView = false;
    },
    SET_RES_ADDRESS_VIEW(state){
        state.resInitialView = false;
        state.resAddressView = true;
        state.resBlockView = false;
        state.resApartmentView = false;
        state.resEstimateView = false;
    },
    SET_RES_BLOCK_VIEW(state){
        state.resInitialView = false;
        state.resAddressView = false;
        state.resBlockView = true;
        state.resApartmentView = false;
        state.resEstimateView = false;
    },
    SET_RES_APARTMENT_VIEW(state){
        state.resInitialView = false;
        state.resAddressView = false;
        state.resBlockView = false;
        state.resApartmentView = true;
        state.resEstimateView = false;
    },
    SET_RES_ESTIMATE_VIEW(state){
        state.resInitialView = false;
        state.resAddressView = false;
        state.resBlockView = false;
        state.resApartmentView = false;
        state.resEstimateView = true;
    },
    SET_COM_INIT_VIEW(state){
        state.comInitialView = true;
        state.comAddressView = false;
        state.comEstimateView = false;
    },
    SET_COM_ADDRESS_VIEW(state){
        state.comInitialView = false;
        state.comAddressView = true;
        state.comEstimateView = false;
    },
    SET_COM_ESTIMATE_VIEW(state){
        state.comInitialView = false;
        state.comAddressView = false;
        state.comEstimateView = true;
    }
}

export const getters = {
    resInitialView: state => state.resInitialView,
    resAddressView: state => state.resAddressView,
    resBlockView: state => state.resBlockView,
    resApartmentView: state => state.resApartmentView,
    resEstimateView: state => state.resEstimateView,
    comInitialView: state => state.comInitialView,
    comAddressView: state => state.comAddressView,
    comEstimateView: state => state.comEstimateView
}
