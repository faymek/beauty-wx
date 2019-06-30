// templates/goodItem/goodItem.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifScroll: true,
    right: '../../../resources/images/right.png',
    coin: '/resources/images/coinyen.png',
    totalPrice:11217/2,
    orders: [
      {
        supplierName: "优昵母婴专营店",
        status: 2,
        totalNum: 5,
        totalPrice: 11217 / 2,
        time: "1548043462",
        Items: [
          {
            id: 50284,
            img: "https://img.alicdn.com/imgextra/i1/1674468869/O1CN0187O0ni2FO3D0o4qAZ_!!1674468869.jpg_430x430q90.jpg",
            title: "苏维超宽口PPSU宝宝学饮杯带吸管儿童大口径广口吸管杯防摔带手柄",
            price: [78, 80],
            weight: 8.2,
            num: 50,
            selected: true,
            sale: ["50", "件"]
          },
          {
            id: 50284,
            img: "https://img.alicdn.com/imgextra/i2/1674468869/O1CN01U2CRB52FO3C1254jU_!!1674468869.jpg_430x430q90.jpg",
            title: "婴儿牙胶手套宝宝戒吃手神器咬咬乐磨牙玩具儿童口咬胶硅胶磨牙棒",
            price: [60, 78],
            weight: 8.2,
            num: 100,
            selected: true,
            sale: ["100", "件"]
          }
        ],
      },
      {
        supplierName: "毫州胜豪生物源头厂家",
        status: 1,
        time: "1548043462",
        Items: [
          {
            img: "../../../resources/images/demo1.jpg",
            title: "伊藤园大麦茶 500ml*15瓶 整箱",
            num: 30,
            sale: ["30", "件"],
            price: [43.9, 46.3]
          }
        ],
      },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  makeOrder: function(){
    this.setData({
      showModal: true,
      ifScroll: false
    })
  },

  submit: function(){
    wx.navigateTo({
      url: '../orderSuccess/orderSuccess',
    })
  },

  close_mask: function () {
    this.setData({
      showModal: false,
      ifScroll: true
    })
  },
  onLoad: function (options) {
    this.setData({
      orders: app.globalData.orders,
      totalPrice: app.globalData.totalPrice,
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