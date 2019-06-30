// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendType: 0,
    selectedNum: 1,
    recommandItems: [
      {
        id: 50284,
        label: '推荐产品',
        img: "../../resources/images/hp_tuijian_2.jpg",
        title: "测试商品102",
        price: [100, 200],
        num: 4230,
        time: '2019/03/01',
        supplierNum: 2,
        status: 0, //0未加购，1已加购
      }
   ],
    suppliers: [
      {
        name: "test",
        model: "化妆品生产",
        product: "口红，眼影，面膜，香水",
        old: "3",
        productNum: "48",
        customerNum: "116",
        place: "xx",
        img: "../../resources/images/hp_tuijian_1.jpg",
        items: ['https://cbu01.alicdn.com/img/ibank/2018/072/415/9038514270_1464209007.140x140xz.jpg']
      },
    ]
  },

  chooseRecommendType:function(e){
    this.setData({
      recommendType: parseInt(e.currentTarget.dataset.recommendtype)
    })
  },

  toCate: function (event) {
    wx.navigateTo({
      url: '/pages/category/category'
    })
  },

  publish: function(e) {
    wx.navigateTo({
      url: '/pages/recommend_1/publish/publish'
    })
  },

  swiperChange:function(e){
    this.setData({
      recommendType: e.detail.current
    })
  },

  loadGood:function(){
    console.log("start load good")
    let tmp = this.data.recommandItems.slice(0,3)
    tmp = this.data.recommandItems.concat(tmp);
    this.setData({
      recommandItems: tmp
    })
    
  },

  loadSupplier: function (){
    console.log("start load supplier")
    let tmp = this.data.suppliers.slice(0,3)
    tmp = this.data.suppliers.concat(tmp)
      this.setData({
      suppliers:tmp
    })
  },

  changeStatus: function (e){
    let idx = e.currentTarget.dataset.idx;
    if (this.data.recommandItems[idx].status == 0) {
      let rec = this.data.recommandItems;
      rec[idx].status = 1;
      this.setData({
        recommandItems: rec
      })
    }
  },

  selectChange: function(e) {
    this.setData({
      selectedNum : !this.data.selectedNum
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        let w_height = res.windowHeight * (750 / res.windowWidth)
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