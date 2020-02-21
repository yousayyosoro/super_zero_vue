import { Message } from 'element-ui'

export default {
    delConfirm(that,sureBack,cancleBack){
        that.$confirm('此操作删除该记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            sureBack(function(){
                that.$message({
                    type: 'success',
                    message: '删除成功!'
                  });
            });
          }).catch(() => {
            that.$message({
              type: 'info',
              message: '已取消删除'
            }); 
            if (typeof cancleBack === "undefined") {
                return false
            }else{
                cancleBack();   
            }  
          });
    },
    sureConfirm(that,sureBack,cancleBack){
        that.$confirm('是否继续执行此操作?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            sureBack(function(){
                that.$message({
                    type: 'success',
                    message: '保存成功!'
                  });
            });
          }).catch(() => {
            that.$message({
              type: 'info',
              message: '已取消操作'
            }); 
            if (typeof cancleBack === "undefined") {
                return false
            }else{
                cancleBack();   
            }  
          });
    }
}