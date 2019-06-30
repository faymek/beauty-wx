// pages/myShop/myShop.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice: 0,userAvatar:"https://cbu01.alicdn.com/club/upload/pic/user/b/2/b/-/*xC-i2FQWvmQyvmkGMG8bxCIYOFHbvGHYvGISMGQYMFIT_s.jpeg",
    userName:"Jack Ma",
    todayOrder:"2",
    monthSale:"52.80",
    shopNum:"4",
    myShops: app.globalData.storeList,
    hasList: false,
    
    selectAllStatus: false,
    orderItems: [
      {
        orderId: "20487",
        selectAllStatus: false,
        Items: [
          {
            id: 50284,
            img: "../../resources/images/demo1.jpg",
            name: "伊藤园大麦茶 500ml*15瓶 整箱",
            price:46.3,
            num: 2,
            selected: true,
          },
          {
            id: 50284,
            img: "../../resources/images/demo1.jpg",
            name: "伊藤园大麦茶 500ml*15瓶 整箱",
            price: 43.9,
            num: 2,
            selected: true,
          },
          {
            id: 50184,
            img: "../../resources/images/demo2.jpg",
            name: "Coca-Cola/可口可乐淳茶舍 铁观音乌龙茶480ml*12无糖茶可口可乐淳茶舍 铁观音乌龙茶480ml*12无糖茶",
            price: 46.3,
            num: 1,
            selected: false,
          },
        ],
      },
      {
        orderId: "30452",
        selectAllStatus: false,
        Items: [
          {
            id: 50284,
            img: "../../resources/images/demo1.jpg",
            name: "伊藤园大麦茶 500ml*15瓶 整箱",
            price: 46.3,
            num: 2,
            selected: true,
          },
          {
            id: 50184,
            img: "../../resources/images/demo2.jpg",
            name: "Coca-Cola/可口可乐淳茶舍 铁观音乌龙茶480ml*12无糖茶",
            price: 46.3,
            num: 1,
            selected: false,
          },
        ],
      },
    ]
  },

  toMyShopItem:function(){
    wx.navigateTo({
      url: 'myShopItem/myShopItem',
    })
  },

  getTotalPrice() {
    let orderItems = this.data.orderItems;
    let total = 0;
    for (let i = 0; i < orderItems.length; i++) {
      let Items = orderItems[i].Items;
      for (let j = 0; j < Items.length; j++) {
        if (Items[j].selected) {
          total += Items[j].num * Items[j].price;
        }
      }
    }
    this.setData({
      orderItems: orderItems,
      totalPrice: total.toFixed(2)
    })
    console.log(total.toFixed(2))
  },

  selectOrderList:function(e){
    const index = e.currentTarget.dataset.index;
    let orderItems = this.data.orderItems;
    let selectAllStatus = orderItems[index].selectAllStatus;
    selectAllStatus = !selectAllStatus;
    orderItems[index].selectAllStatus = selectAllStatus;
    for (let i = 0; i < orderItems[index].Items.length; i++) {
      orderItems[index].Items[i].selected = selectAllStatus;
    }
    this.setData({
      orderItems: orderItems
    })
    this.checkAllChosenStatus()
    this.getTotalPrice();
  },

  selectItem(e) {
    const item = e.currentTarget.dataset.item;
    const index = e.currentTarget.dataset.index;
    const orderIndex = e.currentTarget.dataset.orderindex;
    let orderItems = this.data.orderItems;
    let selected = orderItems[orderIndex].Items[index].selected;
    selected = !selected;
    orderItems[orderIndex].Items[index].selected = selected;
    this.setData({
      orderItems: orderItems
    });

    this.checkOrderListStatus(orderIndex);
    this.checkAllChosenStatus()
    this.getTotalPrice();
  },

  checkOrderListStatus(index) {
    let orderItems = this.data.orderItems;
    let selectAllStatus = orderItems[index].selectAllStatus;
    let flag = 1;
    for (let i = 0; i < orderItems[index].Items.length; i++) {
      if (orderItems[index].Items[i].selected == 0)
        flag = 0;
    }
    orderItems[index].selectAllStatus = flag;
  },

  checkAllChosenStatus(){
    var flag = true;
    let orderItems = this.data.orderItems;
    for (let i = 0; i < orderItems.length; i++){
      if (orderItems[i].selectAllStatus == false){
        flag = false;
        break;
      }
    }
    this.setData({
      selectAllStatus:flag
    })
  },

  selectAll:function(){
    var aim = true
    if(this.data.selectAllStatus==true){
      aim = false
    }
    let orderItems = this.data.orderItems;
    for (let i = 0; i < orderItems.length; i++){
      orderItems[i].selectAllStatus = aim
      let orderItem = orderItems[i].Items
      for(let j = 0; j < orderItem.length; j++){
        orderItem[j].selected = aim
      }
    }
    this.setData({
      orderItems:orderItems,
      selectAllStatus:!this.data.selectAllStatus
    })
    
    this.getTotalPrice();
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
    this.getTotalPrice();
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
