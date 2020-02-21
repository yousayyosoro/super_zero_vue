
import Vue from 'vue';
import Vuex from 'vuex';
import vuexAlong from  'vuex-along';
import storeModule from './storeModule'

Vue.use(Vuex);
// vuexAlong.onlySession(true);
vuexAlong.watchSession(['routeInfo','cityInfo','diaryLogrderInfo','headerListItemTypeInfo','CT10Info'],true);
const store=new Vuex.Store({
    modules:{
        commonStoreModel:{
            state:storeModule.commonStoreModel.state,
            mutations:storeModule.commonStoreModel.mutations,
            getters:storeModule.commonStoreModel.getters,
            actions:storeModule.commonStoreModel.actions,
        },
        loginStoreModel:{
            state:storeModule.loginStoreModel.state,
            mutations:storeModule.loginStoreModel.mutations,
            getters:storeModule.loginStoreModel.getters,
            actions:storeModule.loginStoreModel.actions,
        },
        diaryLogStoreModel:{
            state:storeModule.diaryLogStoreModel.state,
            mutations:storeModule.diaryLogStoreModel.mutations,
            getters:storeModule.diaryLogStoreModel.getters,
            actions:storeModule.diaryLogStoreModel.actions,
        },
        CT10StoreModel:{
            state:storeModule.CT10StoreModel.state,
            mutations:storeModule.CT10StoreModel.mutations,
            getters:storeModule.CT10StoreModel.getters,
            actions:storeModule.CT10StoreModel.actions,
        }
    },
    plugins: [vuexAlong]
});

export default store;