const sidebar = require("./sidebar.js")
const nav = require("./nav.js")
const friendLink = require("./friendLink.js")

module.exports = {
  "title": "front_blogs",
  "description": "this is front blogs",
  // "base": "/",//注 本地时为 / 根路径
  "base": "/front_blogs/",//注 构建线上时，与GitHubPages远程仓库名相同
  "head": [
    [ "link", { "rel": "icon", "href": "/favicon.ico" }],
    [ "meta", {  "name": "viewport",  "content": "width=device-width,initial-scale=1,user-scalable=no"}]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": nav,
    "sidebar": sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      },
      subSidebar: 'auto'// 开启目录结构
    },
    "friendLink": friendLink,
    "logo": "/favicon.ico",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Tang",
    "authorAvatar": "/avatar.jpg",
    "record": "备案信息",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}