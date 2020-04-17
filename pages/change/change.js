// pages/chagne/change.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    curLang: {},
    langList: app.globalData.langList
  },

  onShow() {
    this.setData({curLang: app.globalData.curLang})
    console.log(this.data.curLang)
  },

  onTap(e) {
    app.globalData.curLang = e.currentTarget.dataset
    wx.setStorageSync('curLang', e.currentTarget.dataset)
    this.setData({curLang: e.currentTarget.dataset})
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
  
})