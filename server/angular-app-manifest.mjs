
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23730, hash: 'db61f653f1ee361bbf5528a47006aae53fc9cffc48183fc81fad6d12e24fd1e9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17236, hash: '5ca62ee1a35d3fa62904ac64c766d7652d896fcbec6d8a8a40d8cf504c57e884', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107004, hash: 'e2eb7d477a9c10e895fea604c7f10c7a3ddeb0f50eea764342f043cbdcc42752', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Q65X3PUM.css': {size: 7051, hash: 'yCEf9zQbIbE', text: () => import('./assets-chunks/styles-Q65X3PUM_css.mjs').then(m => m.default)}
  },
};
