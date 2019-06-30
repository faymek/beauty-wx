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
    filename: ""
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
        url: 'http://116.62.213.180/upload/',
          filePath: resImages[0],
          name: 'img',
          formData: {
            'user': 'user0'
          },
        success: function (res) {
          console.log('submit success');
          console.log(res.data);
          fn = JSON.parse(res.data);
          _this.setData({
            filename:fn.output
          });
          console.log(_this.data.filename);
          wx.showToast({
            icon: "loading",
            title: "上传照片成功"
          });          
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

  upImage: function () {
    var _this = this;
    console.log("up")
    wx.navigateTo({
      url: '/pages/recommend_1/recommend?fn='+_this.data.filename,
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