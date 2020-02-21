const initPage={
    2:'DS004',
    3:'CT02',
    4:'MOS005',
    5:'SV02',
    6:'AD01',
    7:'AS03'
}
export default {
    commonStoreModel: {
        namespaced: true,
        state: {
            cityInfo: null,
            cityDataInfo:null,
        },
        mutations: {
            saveCityInfo(state, n) {
                state.cityInfo =n.cityObj;
                state.cityDataInfo=n.cityDataInfo;
            }
        },
        getters: {
            // filteredList: state => {
            //     return state.list.filter(item => item < 31);
            // }
        },
        actions: {
            asyncIncrease(context) {
                context.commit('saveCityInfo');
            },
        }
    },
    loginStoreModel: {
        namespaced: true,
        state: {
            routeInfo:{},
            userInfo:{}
        },
        mutations: {
            saveRouteInfo(state, n = 1) {
                state.routeInfo=initPage[n.role[0].roleId];
            },
            saveUserInfo(state,n){
                state.userInfo=n;
            }
        },
        getters: {
            // filteredList: state => {
            //     return state.list.filter(item => item < 31);
            // }
        },
        actions: {
            asyncIncrease(context) {
                context.commit('saveRouteInfo');
            },
            asyncIncrease(context) {
                context.commit('saveUserInfo');
            },
        }
    },
    diaryLogStoreModel:{
        namespaced: true,
        state: {
            diaryLogrderInfo: null,
            headerListItemTypeInfo:null
        },
        mutations: {
            saveDiaryLogOrderInfo(state, n) {
                state.diaryLogrderInfo =n;
            },
            saveHeaderListItemTypeInfo(state, n) {
                state.headerListItemTypeInfo =n;
            }
        },
        getters: {
            // filteredList: state => {
            //     return state.list.filter(item => item < 31);
            // }
        },
        actions: {
            asyncIncrease(context) {
                context.commit('saveDiaryLogOrderInfo');
                context.commit('saveHeaderListItemTypeInfo');
            },
        }
    },
    //施工队询价系统
    CT10StoreModel: {
        namespaced: true,
        state: {
            CT10Info: null
        },
        mutations: {
            saveCT10Info(state, n=null) {
                state.CT10Info =n;
            }
        },
        getters: {
            // filteredList: state => {
            //     return state.list.filter(item => item < 31);
            // }
        },
        actions: {
            asyncIncrease(context) {
                context.commit('saveCT10Info');
            },
        }
    }
}