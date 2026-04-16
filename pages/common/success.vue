<template>
  <view class="success">
    <view class="icon-container"> 
    </view>
    <view class="content">
      <view class="item-style"><text>*订餐成功</text></view>  
      <view class="item-style"><text>*如要重新下订单，请联系商家撤销原订单</text></view> 
    </view>
   <view class="text-container"> 
    <view><text>【{{hotel.hotelName}}】</text></view>
    <view><text>如有疑问，请联系</text><text style="cursor:pointer;color:#0765ae;padding-left:8px" @click="makePhoneCallEvent(hotel.contactPhone)">{{hotel.contactPhone}}</text></view>
    
   </view>
  </view>
</template>

<script>
export default{
  components: {},
  data() {
    return {
      hotel:{}
    }
  },
  computed: {},
  methods: {
     //手机则拨打电话，其它设备复制
     makePhoneCallEvent(phone) {
     if(!phone){
      return;
     }

      let deviceType = uni.getSystemInfoSync().deviceType;
      if (deviceType == "phone") {
        uni.makePhoneCall({
          phoneNumber: phone, //仅为示例
          success: (success) => {
            //console.log("调用成功", success);
          },
        });
        return;
      }
      uni.setClipboardData({
        data: phone,
        success: function () {
          //console.log("success");
        },
      });
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad(params) {
    //console.log("2333",params);
    try {
      if(params['hotel']){
        this.hotel= JSON.parse(params['hotel']);
      }
    } catch (error) {
      
    }
  },
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
}
</script>

<style lang="scss"> 
  .success{
    display: flex;
    flex-direction: column;
    margin:auto;
      max-width: 450px;
      height: 100vh;
    .icon-container{
      padding:60px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
     
    }
    .content{
      flex: 1;
      .item-style{
        display: flex;
        padding:8px 30px;
        flex-direction: column;
        justify-content: center;
        color: #0765ae;
      }
    }
    .text-container{
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding:0 15px;
      color: #bbb;
    }
  }
</style>