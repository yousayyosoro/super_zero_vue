import city from './../assets/area'
import store from './../store/appStore'
let lodash = require('lodash');

let cityObj={};
lodash.forEach(city.data, function(value1) {
    if(value1.children.length!==0){
        lodash.forEach(value1.children, function(value2) {
            if(value2.children.length!==0){
                lodash.forEach(value2.children, function(value3) {
                    cityObj[value3.value]={
                        value:value3.value,
                        parentId:value3.parentId,
                        name:value3.name,
                        parentName:value3.parentName
                    }
                });
            }
            cityObj[value2.value]={
                value:value2.value,
                parentId:value2.parentId,
                name:value2.name,
                parentName:value2.parentName
            }
        });
        cityObj[value1.value]={
            value:value1.value,
            parentId:value1.parentId,
            name:value1.name,
            parentName:value1.parentName
        }
    }
  });
store.commit('saveCityInfo',{cityObj:cityObj,cityDataInfo:city.data});

export default {
    cityList:city.data,
    getCityInfo(d){
        let result={
            cityCode:[],
            CityName:""
        }
        let cityInfo= cityObj[d];
        if(typeof cityInfo === "undefined"){
            return result;
        }
        while (cityInfo.parentId!==0)
        {
            result.cityCode.unshift(cityInfo.value);
            result.CityName= cityInfo.name+" "+result.CityName;
            cityInfo= cityObj[cityInfo.parentId] ;
            if(typeof cityInfo === "undefined"){
                result.CityName= result.CityName.replace(/^\s+|\s+$/g,"");
                return result;
            }
        }
        result.CityName= result.CityName.replace(/^\s+|\s+$/g,"");
        return result;
    }
}
