import translate from '../../utils/translate'
const app = getApp()
Page({
    data: {
        curLang: {},
        hideClearIcon: false,
        query: '',
        translateText: ''
    },
    onShow() {
        console.log(app.globalData.curLang.chs)
        if (this.data.curLang.lang !== app.globalData.curLang.lang) {
            this.setData({curLang: app.globalData.curLang})
            this.onConfirm()
        }
        
    },
    onInput (e) {
        this.setData({ query: e.detail.value });
        this.data.query === "" ? this.setData({ hideClearIcon: false }) : this.setData({ hideClearIcon: true });
        // console.log(this.data.query, this.data.hideClearIcon);
        
    },
    clearQuery() {
        this.setData({ query: '', translateText: "" });
    },
    onConfirm() {
        const {query, curLang} = this.data
        query === '' ?  null :  
        translate(query, {from: 'auto', to: curLang.lang}).then((data)=> {
            this.setData({translateText: [...data.trans_result]})
            const history = wx.getStorageSync('history') || []
            history.unshift({query, result: data.trans_result[0].dst})
            history.length = history.length <= 10 ? history.length : 10
            wx.setStorageSync('history', history)
        }, (e) => {
            console.log(e)
        })
    }
});
