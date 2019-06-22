// pages/invited_record/invited_record.js
Page({


  data: {
    mesList:[
      { title: "北京凯盛文化传播有限公司", user: "赵大同", department: "产品部", phone: "18212314123", address: "北京市朝阳区胡同里街102号" },
      { title: "北京凯盛文化传播有限公司", user: "赵大同", department: "产品部", phone: "18212314123", address:"北京市朝阳区胡同里街102号"}
    ]
  },
  inviterMes(){
    wx.navigateTo({
      url: '../land_message/land_message',
    })
  }

})