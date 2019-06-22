const app = getApp();

Page({

  data: {
    date: new Date,
    beginDate: "",
    beginTime: "",
    form: {
      reason: "",
      choseTime: "请选择日期",
      beginTime: "选择开始时间",
      endTime: "选择结束时间",
      interviewee: "",
      department: "",
      intervieweePhone: 0
    }
  },
  onLoad() {
    let s = wx.getStorageSync("cusMes");
  },
  // 添加来访日期
  changeDate(e) {
    this.setData({
      "form.choseTime": e.detail.value
    })
  },
  // 添加开始时间
  changeBeginTime(e) {
    this.setData({
      "form.beginTime": e.detail.value
    })
  },
  // 添加结束时间
  changeEndTime(e) {
    this.setData({
      "form.endTime": e.detail.value
    })
  },
  // 添加来访事由
  reason_text(e) {
    var len = e.detail.value;
    this.setData({
      "form.reason": len
    })
    app.toast(len.length, 15)
  },
  // 添加被访人信息
  bindName(e) {
    var len = e.detail.value;
    this.setData({
      "form.interviewee": len
    })
    app.toast(len.length, 10)
  },
  // 添加被访人所属部门
  bindDepartment(e) {
    var len = e.detail.value;
    this.setData({
      "form.department": len
    })
    app.toast(len.length, 10)
  },
  // 添加被访人联系方式
  bindTel(e) {
    var len = e.detail.value;
    this.setData({
      "form.intervieweePhone": len
    })
    app.toast(len.length, 11)
  },
  // 提交申请
  bindSubmit() {
    let reason = this.data.form.reason;
    let choseTime = this.data.form.choseTime;
    let beginTime = this.data.form.beginTime;
    let endTime = this.data.form.endTime;
    let interviewee = this.data.form.interviewee;
    let department = this.data.form.department;
    let intervieweePhone = this.data.form.intervieweePhone;
    if (!reason) {
      app.toasted("来访事由不能为空");
    } else if (choseTime == "请选择日期") {
      app.toasted("来访日期不能为空");
    } else if (beginTime == "选择开始时间") {
      app.toasted("开始时间不能为空");
    } else if (endTime == "选择结束时间") {
      app.toasted("结束时间不能为空");
    } else if (!interviewee) {
      app.toasted("被访人不能为空");
    } else if (!department) {
      app.toasted("所属部门不能为空");
    } else if (!intervieweePhone || intervieweePhone.length != 11) {
      app.toasted(!intervieweePhone ? "联系方式不能为空" : "手机号格式有误");
    } else {
      wx.setStorage({
        key: 'type',
        data: 'visitor',
      });
      wx.switchTab({
        url: '/pages/staff/index',
      });
    }
  }

})