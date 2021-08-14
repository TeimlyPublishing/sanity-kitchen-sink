export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611830a3268d21474b29c248',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fvm7w7vz',
                  apiId: '4dc7bafa-a96b-48b4-bcfd-16f82d415c82'
                },
                {
                  buildHookId: '611830a452615b383dd86e46',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-smdaz4a6',
                  apiId: 'f6dd9685-a70e-487e-894d-cde516ae0ce6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TeimlyPublishing/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-smdaz4a6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
