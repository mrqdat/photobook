
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/photobook/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/photobook"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 504, hash: '5e4c4370cace79d45ae7329cf786f950f282a70509056c22767fe3fb91a114cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '711044a5fd7829c8bdd75fc12a6534c1ff7d2224a261460300f8ebbe47a5ab3c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3338, hash: '907f8fbdedc7487882d60aef0d6909e899a9d02ff63c27ebab96fd20d67af59c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
