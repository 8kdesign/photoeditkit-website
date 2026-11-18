import type { Dictionary } from './en';

/**
 * Simplified Chinese. Recipe names match PhotoEditKit's own zh-Hans localisation
 * (Localizable.xcstrings), so the site and the apps use the same words.
 */
export const zhHans: Dictionary = {
  meta: {
    title: 'PhotoEditKit — 为每张照片找到合适的修图',
    description:
      '适用于 iOS、macOS 和安卓的端侧修图库。PhotoEditKit 会分析每张照片，给出排好序的修图建议，可在选择器中展示，也可直接应用。零网络请求。',
    ogDescription: '为每张照片找到合适的修图，全部在设备端完成。',
    recipesTitle: '配方',
    recipesDescription:
      'PhotoEditKit 的每条建议都来自一组固定的校正、风格和主题配方，并针对每张照片调校。',
    notFoundTitle: '页面不存在',
  },

  nav: {
    overview: '概览',
    recipes: '配方',
    homeLabel: 'PhotoEditKit 首页',
    mainLabel: '主导航',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    language: '语言',
  },

  footer: {
    by: 'LogicUI 出品',
  },

  slider: {
    original: '原片',
    beforeAlt: '{alt}，原片',
    afterAlt: '{alt}，{label}',
    compare: '对比原片与{label}',
  },

  code: {
    tabsLabel: '编程语言',
    copy: '复制',
    copied: '已复制',
    copyLabel: '复制 {lang} 代码',
    swiftMeasureComment: '// 不要在主线程调用：这一步会分析照片。',
    swiftKeepComment: '// 照片已经很好，保持原样。',
    installLabel: '安装代码',
  },

  hero: {
    eyebrow: '端侧智能修图 · iOS · macOS · 安卓',
    title: '为每张照片找到合适的修图配置',
    lead: 'PhotoEditKit 会分析曝光、色偏、人脸、主体和噪点，然后给出修图建议。全部在设备端完成。',
    afterLabel: '自动修图',
    examplesLabel: '示例照片',
    caption: 'PhotoEditKit 的真实输出，未经二次修饰。在照片上拖动即可对比。',
    examples: {
      valley: '山谷',
      'night-street': '夜晚街道',
      'red-panda': '小熊猫',
      macaws: '金刚鹦鹉',
      tablet: '平板',
    },
  },

  oneCall: {
    eyebrow: '调用',
    title: '快速获取修图建议',
    body: '导入一张缩小的图片及其元数据，就会得到一个可直接渲染的 <code>EditConfig</code>；如果照片本身已经很好，则不返回任何结果。想让用户自己挑选？可以请求多个附带缩略图的建议。',
  },

  process: {
    eyebrow: '原理',
    title: '不只是一组滤镜',
    steps: [
      {
        title: '分析照片',
        text: '从缩小的副本中读取曝光、色偏、人脸、主体和噪点。',
      },
      {
        title: '调校每个配方',
        text: '根据分析结果为每个配方生成参数，专属于这张照片。',
      },
      { title: '逐一评分', text: '评估每个调校后的配方能让这张照片改善多少。' },
      {
        title: '淘汰低分项',
        text: '得分太低的配方会被过滤掉。本身已经均衡的照片可能一个都不保留。',
      },
      {
        title: '给出修图建议',
        text: '按排名返回保留下来的配方，可在选择器中展示，也可直接应用。',
      },
    ],
    readings: [
      { label: '曝光', value: '−0.6 EV' },
      { label: '色偏', value: '偏冷' },
      { label: '人脸', value: '1' },
      { label: '场景', value: '天空' },
    ],
  },

  overview: {
    eyebrow: '配方',
    title: '固定的配方，按每张照片调校',
    seeAll: '查看全部配方 →',
  },

  kinds: {
    correction: {
      label: '校正',
      plural: '校正类',
      summary:
        '修正照片本身的问题：曝光、色偏或噪点。照片需要修正时，这类配方最先给出。',
    },
    style: {
      label: '风格',
      plural: '风格类',
      summary:
        '关乎个人口味，并针对每张照片调校。同样是“鲜艳”，用在风景照上偏向绿色，用在夜晚街景上则偏向霓虹。',
    },
    theme: {
      label: '主题',
      plural: '主题类',
      summary:
        '把照片重新演绎成另一种风格。只在您主动请求时提供，排在校正和风格之后。',
    },
  },

  tryIt: {
    eyebrow: '试一试',
    title: '用您自己的照片看看效果',
    body: '下载 AutoEdit 可在 iPhone 上测试 PhotoEditKit 算法。选一张照片，滑动浏览针对这张照片排序的推荐效果。',
    button: '在 iOS 上试用 AutoEdit',
    imageAlt:
      'iPhone 上的 AutoEdit：一张应用了“浓烈”效果的湖泊照片，下方是一排推荐的效果',
  },

  privacy: {
    eyebrow: '隐私优先',
    title: '零网络请求',
    body: '无需下载远程模型，没有任何追踪。可放心用于 App 扩展，也能满足严格的离线要求。从用户保存记录中学到的偏好只保留在其设备上。',
  },

  install: {
    eyebrow: '安装',
    title: '双平台，同一套配方',
    iosQuickStart: 'iOS 快速上手 →',
    androidQuickStart: '安卓快速上手 →',
  },

  platforms: {
    apple: 'iOS与macOS',
    android: '安卓',
  },

  recipesPage: {
    eyebrow: '配方',
    title: '每条建议都来自以下配方',
    intro:
      '算法只挑选照片需要的配方，针对照片逐一调校，并把最有用的排在前面。校正类排在风格类之前；主题类只在您主动请求时出现。',
    filtersLabel: '筛选配方',
    all: '全部',
    onRequest: '按需提供',
    sampleAlt: '{name}示例',
    placeholderLabel: '示例占位：{name}修图前后',
    placeholderNote: '示例照片',
  },

  notFound: {
    title: '这个页面不存在',
    body: '链接可能已过期或输入有误。您可以前往以下页面：',
    back: '返回概览',
    recipes: '查看全部配方',
  },

  recipes: {
    'True Color': {
      name: '还原色彩',
      description:
        '校正混合光源，同时让天空保持蓝色、植物保持绿色、肤色保持自然。',
    },
    Brighten: {
      name: '提亮',
      description:
        '提亮拍得过暗的照片，主体自身的色彩会比其他部分提得更多一些。',
    },
    Deepen: {
      name: '加深',
      description:
        '为发灰或发白的照片带来更浓郁的黑色和更强的对比度，而不会把照片调亮。',
    },
    'Recover Highlights': {
      name: '恢复高光',
      description: '找回天空等明亮区域中的细节。',
    },
    'Lift Shadows': {
      name: '提亮阴影',
      description: '提亮暗部而不影响其他部分，即使主体背对明亮的窗户也适用。',
    },
    'Warm Up': {
      name: '调暖',
      description: '把偏蓝或偏冷的色偏还原为中性。绝不会额外添加色偏。',
    },
    'Cool Down': {
      name: '调冷',
      description: '把偏橙或偏黄的色偏还原为中性。绝不会额外添加色偏。',
    },
    'Clean Up': {
      name: '修补',
      description: '减少颗粒和噪点，不改动影调和色彩。',
    },
    Crisp: { name: '锐化', description: '细节更清晰，对比度略微提高。' },
    Punch: {
      name: '浓烈',
      description: '更强的对比度，配合适度的色彩增强。保留照片原有的暖调。',
    },
    Pop: {
      name: '明亮',
      description: '同时变得更亮、更有冲击力，适合昏暗房间里浅色的主体。',
    },
    Vivid: {
      name: '鲜艳',
      description: '围绕照片的主题增强色彩。肤色和本已浓烈的颜色几乎保持原样。',
    },
    Muted: {
      name: '淡雅',
      description:
        '整体色彩更安静，而主体保留自己的颜色。照片越鲜艳，去掉的色彩越多。',
    },
    Soft: {
      name: '柔和',
      description: '温和的效果：低对比度、通透的阴影。不改动色彩。',
    },
    Spotlight: {
      name: '聚焦',
      description: '压暗边缘，把视线引向画面中央。不改动色彩。',
    },
    Manga: {
      name: '漫画',
      description:
        '手绘动漫风格，阴影通透、绿色干净。仅适用于白天的城市、自然和天空照片。',
    },
    'B&W': {
      name: '黑白',
      description: '黑白效果，对比度、高光和阴影均针对照片设定。',
    },
    Film: {
      name: '胶片',
      description:
        '彩色负片印相效果：低饱和的色彩、橄榄绿、青蓝色，以及柔和过渡的高光。',
    },
    Matte: {
      name: '褪色',
      description:
        '褪色印相效果：柔化的黑色、更温和的色彩和轻微的暗角。对比强的照片褪得更多，平淡的照片褪得更少。',
    },
  },
};
