/**
 * All data of the website
 * In order to support multi-languages
 * (Now support Chinese and English)
 */
// import route map
import routeMap from '../router'

// const __RES__ = JSON.parse(JSON.stringify(window.__RES__))
//
// const articles = __RES__.contentsSortedByTime.slice(0, 6).map(art => {
//   art = __RES__.contents[art]
//
//   return {
//     title: 'hello',
//     thumb: art.desc.slice(0, 200),
//     url: `https://blog.ijason.cc/article/${art.name}`,
//     time: art.mtime
//   }
// })

const art = [{
  title: '理解Redux',
  thumb: '昨天花了很久的时间，终于有些理解Redux了。根据官方的文档也做出了一个例子而且运用到我的项目中去。',
  url: `https://aleenl.github.io/2017/09/09/%E7%90%86%E8%A7%A3Redux/`,
  time: ' 2017-09-09',
  view: 22
}, {
  title: 'React-Route-v4的一些API(2)',
  thumb: '昨天我们已经讲了RR4最重要的组件，今天我们将接触到一个也很重要的组件',
  url: `https://aleenl.github.io/2017/08/18/React-Route-v4%E7%9A%84%E4%B8%80%E4%BA%9BAPI-2/`,
  time: '2017-08-18',
  view: 13
}, {
  title: 'Action Creator',
  thumb: '上一章节我们讲了Action，讲了Store和State，我们了解到一个页面应用只能有一个Store，也了解了Redux中，一个State对应一个View',
  url: `https://aleenl.github.io/2017/08/11/Action-Creator/`,
  time: '2017-08-11',
  view: 34
}, {
  title: 'Object.assign的用法',
  thumb: 'object.assign方法的用处',
  url: `https://aleenl.github.io/2017/08/08/es6%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97-1/`,
  time: '2017-08-08',
  view: 52
}, {
  title: 'React的事件处理',
  thumb: 'React元素的事件处理和DOM元素很相似，但是有一点语法上的不同。',
  url: `https://aleenl.github.io/2017/08/06/React%E6%8C%87%E5%8D%97/`,
  time: '2017-08-06',
  view: 17
}, {
  title: '原型',
  thumb: 'OOP是Object Oriented Programming的简称，即面向对象设计。',
  url: `https://aleenl.github.io/2017/07/23/%E5%8E%9F%E5%9E%8B/`,
  time: '2017-07-23',
  view: 122
}].map(value => value)

const base = {
  title: 'Aleen 的简历',
  name: '李子豪',
  shortDescription: '工作经验2年，前端工程师进阶中...',
  description: '自2015年开始学习前端，经过一年的学习，工作两年时间，现在职于领克酷比克公司,负责公众号和小程序的开发和维护',
  infomations: [{
    icon: 'https://cdn.ijason.cc/static/svgs/info/birthday.svg',
    key: '生日',
    value: '1991.2.17'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/education.svg',
    key: '教育经历',
    value: '渭南师范 · 地理科学'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/nowCity.svg',
    key: '居住地',
    value: '重庆 · 沙坪坝'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/email.svg',
    key: '邮箱',
    value: 'aleenli1992@gmail.com'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/phone.svg',
    key: '手机号',
    value: '+86 185 8036 0217'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/company.svg',
    key: '公司',
    value: '重庆 · 南岸'
  }],
  skills: [{
    value: 'HTML',
    logo: 'https://cdn.ijason.cc/static/images/logos/html.png'
  }, {
    value: 'CSS',
    logo: 'https://cdn.ijason.cc/static/images/logos/css.png'
  }, {
    value: 'JavaScript',
    logo: 'https://cdn.ijason.cc/static/images/logos/javascript.png',
    style: {
      background: 'linear-gradient(to bottom, #ffeb0e , #efdd1b)',
      'border-color': '#ffeb0e'
    }
  }, {
    value: 'React.js',
    logo: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/react2.png',
    style: {
      background: 'linear-gradient(to bottom, #17243A , #17243A)',
      'border-color': '#17243A'
    }
  }, {
    value: 'jQuery',
    logo: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/jquery.jpeg',
    style: {
      background: 'linear-gradient(to bottom, #126aab , #126aab)',
      'border-color': '#126aab'
    }
  }, {
    value: 'ES6',
    logo: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/ES6.png',
    style: {
      background: '#f5d75f',
      border: '5px solid #f5d75f'
    }
  }, {
    value: 'Photoshop',
    logo: 'https://cdn.ijason.cc/static/images/logos/photoshop.png',
    style: {
      background: '#001d26',
      border: '5px solid #00c8ff'
    }
  }, {
    value: 'Sketch',
    logo: 'https://cdn.ijason.cc/static/images/logos/sketch.png',
    style: {
      background: 'linear-gradient(to bottom, #1d0f4f , #130a33)',
      'border-color': '#1d0f4f'
    }
  }],
  projects: [{
    image: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/book.png',
    desc: '是基于React开发的webApp，一个旨在为以书会友的借书公众号，可以将用户不需要的书或者想要处理的书借给或者转卖给别人，只准许微信进入该网页。',
    url: 'http://m.canger.me',
    qrcode: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/canger.png'
  }, {
    image: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/music.png',
    desc: '一个手机在线音乐播放器，实现了歌词的实时显示，下一曲，暂停，收藏等功能。使用React,webpack进行打包。',
    url: 'https://aleenl.github.io/NewReactMusic/build/index.html?from=timeline',
    qrcode: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/musicer.png'
  }, {
    image: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/carousel2.png',
    desc: '一个比较复杂的轮播页面，实现的下一页和上一页的功能，同时提 供缩略图，加载进度等',
    url: 'https://aleenl.github.io/new-carousel/newCarouel.html#',
    qrcode: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/qCardlunbo.png'
  }],
  projectRefer: '在我的 Github 查看更多项目',
  designs: {
    jingmei: {
      background: `#859398`,
      mainImage: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/mockup_jingmei.png',
      title: '苍耳书友',
      subTitle: '一个以书为友的线上APP',
      desc: '工作时间： 2017年4月 - 至今',
      link: 'http://m.canger.me',
      linkRefer: '可以去微信搜索《苍耳书友》',
      posi: 'left'
    },
    mi4Mockup: {
      background: '#222',
      mainImage: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/mac2.png',
      title: '小教室',
      subTitle: '一个线上直播教育平台',
      desc: '工作时间： 2016年9月 - 2017年3月',
      link: 'http://www.xiaojs.cn/exhibition',
      linkRefer: '去官网上看看',
      posi: 'left'
    }
  },
  art
}

const en = {
  title: `Allen's resume`,
  name: 'Allen Lee',
  shortDescription: 'Working experience for two years, front-end developer...',
  description: `Since 2015, learning the front end, after a year of study, working two years, now in the leadership of the LinkCubic, responsible for the development and maintenance of public numbers and small programs`,
  infomations: [{
    icon: 'https://cdn.ijason.cc/static/svgs/info/birthday.svg',
    key: 'Birthday',
    value: '1991.2.17'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/education.svg',
    key: 'Education',
    value: 'WNU · SHX'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/nowCity.svg',
    key: 'Live in',
    value: 'Chongqing, Chongqing'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/email.svg',
    key: 'Email',
    value: 'aleenli1992@gmail.com'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/phone.svg',
    key: 'Phone Number',
    value: '+86 185 8036 0217'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/company.svg',
    key: 'Company',
    value: 'LinkCubic'
  }],
  projects: [{
    image: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/book.png',
    desc: 'It\'s a React - based webApp, a public number for book friends, which can lend or resell a book or a book that the user does not need, only to allow WeChat to enter the web.',
    url: 'http://m.canger.me',
    qrcode: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/canger.png'
  }, {
    image: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/music.png',
    desc: `A mobile phone online music player, the realization of the lyrics real-time display, the next song, pause, collection and other functions. Use React, webpack for packaging.`,
    url: 'https://aleenl.github.io/NewReactMusic/build/index.html?from=timeline',
    qrcode: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/musicer.png'
  }, {
    image: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/carousel2.png',
    desc: 'A complicated carousel Web page, have the next page and previous page function, at the same time provide thumbnails, loading etc.',
    url: 'https://aleenl.github.io/new-carousel/newCarouel.html#',
    qrcode: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/qCardlunbo.png'
  }],
  projectRefer: 'See more projects in my Github',
  designs: {
    jingmei: {
      background: `#859398`,
      mainImage: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/mockup_jingmei.png',
      title: 'Cang Er',
      subTitle: 'Web App for friend with book',
      desc: 'Working: 2017.04 - now',
      link: 'http://m.canger.me',
      linkRefer: 'Search cangEr in WeChat',
      posi: 'left'
    },
    mi4Mockup: {
      background: '#222',
      mainImage: 'http://lcimg.oss-cn-hangzhou.aliyuncs.com/video/mac2.png',
      title: 'Xiaojs',
      subTitle: 'Live on Inter',
      desc: 'Working: 2016.09 - 2017.03',
      link: 'http://www.xiaojs.cn/exhibition',
      linkRefer: 'Go websites',
      posi: 'left'
    },
    logos: {
      background: '#F8F8F8',
      mainImage: 'https://cdn.ijason.cc/static/images/designs/logos.png',
      title: 'Logos',
      subTitle: '',
      desc: 'Design for some websites and Wechat Public Accounts.',
      link: '',
      linkRefer: '去 ui.cn 查看详情',
      posi: 'left'
    }
  }
}

export default {
  cn: {
    website: base,
    route: routeMap.map(v => v.cn)
  },
  en: {
    website: Object.assign({}, base, en),
    route: routeMap.map(v => v.en)
  }
}

