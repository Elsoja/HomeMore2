
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 731, hash: '77a42124057bb6adfe8d7300368c670ea6a7d4ac7a435c701b6e0b457f09fe17', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1133, hash: 'c66e2508ca7698d18267421f84cde0a487103a9c2d36f9f6ba60ec1c6e9ff56e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5814, hash: '324091498a73f13791c515af6cc68524450d7e002461f27595ebc6be4d915b72', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OPSORIUJ.css': {size: 11072, hash: '+2rnD5E2+bg', text: () => import('./assets-chunks/styles-OPSORIUJ_css.mjs').then(m => m.default)}
  },
};
