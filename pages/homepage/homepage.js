let app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        infoHidden: true,
        info: [
          ['证书编号', ' 2017152203018122'],
          ['证书状态', ' 有效'],
          ['产品分类', ' 美妆产品'],
          ['产品名称（主）', ' 产品类别 美妆'],
          ['产品名称（次）', ' Color'],
          ['认证依据标准和要求', ' GB 6675.1—2014；GB 6675.2—2014；GB 6675.3—2014；GB 6675.4—2014'],
          ['发证机构名称', ' N/A'], 
          ['颁证日期', ' 2017-06-23'],
          ['证书到期日期', ' 2022-04-16'],
          ['初次获证日期', ' 2017-04-17'],
          ['信息上报日期', ' 2017-06-26'],
          ['证书更新时间戳', ' 20170626093349131000'],
          ['产品类别代码', ' 2203'],
        ],
        cartItems: app.globalData.cartItems,
        totalItems: app.globalData.totalItems,
        goodItems: [
            {
                src: '',
                id: 101,
                img: "../../resources/images/hp_tuijian_1.jpg",
                name: "101灰姑娘网红新手化妆品套装彩妆全套盒初学者组合底美妆正品女学生",
                sale: ["4230", "件"],
                price: ["99", "120"],
            },
          
          {
               
                id: 102,
                img: "../../resources/images/hp_tuijian_2.jpg",
                name: "102花西子化妆品套装女全套初学者学生新手眉笔气垫散粉蜜粉彩妆组合",
                sale: ["586", "件"],
                price: ["399","410"],

            },
            {
                id: 103,
                img: "../../resources/images/hp_tuijian_3.jpg",
                name: "103【官方正品】3CE迷你口红套装哑光脏橘116红棕909唇膏持久易上色",
                sale: ["1855", "件"],
                price: ["198", "200"]
            },
            

        ],
        swiperItem: [
            {
            img: "http://a3.qpic.cn/psb?/V13kVVqp2eI9aW/QoKtJVLfy7R5mqZo6tTEdCVoZ4EPoqHpQ0QTKVqvcFM!/m/dL4AAAAAAAAAnull&bo=SgLHAAAAAAARB78!&rf=photolist&t=5.jpg_240x240xz.jpg",
                nav: ""
            },
            {
              img: "http://a3.qpic.cn/psb?/V13kVVqp2eI9aW/pRr9ZNsevrt1OcX.eq9xROuRYHKVZu5z76AVIbfd3v4!/m/dLYAAAAAAAAAnull&bo=igLmAAAAAAARB14!&rf=photolist&t=5.jpg",
                nav: ""
            },
            {
              img: "http://a2.qpic.cn/psb?/V13kVVqp2eI9aW/MvnJpP0lOZqoDixyyw*QwHgMXVVx9F8qYt8VhFKhJzk!/m/dEkBAAAAAAAAnull&bo=WALBAAAAAAARB6s!&rf=photolist&t=5.jpg_240x240xz.jpg",
                nav: ""
            },
            {
              img: "http://a1.qpic.cn/psb?/V13kVVqp2eI9aW/Lp7TBacjnkXQqBlqrfjj8FRCzIwXXPuuJ1FethmEkcY!/m/dDQBAAAAAAAAnull&bo=jgLVAAAAAAARB2k!&rf=photolist&t=5.jpg",
                nav: ""
            },
            {
              img: "http://a4.qpic.cn/psb?/V13kVVqp2eI9aW/M3Vv*bhCY*PV4BHfKvU6gcR4yjwMWZJvTspx62D0jN0!/m/dL8AAAAAAAAAnull&bo=WALYAAAAAAARB7I!&rf=photolist&t=5.jpg",
                nav: ""
            },
        ],
        indicatorDots: true,
        autoplay: true,
        hotSearch: [
            {
                title: "美妆套装",
                nav: ""
            },
            {
                title: "眉笔",
                nav: ""
            },
            {
                title: "彩妆蛋",
                nav: ""
            },
            {
                title: "眼影",
                nav: ""
            }
        ],
        navItems: [
            {
                img: "../../resources/images/fire.png",
                nav: "",
                name: "热门",
                id: 1
            },
            {
                img: "../../resources/images/kouhong.gif",
                nav: "",
                name: "口红",
                id: 1

            },
            {
                img: "../../resources/images/yanying.jpg",
                nav: "",
                name: "眼影",
                id: 1

            },
            {
                img: "../../resources/images/caizhuangdan.jpg",
                nav: "",
                name: "彩妆蛋",
                id: 1

            },
            {
                img: "../../resources/images/mianmo.jpg",
                nav: "",
                name: "面膜",
                id: 1

            },
            {
            img: "../../resources/images/jiemaoshua.jpg",
            nav: "",
            name: "睫毛刷",
            id: 1

            },
            {
                img: "../../resources/images/ximiannai.jpg",
                nav: "",
                name: "洗面奶",
                id: 1

            },
            
            {
                img: "../../resources/images/xiangshui.jpg",
                nav: "",
                name: "香水",
                id: 1

            },
            
            {
                img: "../../resources/images/ceyanshua.jpg",
                nav: "",
                name: "浮粉刷",
                id: 1

            },
            {
                img: "../../resources/images/more.png",
                nav: "",
                name: "更多"
            }
        ],
    },
    //获取id cartItem.Items.id 并向后端发送请求
    alert: function (e) {
        const index = e.currentTarget.dataset.idx;
        let totalItems=this.data.totalItems;
        let _this = this;
        wx.getStorage({
          key: 'cart',
          success(res) {
            let cartItem = {};
            cartItem.Items = [_this.data.goodItems[index]];
            let id_get = cartItem.Items[0].id;// 获得商品id
            console.log(id_get);

            wx.request({
              url: 'http://116.62.213.180/addCart/',
              method: 'POST',
              data: { 'pid': id_get },
              header: { 'content-type': 'application/x-www-form-urlencoded' },
              success: function (res) {
                console.log('submit success');
                wx.showToast({
                  icon: "none",
                  title: "加入成功"
                });
              },
              fail: function (res) {
                console.log('submit fail');
                wx.showToast({
                  icon: "none",
                  title: "加入失败"
                });
              },
              complete: function (res) {
                console.log('submit complete');
              }
            });
            
            wx.setStorage({
              key: 'cart',
            })
          },
        })
    },
    // app.globalData.cartItems[0-代表商店编号] totalItems[parseInt(id_get / 100 - 1)].Items[id_get % 100]代表具体商品
    infoChange: function(e) {
      this.setData({
        infoHidden: !this.data.infoHidden
      })
    },

    scanTest: function (e) {
      let _this = this
      wx.scanCode({
        success(res) {
          if (res.scanType == "EAN_13")
            wx.navigateTo({
              url: '/pages/barcode/barcode?barcode='+res.result,
            })
          console.log(res.result)
          console.log(res.charSet)
          console.log(res.scanType)
          // _this.setData({
          //   infoHidden: false,
          // })
        }
      })
    },

    takePhoto() {
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          this.setData({
            src: res.tempImagePath
          })
        }
      })
    },

    error(e) {
      console.log(e.detail)
    },

    supplierEntry: function () {
        wx.navigateTo({
          url: '/pages/supplierEntry/supplierEntry',
         
        })
    },

    goToSearch: function () {
        wx.navigateTo({
            url: "/pages/search/search",
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

    },

    /**toDetail: function (event) {
        console.log(event)
        wx.navigateTo({
            url: '/pages/detail/goodDetail/goodDetail?id=' + event.currentTarget.dataset.id
        })
    },*/

    toCate: function (event) {
        console.log(event)
      wx.navigateTo({
        url: '/pages/category/category'
      })
    },
})
