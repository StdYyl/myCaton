const app = getApp()
//身份证号码验证、手机号验证、
Page({
  data: {
    name: "",
    index: 0,
    province: ["京", "津", "沪", "渝", "冀", "豫", "云", "辽", "黑", "湘", "皖", "鲁", "新", "苏", "浙", "赣", "鄂", "桂", "甘", "晋", "蒙", "陕", "吉", "闽", "贵", "粤", "青", "藏", "川", "宁", "琼"],
    form: {
      imageSrc: "",
      name: "",
      telID: 0,
      phone: 0,
      address: "",
      carNum: ""
    }
  },
  // 添加联系电话
  bindPhone(e) {
    var len = e.detail.value;
    this.setData({
      "form.phone": len
    })
    app.toast(len.length, 11);
  },
  //添加练习地址
  bindAddress(e) {
    var len = e.detail.value;
    this.setData({
      "form.address": len
    })
  },
  //添加车牌号
  bindcarID(e) {
    var len = e.detail.value;
    this.setData({
      "form.carNum": this.data.province[this.data.index] + len
    })
  },
  //添加身份证号
  bindID(e) {
    var len = e.detail.value;
    this.setData({
      "form.telID": len
    })
  },
  //添加用户名
  maxLenth(e) {
    var len = e.detail.value;
    this.setData({
      "form.name": len
    })
  },
  // 车牌首部
  bindchangeIndex(e) {
    this.setData({
      index: e.detail.value
    })
  },
  // 添加照片
  chooseImg() {
    let that = this;
    wx.chooseImage({
      sourceType: ['album', 'camera'],
      count: 1,
      success: function (res) {
        that.setData({
          "form.imageSrc": res.tempFilePaths[0]
        })
      },
    })
  },
  // 下一步处理
  next() {
    let name = this.data.form.name;
    let telID = this.data.form.telID;
    let phone = this.data.form.phone;
    let address = this.data.form.address;
    let carNum = this.data.form.carNum;
    let pc = this.data.form.imageSrc;
    let named = /\s/g;
    let rs = named.test(name);
    if (!pc) {
      app.toasted("头像不能空");
      return;
    } else if (!name || rs) {
      app.toasted(rs ? "姓名输入格式有误" : "姓名不能为空");
      return;
    } else if (!phone || phone.length != 11) {
      app.toasted(phone.length != 11 ? "手机号格式有误" : "手机号不能为空");
      return;
    } else if (!address) {
      app.toasted("单位住址不能为空");
      return;
    } else {
      wx.setStorageSync("cusMes", this.data.form);
      wx.navigateTo({
        url: 'visitorNext',
      })
    }
  }
})
