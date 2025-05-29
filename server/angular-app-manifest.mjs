
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/home-more/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/home-more"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 740, hash: '0ef99bfee19f8152f2bf87efb5ad5fb1dbc38bf0b6bbc4a1bf7ad1d70916e3b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1142, hash: 'd0a28e1a42fdcb7261fa176d5c5cbfc964dc465d6209410fa4025b952b792edf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5823, hash: 'b844d2e39632c82feb946f555dea7a56c05a7e1b943d473cff285a069ca3094d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OPSORIUJ.css': {size: 11072, hash: '+2rnD5E2+bg', text: () => import('./assets-chunks/styles-OPSORIUJ_css.mjs').then(m => m.default)}
  },
};
