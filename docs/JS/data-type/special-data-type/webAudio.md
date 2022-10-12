## webAudio
- 参考链接
  [AudioContext音频波动](https://www.bilibili.com/video/BV1jA4y197cu?p=4&spm_id_from=pageDriver)

### AudioContext
  - 计算机的声音系统, 主要用于创建和管理音频对象。音频由**一组AudioNode组成，这些音频节点组合并路由到AudioDestinationNode**
  - 创建AudioContext
   > `let audioCtx = new (window.AudioContext || window.webkitAudioContext)()`
  - AudioContext常用属性
    1. `audioCtx.destination`返回一个AudioDestinationNode, 即context中所有音频(节点)的最终目标节点。**定义音频渲染设备(如：扬声器)**
    2. `audioCtx.currentTime`返回音频**从创建开始到当前的时间（秒）**
  - AudioContext常用方法
    1. `audioCtx.BaseAudioContext()`: 继承父接口的方法
    2. `audioCtx.decodeAudioData( arrayBuffer ).then((buffer)=>{})`: 异步编码包含在arrayBuffer中的音频数据
    3. `audioCtx.createBufferSource()`: 创建 AudioBufferSourceNode对象， 可用于播放和操作AudioBuffer对象中包含的音频数据
    4. `audioCtx.createAnalyser()`: 创建 AnalyserNode对象，用于**公开音频的时间和频率**
### AudioBuffer
  - 内存中一段音频数据，可通过 **Audio8Conext.decodeAudioData()从音频文件创建**或者 **AudioContext.createBuffer()方法从原始数据创建**，音频数据编码为AudioBuffer格式才可被放入AudioBufferNode中使用
### AudioBufferNode
  - 由内存音频数据组成的音频源，音频数据存储在AudioBuffer中(即 buffer属性)
  - 创建 AudioBufferNode
    > `let audioBufferSourceNode = audioCtx.createBufferSource() `
  - AudioBufferNode常用属性
    1. `audioBufferSourceNode.buffer`提供重复播放音频的能力，该音频使用AudioBuffer作为声音文件的来源。若 buffer为null,节点自动生成一个单声道无声文件(即所有采样点为 0)。
      > 子属性 duration音频资源的时长(秒)
    2. `audioBufferSourceNode.loop` 是否循环播放，默认false
  - AudioBufferNode常用方法
    1. start/noteOn(when, offset, duration): 开始播放音频
      > when参数：何时开始播放；offset参数：从音频第几帧开始；duration参数：播放几秒
    1. stop/noteOn(when): 结束播放音频
      > when参数：何时停止播放