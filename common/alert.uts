class Alert{
    constructor(){
        this.NoPermisson={}
    }
       alertNoPermisson(){
  
         uni.showModal({
            title: '没有足够的权限',
            content: '请联系负责人',
            confirmText: '确认',
            showCancel:false,
            success: function (res) {
                if (res.confirm) {
                  //  //console.log('用户点击确定');
                } else if (res.cancel) {
                  //  //console.log('用户点击取消');
                }
            }
        });
    }
}
//module.exports = new Alert();
export var alert = new Alert();