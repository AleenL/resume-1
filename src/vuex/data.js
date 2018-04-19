/**
 * All data of the website
 * In order to support multi-languages
 * (Now support Chinese and English)
 */
// import route map
import routeMap from '../router'

const __RES__ = JSON.parse(JSON.stringify(window.__RES__))

const articles = __RES__.contentsSortedByTime.slice(0, 6).map(art => {
  art = __RES__.contents[art]

  return {
    title: art.title,
    thumb: art.desc.slice(0, 200),
    url: `https://blog.ijason.cc/article/${art.name}`,
    time: art.mtime
  }
})

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
    image: 'https://cdn.ijason.cc/static/images/projects/szucheduleapp.jpg',
    desc: '一款为深圳大学学生开发的课表查询 App，可以自动同步教务处网站上的课程信息，随时随地查询课程表及课程详细信息。是一款使用 Vue.js 三件套和 Cordove 开发的一款 Hybrid App。',
    url: 'https://github.com/heyszu/szuschedule-app',
    qrcode: 'https://cdn.ijason.cc/static/images/projects/szucheduleapp_qrcode.png'
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
  articles
}

const en = {
  title: `Jason's resume`,
  name: 'Jason Chen',
  shortDescription: 'A student, front-end developer...',
  description: `I started learning front-end development and participating in development and maintenance of a number of WeChat public accounts in school when I was a freshman at university. At the same time, I began to follow the open source community and the front-end ecosystem closely. Now work in Tencent as trainee.`,
  infomations: [{
    icon: 'https://cdn.ijason.cc/static/svgs/info/birthday.svg',
    key: 'Birthday',
    value: '1996.2.11'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/education.svg',
    key: 'Education',
    value: 'CIE · SZU'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/nowCity.svg',
    key: 'Live in',
    value: 'Shenzhen, Guangdong'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/email.svg',
    key: 'Email',
    value: 'jason@iszu.cn'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/phone.svg',
    key: 'Phone Number',
    value: '+86 13128931074'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/company.svg',
    key: 'Company',
    value: 'Tencent.Inc'
  }],
  projects: [{
    image: 'https://cdn.ijason.cc/static/images/projects/goszu.jpg',
    desc: 'A website navigation for students of Shenzhen University. It collects many commonly used websites and some websites hard to find. This site is powered by Vue.js and Node.js for backend.',
    url: 'http://www.goszu.com/',
    qrcode: 'https://cdn.ijason.cc/static/images/projects/goszu_qrcode.png'
  }, {
    image: 'https://cdn.ijason.cc/static/images/projects/powerusage.jpg',
    desc: `It's a website that can query the remaining electricity of dormitory, predict available days based on your usage, and also can push low-power-warning via Wechat.`,
    url: 'http://www.wacxt.cn/powerusage/',
    qrcode: 'https://cdn.ijason.cc/static/images/projects/powerusage_qrcode.png'
  }, {
    image: 'https://cdn.ijason.cc/static/images/projects/szucheduleapp.jpg',
    desc: `A app can auto sync class schedule from server. You can inquire your class infomations everywhere. It's based on Cordova and Vue.js and Node.js for backend. `,
    url: 'https://github.com/heyszu/szuschedule-app',
    qrcode: 'https://cdn.ijason.cc/static/images/projects/szucheduleapp_qrcode.png'
  }],
  projectRefer: 'See more projects in my Github',
  designs: {
    jingmei: {
      background: `#859398`,
      mainImage: 'https://cdn.ijason.cc/static/images/designs/mockup_jingmei.png',
      title: 'Silence',
      subTitle: 'Theme for FlymeOS',
      desc: 'This is a theme designing for MEIZU Flyme Theme Competition 2014. No edges and corners icons, with low saturation color and the wallpaper to bring out a quiet feeling.',
      link: 'http://www.ui.cn/detail/26910.html',
      linkRefer: 'See detail in ui.cn',
      posi: 'left'
    },
    mi4Mockup: {
      background: '#222',
      mainImage: 'https://cdn.ijason.cc/static/images/designs/mockup_mi4.png',
      title: 'Mi4 Mockup',
      subTitle: 'Phone mockup psd',
      desc: 'Copy painting from offcial website of Xiaomi 4. Fully vector painting, the screen use intelligent object, can be embedded in the display picture.',
      link: 'http://www.ui.cn/detail/21758.html',
      linkRefer: 'See detail in ui.cn',
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
