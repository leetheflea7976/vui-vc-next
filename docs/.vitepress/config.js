module.exports = {
  // base: '/vui-vc-next/docs', // base url for build
  lang: 'en-US',
  title: 'VUI docs',
  description: 'The docs of VUI.next',

  themeConfig: {
    repo: 'bluepower/vui-vc-next',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',

    nav: [
      {
        text: 'VUI Components',
        link: '/'
      },
      {
        text: 'VUI Poc',
        link: 'https://github.com/bluepower/vui-poc'
      },
      {
        text: 'VUI Taro',
        link: 'https://github.com/bluepower/vui-taro'
      },
      {
        text: 'Changelog',
        link: 'https://github.com/bluepower/vui-vc-next/blob/dev/CHANGELOG.md'
      }
    ],

    sidebar: {
      '/': getConfigSidebar(),
      '/components/': getConfigSidebar()
    }
  }
}

function getConfigSidebar() {
  return [{
    text: 'VUI Components',
    children: [
      {
        text: 'Index page',
        link: '/'
      },
      {
        text: 'VSkeleton',
        link: '/components/skeleton'
      },
      {
        text: 'VTag',
        link: '/components/tag'
      },
      {
        text: 'VPopup',
        link: '/components/popup'
      },
      {
        text: 'VIcon',
        link: '/components/icon'
      },
      {
        text: 'VButton',
        link: '/components/button'
      },
      {
        text: 'VTransition',
        link: '/components/transition'
      },
      {
        text: 'VLandscape',
        link: '/components/landscape'
      },
      {
        text: 'VToast',
        link: '/components/toast'
      },
      {
        text: 'VAmount',
        link: '/components/amount'
      },
      {
        text: 'VActivityIndicator',
        link: '/components/activity-indicator'
      },
      {
        text: 'VChart',
        link: '/components/chart'
      },
      {
        text: 'VProgress',
        link: '/components/progress'
      },
      {
        text: 'VResultPage',
        link: '/components/result-page'
      },
      {
        text: 'VActionBar',
        link: '/components/action-bar'
      },
      {
        text: 'VSwitch',
        link: '/components/switch'
      },
      {
        text: 'VActionSheet',
        link: '/components/action-sheet'
      },
      {
        text: 'VWatermark',
        link: '/components/watermark'
      },
      {
        text: 'VScrollView',
        link: '/components/scroll-view'
      },
      {
        text: 'VAgree',
        link: '/components/agree'
      }
    ]
  }]
}
