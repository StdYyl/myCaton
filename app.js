App({

  globalData:{
    
  },
  //判断闰年
  isLeapyear: function (year) {
    if (year % 400 == 0)
      return true
    if (year % 4 == 0 && year % 100 != 0)
      return true
    return false
  },


  // 输入提示
  toast(len, maxLength) {
    if (len > maxLength) {
      wx.showToast({
        title: '最大长度为' + maxLength,
        icon: "none"
      })
    }
  },
  // 为空提示
  toasted(e) {
    wx.showToast({
      title: e,
      icon: "none"
    })
  },
  
})