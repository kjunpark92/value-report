export const juso = 'https://xai-dev.xyz/juso/addrLinkApi';
export const yeonlipUnitsEP = '13.209.43.95:5000/get_units'
// export const yeonlipUnitsEP = 'https://xai-dev.xyz/get_units'
export const cors_yeonlipUnitsEP = 'https://cors-anywhere.herokuapp.com/' + yeonlipUnitsEP
export const jusoCoords = 'https://cors-anywhere.herokuapp.com/' + 'https://www.juso.go.kr/addrlink/addrCoordApi.do/'
export const geoCoder = 'https://us1.locationiq.com/v1/search.php?'

// ===========================================================================
const base_url = 'https://xai-dev.xyz'
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
// this is the commercial address lookup
export const commercialAddresses = 'https://xai-dev.xyz/api/commercials/address/lookup/'
export const temp_commercialAddresses = commercialAddresses
// this is the commercial endpoint
export const commercialDetails = 'https://xai-dev.xyz/api/commercials/buildings/'
export const temp_commercialDetails = commercialDetails
export const login = base_url + '/api/auth/obtain/token/'
export const check = base_url + '/api/auth/verify/token/'
// ===========================================================================