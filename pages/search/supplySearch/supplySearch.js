// pages/search/supplySearch/supplySearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: "帽子",
    sortMethod:'综合',
    suppliers:[
      {
        name: "上海悦康帽业有限公司",
        model: "生产加工",
        product: "布帽；定型帽礼帽；羊毛毡帽；运动帽；棒球帽；男帽；女帽；民族帽",
        old: "13",
        productNum: "1086",
        customerNum: "1416",
        place: "上海市松江区"
      },
      {
        name: "上海悦康帽业有限公司",
        model: "生产加工",
        product: "布帽；定型帽礼帽；羊毛毡帽；运动帽；棒球帽；男帽；女帽；民族帽",
        old: "13",
        productNum: "1086",
        customerNum: "1416",
        place: "上海市松江区"
      },
      {
        name: "上海悦康帽业有限公司",
        model: "生产加工",
        product: "布帽；定型帽礼帽；羊毛毡帽；运动帽；棒球帽；男帽；女帽；民族帽",
        old: "13",
        productNum: "1086",
        customerNum: "1416",
        place: "上海市松江区"
      },
      {
        name: "上海悦康帽业有限公司",
        model: "生产加工",
        product: "布帽；定型帽礼帽；羊毛毡帽；运动帽；棒球帽；男帽；女帽；民族帽",
        old: "13",
        productNum: "1086",
        customerNum: "1416",
        place: "上海市松江区"
      },
      {
        name: "上海悦康帽业有限公司",
        model: "生产加工",
        product: "布帽；定型帽礼帽；羊毛毡帽；运动帽；棒球帽；男帽；女帽；民族帽",
        old: "13",
        productNum: "1086",
        customerNum: "1416",
        place: "上海市松江区"
      },
      {
        name: "上海悦康帽业有限公司",
        model: "生产加工",
        product: "布帽；定型帽礼帽；羊毛毡帽；运动帽；棒球帽；男帽；女帽；民族帽",
        old: "13",
        productNum: "1086",
        customerNum: "1416",
        place: "上海市松江区"
      }
    ]
  },

  back: function () {
    wx.navigateBack({

    })
  },

  changeMethod:function(e){
    let method = e.currentTarget.dataset.method
    this.setData({
      sortMethod:method
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