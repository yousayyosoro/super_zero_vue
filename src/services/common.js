
import moment from 'moment';

Object.merge = function (e, r) {
    "object" != typeof e && (e = {});
    var t = function (e, r) {
        if (r && "object" == typeof r) if (r instanceof Array) {
            e instanceof Array || (e = []);
            for (var n = 0; n < r.length; n++) e[n] = t(e[n], r[n])
        } else e = Object.merge(e, r);
        else e = r;
        return e
    };
    for (var n in r) r.hasOwnProperty(n) && (e[n] = t(e[n], r[n]));
    for (var o = 2,
        f = arguments.length; o < f; o++) Object.merge(e, arguments[o]);
    return e
};

Object.JXmonent = function (format, val) {
    if (val === null || val === '') {
        return ''
    }
    return moment(val).format(format);
};
Object.ChackNum=function(value){
    if (isNaN(value)) { 
        execCommand('undo') 
        } else if (!this.value.replace(/[^0-9.]/g,'')) { 
          execCommand('undo') 
          } else if (value === '00') { 
            execCommand('undo') 
            } else if(value==='') {
               execCommand('undo') 
               }
}
export default {
    //图片压缩
    compress(img) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        //瓦片canvas
        let tCanvas = document.createElement("canvas");
        let tctx = tCanvas.getContext("2d");
        let initSize = img.src.length;
        let width = img.width;
        let height = img.height;
        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
        let ratio;
        if ((ratio = (width * height) / 100000000) > 1) {
            console.log("大于10000万像素");
            ratio = Math.sqrt(ratio);
            width /= ratio;
            height /= ratio;
        } else {
            ratio = 1;
        }
        canvas.width = width;
        canvas.height = height;
        //        铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制
        let count;
        if ((count = (width * height) / 1000000) > 1) {
            console.log("超过100W像素");
            count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
            //            计算每块瓦片的宽和高
            let nw = ~~(width / count);
            let nh = ~~(height / count);
            tCanvas.width = nw;
            tCanvas.height = nh;
            for (let i = 0; i < count; i++) {
                for (let j = 0; j < count; j++) {
                    tctx.drawImage(
                        img,
                        i * nw * ratio,
                        j * nh * ratio,
                        nw * ratio,
                        nh * ratio,
                        0,
                        0,
                        nw,
                        nh
                    );
                    ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                }
            }
        } else {
            ctx.drawImage(img, 0, 0, width, height);
        }
        //进行最小压缩
        let ndata = canvas.toDataURL("image/jpeg", 0.5);
        // console.log("压缩前：" + initSize);
        // console.log("压缩后：" + ndata.length);
        // console.log(
        //     "压缩率：" + ~~((100 * (initSize - ndata.length)) / initSize) + "%"
        // );
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
        return ndata;
    },
    //图片转换格式
    compressImg(file,e,callback) {
        let that = this;
        // 看支持不支持FileReader
        if (!file || !window.FileReader) return;
        if (/^image/.test(file.type)) {
            // 创建一个reader
            let reader = new FileReader();
            // 将图片2将转成 base64 格式
            reader.readAsDataURL(file);
            // 读取成功后的回调
            reader.onloadend = function () {
                let result = this.result;
                let img = new Image();
                img.src = result;
                //判断图片是否大于100K,是就直接上传，反之压缩图片
                if (this.result.length <= 1000 * 1024) {
                   that.headerImage = this.result;
                   console.log("压缩前：" + file.size);
                   that.blobToFile(that.headerImage,file,e,callback);
                } else {
                    img.onload = function () {
                        let data = that.compress(img);
                        console.log("压缩前file：" + file.size);
                        that.headerImage = data;
                        that.blobToFile(that.headerImage,file,e,callback);
                    };
                }
            };
        }
    },
    //将base64转换为文件
    dataURLtoFile(dataurl, filename,e,callback) {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        let file=new File([u8arr], filename.name, { type: mime });
        console.log("压缩后file：" + file.size);
        console.log(
            "压缩率：" + ~~((100 * (filename.size - file.size)) / filename.size) + "%"
        );
        callback({
            context:dataurl,
            file:file
        },e);
    },
    //将base64转换成blob
    dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','),        
        mime = arr[0].match(/:(.*?);/)[1],
        bstr =atob(arr[1]),        
        n = bstr.length,        
        u8arr =new Uint8Array(n);    
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);    
        }
    return new Blob([u8arr], {type: mime });
    },
    //将blob转换成file
    blobToFile(dataurl, file,e,callback){
        let that=this;
        let theBlob=that.dataURLtoBlob(dataurl);
        theBlob.lastModifiedDate =new Date();     
        theBlob.name = file.name;  
        callback({
            context:dataurl,
            file:theBlob
        },e);
    }
}