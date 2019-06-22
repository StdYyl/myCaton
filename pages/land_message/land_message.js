// pages/land_message/land_message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {

  },

  ensure: function(){
    wx.showLoading({
      title: '处理中···',
    });

    setTimeout(function () {
      wx.hideLoading();
      wx.showToast({
        title: '处理成功',
        icon: 'success',
        duration: 1000,
        success:function(){
          setTimeout(function(){
            wx.navigateBack({});
          },1000);
        }
      });
    },2000);
  }
})