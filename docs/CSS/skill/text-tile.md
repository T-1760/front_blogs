### 文本内容平铺满一行宽度
- 单行文本短于行宽度
  ```css
    .content{
      text-align: justify;
      text-justify: distribute-all-lines;
      text-align-last: justify;
    }
  ```
- 单行文本超出行宽度 超出部分...省略号展现
  ```css
    .content{
      overflow: hidden; // 溢出隐藏
      white-space: nowrap;// 文本不换行
      text-overflow: ellipsis;/ 文本溢出显示省略号
    }
  ```
- 实现多行文本溢出显示省略号
  > [CSS实现单行、多行文本溢出显示省略号](https://blog.csdn.net/jyn15159/article/details/123998406)
  ```css
    .content{
      display: -webkit-box; // 设置弹性伸缩盒子模型
      -webkit-box-orient: vertical; // 设置子元素排列方式
      -webkit-line-clamp: 3; // 限制在一个块元素显示的文本行数
      overflow: hidden; // 溢出隐藏
    }
  ```
