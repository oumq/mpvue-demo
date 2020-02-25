// 请求类封装

// 超时时间
const timeout = 20000

// post请求
const post = (url, params = {}, headerOptions = {}) => {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'POST',
      data: params,
      header: {
        'content-type': 'application/json',
        ...headerOptions
      },
      timeout: timeout,
      success: res => {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: err => {
        wx.hideLoading()
        reject(err)
      }
    })
  })
}

// get请求
const get = (url, params = {}, headerOptions = {}) => {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'GET',
      data: params,
      header: {
        ...headerOptions
      },
      timeout: timeout,
      success: res => {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: err => {
        wx.hideLoading()
        reject(err)
      }
    })
  })
}

export default {
  post,
  get
}
