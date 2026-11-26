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
    gettingStarted: '快速上手',
    recipes: '配方',
    homeLabel: 'PhotoEditKit 首页',
    mainLabel: '主导航',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    language: '语言',
  },

  privacyPage: {
    eyebrow: '隐私',
    title: '隐私政策',
    description: 'PhotoEditKit 严格在设备本地处理和编辑照片。LogicUI 不会通过本网站或 PhotoEditKit 开发库收集、存储、出售或共享任何个人信息。',
    updated: '最后更新：2026 年 11 月 27 日',
    intro: 'PhotoEditKit 的设计旨在严格在设备本地处理和编辑照片，绝不向外部服务器发送任何数据。本隐私政策适用于本网站，以及由 **LogicUI** 开发的 iOS、macOS 和 Android 版 PhotoEditKit 开发库。',
    sections: [
      {
        title: '概要',
        blocks: [
          { text: 'LogicUI 不会通过本网站或 PhotoEditKit 开发库收集、存储、出售或共享任何个人信息。你的照片、视频及相关元数据绝不会上传到我们的服务器。本政策说明少数在技术上会在你的设备本地保存少量数据、或由必要的基础设施服务商处理数据的情形。' },
        ],
      },
      {
        title: '1. 本网站',
        blocks: [
          { text: '本网站采用零追踪架构：' },
          {
            items: [
              { label: '无追踪、无 Cookie', text: '我们不使用用户账户、表单、统计分析、广告网络、追踪脚本、Cookie 或浏览器本地存储（例如 `localStorage`）。' },
              { label: '自托管资源', text: '所有字体和图片均直接由本网站自身的域名提供，不向任何第三方 CDN 发起请求。' },
              { label: '不保存状态', text: '选择语言（例如 `/zh-Hans`）仅会改变网址，不会在多次访问间被保留。' },
              { label: '服务器日志', text: '与大多数网络服务一样，我们的网站托管商会处理临时的标准 HTTP 请求日志（例如 IP 地址、浏览器 User-Agent、请求的网址和时间戳），仅用于提供网站服务和维护网络安全。这些日志不会用于追踪、分析或识别访问者，也不会与任何外部数据进行交叉比对。' },
            ],
          },
        ],
      },
      {
        title: '2. PhotoEditKit 开发库（SDK）',
        blocks: [
          { text: 'PhotoEditKit 开发库完全离线运行，不进行任何网络活动。' },
          {
            items: [
              { label: '无外部通信', text: '开发库不会发起网络请求，不在运行时下载远程资源或模型，也不包含任何遥测、崩溃报告、追踪或广告代码。' },
              { label: '设备端处理', text: '照片、视频及其元数据（例如曝光、ISO）严格在设备本地进行分析与渲染。' },
              { label: 'App 权限', text: 'SDK 本身不直接申请系统权限。集成 PhotoEditKit 的宿主 App 会自行管理其权限请求（例如照片图库或相机访问权限）。' },
            ],
          },
          { heading: '本地偏好与机器学习记录' },
          { text: '为了提供个性化的修图建议，PhotoEditKit 会在本地从用户保存的修图中学习：' },
          {
            items: [
              { label: '数值特征', text: '每次保存修图都会生成一条简短的本地记录，包含照片的数值特征（描述其光线和色彩的数值，**绝不包含照片本身**）、时间戳、提供的预设、所选的预设以及各滑块的调整幅度。' },
              { label: '用户风格参数', text: '在 iOS 和 macOS 上，对话式编辑器会为每项设置保存一个数值，表示用户偏好的调整力度。' },
              { label: '保留与存储', text: '记录仅保存在设备上宿主 App 的私有存储空间中。系统会滚动清理记录（仅保留最近的修图），记录受设备的 App 沙盒和加密保护。卸载 App 时，这些记录会被永久删除。' },
            ],
          },
          { heading: '设备端 AI 模型' },
          { text: '在支持 Apple 智能的 Apple 设备上，对话式编辑器通过 Foundation Models 框架调用 Apple 的设备端语言模型。所有指令处理均在设备本地完成。' },
        ],
      },
      {
        title: '3. 使用 PhotoEditKit 构建的 App',
        blocks: [
          { text: '集成 PhotoEditKit 的开发者自行掌控其 App 的整体架构与数据收集行为。' },
          {
            items: [
              { label: '开发者责任', text: '终端用户应查阅使用 PhotoEditKit 的第三方 App 各自的隐私政策。' },
              { label: '不向 LogicUI 发送数据', text: 'LogicUI 不会从使用我们 SDK 的第三方 App 接收任何遥测数据、崩溃日志、设备标识符或媒体文件。开发者可以在 App Store 的“App 隐私详情”中，如实将 PhotoEditKit 申报为“未收集数据”。' },
              { label: 'AutoEdit', text: '我们基于 PhotoEditKit 开发的自研 iOS App（AutoEdit）拥有[独立的隐私政策](https://www.logicui.com/autoedit/privacy)。' },
            ],
          },
        ],
      },
      {
        title: '4. 第三方服务与依赖',
        blocks: [
          { text: '访问本网站链接的外部资源时：' },
          {
            items: [
              { label: 'GitHub', text: '源代码仓库、文档和 Issue 追踪均托管于 GitHub。通过 Swift Package Manager、Gradle 或直接克隆进行的下载，均受 [GitHub 隐私声明](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)约束。' },
              { label: 'App Store', text: '指向 Apple App Store 的链接会跳转至该平台，并受 Apple 自身的隐私条款约束。' },
            ],
          },
        ],
      },
      {
        title: '5. 数据保留、安全与权利',
        blocks: [
          {
            items: [
              { label: '数据主体权利（GDPR / CCPA / CPRA）', text: '由于 LogicUI 不收集、存储或处理个人数据，我们无可供访问、修改、传输或删除的个人数据档案。唯一涉及的个人数据是上文所述的网站托管商临时请求日志。' },
              { label: '本地数据控制', text: '用户可以通过宿主 App 内的重置设置（如有）或直接删除 App 来清除本地的 PhotoEditKit 学习记录。' },
            ],
          },
        ],
      },
      {
        title: '6. 儿童隐私',
        blocks: [
          { text: '本网站及 PhotoEditKit 开发工具面向开发者和通用受众。我们不会有意收集儿童的个人信息。集成该 SDK 的第三方 App 在遵守 COPPA 及全球儿童隐私法律方面，适用其各自开发者的政策。' },
        ],
      },
      {
        title: '7. 政策变更',
        blocks: [
          { text: '我们可能会定期更新本政策，以反映开发库或网站的变化。任何更新都会发布在本页面，并同步修改页首的“最后更新”日期。' },
        ],
      },
      {
        title: '8. 联系我们',
        blocks: [
          { text: '如对本隐私政策或 PhotoEditKit 的隐私架构有任何疑问，请通过以下方式联系我们：' },
          { items: [{ label: '公开咨询 / 技术讨论', text: '在我们的 [GitHub 仓库](https://github.com/8kdesign/PhotoEditKit/issues)提交 Issue。' }] },
        ],
      },
    ],
  },

  footer: {
    privacy: '隐私政策',
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
    eyebrow: '自动修图 · iOS · macOS · 安卓',
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

  video: {
    eyebrow: '视频',
    title: '视频也能修，逐个场景调校',
    body: '在开头一帧选好效果，PhotoEditKit 会把它延续到整段视频。场景一变就重新调校效果，并在这些位置之间逐渐过渡，色调不会突然跳变。',
    timelineLabel: '一段有三个场景的视频：效果在每个关键帧重新调校，并在中间帧之间逐渐过渡。',
    keyframe: '关键帧',
    steps: [
      { title: '找出关键帧', text: '在后台读取一遍视频，在每次场景切换处标记一个关键帧。' },
      { title: '逐个重新调校', text: '分析每个关键帧，按该场景的光线重建所选效果，并保留你的滑块调整。' },
      { title: '中间帧逐渐过渡', text: '两个关键帧之间的画面从前一个效果逐渐过渡到下一个，切换时不会跳变。' },
    ],
    note: '视频不做锐化、降噪和颗粒，避免画面逐帧闪烁。',
  },

  overview: {
    eyebrow: '配方',
    title: '固定的配方，按每张照片调校',
    body: '好的修图从真实的场景出发。PhotoEditKit 先还原准确的色彩和光线，然后才让照片更赏心悦目。',
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

  gettingStarted: {
    metaTitle: '快速上手：iOS 与安卓自动修图',
    metaDescription:
      '通过 Swift Package Manager 或 Gradle 安装 PhotoEditKit，几行 Swift 或 Kotlin 代码即可让端侧 AI 修好一张照片。免费使用，包括商业应用。',
    breadcrumb: '快速上手',
    eyebrow: '快速上手',
    title: '为您的应用加入自动修图',
    intro: '安装库，传入照片，即可得到它需要的修图。全部在设备端完成：无需账号、无需 API 密钥、没有网络请求。',
    jumpLabel: '选择平台',
    requirementsLabel: '系统要求',
    guideLink: 'GitHub 上的完整{platform}指南',
    stepLabel: '第 {n} 步',
    ios: {
      requirements: ['iOS 17.6+', 'macOS 15+', 'Swift Package Manager'],
      installTitle: '用 Swift Package Manager 安装',
      installBody:
        '在 Xcode 中选择 <code>File → Add Package Dependencies…</code>，输入 <code>https://github.com/8kdesign/PhotoEditKit</code>，并将 PhotoEditKit 库添加到应用目标。也可以在自己的 <code>Package.swift</code> 中声明：',
      editTitle: '让 AI 修一张照片',
      editBody:
        '传给 AI 一张方向正确的小图（512 像素足够）以及照片的 ImageIO 属性。您会得到一个 <code>EditConfig</code>，用于渲染原尺寸照片；如果照片已经很好，则返回 <code>nil</code>。请在主线程以外运行。',
      metadataNote: '请传入原始文件的属性。借助 EXIF 曝光信息，AI 能分辨夜景街道和曝光不足的照片，不会把有意拍暗的照片调亮。',
      pickerTitle: '展示修图建议选择器',
      pickerBody:
        '想让用户自己选？最多可获取十条排好序的建议，每条都有标题、<code>EditConfig</code> 和现成的缩略图。请传入原尺寸照片，以便测量噪点。',
      macNote: '在 macOS 上 API 完全相同：示例中使用 <code>UIImage</code> 的地方改用 <code>NSImage</code> 即可。',
      guideTitle: '阅读完整指南',
      guideBody:
        'README 涵盖其余内容：用 <code>EditController</code> 构建编辑器、HDR 导出、实况照片、视频编辑以及所有设置。',
    },
    android: {
      requirements: ['Android 10+', 'arm64-v8a', 'compileSdk 36', 'Kotlin 2.2+'],
      repoTitle: '添加 Maven 仓库',
      repoBody: 'PhotoEditKit 发布在托管于 GitHub 的 Maven 仓库中。请在 <code>settings.gradle.kts</code> 中添加：',
      dependencyTitle: '添加依赖',
      dependencyBody:
        '然后在应用模块的 <code>build.gradle.kts</code> 中添加该库。AI 引擎仅支持 64 位 ARM，因此请将应用限定为 <code>arm64-v8a</code>：',
      editTitle: '让 AI 修一张照片',
      editBody:
        '用 <code>ImageDecoder</code> 解码出方向正确的照片，并传入它的 <code>ExifInterface</code>。<code>suggestions</code> 是在后台运行的挂起函数。在主线程以外用 <code>renderedEdit</code> 渲染最佳建议。',
      pickerTitle: '展示修图建议选择器',
      pickerBody: '每条建议都带有设备语言的标题、<code>EditConfig</code> 和 240 像素的缩略图，可直接用于选择器。构图均衡的照片可能不会返回任何建议。',
      guideTitle: '阅读完整指南',
      guideBody:
        'README 涵盖其余内容：用 <code>EditPreviewView</code> 预览、Ultra HDR、动态照片、视频编辑以及所有设置。',
    },
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
    Digicam: {
      name: 'CCD',
      description:
        '2000 年代初卡片机的效果：画面偏亮，高光硬生生地剪切成白色，黑色发灰，偏冷的蓝色调，色彩稀薄，低分辨率般的柔软感和彩色噪点。',
    },
  },
};
