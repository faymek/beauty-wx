// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommand:"魅惑眼影",
    inputText:"",
    searchType: 0,
    history:["魅惑眼影","这是一句很长很长很长一直到超过18个字的句子","粉饼","打底液","口红","水墨彩妆","豆沙色"],
    expand: false,
    recommands: ["透气粉饼", "打底液", "口红", "水墨彩妆", "豆沙色"],
    windowHeight:0,
  },

  goToResults: function () {
    if(this.data.searchType==0){
      wx.navigateTo({
        url: "/pages/search/goodSearch/goodSearch",
      })
    }
    else if(this.data.searchType==1){
      wx.navigateTo({
        url: "/pages/search/supplySearch/supplySearch",
      })
    }
  },

  back:function(){
    wx.navigateBack({
      
    })
  },

  down:function(){
    this.setData({
      expand: !this.data.expand
    })
  },

  inputEdit: function(e){
    this.setData({
      inputText: e.detail.value
    })
  },

  searchType0:function(){
    this.setData({
      searchType:0
    })
  },

  searchType1: function () {
    this.setData({
      searchType: 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        let w_height = res.windowHeight
        that.setData({
          windowHeight: w_height,
        })
      },
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