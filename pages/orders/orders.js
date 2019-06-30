// templates/goodItem/goodItem.js
const time = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ["全部","待付款","待收货","已完成"],
    currentTab: 0,
    orders:[
    {
        shopName: "测试店铺",
      status: 2,
      totalNum: 150,
      totalPrice: 9900,
      time: "1548043462",
      Items: [
        {
          id: 50284,
          img: "../../resources/images/hp_tuijian_1.jpg",
          title: "测试商品101",
          price: [99, 99],
          weight: 0.5,
          selected: true,
          sale: ["2", "件"]
        },
        {
          id: 50284,
          img: "../../resources/images/hp_tuijian_1.jpg",
          title: "测试商品102",
          price: [99, 99],
          weight: 0.4,
          selected: true,
          sale: ["9", "件"]
        }
      ],
    }
    ]
  },

  logistics: function() {
    wx.navigateTo({
      url: './wuliu/wuliu',
    })
  },

  confirmOrder: function() {
    wx.navigateTo({
      url: './confirmOrder/confirmOrder',
    })
  },
  
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.index,
    })
    this.showData(this.data.currentTab)
  },

  showData: function(index){
    if (index==0){
      this.setData({
        showOrders:this.data.orders
      })
      return;
    }
    const orders = this.data.orders;
    const showOrders = [];
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].status == index){
        showOrders.push(orders[i])
      }
    }
    this.setData({
      showOrders: showOrders
    })
  },

  getTotal() {
    let orders = this.data.orders;
    let totalNum = 0;
    let totalPrice = 0;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentTab: options.id?options.id:0,
    })
    this.showData(this.data.currentTab)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})