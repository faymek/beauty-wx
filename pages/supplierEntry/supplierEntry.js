// pages/supplierEntry/supplierForm/supplierForm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contactName: "",
    contactPhone: "",
    email: "",
    images: [],
  },

 /** chooseImage: function () {
    var _this = this;
    wx.chooseImage({
      success: function (res) {
        _this.setData({
          images: res.tempFilePaths
        })
      },
    })
  },*/




  addImage: function () {
    if (this.data.images.length == 9)
      return;

    var _this = this;
    wx.chooseImage({
      success: function (res) {
        let tmpImages = _this.data.images
        let tmplen = tmpImages.length
        let resImages = res.tempFilePaths
        let reslen = resImages.length

        if (reslen + tmplen > 9) {
          wx.showToast({
            title: '图片超过9张',
            duration: 700,
            icon: 'loading'
          })
        }
      wx.showToast({                                        //上传照片并向后端发送请求
          icon: "loading",
          title: "正在上传"
        }),
      wx.uploadFile({
          url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: resImages[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
        success: function (res) {
          console.log('submit success');
          wx.showToast({
            icon: "loading",
            title: "上传照片成功"
          });
          if (res.data == 0)
          {
            wx.navigateTo({
              url: '/pages/recommend/recommend',
            })
          }
          if (res.data == 1)
          {
            wx.navigateTo({
              url: '/pages/recommend_1/recommend',
            })
          }
          if (res.data == 2)
          {
            wx.navigateTo({
              url: '/pages/recommend_2/recommend',
            })
          }
          if (res.data == 3) 
          {
            wx.navigateTo({
              url: '/pages/recommend_3/recommend',
            })
          }
          if (res.data == 4) 
          {
            wx.navigateTo({
              url: '/pages/recommend_4/recommend',
            })
          }
          if (res.data == 5) 
          {
            wx.navigateTo({
              url: '/pages/recommend_5/recommend',
            })
          }
          if (res.data == 6) 
          {
            wx.navigateTo({
              url: '/pages/recommend_6/recommend',
            })
          }
         },
        fail: function (res) {
          console.log('submit fail');
          wx.showToast({
            icon: "loading",
            title: "上传照片失败"
          });
          //wx.navigateTo({
            //url: '/pages/recommend_6/recommend',
          //})
        },
        complete: function (res) {
          console.log('submit complete');
        }


        })

        for (var i = 0; i < 9 - tmplen && i < reslen; i++) {
          tmpImages.push(resImages[i])
        }
         
        _this.setData({
          images: tmpImages
          
        })
      },
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