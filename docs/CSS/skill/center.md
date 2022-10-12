## CSS水平垂直居中
- 参考链接
  [万能的css样式居中法总结](https://juejin.cn/post/7070343315111018526)
  [CSS 水平居中与垂直居中的16个方法](https://juejin.cn/post/6844903799446831117#heading-12)

### 一、纯 flex 法
- 要点：父元素样式：`display: flex; justify-content: center; align-items: center;`
  ```css
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .parent{
      display: flex;
      justify-content: center;
      align-items: center;
      
      width: 200px;
      height: 200px;
      border:1px solid red;
    }
    .children{
      width: 50px;
      height: 50px;
      background: pink;
    }
  ```
### 二、flex + margin：auto法
- 要点：给父元素设置`display:flex`，且*父元素设置高度值*；然后给子元素设置`margin: auto`，即可实现居中
  ```css
     *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .parent{
      display: flex;
    
      width: 200px;
      height: 200px;
      border:1px solid red;
    }
    .children{
      margin: auto;
      
      width: 50px;
      height: 50px;
      background: pink;
    }  
  ```

### 三、absolute + margin: auto法
- 要点：子元素相对于父元素进行absolute绝对定位 `position: absolute;top: 0;left: 0;bottom: 0;right: 0;`, 且设置`margin: auto`
   ```css
     *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .parent{
      position: relative;

      width: 200px;
      height: 200px;
      border:1px solid red;
    }
    .children{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      
      width: 50px;
      height: 50px;
      background: pink;
    }  
  ```

### 四、absolute + transform法
- 要点：子元素相对于父元素进行absolute绝对定位 `position: absolute; top: 50%; left: 50%;`,且通过`transform: translate(-50%, -50%)`向左(x轴)偏移一半的宽度和向上(y轴)偏移一半的高度，即可居中
  ```css
     *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .parent{
      position: relative;

      width: 200px;
      height: 200px;
      border:1px solid red;
    }
    .children{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      width: 50px;
      height: 50px;
      background: pink;
    } 
  ```
### 五、table-cell + inlineBlock法
- 要点：父元素设置 `display: table-cell; text-align: center; vertical-align: middle;`, 子元素设置`display: inline-block;`
  ```css
     *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .parent{
      display: table-cell;
      text-align: center;
      vertical-align: middle;

      width: 200px;
      height: 200px;
      border:1px solid red;
    }
    .children{
      display: inline-block;
      
      width: 50px;
      height: 50px;
      background: pink;
    } 
  ```

### 六、grid法
- 要点：父元素设置`display： grid`; 子元素设置`align-self: center; justify-self: center;`
   ```css
     *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .parent{
      display: grid;

      width: 200px;
      height: 200px;
      border:1px solid red;
    }
    .children{
      align-self: center;
      justify-self: center;
      
      width: 50px;
      height: 50px;
      background: pink;
    } 
  ```