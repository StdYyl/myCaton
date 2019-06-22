const app = getApp();
const util = require('../../utils/util.js');

function validateData(res, that) {
  var key = res.currentTarget.dataset.key || res.target.dataset.key;
  var data = res.detail.value;
  if (key == 'username') {
    if (data.indexOf(' ') == -1) {
      if (data.length <= 10) {
        
      } else {
        wx.showToast({
          title: '用户名不能超过十个字',
          icon: 'none',
          duration: 1000
        })
        data = data.substring(0, 10);
      }
    } else {
      util.nonExistSpace('用户名');
      data = data.substring(0, data.length - 1);
    }

    that.setData({
      [key]: data
    });
  } else if (key == 'phone') {
    if (data.indexOf(' ') == -1) {
      if (data.length > 11) {
        wx.showToast({
          title: '手机号必须为11位',
          icon: 'none',
          duration: 1000
        })
        data = data.substring(0, 11);
      }      
    } else {
      util.nonExistSpace('手机号');
      data = data.substring(0, data.length - 1);
    }

    that.setData({
      [key]: data
    });
  } else if (key == 'verificationCode') {
    that.setData({
      [key]: data
    });
  }
}

function validateSubmit(that) {
  var isChoose = that.data.isChoose;
  var username = that.data.username;
  var phone = that.data.phone;
  var verificationCode = that.data.verificationCode; 
  var carId = that.data.carId;

  if(!isChoose){
    util.showEmptyMessage(that, '头像');
    return;
  }
  if (username == ''){
    util.showEmptyMessage(that, '姓名');
    return;
  }
  if (phone == '' || phone != 11){
    if(phone == ''){
      util.showEmptyMessage(that, '联系方式');
    } else if (phone.length != 11){
      if (that != null) {
        that.setData({
          isSuccess: false
        });
      }
      wx.showToast({
        title: '手机号必须为11位',
        icon: 'none',
        duration: 1000
      });
    }
  }

  if(verificationCode == ''){
    util.showEmptyMessage(that, '验证码');
    return;
  }

  that.setData({
    isSuccess: true,
    carId: carId
  });
}

Page({

  data: {
    isSuccess: true,
    isChoose: false,
    isDownning:false,
    photoPath: '',
    countDown: 0,
    provinceIndex: 0,
    provinceList: [{
      id: 0,
      name: '豫',
      province: '河南'
    }, {
      id: 1,
      name: '京',
      province: '北京'
    }, {
      id: 2,
      name: '沪',
      province: '上海'
    }],
    username: '',
    phone: '',
    verificationCode: '',
    carId: ''
  },

  takePhoto: function(e) {
    let that = this;
    wx.chooseImage({
      count: 1,
      success: function(res) {
        that.setData({
          photoPath: res.tempFilePaths[0],
          isChoose: true
        })
      },
    })
  },

  getVerificationCode: function(e) {
    console.log("尝试获取验证码");
    this.data.countDown = 60;
    let that = this;
    this.setData({
      isDownning:true,
    })
    this.countDown(this);
  },
  countDown: function(that) {
    let t = '';
    let countNumber = that.data.countDown;
    if (that.data.countDown <= 0) {
      that.setData({
        isDownning:false,
      })
      return;
    };
    t = setTimeout(function() {
      that.setData({
        countDown: countNumber - 1,
      })
      console.log(countNumber);
      that.countDown(that);
    }, 1000)
  },

  provinceChange: function(e) {
    this.setData({
      provinceIndex: e.detail.value
    })
  },

  inputvalue: function(e) {
    validateData(e, this);
  },

  register: function() {
    validateSubmit(this);

    if (!this.data.isSuccess) {
      return;
    }

    var staff = {
      staffName: this.data.username,
      staffTel: this.data.phone,
      vertify_code: this.data.verificationCode,
      car_number: this.data.provinceList[this.data.provinceIndex].name + this.data.carId,
      company: '北京凯盛文化有限公司',
      department: '产品部',
      address: '北京市朝阳区胡同里街道126号'
    }

    wx.setStorageSync("staff", staff);

    wx.switchTab({
      url: '/pages/staff/index',
    })
  }
})