const app = getApp();
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    visitedList: [
      {
        id: 1,
        nickname: '刘振',
        visitor: '刘振',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务',
        tel: '12345678945'
      },
      {
        id: 2,
        nickname: '静怡',
        visitor: '王静怡',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务',
        tel: '12345678945'
      },
      {
        id: 3,
        nickname: '刘振',
        visitor: '刘振',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '处理工事',
        tel: '12345678945'
      },
      {
        id: 4,
        nickname: '静怡',
        visitor: '王静怡',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务',
        tel: '12345678945'
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

  changeUnderline: function(res){
    var index = res.currentTarget.dataset.index || res.target.dataset.index;
    this.setData({
      index: index,
      sliderOffset: res.currentTarget.offsetLeft * 2
    });
  },

  turnToDetail: function(res){
    var id = res.currentTarget.dataset.id || res.target.dataset.id;
    var type = res.currentTarget.dataset.type || res.target.dataset.type;
    wx.navigateTo({
      url: '/pages/staff/detail?id='+ id + '&type='+ type,
    })
  }
})