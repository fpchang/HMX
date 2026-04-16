<template>
  <view class="rec">
    <unicloud-db ref="servicesFacilitiesUdb"
		v-slot:default="{ data, loading, error, options }"
		collection="hm-facilityConfig"
    field="name"
    :page-size="200"
	
	   
	  >
    <!-- <view v-if="error">{{error.message}}</view>  
        <view v-else>  
          {{ data }}
        </view> -->
     <block v-for="item of servicesFacilities_data">
      <view class="rec-item">
        <view class="rec-item-lab">
         <image
            :src="`https://cdn.hotelsys.fun/HM/images/miniprogram/${item.icon}`"
            style="width: 60px; height: 60px"
          ></image>
		 <!-- <view> 
		  <l-icon :name="item.liIcon" size="60px" color="#bbb"></l-icon>
		  </view> -->
		  
          <view>{{ item.name }}</view>
        </view>
        <view class="right-area">
          <view class="rec-item-list">
            <view class="rec-item-list-item" v-for="it of item.support">
             
              <block  v-if="data&&data.length"> 
                <uni-icons
                type="checkbox-filled"
                size="20px"
                color="green"
              ></uni-icons>
                  <text>{{ parseStr(data, it) || it }}</text>
              </block>
            
             
            </view>
            <view class="rec-item-list-item" v-for="it in 3" style="height:0;"></view>
          </view>
          <view class="dev"></view>
        </view>
      </view>
    </block> 
	</unicloud-db>
  </view>
</template>

<script>
import uniIcons from "@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue";
import { HotelServiceClient } from "@/services/HotelServiceClient";
import {ref,computed} from "vue";
import {useStore} from 'vuex';
export default {
  components: { uniIcons },
  name: "servicesFacilities",
  props: {
   
  },
  setup(props) {
    const store = useStore();
    const hotel = computed(()=>{
      return store.state.hotelClientStore.hotel;
    });
	let servicesFacilities_data= ref(null);
    return {hotel, servicesFacilities_data}
  },
  data() {
    return {
      roomTypeList:null

    };
  },
  async created(){
    await this.getRoomType();
	this.getServicesFacilities_data();
  },
  computed: {
  
  },
  methods: {
    async getRoomType(){
      const res = await HotelServiceClient.getRoomType(this.hotel._id);
      this.roomTypeList = res.result.data;
      //console.log("roomtype", this.roomTypeList);
    
    },
    parseStr(data, it) {
      let obj = data.find((item) => item._id == it) || {};
      return obj && obj["name"];
    },
	getServicesFacilities_data(){
	 let arr = [];
	 let roomTypeList = this.roomTypeList||[];
	   roomTypeList.map((item) => {
	     let facility = item["facility"] || [];
	     arr = arr.concat(facility);
	   });
	   arr = Array.from(new Set(arr));
	   //console.log("arr", arr);
	 this.servicesFacilities_data= [
	     {
	     name: "房型设施",
	     icon: "home.svg",
			liIcon:"ri:building-4-fill",
	     type: "roomType",
	     support: Array.from(new Set(arr))
	   },
	 
	   {
	     name: "餐饮设施",
	     icon: "canying.svg",
	     type: "catering",
			liIcon:"emojione-monotone:fork-and-knife",
	     support: this.hotel.cateringServices,
	   },
	   {
	     name: "休闲设施",
	     icon: "yule.svg",
	     type: "recreation",
			liIcon:"streamline-plump:card-game-diamond-solid",
	     support: this.hotel.recreationFacility,
	   },
	   {
	     name: "运动",
	     icon: "sport.svg",
	     type: "athleticFacility",
			liIcon:"material-symbols:sports-volleyball",
	     support: this.hotel.athleticFacility,
	   },
	 ];
	}
  },
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
};
</script>

<style scoped lang="scss">
.rec {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.rec .rec-item {
  display: flex;
  width: 100%;
  margin-bottom: 15rpx;
}
.rec .rec-item-lab {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.right-area {
  display: flex;
  flex-direction: column;
  padding-left:20px;
  flex: 1;
  gap:10px;
  .rec-item-list {
    flex: 1;
    gap:8px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
    .rec-item-list-item {
      display: flex;
      align-items: center;
      justify-content: left;
      min-width: 120px;
    }
  }
  .dev {
    height: 2px;
    background: #eee;
  }
}
</style>
