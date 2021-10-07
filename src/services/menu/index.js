export default async function getMenuData() {
  return [
    // TF:REPLACE-START:MENU-CONFIG
    {
      category: true,
      title: 'Dashboards',
      key: 'q7r3hr',
    },
    {
      title: 'IAZ Dashboard',
      key: '__dashboard',
      url: '/dashboard',
      icon: 'fe fe-home',
      children: [
        {
          title: 'Dashboard',
          key: 'oi2iv',
          url: '/dashboard/main',
        },
        {
          title: 'Chartist.js',
          key: 'jlx0h',
          url: '/charts/chartistjs',
        },
      ],
    },
    {
      category: true,
      title: 'IAZ Self Service Portal',
      key: '2t2ghm',
    },
    {
      title: 'Profile',
      key: 'e38wke',
      url: '/profile',
    },
    {
      title: 'Policy Documents',
      key: '81n64m',
      url: '/policy-documents',
      icon: 'fe fe-mail',
    },
    {
      category: true,
      title: 'Insurance Dashboard',
      key: 'krwgag',
    },
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
    {
      title: 'Form Examples',
      key: 'jjiyzn',
      url: '/insurance/list',
      icon: 'fe fe-menu',
    },

    // TF:REPLACE-END:MENU-CONFIG
  ]
}
