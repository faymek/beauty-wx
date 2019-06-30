// pages/recommend/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    right: '/resources/images/right.png',
    images: ['/resources/images/background.jpg'],
    date: '2019-10-20',
    array: ['美妆产品', '美妆产品','美妆产品'],
    index: 0
  },

  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value,
    })
  },

  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value,
    })
  },

  chooseImage: function () {
    var _this = this;
    wx.chooseImage({
      success: function (res) {
        _this.setData({
          images: res.tempFilePaths
        })
      },
    })
  },

  addImage: function () {
    if (this.data.images.length == 9)
      return;

    var _this = this;
    wx.chooseImage({
      success: function (res) {
        let tmpImages = _this.data.images
        let tmplen = tmpImages.length
        let resImages = res.tempFilePaths
        let reslen = resImages.length

        if (reslen + tmplen > 9) {
          wx.showToast({
            title: '图片超过9张',
            duration: 700,
            icon: 'loading'
          })
        }

        for (var i = 0; i < 9 - tmplen && i < reslen; i++) {
          tmpImages.push(resImages[i])
        }

        _this.setData({
          images: tmpImages
        })
      },
    })
  },

  complete: function() {
    wx.navigateTo({
      url: '../publishComplete/publishComplete',
    })
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