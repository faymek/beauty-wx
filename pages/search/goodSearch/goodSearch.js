// pages/search/goodSearch/goodSearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:"帽子",
    sortMethod:"综合",
    smallFirst:true,
    goodItems: [
      {
        img: "../../resources/images/hp_tuijian_1.jpg",
        name: "测试商品101",
        sale: ["958", "件"],
        price: ["99", "99"]
      }
    ],
  },
  
  back: function () {
    wx.navigateBack({

    })
  },

  comprehensiveMethod:function(){
    this.setData({
      sortMethod:"综合"
    })
  },

  turnoverMethod:function(){
    this.setData({
      sortMethod:"成交额"
    })
  },

  priceMethod:function(){
    if (this.data.sortMethod == '价格'){
      this.setData({
        smallFirst: !this.data.smallFirst
      })
    }
    else{
      this.setData({
        sortMethod:"价格"
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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