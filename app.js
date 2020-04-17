//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[1]
  },
  globalData: {
    curLang: {},
    langList: [
      {
        'chs': '中文',
        'lang': 'zh'
      },
      {
        'chs': '英语',
        'lang': 'en'
      },
      {
        'chs': '粤语',
        'lang': 'yue'
      },
      {
        'chs': '文言文',
        'lang': 'wyw'
      },
      {
        'chs': '日语',
        'lang': 'jp'
      },
      {
        'chs': '泰语',
        'lang': 'th'
      },
      {
        'chs': '法语',
        'lang': 'fra'
      },
      {
        'chs': '德语',
        'lang': 'de'
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara'
      },
      {
        'chs': '俄语',
        'lang': 'ru'
      },
      {
        'chs': '葡萄牙语',
        'lang': 'pt'
      },
      {
        'chs': '意大利语',
        'lang': 'it'
      },
      {
        'chs': '越南语',
        'lang': 'vie'
      },
    ]
  }
})