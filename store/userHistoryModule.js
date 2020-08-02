export const state = () => {
  return {
    recentResHistSearches : [
      {
        id: 1,
        address: '서울특별시 강동구 둔촌동 46-61',
        date: '4/7/2020',
        estPrice: '123000000000'
      },
      {
        id: 2,
        address: '서울특별시 강동구 길동 333-7',
        date: '4/7/2020',
        estPrice: '123000000000'
      },
      {
        id: 3,
        address: '서울특별시 강남구 삼성동 24-17',
        date: '4/7/2020',
        estPrice: '123000000000'
      },
    ],
    recentComHistSearches: [
      {
        id: 1,
        address: '서울특별시 강남구 대치동 27-13번지',
        date: '4/7/2020',
        estPrice: '123000000000'
      },
      {
        id: 2,
        address: '서울특별시 강남구 역삼동 827-4번지',
        date: '4/7/2020',
        estPrice: '123000000000'
      },
      {
        id: 3,
        address: '서울특별시 강남구 논현동 83-2번지',
        date: '4/7/2020',
        estPrice: '123000000000'
      },      
    ]
  }
}

export const actions = {
  
}

export const mutations = {
  CLEAR_COMM_HIST(state){
    state.recentComHistSearches = [];
  },
  CLEAR_RES_HIST(state){
    state.recentResHistSearches = [];
  }
}

export const getters = {
  getResHistory: state => state.recentResHistSearches,
  getComHistory: state => state.recentComHistSearches
}