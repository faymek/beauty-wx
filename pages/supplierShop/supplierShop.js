// templates/goodItem/goodItem.js
const time = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '../../resources/images/supplier.png',
    star: '../../resources/images/collection1.png',
    navbar: ["首页", "全部商品", "特色商品", "店铺动态"],
    sortNavbar: ["综合", "新品", "销量", "价格"],
    currentTab: 0,
    currentSortTab: 0,
    Items: [
      {
        id: 50284,
        img: "../../resources/images/hp_tuijian_1.jpg",
        title: "测试商品101",
        price: [99, 99],
        weight: 0.5,
        num: 958,
        selected: true,
        sale: ["2", "套"]
      },
      {
        img: "../../resources/images/hp_tuijian_2.jpg",
        title: "测试商品102",
        sale: ["9", "套"],
        price: ["99", "99"]
      },
      {
        img: "../../resources/images/hp_tuijian_3.jpg",
        title: "测试商品103",
        sale: ["0", "套"],
        price: ["99", "99"]
      }
    ]
  },

  toSupplierDetail:function(){
    wx.navigateTo({
      url: '/pages/detail/supplierDetail/supplierDetail',
    })
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.index,
    })
  },

  sortTap: function (e) {
    this.setData({
      currentSortTab: e.currentTarget.dataset.index,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentTab: options.id ? options.id : 0,
    })
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