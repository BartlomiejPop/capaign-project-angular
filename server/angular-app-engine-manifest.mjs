
export default {
  basePath: 'https://BartlomiejPop.github.io/capaign-project-angular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
