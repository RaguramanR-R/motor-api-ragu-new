// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import { dirname } from 'path'; //_splitter_
import * as url from 'url'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_IEpWS3R9W7BbXSRS from './idsutil'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_cx43KNvFahfveujE(bh, parentSpanInst);
          //appendnew_next_sd_IFIRg54MPrXgtxvg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_IFIRg54MPrXgtxvg');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_fsFY2Ol62esQL3qb(bh, parentSpanInst);
          //appendnew_next_sd_RGgCMINLZKnTkcik
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RGgCMINLZKnTkcik');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_4lmGRso6d6E6jtOG(bh, parentSpanInst);
          //appendnew_next_sd_TetDxZut4qM8jqYO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TetDxZut4qM8jqYO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_TT8bZ8Zo2jWN7DPR(bh, parentSpanInst);
          //appendnew_next_sd_creeeR5wvIe7j3X1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_creeeR5wvIe7j3X1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_roi1mT7YG5eEyXwX(bh, parentSpanInst);
          //appendnew_next_sd_U2GAGqDMRAq8H2OU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_U2GAGqDMRAq8H2OU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_3sarVudhtOXfC6t6(bh, parentSpanInst);
          //appendnew_next_sd_gduQqhF47gO8Yusj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gduQqhF47gO8Yusj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_peplHHJ3gNLMIWvj(bh, parentSpanInst);
          //appendnew_next_sd_I75UT2BwiqxUyJJB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_I75UT2BwiqxUyJJB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_4lmGRso6d6E6jtOG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4lmGRso6d6E6jtOG',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1oI8fEMd1Yux46T5(bh, parentSpanInst);
      //appendnew_next_sd_4lmGRso6d6E6jtOG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4lmGRso6d6E6jtOG',
        spanInst,
        'sd_4lmGRso6d6E6jtOG'
      );
    }
  }

  async sd_1oI8fEMd1Yux46T5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1oI8fEMd1Yux46T5',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lySFAiHV7NbFIYyy(bh, parentSpanInst);
      } else {
        bh = await this.sd_qHiUXwUuvaFSPIme(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1oI8fEMd1Yux46T5',
        spanInst,
        'sd_1oI8fEMd1Yux46T5'
      );
    }
  }

  async sd_lySFAiHV7NbFIYyy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lySFAiHV7NbFIYyy',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rZGQxWVBgfQWKJXv(bh, parentSpanInst);
      //appendnew_next_sd_lySFAiHV7NbFIYyy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lySFAiHV7NbFIYyy',
        spanInst,
        'sd_lySFAiHV7NbFIYyy'
      );
    }
  }

  async sd_rZGQxWVBgfQWKJXv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rZGQxWVBgfQWKJXv',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xxinlpdo8qs8Kt91(bh, parentSpanInst);
      //appendnew_next_sd_rZGQxWVBgfQWKJXv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rZGQxWVBgfQWKJXv',
        spanInst,
        'sd_rZGQxWVBgfQWKJXv'
      );
    }
  }

  async sd_xxinlpdo8qs8Kt91(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xxinlpdo8qs8Kt91',
      parentSpanInst
    );
    try {
      const sd_IEpWS3R9W7BbXSRSInstance: sd_IEpWS3R9W7BbXSRS.idsutil =
        sd_IEpWS3R9W7BbXSRS.idsutil.getInstance();
      let outputVariables =
        await sd_IEpWS3R9W7BbXSRSInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UvlKf29JkOjHkxqR(bh, parentSpanInst);
      //appendnew_next_sd_xxinlpdo8qs8Kt91
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xxinlpdo8qs8Kt91',
        spanInst,
        'sd_xxinlpdo8qs8Kt91'
      );
    }
  }

  async sd_UvlKf29JkOjHkxqR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UvlKf29JkOjHkxqR',
      parentSpanInst
    );
    try {
      const sd_IEpWS3R9W7BbXSRSInstance: sd_IEpWS3R9W7BbXSRS.idsutil =
        sd_IEpWS3R9W7BbXSRS.idsutil.getInstance();
      let outputVariables =
        await sd_IEpWS3R9W7BbXSRSInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nUOzfP3JLq09lXy8(bh, parentSpanInst);
      //appendnew_next_sd_UvlKf29JkOjHkxqR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UvlKf29JkOjHkxqR',
        spanInst,
        'sd_UvlKf29JkOjHkxqR'
      );
    }
  }

  async sd_nUOzfP3JLq09lXy8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nUOzfP3JLq09lXy8',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_O5NmxLukYszJXkMN(bh, parentSpanInst);
      //appendnew_next_sd_nUOzfP3JLq09lXy8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nUOzfP3JLq09lXy8',
        spanInst,
        'sd_nUOzfP3JLq09lXy8'
      );
    }
  }

  async sd_O5NmxLukYszJXkMN(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O5NmxLukYszJXkMN');
    }
  }

  async sd_qHiUXwUuvaFSPIme(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qHiUXwUuvaFSPIme',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Wh5eQ6Dm5RpDsuvJ(bh, parentSpanInst);
      //appendnew_next_sd_qHiUXwUuvaFSPIme
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qHiUXwUuvaFSPIme',
        spanInst,
        'sd_qHiUXwUuvaFSPIme'
      );
    }
  }

  async sd_Wh5eQ6Dm5RpDsuvJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Wh5eQ6Dm5RpDsuvJ');
    }
  }

  async sd_cx43KNvFahfveujE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cx43KNvFahfveujE',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YxYjABCCZHOhJ5L5(bh, parentSpanInst);
      //appendnew_next_sd_cx43KNvFahfveujE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cx43KNvFahfveujE',
        spanInst,
        'sd_cx43KNvFahfveujE'
      );
    }
  }

  async sd_YxYjABCCZHOhJ5L5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YxYjABCCZHOhJ5L5',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YxYjABCCZHOhJ5L5',
        spanInst,
        'sd_YxYjABCCZHOhJ5L5'
      );
    }
  }

  async sd_TT8bZ8Zo2jWN7DPR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TT8bZ8Zo2jWN7DPR',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3SG4g321HGqNJQGc(bh, parentSpanInst);
      //appendnew_next_sd_TT8bZ8Zo2jWN7DPR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TT8bZ8Zo2jWN7DPR',
        spanInst,
        'sd_TT8bZ8Zo2jWN7DPR'
      );
    }
  }

  async sd_3SG4g321HGqNJQGc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3SG4g321HGqNJQGc',
      parentSpanInst
    );
    try {
      const sd_IEpWS3R9W7BbXSRSInstance: sd_IEpWS3R9W7BbXSRS.idsutil =
        sd_IEpWS3R9W7BbXSRS.idsutil.getInstance();
      let outputVariables =
        await sd_IEpWS3R9W7BbXSRSInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Cavwphcpeq0iJgIX(bh, parentSpanInst);
      //appendnew_next_sd_3SG4g321HGqNJQGc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3SG4g321HGqNJQGc',
        spanInst,
        'sd_3SG4g321HGqNJQGc'
      );
    }
  }

  async sd_Cavwphcpeq0iJgIX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Cavwphcpeq0iJgIX',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YouP50lcrn2RBP1c(bh, parentSpanInst);
      //appendnew_next_sd_Cavwphcpeq0iJgIX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Cavwphcpeq0iJgIX',
        spanInst,
        'sd_Cavwphcpeq0iJgIX'
      );
    }
  }

  async sd_YouP50lcrn2RBP1c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YouP50lcrn2RBP1c',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GfmRwfhPxnpLzJx9(bh, parentSpanInst);
      //appendnew_next_sd_YouP50lcrn2RBP1c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YouP50lcrn2RBP1c',
        spanInst,
        'sd_YouP50lcrn2RBP1c'
      );
    }
  }

  async sd_GfmRwfhPxnpLzJx9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GfmRwfhPxnpLzJx9',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_owNFAvksWcML0xW4(bh, parentSpanInst);
      } else {
        bh = await this.sd_KjucLv0dPy8OH2do(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GfmRwfhPxnpLzJx9',
        spanInst,
        'sd_GfmRwfhPxnpLzJx9'
      );
    }
  }

  async sd_owNFAvksWcML0xW4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_owNFAvksWcML0xW4',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YMlWycjCOiMdNkww(bh, parentSpanInst);
      //appendnew_next_sd_owNFAvksWcML0xW4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_owNFAvksWcML0xW4',
        spanInst,
        'sd_owNFAvksWcML0xW4'
      );
    }
  }

  async sd_YMlWycjCOiMdNkww(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YMlWycjCOiMdNkww');
    }
  }

  async sd_KjucLv0dPy8OH2do(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KjucLv0dPy8OH2do',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_DOgKkcWMF8nxqgcn(bh, parentSpanInst);
      //appendnew_next_sd_KjucLv0dPy8OH2do
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KjucLv0dPy8OH2do',
        spanInst,
        'sd_KjucLv0dPy8OH2do'
      );
    }
  }

  async sd_DOgKkcWMF8nxqgcn(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DOgKkcWMF8nxqgcn');
    }
  }

  async sd_roi1mT7YG5eEyXwX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_roi1mT7YG5eEyXwX',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_qCBOp0CR0G9SLSpO(bh, parentSpanInst);
      //appendnew_next_sd_roi1mT7YG5eEyXwX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_roi1mT7YG5eEyXwX',
        spanInst,
        'sd_roi1mT7YG5eEyXwX'
      );
    }
  }

  async sd_qCBOp0CR0G9SLSpO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qCBOp0CR0G9SLSpO');
    }
  }

  async sd_Gd6XsRxDFqrRH0lq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Gd6XsRxDFqrRH0lq',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Gd6XsRxDFqrRH0lq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gd6XsRxDFqrRH0lq',
        spanInst,
        'sd_Gd6XsRxDFqrRH0lq'
      );
    }
  }

  async sd_3sarVudhtOXfC6t6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3sarVudhtOXfC6t6',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_12QVW1uX0POlMo4X(bh, parentSpanInst);
      //appendnew_next_sd_3sarVudhtOXfC6t6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3sarVudhtOXfC6t6',
        spanInst,
        'sd_3sarVudhtOXfC6t6'
      );
    }
  }

  async sd_12QVW1uX0POlMo4X(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_12QVW1uX0POlMo4X',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zx4IeOziq8ioQi89(bh, parentSpanInst);
      //appendnew_next_sd_12QVW1uX0POlMo4X
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_12QVW1uX0POlMo4X',
        spanInst,
        'sd_12QVW1uX0POlMo4X'
      );
    }
  }

  async sd_zx4IeOziq8ioQi89(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zx4IeOziq8ioQi89',
      parentSpanInst
    );
    try {
      const sd_IEpWS3R9W7BbXSRSInstance: sd_IEpWS3R9W7BbXSRS.idsutil =
        sd_IEpWS3R9W7BbXSRS.idsutil.getInstance();
      let outputVariables =
        await sd_IEpWS3R9W7BbXSRSInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QANvf4RTpdaX5zKr(bh, parentSpanInst);
      //appendnew_next_sd_zx4IeOziq8ioQi89
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zx4IeOziq8ioQi89',
        spanInst,
        'sd_zx4IeOziq8ioQi89'
      );
    }
  }

  async sd_QANvf4RTpdaX5zKr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QANvf4RTpdaX5zKr',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Bwz7KCDnGut6BK1s(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_FLn61IO6qlMpHxY5(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QANvf4RTpdaX5zKr',
        spanInst,
        'sd_QANvf4RTpdaX5zKr'
      );
    }
  }

  async sd_Bwz7KCDnGut6BK1s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Bwz7KCDnGut6BK1s',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_Bwz7KCDnGut6BK1s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bwz7KCDnGut6BK1s',
        spanInst,
        'sd_Bwz7KCDnGut6BK1s'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_bD1oARhq3lCZdsy2(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_bD1oARhq3lCZdsy2(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bD1oARhq3lCZdsy2');
    }
  }

  async sd_FLn61IO6qlMpHxY5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FLn61IO6qlMpHxY5',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_bD1oARhq3lCZdsy2(bh, parentSpanInst);
      //appendnew_next_sd_FLn61IO6qlMpHxY5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FLn61IO6qlMpHxY5',
        spanInst,
        'sd_FLn61IO6qlMpHxY5'
      );
    }
  }

  async sd_peplHHJ3gNLMIWvj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_peplHHJ3gNLMIWvj',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HDYTuu41WewCMyII(bh, parentSpanInst);
      //appendnew_next_sd_peplHHJ3gNLMIWvj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_peplHHJ3gNLMIWvj',
        spanInst,
        'sd_peplHHJ3gNLMIWvj'
      );
    }
  }

  async sd_HDYTuu41WewCMyII(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HDYTuu41WewCMyII',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_BDwv3FWgqtbDlJpI(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_p1cZJHZFohYqNcBb(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HDYTuu41WewCMyII',
        spanInst,
        'sd_HDYTuu41WewCMyII'
      );
    }
  }

  async sd_BDwv3FWgqtbDlJpI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BDwv3FWgqtbDlJpI',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_T1VH7d5q1IbHPUWq(bh, parentSpanInst);
      //appendnew_next_sd_BDwv3FWgqtbDlJpI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BDwv3FWgqtbDlJpI',
        spanInst,
        'sd_BDwv3FWgqtbDlJpI'
      );
    }
  }

  async sd_T1VH7d5q1IbHPUWq(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T1VH7d5q1IbHPUWq');
    }
  }

  async sd_p1cZJHZFohYqNcBb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p1cZJHZFohYqNcBb',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DPFFcdaimkHmdDrq(bh, parentSpanInst);
      //appendnew_next_sd_p1cZJHZFohYqNcBb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p1cZJHZFohYqNcBb',
        spanInst,
        'sd_p1cZJHZFohYqNcBb'
      );
    }
  }

  async sd_DPFFcdaimkHmdDrq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DPFFcdaimkHmdDrq',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_99psgQQTzGMyFJlk(bh, parentSpanInst);
      //appendnew_next_sd_DPFFcdaimkHmdDrq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DPFFcdaimkHmdDrq',
        spanInst,
        'sd_DPFFcdaimkHmdDrq'
      );
    }
  }

  async sd_99psgQQTzGMyFJlk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_99psgQQTzGMyFJlk',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_aKTzIOPSROnl9hX9(bh, parentSpanInst);
      } else {
        bh = await this.sd_6nUtlgC9onMzdJOI(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_99psgQQTzGMyFJlk',
        spanInst,
        'sd_99psgQQTzGMyFJlk'
      );
    }
  }

  async sd_aKTzIOPSROnl9hX9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aKTzIOPSROnl9hX9',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lABYZMc2oukYeLrC(bh, parentSpanInst);
      //appendnew_next_sd_aKTzIOPSROnl9hX9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aKTzIOPSROnl9hX9',
        spanInst,
        'sd_aKTzIOPSROnl9hX9'
      );
    }
  }

  async sd_lABYZMc2oukYeLrC(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lABYZMc2oukYeLrC');
    }
  }

  async sd_6nUtlgC9onMzdJOI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6nUtlgC9onMzdJOI',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_um819l9XrRYbfqXn(bh, parentSpanInst);
      //appendnew_next_sd_6nUtlgC9onMzdJOI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6nUtlgC9onMzdJOI',
        spanInst,
        'sd_6nUtlgC9onMzdJOI'
      );
    }
  }

  async sd_um819l9XrRYbfqXn(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_um819l9XrRYbfqXn');
    }
  }

  async sd_fsFY2Ol62esQL3qb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fsFY2Ol62esQL3qb',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_91toikTHGaifJy34(bh, parentSpanInst);
      //appendnew_next_sd_fsFY2Ol62esQL3qb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fsFY2Ol62esQL3qb',
        spanInst,
        'sd_fsFY2Ol62esQL3qb'
      );
    }
  }

  async sd_91toikTHGaifJy34(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_91toikTHGaifJy34',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TsEOEgfRiKK9fExz(bh, parentSpanInst);
      //appendnew_next_sd_91toikTHGaifJy34
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_91toikTHGaifJy34',
        spanInst,
        'sd_91toikTHGaifJy34'
      );
    }
  }

  async sd_TsEOEgfRiKK9fExz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TsEOEgfRiKK9fExz',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iYW4at18wh5E6iTf(bh, parentSpanInst);
      //appendnew_next_sd_TsEOEgfRiKK9fExz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TsEOEgfRiKK9fExz',
        spanInst,
        'sd_TsEOEgfRiKK9fExz'
      );
    }
  }

  async sd_iYW4at18wh5E6iTf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iYW4at18wh5E6iTf',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_mHW9HH4B3WuDydzT(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_rOgE8titHbvskbMc(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iYW4at18wh5E6iTf',
        spanInst,
        'sd_iYW4at18wh5E6iTf'
      );
    }
  }

  async sd_mHW9HH4B3WuDydzT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mHW9HH4B3WuDydzT',
      parentSpanInst
    );
    try {
      const sd_IEpWS3R9W7BbXSRSInstance: sd_IEpWS3R9W7BbXSRS.idsutil =
        sd_IEpWS3R9W7BbXSRS.idsutil.getInstance();
      let outputVariables = await sd_IEpWS3R9W7BbXSRSInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Efzx6tPr6qHz1Saa(bh, parentSpanInst);
      //appendnew_next_sd_mHW9HH4B3WuDydzT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mHW9HH4B3WuDydzT',
        spanInst,
        'sd_mHW9HH4B3WuDydzT'
      );
    }
  }

  async sd_Efzx6tPr6qHz1Saa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Efzx6tPr6qHz1Saa',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2V8zndbb9pNJiIid(bh, parentSpanInst);
      } else {
        bh = await this.sd_FJMkoM8Ni3StVEST(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Efzx6tPr6qHz1Saa',
        spanInst,
        'sd_Efzx6tPr6qHz1Saa'
      );
    }
  }

  async sd_2V8zndbb9pNJiIid(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2V8zndbb9pNJiIid',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_z52akwnyJiGxd2cb(bh, parentSpanInst);
      //appendnew_next_sd_2V8zndbb9pNJiIid
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2V8zndbb9pNJiIid',
        spanInst,
        'sd_2V8zndbb9pNJiIid'
      );
    }
  }

  async sd_z52akwnyJiGxd2cb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z52akwnyJiGxd2cb',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KsUDiSFxmK52xQgU(bh, parentSpanInst);
      //appendnew_next_sd_z52akwnyJiGxd2cb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z52akwnyJiGxd2cb',
        spanInst,
        'sd_z52akwnyJiGxd2cb'
      );
    }
  }

  async sd_KsUDiSFxmK52xQgU(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KsUDiSFxmK52xQgU');
    }
  }

  async sd_FJMkoM8Ni3StVEST(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FJMkoM8Ni3StVEST',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ci3QZCsDjvnQhMLa(bh, parentSpanInst);
      } else {
        bh = await this.sd_tZwbVk8DTsAsok8q(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FJMkoM8Ni3StVEST',
        spanInst,
        'sd_FJMkoM8Ni3StVEST'
      );
    }
  }

  async sd_ci3QZCsDjvnQhMLa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ci3QZCsDjvnQhMLa',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HR7HrzHZH77E7iRD(bh, parentSpanInst);
      //appendnew_next_sd_ci3QZCsDjvnQhMLa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ci3QZCsDjvnQhMLa',
        spanInst,
        'sd_ci3QZCsDjvnQhMLa'
      );
    }
  }

  async sd_HR7HrzHZH77E7iRD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HR7HrzHZH77E7iRD',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tZwbVk8DTsAsok8q(bh, parentSpanInst);
      //appendnew_next_sd_HR7HrzHZH77E7iRD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HR7HrzHZH77E7iRD',
        spanInst,
        'sd_HR7HrzHZH77E7iRD'
      );
    }
  }

  async sd_tZwbVk8DTsAsok8q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tZwbVk8DTsAsok8q',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tZwbVk8DTsAsok8q',
        spanInst,
        'sd_tZwbVk8DTsAsok8q'
      );
    }
  }

  async sd_rOgE8titHbvskbMc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rOgE8titHbvskbMc',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_mwHhmRN5LBS8iBeX(bh, parentSpanInst);
      } else {
        bh = await this.sd_arZfKAtTBr1ae0vl(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rOgE8titHbvskbMc',
        spanInst,
        'sd_rOgE8titHbvskbMc'
      );
    }
  }

  async sd_mwHhmRN5LBS8iBeX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mwHhmRN5LBS8iBeX',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KsUDiSFxmK52xQgU(bh, parentSpanInst);
      //appendnew_next_sd_mwHhmRN5LBS8iBeX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mwHhmRN5LBS8iBeX',
        spanInst,
        'sd_mwHhmRN5LBS8iBeX'
      );
    }
  }

  async sd_arZfKAtTBr1ae0vl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_arZfKAtTBr1ae0vl',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KsUDiSFxmK52xQgU(bh, parentSpanInst);
      //appendnew_next_sd_arZfKAtTBr1ae0vl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_arZfKAtTBr1ae0vl',
        spanInst,
        'sd_arZfKAtTBr1ae0vl'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_SWv55MSFM7VbVrjU(bh, parentSpanInst)) ||
      (await this.sd_a2xVh5gpopEBTdmU(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_SWv55MSFM7VbVrjU(bh, parentSpanInst) {
    const nodes = [
      'sd_UvlKf29JkOjHkxqR',
      'sd_creeeR5wvIe7j3X1',
      'sd_3SG4g321HGqNJQGc',
      'sd_Cavwphcpeq0iJgIX',
      'sd_TT8bZ8Zo2jWN7DPR',
      'sd_GfmRwfhPxnpLzJx9',
      'sd_owNFAvksWcML0xW4',
      'sd_KjucLv0dPy8OH2do',
      'sd_YMlWycjCOiMdNkww',
      'sd_DOgKkcWMF8nxqgcn',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Gd6XsRxDFqrRH0lq(bh, parentSpanInst);
      //appendnew_next_sd_SWv55MSFM7VbVrjU
      return true;
    }
    return false;
  }
  async sd_a2xVh5gpopEBTdmU(bh, parentSpanInst) {
    const nodes = ['sd_mHW9HH4B3WuDydzT'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_z52akwnyJiGxd2cb(bh, parentSpanInst);
      //appendnew_next_sd_a2xVh5gpopEBTdmU
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
