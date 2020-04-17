// pages/chagne/change.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: []
  },

  onShow() {
    console.log(wx.getStorageSync('history'))
    this.setData({history: wx.getStorageSync('history')})
  }
})