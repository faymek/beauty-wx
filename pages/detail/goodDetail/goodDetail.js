// pages/detail/goodDetail/goodDetail.
import goodInfo from './goodInfo.js'
import event from '../../../utils/event';
import WxParse from '../../../wxParse/wxParse.js';
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cccInfoHidden: false,
    overflow: true,
    ROE: [
      {
        img: '../../../resources/images/country/us.png',
        "name": "美元",
        code: 'USD',
        "price": 665.4500,
        max: (46.3 / 665.45 * 100).toFixed(2),
        min: (43.9 / 665.45 * 100).toFixed(2),
      },
      {
        img: '../../../resources/images/country/eu.png',
        "name": "欧元",
        'code': 'EUR',
        "price": 737.9500,
        max: (46.3 / 737.95 * 100).toFixed(2),
        min: (43.9 / 737.95 * 100).toFixed(2),
      },
      {
        img: '../../../resources/images/country/hk.png',
        "name": "港币",
        'code': 'HKD',
        "price": 84.7800,
        max: (46.3 / 84.7800 * 100).toFixed(2),
        min: (43.9 / 84.7800 * 100).toFixed(2),
      },
      {
        img: '../../../resources/images/country/hk.png',
        "name": "英镑",
        'code': 'GBP',
        "price": 849.4700,
        max: (46.3 / 849.4700 * 100).toFixed(2),
        min: (43.9 / 849.4700 * 100).toFixed(2),
      },
      {
        img: '../../../resources/images/country/au.png',
        "name": "澳元",
        'code': 'AUD',
        "price": 466.0600,
        max: (46.3 / 466.0600 * 100).toFixed(2),
        min: (43.9 / 466.0600 * 100).toFixed(2),
      },
      {
        img: '../../../resources/images/country/jp.png',
        "name": "日元",
        'code': 'JPY',
        "price": 5.8700,
        max: (46.3 / 5.8700 * 100).toFixed(2),
        min: (43.9 / 5.8700 * 100).toFixed(2),
      }
    ],
    action: 0, //0铺货 1加入订货单 2订购
    langIndex: 0,//0chinese 1,english
    languages: ['简体中文', 'English'],
    language: {},
    ...goodInfo[0],
    actionSheetHidden: true,
    storeList: app.globalData.storeList,
    imgs: ['https://cbu01.alicdn.com/img/ibank/2018/882/406/8780604288_1464209007.400x400.jpg',
      'https://cbu01.alicdn.com/img/ibank/2018/243/066/8816660342_1464209007.400x400.jpg',
      'https://cbu01.alicdn.com/img/ibank/2018/652/987/8816789256_1464209007.400x400.jpg'],
    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    cur: 0,
    imgIndex: 0,
    goodId:1,
    row_scrollTop: 0,
    curType: 0,
    lockContent:false,
    notEnough:true,
    cost: '7',

    proxyRight:3,
    totalNum:0,
    totalPrice:0,
    step:1,
    storeIdChosen:0,
    goodIdChosen:0,
    service: ["无货必赔", "免费赊账", "货到付款", "免费赊账", "货到付款"]
  },

  onLoad: function () {
    this.setData({
      langIndex: wx.getStorageSync('langIndex')
    });
    this.setData({
      ...goodInfo[this.data.langIndex]
    })
    this.setLanguage();
  },

  setLanguage() {
    this.setData({
      language: wx.T.getLanguage()
    });
  },

  changeLanguage(e) {
    let index = e.detail.value;
    this.setData({	// (1)
      langIndex: index,
      ...goodInfo[index]
    });
    wx.T.setLocaleByIndex(index);
    this.setLanguage();
    event.emit('languageChanged');

    wx.setStorage({
      key: 'langIndex',
      data: this.data.langIndex
    })
  },

  swiperChange: function (e) {
    this.setData({
      imgIndex: e.detail.current
    })
  },

  countTotal:function(){
    var typeList = this.data.typeList
    var totalNum = 0
    for (let i = 0;i<typeList.length;i++){
      var specs = typeList[i].specs
      for(let j = 0;j<specs.length;j++){
        if(specs[j].num!=""){
          totalNum += parseInt(specs[j].num)
        }
      }
    }
    var prices = this.data.prices
    for (let k = 0; k < prices.length; k++){
      if(totalNum<prices[prices.length-1-k].threshold){
        if (k == prices.length - 1) {
          this.setData({
            notEnough:true,
            totalPrice:0,
            totalNum:totalNum
          })
          return
        }
        else{
          continue
        }
      }
      var totalPrice = totalNum * parseFloat(prices[prices.length - 1 - k].price)
      this.setData({
        totalPrice:totalPrice.toFixed(2),
        notEnough:false,
        totalNum: totalNum
      })
      return
    }
  },

  numInput:function(e){
    var type = e.currentTarget.dataset.type
    var spec = e.currentTarget.dataset.spec
    var val = e.detail.value
    var typeList = this.data.typeList
    var max = typeList[type].specs[spec].max
    if (parseInt(val)>max){
      val = max
    }
    
    typeList[type].specs[spec].num = val
    this.setData({
      typeList:typeList
    })
    this.countTotal()
  },

  minus:function(e){
    var type = e.currentTarget.dataset.type
    var spec = e.currentTarget.dataset.spec
    var typeList = this.data.typeList
    if (typeList[type].specs[spec].num == null){
      return
    }
    else{
      if (parseInt(typeList[type].specs[spec].num)>=1){
        typeList[type].specs[spec].num = String(parseInt(typeList[type].specs[spec].num)-1)
        this.setData({
          typeList:typeList
        })
      }
      else return
    }
    this.countTotal()
  },

  plus: function (e) {
    var type = e.currentTarget.dataset.type
    var spec = e.currentTarget.dataset.spec
    var typeList = this.data.typeList
    var max = typeList[type].specs[spec].max
    if (typeList[type].specs[spec].num == "") {
      typeList[type].specs[spec].num = String(1)
    }
    else if (parseInt(typeList[type].specs[spec].num) < max) {
      typeList[type].specs[spec].num = String(parseInt(typeList[type].specs[spec].num) + 1)
    }
    else{
      return
    }
    this.setData({
      typeList: typeList
    })
    this.countTotal()
  },

  toSupplierShop:function(){
    wx.navigateTo({
      url: '/pages/supplierShop/supplierShop',
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

  },

  bindItemTap:function(e){
    var storeId = e.currentTarget.dataset.id
    this.setData({
      step: 2,
      storeIdChosen:storeId,
      goodIdChosen: this.data.goodId//没必要，只是为了说明之后传这个值
    })
  },

  confirmAndSubmit: function (e) {
    let that = this

    if(this.data.action == 0){
      console.log("action 0")
      wx.navigateTo({
        url: '/pages/myShop/myShopItem/myShopItem?storeId=' + that.data.storeIdChosen + '&goodId=' + that.data.goodId,
      })
    }else if(this.data.action == 1) {
      console.log("action 1")
      
      wx.switchTab({
        url: '/pages/shoppingCart/shoppingCart'
      })
    }else {
      console.log("action 2")

      wx.navigateTo({
        url: '/pages/orders/makeOrder/makeOrder'
      })
    }
    
    that.setData({
      actionSheetHidden: !this.data.actionSheetHidden,
      lockContent: !this.data.lockContent,
      step:1
    })
  },

  aaa:function(){
    console.log("aaa")
  },

  selectType:function(e){
    this.setData({
      curType: e.currentTarget.dataset["id"]
    })
  },

  actionSheetTap: function (e) {
    let that = this
    /*check proxy right */
    if(this.data.proxyRight == 1){
      wx.showModal({
        title: '温馨提示',
        content: '抱歉，供应商未授权，无法分销该产品，是否要向供应商申请代理权限？',
        success: function (res) {
          if (res.confirm) {
            /*发送代理请求,收到回复后 */
            wx.showToast({
              title: '已发送申请',
              icon:'success',
              duration:1000,
            })
            setTimeout(function(){
              wx.hideToast()
            },5000)
            that.setData({
              proxyRight:2
            })
          }
        }
      })
    }
    else if (this.data.proxyRight == 2){
      wx.showToast({
        title: '正在审核中',
        icon:'loading',
        duration:3000,
      })
      /*test case */
      console.log("审核通过")
      that.setData({
        proxyRight:3
      })
    }
    else{
      this.setData({
      actionSheetHidden: !this.data.actionSheetHidden,
      lockContent: !this.data.lockContent
      })
    }
  },

  showTypeSelect: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden,
      lockContent: !this.data.lockContent,
      step: 2,
      action: e.currentTarget.dataset["action"]
    })
  },

  actionSwiperChange: function (e) {
    this.setData({
      curType: e.detail.current,
      row_scrollTop:e.detail.current*115-115
    })
  },

  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden,
      lockContent: !this.data.lockContent,
      step:1
    })
  },

  cccInfoChange: function (e) {
    this.setData({
      cccInfoHidden: !this.data.cccInfoHidden,
      overflow: !this.data.overflow
    })
  }
})
