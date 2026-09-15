export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'vkAnbOj4n_X3Lzillddec',
    client_secret:
      'f2rrAJeoqJWV3qtnfbq9KuHA1ewxQ9kPq1WJpfgv52BDQZQPOKfoJk3bK3gAIgHg4EVD1CQ978O5mWwR_d2N4A',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: false,
  },
};
