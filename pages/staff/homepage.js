// pages/staff/homepage.js
var app = getApp();//获取应用实例
var myDate = new Date();//获取系统当前时间

function loadMoreRecord(that, fn) {
  var temp = [
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

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myInfo: {
      positionId: '01',
      name: '杨可可',
      phone: '13264565213',
      jobNumber: '654263',
      company: '北京凯盛文化有限传播公司',
      position: '设计部经理'
    },
    linkList:[
      {
        id:'01',
        href:'page1',
        title:'来访处理'
      }, {
        id: '01',
        href: 'page1',
        title: '邀请记录'
      }
    ],
    dateTime:{
      year:'2000',
      month:'01',
      day:'01',
      weekDay:'6',
    },
    zhengchangNumber:'0',
    weekList:[
      {
        id: '7',
        title: '日'
      }, {
        id: '1',
        title: '一'
      }, {
        id: '2',
        title: '二'
      }, {
        id: '3',
        title: '三'
      }, {
        id: '4',
        title: '四'
      }, {
        id: '5',
        title: '五'
      }, {
        id: '6',
        title: '六'
      }
    ],
    yueliHidden:false,
    dayList:[
      {
        id: '0',
        day: '27',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '1',
        day: '28',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '2',
        day: '29',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '3',
        day: '30',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '3',
        day: '01',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '4',
        day: '02',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '03',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '04',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '05',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '06',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '07',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '08',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '09',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '10',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '11',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '12',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '13',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '14',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '15',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '16',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '17',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '18',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '19',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '20',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '21',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '22',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '23',
        isBlue: true,
        isOrange: false,
        isGreen: false,
        isToday: true,
      },
      {
        id: '0',
        day: '24',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '25',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '26',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '27',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '28',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '29',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '30',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
      {
        id: '0',
        day: '01',
        isBlue: false,
        isOrange: false,
        isGreen: false,
        isToday: false,
      },
    ],
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
    type: ''

  },

  onLoad: function (options){
    var that = this;
    wx.getStorage({
      key: 'user',
      success: function (res) {
        console.log(res);
        if (res.errMsg == 'getStorage:ok') {
          if (res.data.type == 'staff') {
            that.setData({
              type: res.data.type
            });
            wx.setNavigationBarTitle({
              title: '员工我的'
            })
          } else if (res.data.type == 'visitor') {
            that.setData({
              type: res.data.type
            });
            wx.setNavigationBarTitle({
              title: '访客我的'
            })
          }
        }
      },
      fail: function () {
        
      }

    })
  },

  toPage:function(e){
    var type = e.currentTarget.dataset.type || e.target.dataset.type;
    if(type=='visited'){
      wx.navigateTo({
        url: '/pages/staff/visitedRecord',
      })
    }else if(type=='invited'){
      wx.navigateTo({
        url: '/pages/staff/invitedRecord',
      })
    }
  },
  //change dateTime and yueli
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
      'dateTime.year': e.detail.value.split("-")[0],
      'dateTime.month': e.detail.value.split("-")[1],
      //'dateTime.day': e.detail.value.split("-")[2],
    })
    //更新月历
    this.initDayList();
    //更新正常天数
    this.initZhengchangNumber();
  },

  //hidden yueli
  yueli:function(e){
    let x = !this.data.yueliHidden;
    this.setData({
      yueliHidden: x,
    })
  },

  isToday:function(year,month,day){
    if(year==myDate.getFullYear()&&month==myDate.getMonth()&&day==myDate.getDate()){
      return true;
    }
    return false;
  },
  getLastMonthDay:function(year,month){
    if(month==1){
      year--;
      month=12;
    }else{
      month--;
    }
    return new Date(year,month,0).getDate();
  },
  getWeekDay:function(year,month,day){
    return new Date(year + '/' + month + '/' + day).getDay();
  },
  initZhengchangNumber:function(){
    var x = 0;
    for (var i = 0; i < this.data.dayList.length; i++) {
      if (this.data.dayList[i].isBlue) {
        x++;
      }
    }
    this.setData({
      zhengchangNumber: x,
    })
  },
  initDateTime:function(){
    this.setData({
      'dateTime.year': parseInt(myDate.getFullYear()),
      'dateTime.month': parseInt((myDate.getMonth() + 1) < 10 ? '0' + (myDate.getMonth() + 1) : (myDate.getMonth() + 1)),
      'dateTime.day': parseInt(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()),
      'dateTime.weekDay': parseInt(myDate.getDay()),
    })
  },
  initDayList:function(){
    let that = this;
    //上月几天
    var monthDay = this.getLastMonthDay(this.data.dateTime.year,this.data.dateTime.month);
    //本月第一天星期几
    var weekDay = this.getWeekDay(this.data.dateTime.year, this.data.dateTime.month,1);
    //将赋值给dayList
    var dayArr = [];
    for(var i=0;i<weekDay;i++){
      dayArr.unshift({
        day:monthDay,
        //isToday: that.isToday(this.data.dateTime.year, this.data.dateTime.month,i),
      });
      monthDay--;
    }
    //输出测试上月是否成功录入
    //console.log(dayArr);
    //本月几天
    monthDay = new Date(this.data.dateTime.year, this.data.dateTime.month,0).getDate();
    for (var i = 1; i <= monthDay; i++) {
      dayArr.push({
        day: i,
        //isToday: that.isToday(this.data.dateTime.year, this.data.dateTime.month, i),
      });
    }
    //输出测试本月是否成功录入
    //console.log(dayArr);
    //本月最后一天星期几
    weekDay = this.getWeekDay(this.data.dateTime.year, this.data.dateTime.month, monthDay);
    for (var i = 1; i <= 6-weekDay; i++) {
      dayArr.push({
        day: i,
        //isToday: that.isToday(this.data.dateTime.year, this.data.dateTime.month, i),
      });
    }
    //输出测试下月是否成功录入
    //console.log(dayArr);
    //更新dayList
    this.setData({
      dayList:dayArr,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.initDateTime();
    this.initZhengchangNumber();
    console.log(this.data.dateTime);
    //this.initDayList();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },

  loadMore: function () {
    var that = this;
    this.setData({
      loading: true
    });
    setTimeout(function () {
      loadMoreRecord(that, function () {

      });
      that.setData({
        loading: false
      });
    }, 2000);
  },

  sendRecord() {
    wx.navigateTo({
      url: '../visit_record/visit_record',
    })
  },
  sendInvited() {
    wx.navigateTo({
      url: '../invited_record/invited_record',
    })
  },
  sendInformation() {
    wx.navigateTo({
      url: '../real_information/real_information',
    })
  }
})