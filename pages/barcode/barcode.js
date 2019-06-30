// pages/barCode/barCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // info: {
    //   goodsName: "测试：三得利乌龙茶饮料（无糖） 500ml",
    //   barcode: "6921581596048", 
    //   price: "4.50", 
    //   brand: "三得利", 
    //   supplier: "汇源三得利(上海)饮料有限公司", 
    //   standard: "500ml" 
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    console.log(options.barcode)
    wx.request({
      url: 'http://www.mxnzp.com/api/barcode/goods/details?barcode='+options.barcode,
      success(res) {
        _this.setData({
          info: res.data.data,
        })
      }
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