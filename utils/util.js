function priceParse(value) {
  if (!isNaN(value)) {
    return (value / 100).toFixed(2);
  } else {
    return '系统异常';
  }

}

function priceCalculate(value) {
  return parseInt(value * 100);
}

//数组滤重
function arrFilter(array) {
  var temp = []; //一个新的临时数组
  for (let i = 0; i < array.length; i++) {
    if (temp.indexOf(array[i]) === -1) {
      temp.push(array[i]);
    }
  }
  return temp;
}

function setStorageMessage(key, data){
  wx.setStorage({
    key: key,
    data: data,
  })
}

function getStorageMessage(key){
  wx.getStorage({
    key: key,
    success: function(res) {
      return res.data
    },
  })
}

function showEmptyMessage(that, type){
  if (that != null) {
    that.setData({
      isSuccess: false
    });
  }

  wx.showToast({
    title: type+'不能为空',
    icon: 'none',
    duration: 1000
  })
}

function nonExistSpace(e){
  wx.showToast({
    title: e+'不能有空格',
    icon: 'none',
    duration: 1000
  })
}

module.exports = {
  priceParse: priceParse,
  priceCalculate: priceCalculate,
  arrFilter: arrFilter,
  setStorageMessage: setStorageMessage,
  getStorageMessage: getStorageMessage,
  showEmptyMessage: showEmptyMessage,
  nonExistSpace: nonExistSpace
};
