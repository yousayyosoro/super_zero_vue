let layer = require("layui-layer");

export default {
    photoPreview(array, type, key,callback) {
        let json = {
            title: "",
            id: "",
            start: "",
            data: []
        };
        if (type === 1) {
            $(array).each(function (index, item) {
                json.data.push({
                    alt: "",
                    pid: "",
                    src: item,
                    thumb: ""
                });
            });
            layer.photos({
                photos: json
                , anim: 5
                ,end  :function(){
                    callback(false);
                }
            });
        } else if (type === 2) {
            $(array).each(function (index, item) {
                json.data.push({
                    alt: "",
                    pid: "",
                    src: item[key],
                    thumb: ""
                });
            });
            layer.photos({
                photos: json
                , anim: 5
                ,end  :function(){
                    callback(false);
                }
            });
        }

    },
    photoPreview3D(url,callback){
         top.layer.open({
            type: 2,
            shade: 0.1,
            title: '<span style="display: inline-block;width: 100%;text-align: center">3D效果图</span>',
            content:url,
            area: ['100%', '100%'],
            end  :function(){
                callback(false);
            }
        });
    },
    loadding(d){
        let index = layer.load(d, {
            shade: [0.1,'#fff'] //0.1透明度的白色背景
          });

          return index;
    },
    uploadTip(d){
        let index =layer.msg('正在传文件信息,请耐心等待', {
            icon: d
            ,shade: 0.01
          });
        return index;
    },
    loaddingClose(d){
        layer.close(d);
    }
}