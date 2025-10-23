// 页面路径：store/index.js
import { createStore } from "vuex";
import { DB } from "../api/DB";
import menuStore from "./modules/menuStore";
import orderStore from "./modules/orderStore";
import permissionStore from "./modules/permissionStore";
import scenicSpotStore from "./modules/scenicSpotStore";
import hotelClientStore from "./modules/hotelClientStore";
import { HotelService } from "../services/HotelService";
import { AccountService } from "../services/AccountService";
const store = createStore({
  modules: {
    menuStore,
    orderStore,
    permissionStore,
    scenicSpotStore,
    hotelClientStore,
  },
  state: {
    //存放状态
    isLogin: false,
    config: null, //配置信息
    viewWidth: null, //可视宽度
    partialRefreshComName: "", //局部刷新组件值
    shareObj: {},
    baseDatahasLoad: false, //基本数据准备完毕
    topHeight: '70px',
    tabHeight: 44,
    isPcShow: false,
    user: {},
    hotelList: null,
    employeeList: [],
    hotel_id: "",
    roomType: [],
    location: [],
    tt: "11",
  },

  mutations: {
    setTopHeight(state, str) {
      state.topHeight = str;
    },
    setIsLogin(state, bool) {
      state.isLogin = bool;
    },
    //当前位置坐标
    setLocation(state, loc) {
      state.location = loc;
    },
    setPartialRefreshComName(state, comName) {
      state.partialRefreshComName = comName;
    },
    setViewWidth(state, w) {
      state.viewWidth = w;
    },
    setConfig(state, obj) {
      uni.setStorageSync("config", obj);
      state.config = obj;
    },
    setShareObj(state, obj) {
      state.shareObj = obj;
    },
    setBaseDatahasLoad(state, flag) {
      state.baseDatahasLoad = flag;
    },
    setPcShow(state, flag) {
      state.isPcShow = flag;
    },
    setUser(state, user) {
      state.user = user;
    },
    setHotelId(state, hotel_id) {
      state.hotel_id = hotel_id;
    },
    checkHotel(state, hotel_id) {
      uni.setStorageSync("hotel_id", hotel_id);
      store.commit("setHotelId", hotel_id);
       store.dispatch("getPermissionList", hotel_id);
        store.dispatch("getRoomType");
    },
    //调用 this.$store.commit('updateHotelList',[])
    updateHotelList(state, list) {
      state.hotelList = list;
      store.commit("setDefaultHotel");
    },
    updateEmployeeList(state, list) {
      state.employeeList = list;
    },
    updateRoomType(state, list) {
      state.roomType = list;
    },

    updateScenicSpot(state, list) {
      state.scenicSpotList = list;
    },

    setDefaultHotel(state) {
      if (!state.hotelList.length) {
        return;
      }
      let _hotel_id = uni.getStorageSync("hotel_id");

      let h = state.hotelList.find((item) => {
        return item._id == _hotel_id;
      });
      let n_hotel_id = h ? _hotel_id : state.hotelList[0]._id;
      if (n_hotel_id == state.hotel_id) {
        console.warn("与旧hotel_id相同，无需重置");
        return;
      }
      store.commit("checkHotel", n_hotel_id);
     
    },
    updateUser(state) {     
      const user = uni.getStorageSync("user");
      if (user) {
        store.commit("setUser", user);
      }
    },
  },
  actions: {
    initViewWidth(context) {
      const sys = uni.getSystemInfoSync();
      let isPc = sys["deviceType"] == "pc";
      let w = sys["windowWidth"];
      // #ifdef MP-WEIXIN ||APP-PLUS
      w = uni.getWindowInfo().windowWidth;
      isPc = uni.getDeviceInfo()["deviceType"] == "pc";
      // #endif
      let scrollWidth = isPc ? 20 : 0;
      let val = w - scrollWidth;
      context.commit("setViewWidth", val);
    },
    async getUser(context) {
      const res = await AccountService.getuserByToken();
      if (res.result.data[0]) {
        uni.setStorageSync("user", res.result.data[0]);
        context.commit("setUser", res.result.data[0]);
      }
      return res;
    },
    async getHotelList(context) {
      console.log("服务端hotellist");
      const res = await HotelService.getHotelList();
      console.log("酒店列表", res);
      context.commit("updateHotelList", res.result);
      return res;
    },
    async getRoomType(context) {
      const res = await HotelService.getRoomType(context.state.hotel_id);
      //console.log("房型列表", res);
      //let obj = res.result.data.length?res.result.data:[];
      context.commit("updateRoomType", res.result.data);
      return res;
    },
    errorEvent(context, error) {
      try {
        const { code, msg } = error;
        if (code == 9999) {
          context.dispatch("loginOut");
        }
      } catch (error) {}
    },
    /**
     * 
     * @param {*} context 
     * @param {*} loginSuccess 未登录进入登录页面，登录成功后触发
     * @param {*} noLoginEvent 未登录时直接触发
     * @returns 
     */
    async loginEvent(context, loginSuccess,noLoginEvent=null) {
        if (!uni.getStorageSync("hm_token")) {
          //未登录
          context.dispatch("clearCache");      
          return Promise.reject("未登录");                
        };
       // await context.dispatch("navPageLogin",loginSuccess);
        const res = await AccountService.validToken();
        if (res.result.code) {
          res.result.msg &&
            uni.showToast({
              title: res.result.msg,
              duration: 2000,
              icon: "none",
            });
            context.dispatch("loginOut");
          return Promise.reject("token验证失败");
        }
        return Promise.resolve('token验证通过')
    },
    async vaildToken(context) {
     
      const res = await AccountService.validToken();
       console.log(999999,res)
      if (res.result.code) {
        res.result.msg &&
          uni.showToast({
            title: res.result.msg,
            duration: 2000,
            icon: "none",
          });
		   console.log("token校验不通过");
        context.dispatch("loginOut");
        return Promise.reject;
      }
      //console.log("token验证通过");
      return Promise.resolve;
    },
    navPageLogin(context, loginSuccess) {
     return new Promise((resolve,reject)=>{
      let userRole = uni.getStorageSync("userRole");
      //console.log("userRole",userRole)
      let events ={
        loginSuccess() {
          //console.log("执行loginsuccess");
          if (loginSuccess) {
            loginSuccess();
            resolve();
            return;
          }
          resolve();
        },
      };
        uni.redirectTo({        
          url: "/pages/indexAdvise/indexAdvise",
          events: {
            loginSuccess(){
              uni.reLaunch({url:"/pages/home/home"})
            }
          }
        });
        return;
     })
     
    },
    clearCache(context) {
      uni.removeStorageSync("hm_token");
      uni.removeStorageSync("user");
      context.commit("setUser",null);
      context.commit("setHotelId", "");
    },
    loginOut(context) {
      console.log("退出登录");
      context.dispatch("clearCache");
      uni.reLaunch({
        url: "/pages/indexAdvise/indexAdvise",
      });
    },
  },
  getters: {
    // hotelObj: (state) => {
    //   return state.hotelList.find((item) => item._id == state.hotel_id);
    // },
  },
});
export default store;
