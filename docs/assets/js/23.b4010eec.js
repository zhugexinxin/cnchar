(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{825:function(_,v,a){"use strict";a.r(v);var t=a(30),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"_1-0-基础版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-基础版本"}},[_._v("#")]),_._v(" 1.0（基础版本）")]),_._v(" "),a("ol",[a("li",[_._v("获取 "),a("strong",[_._v("汉字拼音")]),_._v(" ，支持首字母、大小写、数组分割")]),_._v(" "),a("li",[_._v("获取 "),a("strong",[_._v("汉字笔画数")])])]),_._v(" "),a("h2",{attrs:{id:"_2-0-升级版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-升级版本"}},[_._v("#")]),_._v(" 2.0 （升级版本）")]),_._v(" "),a("ol",[a("li",[_._v("备选 "),a("strong",[_._v("多音字")]),_._v(" 等功能")]),_._v(" "),a("li",[_._v("支持 "),a("strong",[_._v("多音词")])]),_._v(" "),a("li",[_._v("支持 "),a("strong",[_._v("拼音音调")])]),_._v(" "),a("li",[_._v("获取汉字 "),a("strong",[_._v("笔画顺序")]),_._v(" 、笔画详细名称、通过笔画顺序推出原汉字等")]),_._v(" "),a("li",[_._v("支持 "),a("strong",[_._v("简体字")]),_._v(" 、 "),a("strong",[_._v("繁体字")]),_._v(" 、 "),a("strong",[_._v("火星文")]),_._v(" 互转")]),_._v(" "),a("li",[_._v("支持 "),a("strong",[_._v("繁体字")]),_._v(" 拼音、笔画数，实现和简体字一样的功能")]),_._v(" "),a("li",[a("strong",[_._v("体积小")]),_._v("，最小压缩版本仅 42 kb")]),_._v(" "),a("li",[a("strong",[_._v("多端可用")]),_._v("，可用于 原生浏览器环境、webpack环境、nodejs环境...，几乎支持所有js能运行的环境")]),_._v(" "),a("li",[_._v("丰富的配置，按需取用")])]),_._v(" "),a("h2",{attrs:{id:"_2-0-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-2"}},[_._v("#")]),_._v(" 2.0.2")]),_._v(" "),a("ol",[a("li",[_._v("添加多音字默认读音字典")]),_._v(" "),a("li",[_._v("增加根据笔画数反推导出汉字的功能 orderToWord")]),_._v(" "),a("li",[_._v("修改一些多音字的默认读音")])]),_._v(" "),a("h2",{attrs:{id:"_2-0-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-3"}},[_._v("#")]),_._v(" 2.0.3")]),_._v(" "),a("ol",[a("li",[_._v("去除 origin 参数，多音词模式下使用 poly参数会启用备选多音字功能而禁用多音词功能")]),_._v(" "),a("li",[_._v("orderToWord 加入繁体字支持，参数修改为 ['all','simple']")]),_._v(" "),a("li",[_._v("增加参数校验中提示可选值")]),_._v(" "),a("li",[_._v("对词库进行一些修改")])]),_._v(" "),a("h2",{attrs:{id:"_2-0-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-4"}},[_._v("#")]),_._v(" 2.0.4")]),_._v(" "),a("ol",[a("li",[_._v("主要扩充了繁体字库")]),_._v(" "),a("li",[_._v("修改了 繁体字、简体字、火星体之间的转换方法，只保留了六个转换方法")])]),_._v(" "),a("h2",{attrs:{id:"_2-0-5-2-0-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-5-2-0-6"}},[_._v("#")]),_._v(" 2.0.5 - 2.0.6")]),_._v(" "),a("ol",[a("li",[_._v("加入了 typescript 声明文件 index.d.ts")]),_._v(" "),a("li",[_._v("script 方式引用增加了 latest.min.js 版本")])]),_._v(" "),a("h2",{attrs:{id:"_2-0-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-7"}},[_._v("#")]),_._v(" 2.0.7")]),_._v(" "),a("ol",[a("li",[_._v("加入 eslint 和 commitlint")]),_._v(" "),a("li",[_._v("使用 gulp-babel 转换源代码到 npm 包，使得即便禁用了对node_module的babel转换，也可以正常使用cnchr")]),_._v(" "),a("li",[_._v("修复了多音字广和厂的默认读音")])]),_._v(" "),a("h2",{attrs:{id:"_2-0-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-8"}},[_._v("#")]),_._v(" 2.0.8")]),_._v(" "),a("ol",[a("li",[_._v("扩充了217个词频高于100的汉字")]),_._v(" "),a("li",[_._v("修改orderToWord.orders 笔画名称的显示，如果某个笔画有两个现在会保留两个名称")]),_._v(" "),a("li",[_._v("orderToWord 笔画数组支持使用空格分隔的笔画字符串")]),_._v(" "),a("li",[_._v("orderToWord 默认返回字符串 如需返回数组请加上 array 参数")]),_._v(" "),a("li",[_._v("orderToWord 修改all参数为start 增加 contain、match、matchorder参数，优先级 match>matchorder>contain>start>默认")]),_._v(" "),a("li",[_._v("加入 cnchar.spellToWord 方法")]),_._v(" "),a("li",[_._v("加入 cnchar.strokeToWord 方法")]),_._v(" "),a("li",[_._v("加入 cnchar.spellInfo 方法，spellInfo.tones spellInfo.initials属性")]),_._v(" "),a("li",[_._v("仓库加入测试目录")])]),_._v(" "),a("h2",{attrs:{id:"_2-0-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-9"}},[_._v("#")]),_._v(" 2.0.9")]),_._v(" "),a("ol",[a("li",[_._v('修复 多音词"致远任重" 中的 重 字拼音错误')]),_._v(" "),a("li",[_._v("增加 齉 字 [nàng 36]")]),_._v(" "),a("li",[_._v("无字默认读音修正")]),_._v(" "),a("li",[_._v("修改 13 个多音字的默认读音")]),_._v(" "),a("li",[_._v("增加 15 个多音词")])]),_._v(" "),a("h2",{attrs:{id:"_2-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-0"}},[_._v("#")]),_._v(" 2.1.0")]),_._v(" "),a("ol",[a("li",[_._v("增加cnchar-draw插件，支持可视化绘制汉字笔画，多种模式可选")]),_._v(" "),a("li",[_._v("将cdn移至npm包中，改变cdn引用方式，删除dist目录")]),_._v(" "),a("li",[_._v("使用vuepress构建文档，工程化重构文档")]),_._v(" "),a("li",[_._v("使用gulp-markdown-toc")])]),_._v(" "),a("h2",{attrs:{id:"_2-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1"}},[_._v("#")]),_._v(" 2.1.1")]),_._v(" "),a("ol",[a("li",[_._v("修复cnchar-all依赖的bug")])]),_._v(" "),a("h2",{attrs:{id:"_2-1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2"}},[_._v("#")]),_._v(" 2.1.2")]),_._v(" "),a("ol",[a("li",[_._v("增加draw背景色设置")]),_._v(" "),a("li",[_._v("修正几个多音词")]),_._v(" "),a("li",[_._v("统一 trad 和 simple 参数")]),_._v(" "),a("li",[_._v("移除了一字和三字的繁体（应该是大写不是繁体）")])]),_._v(" "),a("h2",{attrs:{id:"_2-1-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3"}},[_._v("#")]),_._v(" 2.1.3")]),_._v(" "),a("ol",[a("li",[_._v("draw库增加clear参数，表示绘制前是否清空容器")]),_._v(" "),a("li",[_._v("draw库将backgroundColor参数默认值改为#fff")]),_._v(" "),a("li",[_._v("draw库将el参数改为支持css选择器或dom")])]),_._v(" "),a("h2",{attrs:{id:"_2-1-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4"}},[_._v("#")]),_._v(" 2.1.4")]),_._v(" "),a("ol",[a("li",[_._v("修复cnchar-all及cnchar-draw库在非浏览器环境会报错的bug")]),_._v(" "),a("li",[_._v("修复 draw库和main库在ts环境中引用的异常")])]),_._v(" "),a("h2",{attrs:{id:"_2-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-0"}},[_._v("#")]),_._v(" 2.2.0")]),_._v(" "),a("ol",[a("li",[_._v("增加cnchar-idiom 成语库")]),_._v(" "),a("li",[_._v("增加cnchar-xhy 歇后语库")]),_._v(" "),a("li",[_._v("增加transformTone,isCnchar,compareSpell,compareStroke,sortSpell,sortStroke工具方法，方便开发者更便捷的操作拼音和汉字")]),_._v(" "),a("li",[_._v("对ts声明文件进行修改，对ts的支持更加友好")]),_._v(" "),a("li",[_._v("鸟字增加默认读音")]),_._v(" "),a("li",[_._v("彷徨读音修正")]),_._v(" "),a("li",[_._v("cnchar-draw 增加 Promise-polyfill")]),_._v(" "),a("li",[_._v("文档增加Object.assign-polyfill")])]),_._v(" "),a("h2",{attrs:{id:"_2-2-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1"}},[_._v("#")]),_._v(" 2.2.1")]),_._v(" "),a("ol",[a("li",[_._v("修复ts声明文件的bug")]),_._v(" "),a("li",[_._v("ts声明文件增加字符串扩展方法")]),_._v(" "),a("li",[_._v("修复构建npm的bug")])]),_._v(" "),a("h2",{attrs:{id:"_2-2-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2"}},[_._v("#")]),_._v(" 2.2.2")]),_._v(" "),a("ol",[a("li",[_._v("增加几个多音字的默认读音")])]),_._v(" "),a("h2",{attrs:{id:"_2-2-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3"}},[_._v("#")]),_._v(" 2.2.3")]),_._v(" "),a("ol",[a("li",[_._v("修复draw库不同绘制实例样式会干扰的bug")])]),_._v(" "),a("h2",{attrs:{id:"_2-2-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4"}},[_._v("#")]),_._v(" 2.2.4")]),_._v(" "),a("ol",[a("li",[_._v("增加 红 字的默认读音")])]),_._v(" "),a("h2",{attrs:{id:"_2-2-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5"}},[_._v("#")]),_._v(" 2.2.5")]),_._v(" "),a("ol",[a("li",[_._v("增加cnchar-radical, 偏旁部首插件库")])]),_._v(" "),a("h2",{attrs:{id:"_2-2-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-6"}},[_._v("#")]),_._v(" 2.2.6")]),_._v(" "),a("ol",[a("li",[_._v("增加区字默认读音")])]),_._v(" "),a("h2",{attrs:{id:"_2-2-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-7"}},[_._v("#")]),_._v(" 2.2.7")]),_._v(" "),a("ol",[a("li",[_._v("笔划数表使用json代替数组，以解决微信小程序中无法获取笔画数的问题")]),_._v(" "),a("li",[_._v("兼容ios和mac的笔划字符")]),_._v(" "),a("li",[_._v("增加11个不常见多音字的默认读音")]),_._v(" "),a("li",[_._v("cdn 文件使用umd模块")])]),_._v(" "),a("h2",{attrs:{id:"_2-2-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-8"}},[_._v("#")]),_._v(" 2.2.8")]),_._v(" "),a("ol",[a("li",[_._v("增加 自定义 设置数据的方法 setSpell setSpellDefault setStrokeCount setOrder setPolyPhrase setRadical addXhy")]),_._v(" "),a("li",[_._v("增加 shapeSpell 方法，用于将拼音数字声调模式转成带声调的拼音")]),_._v(" "),a("li",[_._v("增加 isPolyWord 方法，用于高效判断一个汉字是否是多音字")]),_._v(" "),a("li",[_._v("修正 眝 耄 耋 三个字的偏旁")]),_._v(" "),a("li",[_._v("修正 苦 被 厕 默认读音 修正 雪茄 读音")]),_._v(" "),a("li",[_._v("歇后语没有查询到默认返回空数组")]),_._v(" "),a("li",[_._v("修复小程序下json文件为数组加载不到的问题")])]),_._v(" "),a("h2",{attrs:{id:"_3-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-0"}},[_._v("#")]),_._v(" 3.0.0")]),_._v(" "),a("ol",[a("li",[_._v("typescript 重写，主库及所有插件库使用ts重写")]),_._v(" "),a("li",[_._v("增加 免 和 倘 的默认读音")]),_._v(" "),a("li",[_._v("增加 重来 词组")])]),_._v(" "),a("h2",{attrs:{id:"_3-0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-1"}},[_._v("#")]),_._v(" 3.0.1")]),_._v(" "),a("ol",[a("li",[_._v("打包配置修改 tsconfig.json")])]),_._v(" "),a("h2",{attrs:{id:"_3-0-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-2"}},[_._v("#")]),_._v(" 3.0.2")]),_._v(" "),a("ol",[a("li",[_._v("修正 归 字默认读音")]),_._v(" "),a("li",[_._v("宝盖头 的第二笔名称由 撇点 修改为 点2")]),_._v(" "),a("li",[_._v("增加 order 方法detail 返回 letter属性")]),_._v(" "),a("li",[_._v("增加 难民 逃难 多音词")]),_._v(" "),a("li",[_._v("修改一些笔画foldCount和type错误")]),_._v(" "),a("li",[_._v("增加单元测试")]),_._v(" "),a("li",[_._v("代码仓库移除npm文件夹")])]),_._v(" "),a("h2",{attrs:{id:"_3-0-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-3"}},[_._v("#")]),_._v(" 3.0.3")]),_._v(" "),a("ol",[a("li",[_._v("增加繁体字 裡迴讚")]),_._v(" "),a("li",[_._v("增加 draw 插件绘制控制api startAnimation pauseAnimation resumeAnimation drawNextStroke")])]),_._v(" "),a("h2",{attrs:{id:"_3-0-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-4"}},[_._v("#")]),_._v(" 3.0.4")]),_._v(" "),a("ol",[a("li",[_._v("增加 将否 两个字的默认读音")]),_._v(" "),a("li",[_._v("修正 银行 词组的读音")]),_._v(" "),a("li",[_._v("修正了多个多音字和词组")])])])}),[],!1,null,null,null);v.default=r.exports}}]);