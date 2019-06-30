// pages/myShop/myShopItem/myShopItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopImg: "https://img.alicdn.com/imgextra/i3/1674468869/O1CN019veJ0A2FO3BVpX4g4_!!0-item_pic.jpg_430x430q90.jpg",
    storeId:null,
    shopName: "优昵母婴专营店",
    platform:"amazon",
    monthSale: "11",
    stock: "38",
    kind: "4",
    stockItems: [
      {
        img: 'https://img.alicdn.com/imgextra/i4/1674468869/O1CN01kw4J9L2FO3BXfELe7_!!1674468869.jpg_430x430q90.jpg',
        name: '婴幼儿腰凳背带披风外出防风儿童宝宝冬季加厚婴儿宝贝抱被新生冬',
        num: '65',
        price: '66.7',
        profit: '7.9',
        isStock: false
      },
      {
        img: 'https://img.alicdn.com/imgextra/i2/1674468869/O1CN01h08IHF2FO3BT4Arfu_!!2-item_pic.png_430x430q90.jpg',
        name: '婴儿硅胶防卡通撞角宝宝桌角防护角家具包角安全保护套4个装w',
        num: '90',
        price: '73.7',
        profit: '12.9',
        isStock: true
      },
      {
        img: 'https://img.alicdn.com/imgextra/i1/1674468869/TB2YKxOIN9YBuNjy0FfXXXIsVXa_!!1674468869.jpg_430x430q90.jpg',
        name: '儿童学步带婴儿学站防勒两用防摔宝宝学走路背带小孩牵引学步神器',
        num: '30',
        price: '21.7',
        profit: '7.9',
        isStock: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      storeId:options.storeId
    })
    /*获取该店铺的所有数据进行setData */
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