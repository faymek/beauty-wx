// pages/detail/supplierDetail/supplierDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curStatus: 0,
    basic:{
      company: [
        {
          type: "公司名称",
          content: "方家铺子 （莆田）绿色食品有限公司"
        },
        {
          type: "经营模式",
          content: "生产厂家"
        },
        {
          type: "所在地区",
          content: "福建 莆田市城厢区"
        },
        {
          type: "主营产品：",
          content: "天然海味、干贝、虾仁、淡菜干、本港鱿鱼、五谷杂粮、莲子、薏米、西米、养生菌菇、香菇、银耳、虫草花、黑木耳、滋补干果、桂圆干、桂圆肉、红枣、枸杞"
        },
        {
          type: "商品数量",
          content: "91条"
        }
      ],
      service:[
        {
          type:"货描相符",
          value:"2"
        },
        {
          type: "响应速度",
          value: "7"
        },
        {
          type: "发货速度",
          value: "-12"
        }
      ],
      backHead: "20",
      contact:["方敏","福建莆田市荔城区涵东大道1758号"]
    },
    identify:{
      register:[
        {
          type: "公司名称：",
          content: "方家铺子 （莆田）绿色食品有限公司"
        },
        {
          type: "经营地址：",
          content: "福建莆田市荔城区涵东大道1758号"
        },
        {
          type: "成立日期：",
          content: "2006年09月07日"
        },
        {
          type: "经营范围：",
          content: "经营各类商品和技术的进出口，但国家限定公司经营或禁止进出口的商品及技术除外，电子元器件、通讯器材、建材、五金交电、普通机械设备、集成电路板的销售，电脑网络及计算机软件的开发、销售"
        },
        {
          type: "注册号",
          content: "91350303791794707H"
        },
        {
          type: "法人代表",
          content: "方敏"
        },
        {
          type: "企业类型",
          content: "一人有限责任公司"
        },
        {
          type: "营业期限",
          content: "2006-09-07 至 2026-09-06"
        },
        {
          type: "登记机关",
          content: "福建省莆田市涵江区工商行政管理局"
        },
      ]
    }
  },

  chooseCurStatus:function(e){
    this.setData({
      curStatus:parseInt(e.currentTarget.dataset.curstatus)
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