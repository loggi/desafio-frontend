module.exports = (plop) => {
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
