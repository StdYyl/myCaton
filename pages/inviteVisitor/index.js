const app = getApp();
const util = require('../../utils/util.js');

function sharePosteCanvas(that, cardInfo, codeSrc) {
  const ctx = wx.createCanvasContext('myCanvas',that);
  const ratio = that.data.screenWidth / 375;
  var height = 375 * ratio ;
  var width = that.data.screenWidth * 0.78;
  ctx.setFillStyle('#fff');
  ctx.fillRect(0, 0, width, height);

  ctx.drawImage('../../icons/Groups.png', 0, 0, width, height);

  var code_width;
  var code_height;
  wx.getImageInfo({
    src: codeSrc,
    success: function (res) {
      code_width = res.width * ratio;
      code_height = res.height * ratio;
    }
  })

  setTimeout(function(){
    if (codeSrc) {
      ctx.drawImage(codeSrc, width / 3, 39 * ratio, width / 3, width / 3);
      ctx.setFontSize(10);
      ctx.setFillStyle('#000');
      ctx.setTextAlign('left');
    }

    if (cardInfo.company) {
      // 公司名称
      // const CONTENT_ROW_LENGTH = 24; // 正文 单行显示字符长度
      // let [contentLeng, contentArray, contentRows] = textByteLength(cardInfo.company, CONTENT_ROW_LENGTH);
      ctx.setTextAlign('left');
      ctx.setFillStyle('#333');
      ctx.setFontSize(14);
      // let contentHh = 22 * 1;
      // for (let m = 0; m < contentArray.length; m++) {
      //  ctx.fillText(contentArray[m], left, width + 150 + contentHh * m);
      // }
      let offset_x = ctx.measureText(cardInfo.company).width;
      ctx.fillText(cardInfo.company, (width - offset_x) / 2, code_height + 50 * ratio);
    }

    if (cardInfo.department && cardInfo.name) {
      ctx.setFontSize(12);
      ctx.setFillStyle('#666');
      ctx.setTextAlign('left');
      let offset_x = ctx.measureText(cardInfo.department + "  [" + cardInfo.name + "]邀您来访").width;
      ctx.fillText(cardInfo.department + "  [" + cardInfo.name + "]邀您来访", (width - offset_x) / 2, code_height + 67 * ratio);
    }

    if (cardInfo.tel) {
      ctx.setFontSize(12);
      ctx.setFillStyle('#666');
      ctx.setTextAlign('left');
      let offset_x = ctx.measureText("联系方式：" + cardInfo.tel).width;
      ctx.fillText("联系方式：" + cardInfo.tel, (width - offset_x) / 2, code_height + 89 * ratio); //
    }

    if (cardInfo.address) {
      ctx.setFontSize(12);
      ctx.setFillStyle('#666');
      ctx.setTextAlign('left');
      let offset_x = ctx.measureText("地址：" + cardInfo.address).width;
      ctx.fillText("地址：" + cardInfo.address, (width - offset_x) / 2, code_height + 105 * ratio);
    }

    var logo_width;
    var logo_height;
    wx.getImageInfo({
      src: '../../icons/logo.png',
      success: function (res) {
        logo_width = res.width;
        logo_height = res.height;
      }
    })

    if (codeSrc) {
      ctx.drawImage('../../icons/logo.png', width * 2 / 5, code_height + 169 * ratio, width / 5, width / 20);
      ctx.setFontSize(10);
      ctx.setFillStyle('#000');
      ctx.setTextAlign('left');
    }
  },1000)

  setTimeout(function (){
    ctx.draw();
  }, 2000);

}

function textByteLength(text, num) { // text为传入的文本  num为单行显示的字节长度
  let strLength = 0; // text byte length
  let rows = 1;
  let str = 0;
  let arr = [];
  for (let j = 0; j < text.length; j++) {
    if (text.charCodeAt(j) > 255) {
      strLength += 2;
      if (strLength > rows * num) {
        strLength++;
        arr.push(text.slice(str, j));
        str = j;
        rows++;
      }
    } else {
      strLength++;
      if (strLength > rows * num) {
        arr.push(text.slice(str, j));
        str = j;
        rows++;
      }
    }
  }
  arr.push(text.slice(str, text.length));
  return [strLength, arr, rows] //  [处理文字的总字节长度，每行显示内容的数组，行数]
}

function downloadFile(that){
  
}

//点击保存到相册
function saveShareImg(that) {
  wx.canvasToTempFilePath({
    canvasId: 'myCanvas',
    success: function (res) {
      var tempFilePath = res.tempFilePath;
      saveImageToPhone(this, tempFilePath);
      console.log(res);
    },
    fail: function (res) {
      console.log(res);
    }
  }, that);
}

function saveImageToPhone(that, url){
  // wx.downloadFile({
  //   url: url,
  //   success: function (res) {
  //     console.log(res);
  //     if (res.statusCode === 200) {
  //       let img = res.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath: url,
          success(res) {
            wx.showLoading({
              title: '保存中···',
              mask: true
            });
            setTimeout(function () {
              wx.hideLoading();
              wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 1000,
                success: function(){
                  setTimeout(function(){
                    wx.navigateBack({});
                  },1000);
                }
              }); 
            }, 2000);
          },
          fail(res) {
            wx.showModal({
              title: '保存失败',
              content: '是否授权相册',
              success(res) {
                if (res.confirm) {
                  wx.openSetting({
                    success(settingdata) {
                      if (settingdata.authSetting['scope.writePhotosAlbum']) {
                        saveImageToPhone(that,url);
                      } else {
                        wx.showToast({
                          title: '保存失败',
                          icon: 'none',
                          duration: 2000
                        });
                      }

                    }
                  });
                }else if(res.cancel){

                }
              }
            });
          }
        });

  //     }
  //   }
  // });
}

function dateChange(that, res, fn){
  var selectDate = res.detail.value;
  var sort = res.currentTarget.dataset.sort || res.target.dataset.sort;
  that.setData({
    [sort+"Time"]: selectDate
  });
}

function selectVisitor(that, visitor){
  // for (var i = 0; i < that.data.visitedList.length;i++){
  //   if ((that.data.visitedList[i].visitor == visitor.visitorName) && (that.data.visitedList[i].tel == visitor.visitorTel)){
  //     return i;
  //   }
  // }
  return 1;
}

function generateInvitedCode(that, visitor){
  var index = selectVisitor(that, visitor);
  wx.showLoading({
    title: '正在生成中',
  })
  setTimeout(function () {
    if (index == undefined) {
      wx.hideLoading();
      wx.showModal({
        title: '提示',
        content: '没有找到该访客',
        showCancel: false,
        confirmText: '我知道了',
        confirmColor: '#6698FF',
        success(res) {
          if (res.confirm) {

          }
        }
      });
      return;
    }
    that.setData({
      isChange: true,
      isHidden: true,
      showModel: true,
      selectedIndex: index
    });
    wx.hideLoading();
  }, 500);
}

function changeStandard(res, that, fn){
  var isStandard = that.data.isStandard;
  var isShow = that.data.isShow;
  that.setData({
    isStandard: !isStandard,
    isShow: !isShow
  });
}

function cancelGenerateCode(that){
  //  修改
  that.setData({
    isHidden: false,
    showModel: false
  })
  setTimeout(function(){
    that.setData({
      isChange: false
    })
  }, 600);
}

function validateData(res, that){
  var type = res.currentTarget.dataset.type || res.target.dataset.type;
  var data = res.detail.value;
  if(type=='name'){
    if(data.indexOf(' ')==-1){
      if(data.length<=10){
        
      }else{
        wx.showToast({
          title: '用户名不能超过十个字',
          icon: 'none',
          duration: 1000
        })
        data = data.substring(0, 10);
      }
    }else{
      util.nonExistSpace('用户名');
      data = data.substring(0, data.length - 1);
    }
    that.setData({
      visitorName: data
    });
  }else if(type=='tel'){
    if (data.indexOf(' ') == -1) {
      if (data.length > 11){
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
      visitorTel: data
    });
  } else if(type=='reason'){
    that.setData({
      comeReason: data
    });
  }
}

function validateSubmit(that){
  var visitorName = that.data.visitorName;
  var visitorTel = that.data.visitorTel;
  var startTime = that.data.startTime;
  var endTime = that.data.endTime;
  var date = that.data.date;
  var comeReason = that.data.comeReason;

  if(visitorName==''){
    util.showEmptyMessage(that, '被邀人名');
    return;
  }
  if (visitorTel == '' || visitorTel.length != 11){
    if(visitorTel == ''){
      util.showEmptyMessage(that, '联系方式');
    } else if (visitorTel.length != 11){
      if (that != null) {
        that.setData({
          isSuccess: false
        });
      }
      wx.showToast({
        title: '手机号必须为11位',
        icon: 'none',
        duration: 1000
      })
    }
    return;
  }
  if (date == '请选择日期'){
    util.showEmptyMessage(that, '日期');
    return;
  }
  if (startTime == '请选择开始时间'){
    util.showEmptyMessage(that, '开始日期');
    return;
  }
  if (endTime == '请选择结束时间'){
    util.showEmptyMessage(that, '结束时间');
    return;
  }
  if (comeReason == ''){
    util.showEmptyMessage(that, '来访事由');
    return;
  }

  that.setData({
    isSuccess: true
  });

  var visitor = {};
  visitor = {
    visitorName: visitorName,
    visitorTel: visitorTel
  };
  return visitor;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime: '请选择开始时间',
    endTime: '请选择结束时间',
    dateTime: '请选择日期',
    isChange: false,      
    isHidden: false,     
    isHeigh: false,    
    visitorName: '',
    visitorTel: '',
    comeReason: '',
    isSuccess: true,
    status: false,
    transId: -1,
    visitedList: [
      {
        id: 1,
        nickname: '刘振',
        visitor: '刘振',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务',
        tel: '12345678945',
        company: '北京凯盛文化有限公司',
        department: '产品部',
        address: '北京市朝阳区胡同里街道126号'
      },
      {
        id: 2,
        nickname: '静怡',
        visitor: '王静怡',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务',
        tel: '12345678945',
        company: '北京凯盛文化有限公司',
        department: '产品部',
        address: '北京市朝阳区胡同里街道126号'
      },
      {
        id: 3,
        nickname: '刘振',
        visitor: '刘振',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '处理工事',
        tel: '12345678945',
        company: '北京凯盛文化有限公司',
        department: '产品部',
        address: '北京市朝阳区胡同里街道126号'
      },
      {
        id: 4,
        nickname: '静怡',
        visitor: '王静怡',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务',
        tel: '12345678945',
        company: '北京凯盛文化有限公司',
        department: '产品部',
        address: '北京市朝阳区胡同里街道126号'
      },
      {
        id: 5,
        nickname: '静怡',
        visitor: 'wangjingyi',
        day: '2019-02-05',
        hour: '09:00 - 10:00',
        reason: '办理业务',
        tel: '12345678912',
        company: '北京凯盛文化有限公司',
        department: '产品部',
        address: '北京市朝阳区胡同里街道126号'
      }
    ],
    showModel: false,
    selectedIndex: -1,
    staff: {},
    screenHeight: 0,
    screenWidth: 0
  },

  onLoad: function (options) {
    if(options.status && options.id){
      console.log('是');
      this.setData({
        status: options.status,
        transId: options.id
      });

      this.setData({
        visitorName: this.data.visitedList[this.data.transId - 1].visitor,
        visitorTel: this.data.visitedList[this.data.transId - 1].tel,
        comeReason: this.data.visitedList[this.data.transId - 1].reason
      });
    }

    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        let h = res.screenHeight;
        let w = res.screenWidth;
        that.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
          isHeigh: (h / w < 1.7) ? true : false,
          w: res.screenWidth,
          pro: res.screenWidth / 750
        });
      },
    });

    var staff = wx.getStorageSync("staff");
    this.setData({
      staff: staff
    });
    
  },

  onReady: function () {

  },

  onShow: function () {

  },

  bindDateChange:function(res){
    dateChange(this, res, function(){

    });
  },

  generateCode: function(res){
    var cardInfo = {
      company: this.data.staff.company,
      department: this.data.staff.department,
      name: this.data.staff.staffName,
      tel: this.data.staff.staffTel,
      address: this.data.staff.address
    }
    sharePosteCanvas(this, cardInfo, '../../icons/code.png');   
    var visitor = validateSubmit(this);
    if(!this.data.isSuccess){
      return;
    }
    generateInvitedCode(this, visitor);
  },

  selectStandard: function (res){
    changeStandard(res, this, function(){

    });
  },

  cancelGenerate:function(){
    cancelGenerateCode(this);
  },

  validate: function(res){
    validateData(res, this);
  },

  saveImage: function(){
    saveShareImg(this);
    //saveImageToPhone(this, 'http://192.168.1.118:81/test/caletoo.png');
  }
})