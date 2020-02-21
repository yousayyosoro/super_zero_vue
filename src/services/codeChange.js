let lodash = require('lodash');
const obj = {
    //性别转换设置
    sexSource01: [
        {
            id: 1,
            name: '男'
        },
        {
            id: 0,
            name: '女'
        }
    ],
    sexSource02: [
        {
            id: '1',
            name: '男'
        },
        {
            id: '0',
            name: '女'
        }
    ],
    sexSource: [
        {
            id: '0',
            name: '女'
        },
        {
            id: '1',
            name: '男'
        },
        {
            id: '2',
            name: '不限'
        }
    ],
    sex(d) {
        let result = lodash.find(this.sexSource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
             result = lodash.find(this.sexSource, function (o) { return o.id === d; });
            result = {
                id: "",
                name: ''
            }
        }
        return result;
    },
    //账号状态转换
    enableSource: [
        {
            id: 0,
            name: '禁用'
        },
        {
            id: 1,
            name: '启用'
        },
        {
            id: 2,
            name: '等待审核'
        },
        {
            id: 3,
            name: '审核不通过'
        }
    ],
    enable(d) {
        let result = lodash.find(this.enableSource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
            result = {
                id: "",
                name: ''
            }
        }
        return result;
    },
    //辅材订单状态
    auxHdSource: [
        {
            id: 0,
            name: '取消'
        },
        {
            id: 1,
            name: '进行中'
        },
        {
            id: 2,
            name: '已完成'
        },
        {
            id: 3,
            name: '已结案'
        },
        {
            id: 4,
            name: '待签合同'
        }
    ],
    auxHd(d) {
        let result = lodash.find(this.auxHdSource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
            result = {
                id: "",
                name: ''
            }
        }
        return result;
    },
    diarySource: [
        {
            id: 0,
            name: "icon-buoumaotubiao20 dlc01-icon4",
            descr:'无此项'
        },
        {
            id: 1,
            name: "icon-renzhengtongguo dlc01-icon1",
            descr:'已验收'
        },
        {
            id: 2,
            name: "dlc01-icon-circulp dlc01-icon3",
            descr:'未开始'
        },
        {
            id: 3,
            name: "dlc01-icon-circulp dlc01-icon5",
            descr:'进行中'
        },
        {
            id: 4,
            name: "icon-gantanhao dlc01-icon2",
            descr:'延期'
        }
    ],
    //装修日志状态
    diaryStatus(d) {
        let result = lodash.find(this.diarySource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
            result = {
                id: "",
                name: ''
            }
        }
        return result;
    },
    //装修日志tab-控制
    headerListItemTypeSource: [
        {
            id: '0',
            descr: "施工类",
            diaryTypeId: "DT01",
            type: null,
            case: 1
        },
        {
            id: '1',
            descr: "通知类",
            diaryTypeId: "DT02",
            type: null,
            case: 1
        },
        {
            id: '2',
            descr: "退补改材料",
            diaryTypeId: null,
            type: "3",
            case: 2
        },
        {
            id: '3',
            descr: "发起变更",
            diaryTypeId: null,
            type: "4",
            case: 2
        }
    ],
    getHeaderListItemType(d) {
        let result = [];
        let that = this;
        lodash.forEach(d, function (item) {
            let val = lodash.find(that.headerListItemTypeSource, function (o) { return o.id === item; });
            if (typeof val !== "undefined") {
                result.push(val);
            }
        });
        return result;
    },
    //装修日志-施工类验收状态
    accepStatusSource: [
        {
            id: 0,
            name: "未开始",
        },
        {
            id: 1,
            name: "已验收",
        },
        {
            id: 2,
            name: "验收不通过",
        },
        {
            id: 3,
            name: "发起验收",
        },
        {
            id: 4,
            name: "等待业主验收",
        },
        {
            id: 5,
            name: "无需验收",
        },
        {
            id: 6,
            name: "等待施工队验收",
        },
        {
            id: 7,
            name: "等待施工队再次验收",
        }
    ],
    getAccepStatusSource(d){
        let result = lodash.find(this.accepStatusSource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
            result = {
                id: "",
                name: ''
            }
        }
        return result;
    },
    //装修日记-通知类状态
    notStatusSource:[
        {
            id: 0,
            name: "未开始",
        },
        {
            id: 1,
            name: "发起通知",
        },
        {
            id: 2,
            name: "通知完成",
        },
    ],
    getNotStatusSource(d){
        let result = lodash.find(this.notStatusSource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
            result = {
                id: "",
                name: ''
            }
        }
        return result;
    },
    // 设计师收费模式
    chargingSource:[
        {
            id: '1',
            name: "按平方",
        },
        {
            id: '2',
            name: "按套",
        }
    ],
    getChargingSource(d){
        let result = lodash.find(this.chargingSource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
            result = {
                id: "",
                name: ''
            }
        }
        return result;
    },
    //设计师工作年限
    workingYearSource:[
        {
            id: 0,
            name: "不限",
        },
        {
            id: 1,
            name: "1~3年",
        },
        {
            id: 2,
            name: "3~5年",
        },
        {
            id: 3,
            name: "5年以上",
        }
    ],
    getWorkingYearSource(d){
        let result = lodash.find(this.workingYearSource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
            result = {
                id: "",
                name: ''
            }
        }
        return result;
    },
    //接受现有方案
    existedPlanSource:[
        {
            id: 2,
            name: "不限",
        },
        {
            id: 1,
            name: "是",
        },
        {
            id: 0,
            name: "否",
        }
    ],
    getExistedPlanSource(d){
        let result = lodash.find(this.existedPlanSource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
            result = {
                id: "",
                name: ''
            }
        }
        return result;
    },
    //材料图标表述
    consCateIconSource:[
        {
            id: 'Z01',
            name: "瓷砖",
            icon:'icon-youpinwangtubiao-'
        },
        {
            id: 'Z02',
            name: "石材",
            icon:'icon-shicai'
        },
        {
            id: 'Z03',
            name: "地板",
            icon:'icon-shouji5'
        },
        {
            id: 'Z04',
            name: "橱柜",
            icon:'icon-chugui'
        },
        {
            id: 'Z05',
            name: "定制门",
            icon:'icon-icon-test-copy'
        },
        {
            id: 'Z06',
            name: "定制铝合金门",
            icon:'icon-icon-test-copy'
        },
        {
            id: 'Z07',
            name: "洁具、五金件",
            icon:'icon-weiyujijuanzhuang'
        },
        {
            id: 'Z08',
            name: "扣板",
            icon:'icon-kouban'
        },
        {
            id: 'Z09',
            name: "灯具",
            icon:'icon-dengju'
        },
        {
            id: 'Z10',
            name: "定制柜体",
            icon:'icon-guizichuangtougui'
        },
        {
            id: 'Z11',
            name: "窗帘",
            icon:'icon-youpinwangtubiao-1'
        },
        {
            id: 'Z14',
            name: "硅藻泥",
            icon:'icon-guizaoni'
        },
        {
            id: 'Z15',
            name: "油漆材料",
            icon:'icon-youqi'
        },
        {
            id: 'Z16',
            name: "贝壳粉",
            icon:'icon-beike'
        },
        {
            id: 'Z17',
            name: "墙面装饰",
            icon:'icon--qiangmiandiban'
        },
        {
            id: 'Z18',
            name: "集成装饰",
            icon:'icon-jicheng'
        }
    ],
    getConsCateIcon(d){
        let result = lodash.find(this.consCateIconSource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
            result = {
                id: "",
                name: '',
                icon:''
            }
        }
        return result;
    },
    //辅材材料
    categoryIconSource:[
      {
        id: 'G01',
        name: "给排水",
        icon:'icon-youpinwangtubiao-'
      },
      {
        id: 'G02',
        name: "强弱电",
        icon:'icon-youpinwangtubiao-'
      },
      {
        id: 'G03',
        name: "木工板材",
        icon:'icon-youpinwangtubiao-'
      }
    ],
    getCategoryIcon(d){
      let result = lodash.find(this.categoryIconSource, function (o) { return o.id === d; });
      if (typeof result === "undefined") {
          result = {
              id: "",
              name: '',
              icon:''
          }
      }
      return result;
  },
    //通知类型
    noticeTypeSource:[
        {
            id: 1,
            name: "测量",
        },
        {
            id: 2,
            name: "发货",
        },
        {
            id: 3,
            name: "安装",
        }
    ],
    getNoticeType(d){
        let result = lodash.find(this.noticeTypeSource, function (o) { return o.id === d; });
        if (typeof result === "undefined") {
            result = {
                id: "",
                name: ''
            }
        }
        return result;
    },
};
export default obj;