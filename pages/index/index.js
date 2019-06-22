//index.js
//获取应用实例
const app = getApp();
const util = require('../../utils/util.js');

function downloadBackgroundFile(that){
  wx.chooseImage({
    success: function (res) {
      console.log(res);
      wx.uploadFile({
        url: 'http://192.168.1.104:81/test/',
        filePath: res.tempFilePaths[0],
        name: 'gackground.png',
      });

      that.setData({
        background: 'http://192.168.1.104:81/test/background.png'
      });
    },
  })
}

function turnPageUseSort(that, fn){
  var sort = that.data.sort;
  console.log(sort);
  if (sort == 'staff') {
    //s_status：员工是否为第一次进入，v_status：访客是否是第一次进入
    var user = wx.getStorageSync('user');
    if(user){
      if (user.type == 'visitor') {
        let userTemp = { type: "staff", s_status: user.s_status, v_status: user.v_status };
        wx.setStorageSync('user', userTemp);
      }
      console.log(user.s_status);
      that.setData({
        s_unFirst: user.s_status
      });
    }else{
      let userTemp = { type: "staff", s_status: false, v_status: false };
      wx.setStorageSync('user', userTemp);
    }
    
    if(!that.data.s_unFirst){
      console.log(that.data.s_unFirst);
      wx.navigateTo({
        url: '/pages/staff/register',
      });
    }else{
      wx.switchTab({
        url: '/pages/staff/index',
      })
    }
  } else if (sort == 'visitor') {
    var user = wx.getStorageSync('user');
    if (user) {
      if (user.type == 'staff') {
        let userTemp = { type: "visitor", s_status: user.s_status, v_status: user.v_status };
        wx.setStorageSync('user', userTemp);
      }
      console.log(user.v_status);
      that.setData({
        v_unFirst: user.v_status
      });
    } else {
      let userTemp = { type: "visitor", s_status: false, v_status: false };
      wx.setStorageSync('user', userTemp);
    }

    if (!that.data.v_unFirst) {
      wx.navigateTo({
        url: '/pages/visitor/index',
      });
    } else {
      wx.switchTab({
        url: '/pages/staff/index',
      })
    }
  }
}

Page({
  data: {
    sort: '',
    userInfo: '',
    s_unFirst: false,
    v_unFirst: false,
    background: ''
  },
 
  onLoad: function () {
    util.setStorageMessage('userInfo','123456');

    //downloadBackgroundFile(this);
    this.setData({
      background: 'http://192.168.1.104:81/test/background.png'
    });
  },

  turnPage: function(e){
    var sort = e.currentTarget.dataset.sort || e.target.dataset.sort;
    this.setData({
      sort: sort
    });

    turnPageUseSort(this, function(){

    });
  }
})
