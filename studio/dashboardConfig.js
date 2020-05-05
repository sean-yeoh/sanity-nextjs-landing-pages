export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5eb1087d4c4d78a0842c3ff6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-du3n5q91',
                  apiId: '7ed12dd3-31d8-4fa0-a2eb-078bf5c90bdd'
                },
                {
                  buildHookId: '5eb1087d4e4ed1d9619276c5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vh3khw44',
                  apiId: '0c148dd7-b107-4740-905b-1b458c43d910'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sean-yeoh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vh3khw44.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
