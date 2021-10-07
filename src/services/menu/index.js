export default async function getMenuData() {
  return [
    // TF:REPLACE-START:MENU-CONFIG
    {
      category: true,
      title: 'IAZ',
      key: 'q7r3hr',
    },
    {
      title: 'IAZ Dashboard',
      category: true,
      key: 'oi2iv',
      icon: 'fe fe-home',
      children: [
        {
          title: 'Dashboard',
          key: '__dashboard',
          url: '/dashboard',
        },
        {
          title: 'Sales',
          key: 'jlx0h',
          url: '/dashboard/sales',
        },
      ],
    },
    {
      category: true,
      title: 'Insurance Buyer',
      key: 'q7r3hw',
    },
    {
      category: true,
      title: 'IAZ Self Service Portal',
      key: '2t2ghm',
      icon: 'fe fe-users',
      children: [

    {
      title: 'Profile',
      key: 'e38wke',
      url: '/profile',
    },
    {
      title: 'Policy Documents',
      key: '81n64m',
      url: '/policy-documents',
    },
    ]
  },
    {
      category: true,
      title: 'Insurance Company',
      key: 'krwgag',
    },
    {
      category: true,
      title: 'Insurance Dashboard',
      key: 'krwgag',
      icon: 'fe fe-briefcase',
      children: [
          {
            title: 'Dashboard',
            key: 'agiw5f',
            url: '/insurance/',
          },
          {
            title: 'Claims',
            key: 'brmh5',
            url: '/insurance/claims',
          },
          {
            title: 'Policy Sales',
            key: '2av8s2',
            url: '/insurance/sales ',
          },
        ]
      },
      {
        category: true,
        title: 'Forms',
        key: 'eer3hw',
      },
    {
      title: 'Form Examples',
      key: 'jjiyzn',
      url: '/insurance/list',
      icon: 'fe fe-menu',
    },
    // TF:REPLACE-END:MENU-CONFIG
  ]
}
