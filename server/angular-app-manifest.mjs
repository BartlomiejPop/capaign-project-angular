
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://BartlomiejPop.github.io/capaign-project-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://BartlomiejPop.github.io/capaign-project-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23785, hash: 'ca380778b3c04563f8ee736213b67771272a875f1159c129ada032156203d026', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17291, hash: '7ce0d0ba9fb0c793f246812f896c763be99231bc3ce20fd9d224830162bca82c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107059, hash: '1a97e2cbf2bc087145db8050bbb6bf3b89964c2420bb1e5c6e71b771ca63e158', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Q65X3PUM.css': {size: 7051, hash: 'yCEf9zQbIbE', text: () => import('./assets-chunks/styles-Q65X3PUM_css.mjs').then(m => m.default)}
  },
};
