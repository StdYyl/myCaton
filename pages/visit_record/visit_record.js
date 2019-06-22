
Page({

  data: {
    isShow: [true, true, true],
    isShowed: [true, true, true],
    title: ["已提交", "已同意", "已拒绝"],
    submitMes: [
      [
        { id: 0, data: "2019-02-16", time: "09:00", interviewee: "可可杨" }
      ],
      [
        { id: 1, data: "2019-02-15", time: "18:00", interviewee: "王大陆" },
        { id: 2, data: "2019-02-15", time: "18:00", interviewee: "向华强" }
      ],
      [
        { id: 3, data: "2019-02-15", time: "18:00", interviewee: "向华强" },
      ],
    ]
  },

  transform(e) {
    console.log(222);
    let s = e.currentTarget.dataset.id;
    this.data.isShow[s] = !this.data.isShow[s];
    this.setData({
      isShowed: this.data.isShow
    });
    if (!this.data.isShow[s]) {
      setTimeout(() => {
        this.setData({
          isShow: this.data.isShow
        })
      }, 400)
    } else {
      this.setData({
        isShow: this.data.isShow
      })
    }
  },
  bindModify(e){
    wx.navigateTo({
      url: '../visitor/visitorNext?userId='+e.currentTarget.dataset.id,
    })
  }
})