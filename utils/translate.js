import md5 from './md5.min'
const appid = '20200414000420462'
const key = 'raf0gG783TnOPEgTo7rI'
const translate = (q, { from = 'auto', to = 'auto' } = { from: 'auto', to: 'auto' }) => {
  const salt = Date.now()
  const sign = md5(`${appid}${q}${salt}${key}`)
  return new Promise((reslove, reject) => {
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q,
        from,
        to,
        appid,
        salt,
        sign
      },
      success (res) {
        if (res.data && res.data.trans_result) {
          reslove(res.data)
        }
      },
      fail() {
        reject({ status: 'error', msg: '翻译失败' })
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 3000
        })
      }
    })
  })
  
  
}

export default translate