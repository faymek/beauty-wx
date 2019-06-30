// pages/shoppingCart/shoppingCart.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */


  data: {
    hasList: false,
    totalPrice: 0,
    selectAllStatus: false,
    cartItems: app.globalData.cartItems,

  },

  getCart() {                      //向后端发送请求获得购物车信息
    var myThis = this;
    wx.request({
      url: 'http://116.62.213.180/getCart/',
      method: 'GET',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log('submit success');
        myThis.setData({
          cartItems: res.data.output
        })
        wx.showToast({
          icon: "loading",
          title: "更新购物车成功"
        });
      },
      fail: function (res) {
        console.log('submit fail');
        wx.showToast({
          icon: "loading",
          title: "更新购物车失败"
        });
      },
      complete: function (res) {
        console.log('submit complete');
      }
    });


  },

  getTotalPrice() {
    let cartItems = this.data.cartItems;
    let total = 0;
    //console.log(cartItems[0]);
    for (let i = 0; i < cartItems.length; i++) {
      let Items = cartItems[i].Items;
      for (let j = 0; j < Items.length; j++) {
        if (Items[j].selected) {
          total += Items[j].num * Items[j].price[0];
        }
      }
    }
    this.setData({
      cartItems: cartItems,

      totalPrice: total.toFixed(2)
    })
  },

  selectItem(e) {
    const item = e.currentTarget.dataset.item;
    const index = e.currentTarget.dataset.index;
    const shopIndex = this.getShopIndex(item.supplierName);
    let cartItems = this.data.cartItems;
    let selected = cartItems[shopIndex].Items[index].selected;
    selected = !selected;
    cartItems[shopIndex].Items[index].selected = selected;
    this.setData({
      cartItems: cartItems
    });
    this.checkShopStatus(shopIndex);
    this.checkAllChosenStatus();
    this.getTotalPrice();
  },

  checkShopStatus(index) {
    let cartItems = this.data.cartItems;
    let selectAllStatus = cartItems[index].selectAllStatus;
    let flag = 1;
    for (let i = 0; i < cartItems[index].Items.length; i++) {
      if (cartItems[index].Items[i].selected == 0)
        flag = 0;
    }
    cartItems[index].selectAllStatus = flag;
  },

  checkAllChosenStatus() {
    let cartItems = this.data.cartItems;
    var flag = true;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].selectAllStatus == false) {
        flag = false;
        break;
      }
    }
    this.setData({
      selectAllStatus: flag
    })
  },

  selectShopList(e) {
    const index = e.currentTarget.dataset.index;
    let cartItems = this.data.cartItems;
    let selectAllStatus = cartItems[index].selectAllStatus;
    selectAllStatus = !selectAllStatus;
    cartItems[index].selectAllStatus = selectAllStatus;
    for (let i = 0; i < cartItems[index].Items.length; i++) {
      cartItems[index].Items[i].selected = selectAllStatus;
    }
    this.setData({
      cartItems: cartItems
    })
    this.checkAllChosenStatus()
    this.getTotalPrice();
  },

  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let cartItems = this.data.cartItems;
    for (let i = 0; i < cartItems.length; i++) {
      cartItems[i].selectAllStatus = selectAllStatus;
      let Items = cartItems[i].Items;
      for (let j = 0; j < Items.length; j++) {
        Items[j].selected = selectAllStatus;
      }
    }
    this.setData({
      cartItems: cartItems,
      selectAllStatus: selectAllStatus
    })
    this.getTotalPrice();
  },

  getShopIndex(name) {
    const cartItems = this.data.cartItems;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].supplierName == name)
        return i;
    }
  },

  addCount(e) {
    const item = e.currentTarget.dataset.item;
    const index = e.currentTarget.dataset.index;
    const shopIndex = this.getShopIndex(item.supplierName);
    let cartItems = this.data.cartItems;
    let num = cartItems[shopIndex].Items[index].num;
    num = num + 1;
    cartItems[shopIndex].Items[index].num = num;
    var pid = cartItems[shopIndex].Items[index].id;
    var mythis = this;
    wx.request({
      url: 'http://116.62.213.180/addCart/',
      method: 'POST',
      data: { 'pid': pid },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log('addCart success');
        mythis.setData({
          cartItems: cartItems
        });
        mythis.getTotalPrice();
      },
      fail: function (res) {
        console.log('submit fail');
        wx.showToast({
          icon: "loading",
          title: "库存不足！"
        });
      },
      complete: function (res) {
        console.log('addCart complete');
      }
    });
  },

  minusCount(e) {
    const item = e.currentTarget.dataset.item;
    const index = e.currentTarget.dataset.index;
    const shopIndex = this.getShopIndex(item.supplierName);
    let cartItems = this.data.cartItems;
    let num = cartItems[shopIndex].Items[index].num;
    var pid = cartItems[shopIndex].Items[index].id;
    var mythis = this;
    wx.request({
      url: 'http://116.62.213.180/delCart/',
      method: 'POST',
      data: { 'pid': pid },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log('addCart success');
        num = num - 1;
        if (num == 0) {
          cartItems[shopIndex].Items.splice(index, 1)
        }
        else
          cartItems[shopIndex].Items[index].num = num;
        mythis.setData({
          cartItems: cartItems
        });
        mythis.getTotalPrice();
      },
      fail: function (res) {
        console.log('delCart fail');
      },
      complete: function (res) {
        console.log('delCart complete');
      }
    });

  },

  makeOrder: function () {
    app.globalData.orders = this.data.cartItems;
    app.globalData.totalPrice = this.data.totalPrice;
    wx.navigateTo({
      url: '/pages/orders/makeOrder/makeOrder',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const _this = this;
    // wx.getStorage({
    //   key: 'cart',
    //   success: function(res) {
    //     console.log(res.data)
    //     _this.setData({
    //       cartItems: res.data,
    //     })
    //   },
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getCart();
    this.getTotalPrice();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad();
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