// pages/category/category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        curIndex: 0,
        right_scrollTop: 0,
        row_scrollTop: 0,
        category: [
            {
                name: '眼影',
                id: 'cloth-m',
                types: ['热销']
            },
            {
                name: '腮红',
                id: 'cloth-w',
                types: ['热销']
            },
            {
                name: '彩妆蛋',
                id: 'shoe',
                types: ['热销']
            }, {
                name: '口红',
                id: 'digit',
                types: ['热销']
            },
            {
                name: '睫毛刷',
                id: 'food',
                types: ['热销']
            },
          {
            name: '粉底液',
            id: 'food',
            types: ['热销']
          },
            
        ],
        
        goodItems: [
            {   id: 104,
                img: "http://a3.qpic.cn/psb?/V13kVVqp0WF0a4/J60Qtqnv*KLZ2PQ0tgDco8G68ct4gBA5jhbW6vm.ZsA!/m/dL4AAAAAAAAAnull&       bo=iQJdAgAAAAADB*Y!&rf=photolist&t=5.400x400.jpg",
                name: "热销104色彩搭配创造自然、细致、深邃、烟熏眼妆-欧氏贵族彩妆眼影",
                sale: ["109", "件"],
                price: ["33", "50"]
                
            },
          {
            id: 108,
            img: "https://gaitaobao2.alicdn.com/tfscom/i2/2811490493/O1CN01HZOt1h1FVpmEtpesy_!!0-item_pic.jpg_240x240xz.jpg",
            name: "热销108伊丝诺腮红正品裸妆修容初学者哑光晒红粉彩妆防水自然胭脂盘韩国 然后是一段很长很长很长的字字字字字",
            sale: ["4233", "件"],
            price: ["32", "50"]
          },
          {
            id: 112,
            img: "https://gaitaobao1.alicdn.com/tfscom/i1/2027037627/O1CN01mTRLWq26DDHdXriMU_!!2027037627.jpg_240x240xz.jpg",
            name: "热销112韩国尔木萄美妆蛋不吃粉带架子粉扑海绵彩妆化妆蛋葫芦干湿两用 然后是一段很长很长很长的字字字字字",
            sale: ["5300", "件"],
            price: ["45", "50"]
          },
            
        ],
      
        type_list: [],
        curStatus: 0,
    },
 /////////////////////////////////////////////////////
    alert: function (e) {                          
      const index = e.currentTarget.dataset.idx;
      let totalItems = this.data.totalItems;
      let _this = this;
      wx.getStorage({
        key: 'cart',
        success(res) {
          let cartItem = {};
          cartItem.Items = [_this.data.goodItems[index]];
          let id_get = cartItem.Items[0].id;// 获得商品id  并向后端发送请求
          console.log(id_get);
          wx.request({
            url: '',
            data: id_get,
            method: 'POST',
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
          })
          wx.setStorage({
            key: 'cart',
          })
        },
      })
      
    },



    selectStatus: function (e) {
        this.setData({
            curStatus: e.currentTarget.dataset["id"]
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
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                let w_height = (res.windowHeight * (750 / res.windowWidth))
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
        let type = this.data.category[0].types
        this.setData({
            type_list: type,
        })
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
    switchTab: function (e) {
      let index = e.target.dataset.index;
      let type = this.data.category[index].types
      this.setData({
        curIndex: index,
        curStatus: 0,
        type_list: type,
        /* go top */
        right_scrollTop: 0,
        row_scrollTop: 0
        })
      if (index == 0) {
        this.setData({
          goodItems: [
            { id: 104,
              img: "http://a3.qpic.cn/psb?/V13kVVqp0WF0a4/J60Qtqnv*KLZ2PQ0tgDco8G68ct4gBA5jhbW6vm.ZsA!/m/dL4AAAAAAAAAnull&       bo=iQJdAgAAAAADB*Y!&rf=photolist&t=5.400x400.jpg",
              name: "104色彩搭配创造自然、细致、深邃、烟熏眼妆-欧氏贵族彩妆眼影",
              sale: ["109", "件"],
              price: ["33", "50"]

            },
            {
              id: 105,
              img: "http://a3.qpic.cn/psb?/V13kVVqp0WF0a4/J60Qtqnv*KLZ2PQ0tgDco8G68ct4gBA5jhbW6vm.ZsA!/m/dL4AAAAAAAAAnull&       bo=iQJdAgAAAAADB*Y!&rf=photolist&t=5.400x400.jpg",
              name: "105色彩搭配创造自然、细致、深邃、烟熏眼妆-欧氏贵族彩妆眼影",
              sale: ["109", "件"],
              price: ["33", "50"]

            },
            {
              id: 106,
              img: "http://a3.qpic.cn/psb?/V13kVVqp0WF0a4/J60Qtqnv*KLZ2PQ0tgDco8G68ct4gBA5jhbW6vm.ZsA!/m/dL4AAAAAAAAAnull&       bo=iQJdAgAAAAADB*Y!&rf=photolist&t=5.400x400.jpg",
              name: "106色彩搭配创造自然、细致、深邃、烟熏眼妆-欧氏贵族彩妆眼影",
              sale: ["109", "件"],
              price: ["33", "50"]

            },
            {
              id: 107,
              img: "http://a3.qpic.cn/psb?/V13kVVqp0WF0a4/J60Qtqnv*KLZ2PQ0tgDco8G68ct4gBA5jhbW6vm.ZsA!/m/dL4AAAAAAAAAnull&       bo=iQJdAgAAAAADB*Y!&rf=photolist&t=5.400x400.jpg",
              name: "107色彩搭配创造自然、细致、深邃、烟熏眼妆-欧氏贵族彩妆眼影",
              sale: ["109", "件"],
              price: ["33", "50"]

            }
            

          ]
        })
      }
      if (index == 1) {
        this.setData({
        goodItems: [
         {  
            id: 108,
            img: "https://gaitaobao2.alicdn.com/tfscom/i2/2811490493/O1CN01HZOt1h1FVpmEtpesy_!!0-item_pic.jpg_240x240xz.jpg",
            name: "108伊丝诺腮红正品裸妆修容初学者哑光晒红粉彩妆防水自然胭脂盘韩国 然后是一段很长很长很长的字字字字字",
          sale: ["4233", "件"],
          price: ["32", "50"]
         },
          {
            id: 109,
            img: "https://gaitaobao2.alicdn.com/tfscom/i2/2811490493/O1CN01HZOt1h1FVpmEtpesy_!!0-item_pic.jpg_240x240xz.jpg",
            name: "109伊丝诺腮红正品裸妆修容初学者哑光晒红粉彩妆防水自然胭脂盘韩国 然后是一段很长很长很长的字字字字字",
            sale: ["4233", "件"],
            price: ["32", "50"]
          },
          {
            id: 110,
            img: "https://gaitaobao2.alicdn.com/tfscom/i2/2811490493/O1CN01HZOt1h1FVpmEtpesy_!!0-item_pic.jpg_240x240xz.jpg",
            name: "110伊丝诺腮红正品裸妆修容初学者哑光晒红粉彩妆防水自然胭脂盘韩国 然后是一段很长很长很长的字字字字字",
            sale: ["4233", "件"],
            price: ["32", "50"]
          },
          {
            id: 111,
            img: "https://gaitaobao2.alicdn.com/tfscom/i2/2811490493/O1CN01HZOt1h1FVpmEtpesy_!!0-item_pic.jpg_240x240xz.jpg",
            name: "111伊丝诺腮红正品裸妆修容初学者哑光晒红粉彩妆防水自然胭脂盘韩国 然后是一段很长很长很长的字字字字字",
            sale: ["4233", "件"],
            price: ["32", "50"]
          }
         
          
       ]})
      }
      if (index == 2) {
        this.setData({
          goodItems: [
            { id:112,
              img: "https://gaitaobao1.alicdn.com/tfscom/i1/2027037627/O1CN01mTRLWq26DDHdXriMU_!!2027037627.jpg_240x240xz.jpg",
              name: "112韩国尔木萄美妆蛋不吃粉带架子粉扑海绵彩妆化妆蛋葫芦干湿两用 然后是一段很长很长很长的字字字字字",
              sale: ["5300", "件"],
              price: ["45", "50"]
            },
            {
              id: 113,
              img: "https://gaitaobao1.alicdn.com/tfscom/i1/2027037627/O1CN01mTRLWq26DDHdXriMU_!!2027037627.jpg_240x240xz.jpg",
              name: "113韩国尔木萄美妆蛋不吃粉带架子粉扑海绵彩妆化妆蛋葫芦干湿两用 然后是一段很长很长很长的字字字字字",
              sale: ["5300", "件"],
              price: ["45", "50"]
            },

            {
              id: 114,
              img: "https://gaitaobao3.alicdn.com/tfscom/i3/1756972346/O1CN01yZyTQ41TCVfQGqwwI_!!0-item_pic.jpg_240x240xz.jpg",
              name: "114不吸粉的美妆蛋葫芦粉扑海绵蛋彩妆蛋化妆球干湿两用化妆蛋不吃粉 然后是一段很长很长很长的字字字字字",
              sale: ["4800", "件"],
              price: ["11.9", "20.9"]
            },
            
            { id:115,
              img: "https://gaitaobao3.alicdn.com/tfscom/i3/1756972346/O1CN01yZyTQ41TCVfQGqwwI_!!0-item_pic.jpg_240x240xz.jpg",
              name: "115不吸粉的美妆蛋葫芦粉扑海绵蛋彩妆蛋化妆球干湿两用化妆蛋不吃粉 然后是一段很长很长很长的字字字字字",
              sale: ["4800", "件"],
              price: ["11.9", "20.9"]
            }
          ]
        })
      }
      if (index == 3) {
        this.setData({
          goodItems: [
            { id:116,
              img: "https://gaitaobao2.alicdn.com/tfscom/i1/15469185/TB1BA.ft_tYBeNjy1XdXXXXyVXa_!!0-item_pic.jpg_240x240xz.jpg",
              name: "116新款 CHANEL香奈儿可可小姐细管口红唇膏206/212/214/208 然后是一段很长很长很长的字字字字字",
              sale: ["1099", "件"],
              price: ["223.80", "338.80"]
            },
            {
              id: 117,
              img: "https://gaitaobao2.alicdn.com/tfscom/i1/15469185/TB1BA.ft_tYBeNjy1XdXXXXyVXa_!!0-item_pic.jpg_240x240xz.jpg",
              name: "117新款 CHANEL香奈儿可可小姐细管口红唇膏206/212/214/208 然后是一段很长很长很长的字字字字字",
              sale: ["1099", "件"],
              price: ["223.80", "338.80"]
            },
            { id:118,
              img: "https://gaitaobao1.alicdn.com/tfscom/i1/16835964/TB2fX0jtQ9WBuNjSspeXXaz5VXa_!!16835964.jpg_240x240xz.jpg",
              name: "118现货 MAC唇膏口红Marrakesh/Party line枯叶橘 脏橘色 316 314后是一段很长很长很长的字字字字字",
              sale: ["928", "件"],
              price: ["155", "195"]
            },
            {
              id: 119,
              img: "https://gaitaobao1.alicdn.com/tfscom/i1/16835964/TB2fX0jtQ9WBuNjSspeXXaz5VXa_!!16835964.jpg_240x240xz.jpg",
              name: "119现货 MAC唇膏口红Marrakesh/Party line枯叶橘 脏橘色 316 314后是一段很长很长很长的字字字字字",
              sale: ["928", "件"],
              price: ["155", "195"]
            }
          ]
        })
      }
      if (index == 4) {
        this.setData({
          goodItems: [
            { id:120,
              img: "https://gaitaobao1.alicdn.com/tfscom/i3/541171612/O1CN01Lu6Dgy1NmKyU1LUnj_!!541171612.jpg_240x240xz.jpg",
              name: "120雅邦炫媚360度浓密纤长广角睫毛膏卷翘防水防晕染硅胶刷头眼妆女 然后是一段很长很长很长的字字字字字",
              sale: ["1233", "件"],
              price: ["29", "50"]
            },
            {
              id: 121,
              img: "https://gaitaobao1.alicdn.com/tfscom/i3/541171612/O1CN01Lu6Dgy1NmKyU1LUnj_!!541171612.jpg_240x240xz.jpg",
              name: "121雅邦炫媚360度浓密纤长广角睫毛膏卷翘防水防晕染硅胶刷头眼妆女 然后是一段很长很长很长的字字字字字",
              sale: ["1233", "件"],
              price: ["29", "50"]
            },
            {
              id: 122,
              img: "https://gaitaobao2.alicdn.com/tfscom/i2/2618683707/TB2NX7GsIyYBuNkSnfoXXcWgVXa_!!2618683707.jpg_240x240xz.jpg",
              name: "122极细睫毛膏 细小刷头 刷出隐藏小睫毛小眉毛！防水纤长卷翘不晕染 然后是一段很长很长很长的字字字字字",
              sale: ["1437", "件"],
              price: ["19.80", "20。00"]
            },
            { id:123,
              img: "https://gaitaobao2.alicdn.com/tfscom/i2/2618683707/TB2NX7GsIyYBuNkSnfoXXcWgVXa_!!2618683707.jpg_240x240xz.jpg",
              name: "123极细睫毛膏 细小刷头 刷出隐藏小睫毛小眉毛！防水纤长卷翘不晕染 然后是一段很长很长很长的字字字字字",
              sale: ["1437", "件"],
              price: ["19.80", "20。00"]
            }
          ]
        })
      }
      if (index == 5) {
        this.setData({
          goodItems: [
            { id:124,
              img: "https://gaitaobao2.alicdn.com/tfscom/i3/3081359700/O1CN01YJHcXn2LWeJTwuET5_!!0-item_pic.jpg_240x240xz.jpg",
              name: "124美茜儿国货24K润泽粉底液防水美妆 控油不易脱妆BB霜120ML大瓶装 然后是一段很长很长很长的字字字字字",
              sale: ["343", "件"],
              price: ["29", "30"]
            },
            {
              id: 125,
              img: "https://gaitaobao2.alicdn.com/tfscom/i3/3081359700/O1CN01YJHcXn2LWeJTwuET5_!!0-item_pic.jpg_240x240xz.jpg",
              name: "125美茜儿国货24K润泽粉底液防水美妆 控油不易脱妆BB霜120ML大瓶装 然后是一段很长很长很长的字字字字字",
              sale: ["343", "件"],
              price: ["29", "30"]
            },
            {
              id: 127,
              img: "https://gaitaobao3.alicdn.com/tfscom/i4/63418780/O1CN01J2Vx1U2EjHx3ohe4g_!!63418780.jpg_240x240xz.jpg",
              name: "127奶油肌逆龄遮瑕粉底液遮瑕强防水水润持久控油不脱妆BB霜学生平价 然后是一段很长很长很长的字字字字字",
              sale: ["2437", "件"],
              price: ["138", "140"]
            },
            { id:128,
              img: "https://gaitaobao3.alicdn.com/tfscom/i4/63418780/O1CN01J2Vx1U2EjHx3ohe4g_!!63418780.jpg_240x240xz.jpg",
              name: "128奶油肌逆龄遮瑕粉底液遮瑕强防水水润持久控油不脱妆BB霜学生平价 然后是一段很长很长很长的字字字字字",
              sale: ["2437", "件"],
              price: ["138", "140"]
            }
          ]
        })
      }
      console.log(index);
      

    },
    toDetail: function (event) {
        console.log(event);
    },
})
