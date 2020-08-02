const state = () => {
    return {
        language : {
            activeLanguage: 'en',
            en: {
                firstName: 'First Name',
                lastName: 'Last Name',
                email: 'Email',
                password: 'Password',
                confirmPassword: 'Confirm Password',                
                signup: 'Sign Up',
                login: 'Log In',
                commReport: 'XAI Commercial Report',
                commR1: 'Quickly search prices for commercial buildings',
                commR2: 'Learn insights and trends around areas in South Korea',
                betaWIP: 'Beta In Progress',
                try: 'Try',
                go: 'Go',
                ypReport: 'XAI Yeonlip Report',
                ypR1: 'Search through small apartments and residences in South Korea.',
                ypR2: 'Fast, efficient, using cutting edge technologies in AI',
                dataMarket: 'XAI Data Market',
                dmR1: 'Access our APIs to create custom solutions',
                dmR2: 'Dozens of data sources',
                dmR3: 'Pay by the call',
                search: 'Search',
                greetings: 'Welcome back, ',
                welcomep1: 'Ready to search for Yeonlip real estate?',
                welcomep2:'Get started by entering an address above.',
                welcomeCommP1: 'Ready to search for Commercial realestate?',
                building_stats: 'Building Stats',
                land_stats: 'Land Stats',
                floors: 'Floors',
                subfloors: 'Subfloors',
                constructed: 'Constructred',
                elevators: 'Elevators',
                emergency_elevators: 'Emergency Elevators',
                height: 'Height',
                base_area: 'Base Area',
                land_area: 'Land Area',
                total_area: 'Total Area',
                base_to_land: 'Base to Land Area',
                constructed_date: 'Constructed Date',
                auth_date: 'Authorized Use Date',
                construction_complete_date: 'Construction Complete Date',
                construction_authorize_date: 'Construction Authorized Date',
                land_cgr: 'Land CGR Code',
                purpose_area: 'Purpose Area',
                top_code: 'Topographical Code',
                road_code: 'Roadside Code',
                myAccount: 'My Account',
                logout: 'Logout',
                dong_addr: 'Dong Address',
                road_addr: 'Road Address',
                building_name: 'Building Name',
                gu_code: 'Gu Code',
                dong_code: 'Dong Code',
                land_type_code: 'Land Type Code',
                bun: 'Bun',
                ji: 'Ji',
                new_bun: 'New Bun',
                new_ji: 'New Ji',
                structure_name: 'Structure Name',
                structure_others: 'Other Structure Names',
                main_use_name: 'Main Use Name',
                main_use_others: 'Other Main Uses',
                roof_name: 'Roof Name',
                roof_name_others: 'Other Roof Names',
                use_confirmed_date: 'Use Confirmed Date',
                area_usage: 'Area Usage',
                land_price_per_sqm: 'Price of land per sqm',
                land_price: 'Land price',
                construction_year: 'Construction Year',
                construction_authorize_date: 'Construction Authorized Date',
                construction_complete_date: 'Construction Completed Date',
                location_score: 'Location Score',
                growth: 'Growth Score',
                est_price_sqm: 'Estimated Price per sqm',
                est_price: 'Estimated Price',
                recent_searches: 'Recent Searches',
                clear: 'clear?',
                open_addr: 'Click to open this address'
                
            },
            selected: {
                firstName: 'First Name',
                lastName: 'Last Name',
                email: 'Email',
                password: 'Password',
                confirmPassword: 'Confirm Password',
                signup: 'Sign Up',
                login: 'Log In',
                commReport: 'XAI Commercial Report',
                commR1: 'Quickly search prices for commercial buildings',
                commR2: 'Learn insights and trends around areas in South Korea',
                betaWIP: 'Beta In Progress',
                try: 'Try',
                go: 'Go',
                ypReport: 'XAI Yeonlip Report',
                ypR1: 'Search through small apartments and residences in South Korea.',
                ypR2: 'Fast, efficient, using cutting edge technologies in AI',
                dataMarket: 'XAI Data Market',
                dmR1: 'Access our APIs to create custom solutions',
                dmR2: 'Dozens of data sources',
                dmR3: 'Pay by the call',
                search: 'Search',
                greetings: 'Welcome back, ',
                welcomep1: 'Ready to search for Yeonlip real estate?',
                welcomeCommP1: 'Ready to search for Commercial realestate?',
                welcomep2:'Get started by entering an address above.',
                building_stats: 'Building Stats',
                land_stats: 'Land Stats',
                floors: 'Floors',
                subfloors: 'Subfloors',
                constructed: 'Constructred',
                elevators: 'Elevators',
                emergency_elevators: 'Emergency Elevators',
                height: 'Height',
                base_area: 'Base Area',
                land_area: 'Land Area',
                total_area: 'Total Area',
                base_to_land: 'Base to Land Area',
                constructed_date: 'Constructed Date',
                auth_date: 'Authorized Use Date',
                land_cgr: 'Land CGR Code',
                purpose_area: 'Purpose Area',
                top_code: 'Topographical Code',
                road_code: 'Roadside Code',
                myAccount: 'My Account',
                logout: 'Logout',
                dong_addr: 'Dong Address',
                road_addr: 'Road Address',
                building_name: 'Building Name',
                gu_code: 'Gu Code',
                dong_code: 'Dong Code',
                land_type_code: 'Land Type Code',
                bun: 'Bun',
                ji: 'Ji',
                new_bun: 'New Bun',
                new_ji: 'New Ji',
                structure_name: 'Structure Name',
                structure_others: 'Other Structure Names',
                main_use_name: 'Main Use Name',
                main_use_others: 'Other Main Uses',
                roof_name: 'Roof Name',
                roof_name_others: 'Other Roof Names',
                use_confirmed_date: 'Use Confirmed Date',
                area_usage: 'Area Usage',
                land_price_per_sqm: 'Price of land per sqm',
                land_price: 'Land price',
                construction_year: 'Construction Year',
                construction_authorize_date: 'Construction Authorized Date',
                construction_complete_date: 'Construction Completed Date',
                location_score: 'Location Score',
                growth: 'Growth Score',
                est_price_sqm: 'Estimated Price per sqm',
                est_price: 'Estimated Price',
                recent_searches: 'Recent Searches',
                clear: 'clear?',
                open_addr: 'Click to open this address',
            }
        }
    }
}

const actions = {
    
}

const mutations = {

}

const getters = {
    selectedLanguage: state => state.language.selected
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}