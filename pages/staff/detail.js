const app = getApp();
const util = require('../../utils/util.js');

function handleVisited(that, type){
  if(type=='agree'){

  }else if(type=='reject'){

  }

  wx.showLoading({
    title: '正在处理中',
  });

  setTimeout(function(){
    that.setData({

    });

    wx.showToast({
      title: '处理成功',
      icon: 'success'
    });

    wx.hideLoading();

    setTimeout(function () {
      wx.navigateBack({});
    }, 1000);
  },2000);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    visitedList: [
      {
        id: 1,
        nickname: '刘振',
        visitor: '刘振',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务',
        tel: '12345678945',
        statue: false
      },
      {
        id: 2,
        nickname: '静怡',
        visitor: '王静怡',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务',
        tel: '12345678945',
        statue: false
      },
      {
        id: 3,
        nickname: '刘振',
        visitor: '刘振',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '处理工事',
        tel: '12345678945',
        statue: false
      },
      {
        id: 4,
        nickname: '静怡',
        visitor: '王静怡',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务',
        tel: '12345678945',
        statue: false
      }
    ],
    transId: -1,
    isHandle: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var type = options.type;
    this.setData({
      transId: id,
      isHandle: type
    });
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


  handle: function(res){
    var type = res.currentTarget.dataset.type || res.target.dataset.type;
    handleVisited(this, type);
  }
})