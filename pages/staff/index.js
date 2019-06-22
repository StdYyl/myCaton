const app = getApp();
const util = require('../../utils/util.js');

function InviteVisitor(that, fn){
  wx.navigateTo({
    url: '/pages/inviteVisitor/index',
  })
}

function loadMoreRecord(that, fn){
  var temp=[
    {
      note: '进',
      time: '2019-02-16 08:25:36',
      door: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      note: '出',
      time: '2019-02-16 09:36:02',
      door: '凯盛公司北门真tm无语'
    },
    {
      note: '进',
      time: '2019-02-16 12:25:00',
      door: '凯盛西门'
    },
    {
      note: '进',
      time: '2019-02-16 08:25:36',
      door: '凯盛公司南门真tm无语'
    },
    {
      note: '出',
      time: '2019-02-16 09:36:02',
      door: '凯盛公司北门真tm无语'
    },
    {
      note: '进',
      time: '2019-02-16 12:25:00',
      door: '凯盛西门'
    },
    {
      note: '进',
      time: '2019-02-16 08:25:36',
      door: '凯盛公司南门真tm无语'
    },
    {
      note: '出',
      time: '2019-02-16 09:36:02',
      door: '凯盛公司北门真tm无语'
    },
    {
      note: '进',
      time: '2019-02-16 12:25:00',
      door: '凯盛西门'
    }
  ];
  
  that.setData({
    turnoverRecordList: temp
  });
}

function agreeHandle(id, that, fn){
  wx.showModal({
    title: '友情提示···',
    content: '确认同意吗？',
    cancelText: '取消',
    cancelColor: '#F6C600',
    confirmText: '确定',
    confirmColor: '#3E84FF',
    success(res) {
      if(res.confirm){
        var visitedHandleList = that.data.visitedHandleList
        visitedHandleList.splice(id-1,1);
        
        that.setData({
          visitedHandleList: visitedHandleList
        });

        wx.showToast({
          title: '同意成功',
        })
      }else if(res.cancel){

      }
    }
  })
}

Page({

  data: {
    loading: false,
    turnoverRecordList: [
      {
        note: '进',
        time: '2019-02-16 08:25:36',
        door: '凯盛公司南门真tm无语'
      },
      {
        note: '出',
        time: '2019-02-16 09:36:02',
        door: '凯盛公司北门真tm无语'
      },
      {
        note: '进',
        time: '2019-02-16 12:25:00',
        door: '凯盛西门'
      }
    ],
    visitedHandleList: [
      {
        id: 1,
        visitor: '刘振',
        day: '2019-02-05',
        hour: '09:00 - 10:00'
      },
      {
        id: 2,
        visitor: '王静怡',
        day: '2019-02-05',
        hour: '09:00 - 10:00'
      },
      {
        id: 3,
        visitor: '刘振',
        day: '2019-02-05',
        hour: '09:00 - 10:00'
      },
      {
        id: 4,
        visitor: '王静怡',
        day: '2019-02-05',
        hour: '09:00 - 10:00'
      }
    ],
    isHandleEmpty: false,
    tipsList: [
      { date: "2019-02-05", time: "18:00", end: 15, interviewed: "王大陆" },
      { date: "2019-02-05", time: "19:00", end: 75, interviewed: "李小白" }
    ],
    type: ''
  },

  onLoad: function (options) {
    var that = this;
    var user = wx.getStorageSync('user');
    if(user){
      
      if (user.type == 'staff') {
        if (!user.s_status) {
          let userTemp = { type: user.type, s_status: true, v_status: user.v_status };
          wx.setStorageSync('user', userTemp);
        }
      } else if (user.type == 'visitor') {
        if (!user.v_status) {
          let userTemp = { type: user.type, s_status: user.s_status, v_status: true };
          wx.setStorageSync('user', userTemp);
        }
      }

      that.setData({
        type: user.type
      });
    }else{

    }

    
  },

  onShow: function () {

  },

  inviteVisitor: function(){
    InviteVisitor(this, function(){

    });
  },

  loadMore: function(){
    var that = this;
    this.setData({
      loading: true
    });
    setTimeout(function () {
      loadMoreRecord(that,function(){

      });
      that.setData({
        loading: false
      });
    }, 2000);
  },

  agree: function(res){
    var id = res.currentTarget.dataset.id || res.target.dataset.id;
    agreeHandle(id, this, function(){

    });
  },

  bindVisitor() {
    wx.navigateTo({
      url: '../visitor/visitorNext',
    })
  }
})