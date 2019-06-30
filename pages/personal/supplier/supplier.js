// pages/recommend/recommend.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        actionSheetHidden: true,
        recommendType: 0,
        currentTab: 0,
        navbar: ["全部", "星标", "已关注", "交易过"],
        suppliers: [
          {
            name: "广州市悦宝塑胶制品有限公司",
            model: "生产加工",
            product: "奶瓶；奶嘴；水杯；餐具；吸奶器；勺子",
            old: "3",
            productNum: "48",
            customerNum: "116",
            place: "广东 广州市白云区",
            img: "https://cbu01.alicdn.com/club/upload/pic/user/b/2/b/-/*xC-i2FISMCHGMF84MGQLOmNyMmHbvCQSvGgLvmNLMFkT_s.jpeg",
            items: ['https://cbu01.alicdn.com/img/ibank/2018/830/403/10180304038_1464209007.140x140xz.jpg',
              'https://cbu01.alicdn.com/img/ibank/2018/287/999/10153999782_1464209007.140x140xz.jpg',
              'https://cbu01.alicdn.com/img/ibank/2018/072/415/9038514270_1464209007.140x140xz.jpg']
          },
          {
            name: "深圳市崛金服饰有限公司",
            model: "经销批发",
            product: "运动帽；棒球帽；嘻哈帽；男帽；女帽；民族帽",
            old: "3",
            productNum: "102",
            customerNum: "103",
            place: "广东 深圳市龙岗区",
            items: ['https://cbu01.alicdn.com/img/ibank/2019/260/853/10396358062_175309521.140x140xz.jpg',
              'https://cbu01.alicdn.com/img/ibank/2019/941/939/10369939149_175309521.140x140xz.jpg',
              'https://cbu01.alicdn.com/img/ibank/2019/695/214/10343412596_175309521.140x140xz.jpg'],
            img: 'https://cbu01.alicdn.com/club/upload/pic/user/b/2/b/-/*xC-i2FvWvCc0vCNuMGcYvFH4OmHbMm8YOmIbvmx0MCcT_s.jpeg'
          },
          {
            name: "深圳市长润实业科技有限公司",
            model: "生产加工",
            product: "LED照明；配件",
            old: "3",
            productNum: "33",
            customerNum: "27",
            place: "广东 深圳市福田区",
            items: ['https://cbu01.alicdn.com/img/ibank/2018/582/864/10188468285_1403248927.140x140xz.jpg',
              'https://cbu01.alicdn.com/img/ibank/2019/242/217/10317712242_1403248927.140x140xz.jpg',
              'https://cbu01.alicdn.com/img/ibank/2018/418/907/9607709814_1403248927.140x140xz.jpg'],
            img: 'https://cbu01.alicdn.com/club/upload/pic/user/b/2/b/-/*xC-i2Fv4MGNyMmcyOFliMF7*MmHbvCgSMmvuvC80vFvT_s.jpeg'
          }
        ]
    },

    navbarTap: function (e) {
      this.setData({
          currentTab: e.currentTarget.dataset.index,
      })
      this.showData(this.data.currentTab)
    },

    actionSheetTap: function(e) {
      console.log(e.currentTarget.dataset.name)
      this.setData({
        actionSheetHidden: false,
        supplierTapped: e.currentTarget.dataset.name,
      })
    },

    actionSheetChange: function() {
      this.setData({
        actionSheetHidden: !this.data.actionSheetHidden
      })
    },

    showData: function (index) {
        if (index == 0) {
            this.setData({
                showSuppliers: this.data.suppliers
            })
            return;
        }
        const suppliers = this.data.suppliers;
        const showSuppliers = [];
        for (let i = 0; i < this.data.suppliers.length; i++) {
            if (suppliers[i].status == index) {
                showSuppliers.push(orders[i])
            }
        }
        this.setData({
            showSuppliers: showSuppliers
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
        this.showData(this.data.currentTab)
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