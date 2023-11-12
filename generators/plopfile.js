module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.jsx',
        templateFile: 'templates/Component.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.jsx',
        templateFile: 'templates/test.jsx.hbs'
      }
    ]
  }),
    plop.setGenerator('template', {
      description: 'Create a template',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your template name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/templates/{{pascalCase name}}/index.jsx',
          templateFile: 'templates/Template.jsx.hbs'
        },
        {
          type: 'add',
          path: '../src/templates/{{pascalCase name}}/styles.js',
          templateFile: 'templates/styles.js.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/test.jsx',
          templateFile: 'templates/test.jsx.hbs'
        }
      ]
    }),
    plop.setGenerator('page', {
      description: 'Create a page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your page name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/app/{{dashCase name}}/page.js',
          templateFile: 'templates/Page.js.hbs'
        }
      ]
    })
}
