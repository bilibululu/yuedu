const app = getApp();
Component({
  data: {
    selected: 0,
    "color": "#555555",
    "selectedColor": "#4997D2",
    "list": [
      {
      "pagePath": "/pages/index/index",
      "text": "活动",
      "iconPath": "/icon/活动未选中状态.png",
      "selectedIconPath": "/icon/活动选中状态.png"
      },
      {
        "pagePath": "/pages/scan/scan",
        "text": "",
        "iconPath": "/icon/二维码.png",
        "isSpecial":true
        },
      {
        "pagePath": "/pages/mine/mine",
        "text": "我的",
        "iconPath": "/icon/我的未选中状态.png",
        "selectedIconPath": "/icon/我的选中状态.png"
        }
      ],
      isIphoneX: app.globalData.isIphoneX
  },
  attached() {},
  methods: {
    switchTab(e) {
      const dataset = e.currentTarget.dataset
      const path = dataset.path
      const index = dataset.index
      //如果是特殊跳转界面
      if (this.data.list[index].isSpecial) {
        wx.navigateTo({
          url: path
        })
      } else {
        //正常的tabbar切换界面
        wx.switchTab({
          url: path
        })
        this.setData({
          selected: index
        })
      }
    }
  }
})