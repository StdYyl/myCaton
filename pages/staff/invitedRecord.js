const app = getApp();
const util = require('../../utils/util.js');
Page({
  data: {
    visitedList: [
      {
        id: 1,
        nickname: '刘振',
        visitor: '刘振',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务'
      },
      {
        id: 2,
        nickname: '静怡',
        visitor: '王静怡',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务'
      },
      {
        id: 3,
        nickname: '刘振',
        visitor: '刘振',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '处理工事'
      },
      {
        id: 4,
        nickname: '静怡',
        visitor: '王静怡',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务'
      }
    ]
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


  inviteAgain: function(res){
    var id = res.currentTarget.dataset.id || res.target.dataset.id;
    wx.navigateTo({
      url: '/pages/inviteVisitor/index?status=true&id='+id,
    })
  }
})