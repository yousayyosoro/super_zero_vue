import Vue from 'vue'
import moment from 'moment'

const filtersGlobal = {
  /**
   * 金额格式化 如：12，234,344.73
   * @param {Number} money 金额
   * @param {String} currency 货币符号， 默认￥
   * @param {Number} decimals 保留小数点位数，默认2位
   */
  moneyFormat(money, currency, decimals){
    const digitsRE = /(\d{3})(?=\d)/g
    money = parseFloat(money)
    if (!isFinite(money) || (!money && money !== 0)) return ''
    currency = currency != null ? currency : '￥'
    decimals = decimals != null ? decimals : 2
    var stringified = Math.abs(money).toFixed(decimals)
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
    var i = _int.length % 3
    var head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : ''
    var _float = decimals ? stringified.slice(-1 - decimals) : ''
    var sign = money < 0 ? '-' : ''
    return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
  },

  /**
   * 时间转换
   * @param {*} val 时间值
   * @param {String} format 时间格式，默认：YYYY-MM-DD HH:mm
   */
  JXmonent(val, format){
    format = format || 'YYYY-MM-DD HH:mm';
    return moment(val).format(format);
  },
  /**
   * 护理类型
   * @param {Number} val 订单类型、护理类型
   */
  orderTypeFormat(val){
    let type = ['陪护服务', '住家月嫂', '母婴陪护'];
    return type[val-1];
  },
  /**
   * 性别
   * @param {number} val 性别代码
   */
  sexFormat(val){
    let sex = ['女','男'];
    return sex[val];
  },
  /**
   * 收支类型
   * @param {number} val 收支类型
   */
  billTypeFormat(val){
    let type = ['支付','收入'];
    return type[val-1];
  },
  /**
   * 支付方式
   * @param {number} val 支付方式
   */
  paymentTypeFormat(val){
    let paymentType = ['现金','微信','支付宝','银行卡'];
    return paymentType[val-1];
  }
}

// 全局过滤
Object.keys(filtersGlobal).forEach(key =>{
  Vue.filter(key, filtersGlobal[key])
})

export default filtersGlobal
