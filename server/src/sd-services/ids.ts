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
import * as sd_mnva22CDRaaAIZ7P from './idsutil'; //_splitter_
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
          bh = await this.sd_60Hfwoq7DChE2Ou3(bh, parentSpanInst);
          //appendnew_next_sd_lSL84SfGqyKmgNYY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lSL84SfGqyKmgNYY');
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
          bh = await this.sd_ZNdIUKRGR4z54TdL(bh, parentSpanInst);
          //appendnew_next_sd_z8jPK6SEwQdhj36n
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_z8jPK6SEwQdhj36n');
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
          bh = await this.sd_FzDinkG46cClLpAJ(bh, parentSpanInst);
          //appendnew_next_sd_EMAN4XpGKl1Yo7zk
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EMAN4XpGKl1Yo7zk');
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
          bh = await this.sd_LQpdHL5jJMQLWCxJ(bh, parentSpanInst);
          //appendnew_next_sd_BVoxer6iJGPBzTeD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BVoxer6iJGPBzTeD');
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
          bh = await this.sd_UMuT6N9hq4Hrmqyi(bh, parentSpanInst);
          //appendnew_next_sd_V68Hl3mXhoV79hzq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_V68Hl3mXhoV79hzq');
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
          bh = await this.sd_EpXp9UfwXFgC0BB9(bh, parentSpanInst);
          //appendnew_next_sd_yTMeCu3V7R78UOpG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yTMeCu3V7R78UOpG');
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
          bh = await this.sd_ceu31ESZcswOk2nk(bh, parentSpanInst);
          //appendnew_next_sd_jZNbxKjaaQH0zUza
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jZNbxKjaaQH0zUza');
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

  async sd_FzDinkG46cClLpAJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FzDinkG46cClLpAJ',
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
      bh = await this.sd_KrLsUHw2zzhMFgRs(bh, parentSpanInst);
      //appendnew_next_sd_FzDinkG46cClLpAJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FzDinkG46cClLpAJ',
        spanInst,
        'sd_FzDinkG46cClLpAJ'
      );
    }
  }

  async sd_KrLsUHw2zzhMFgRs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KrLsUHw2zzhMFgRs',
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
        bh = await this.sd_A80DXkrP5ErLCxsa(bh, parentSpanInst);
      } else {
        bh = await this.sd_mgftFBx0y6zdgqBr(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KrLsUHw2zzhMFgRs',
        spanInst,
        'sd_KrLsUHw2zzhMFgRs'
      );
    }
  }

  async sd_A80DXkrP5ErLCxsa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A80DXkrP5ErLCxsa',
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
      bh = await this.sd_2SLzmnetf3aN7vJK(bh, parentSpanInst);
      //appendnew_next_sd_A80DXkrP5ErLCxsa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A80DXkrP5ErLCxsa',
        spanInst,
        'sd_A80DXkrP5ErLCxsa'
      );
    }
  }

  async sd_2SLzmnetf3aN7vJK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2SLzmnetf3aN7vJK',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_M29ccqvhJTq69A2m(bh, parentSpanInst);
      //appendnew_next_sd_2SLzmnetf3aN7vJK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2SLzmnetf3aN7vJK',
        spanInst,
        'sd_2SLzmnetf3aN7vJK'
      );
    }
  }

  async sd_M29ccqvhJTq69A2m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M29ccqvhJTq69A2m',
      parentSpanInst
    );
    try {
      const sd_mnva22CDRaaAIZ7PInstance: sd_mnva22CDRaaAIZ7P.idsutil =
        sd_mnva22CDRaaAIZ7P.idsutil.getInstance();
      let outputVariables =
        await sd_mnva22CDRaaAIZ7PInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HAM2VkBwgVzvSrcZ(bh, parentSpanInst);
      //appendnew_next_sd_M29ccqvhJTq69A2m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M29ccqvhJTq69A2m',
        spanInst,
        'sd_M29ccqvhJTq69A2m'
      );
    }
  }

  async sd_HAM2VkBwgVzvSrcZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HAM2VkBwgVzvSrcZ',
      parentSpanInst
    );
    try {
      const sd_mnva22CDRaaAIZ7PInstance: sd_mnva22CDRaaAIZ7P.idsutil =
        sd_mnva22CDRaaAIZ7P.idsutil.getInstance();
      let outputVariables =
        await sd_mnva22CDRaaAIZ7PInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VaVI2emTVNm9O3we(bh, parentSpanInst);
      //appendnew_next_sd_HAM2VkBwgVzvSrcZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HAM2VkBwgVzvSrcZ',
        spanInst,
        'sd_HAM2VkBwgVzvSrcZ'
      );
    }
  }

  async sd_VaVI2emTVNm9O3we(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VaVI2emTVNm9O3we',
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
      await this.sd_enrbGani7kXlv8dG(bh, parentSpanInst);
      //appendnew_next_sd_VaVI2emTVNm9O3we
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VaVI2emTVNm9O3we',
        spanInst,
        'sd_VaVI2emTVNm9O3we'
      );
    }
  }

  async sd_enrbGani7kXlv8dG(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_enrbGani7kXlv8dG');
    }
  }

  async sd_mgftFBx0y6zdgqBr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mgftFBx0y6zdgqBr',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_zFkQBYrgbmQuqTcv(bh, parentSpanInst);
      //appendnew_next_sd_mgftFBx0y6zdgqBr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mgftFBx0y6zdgqBr',
        spanInst,
        'sd_mgftFBx0y6zdgqBr'
      );
    }
  }

  async sd_zFkQBYrgbmQuqTcv(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zFkQBYrgbmQuqTcv');
    }
  }

  async sd_60Hfwoq7DChE2Ou3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_60Hfwoq7DChE2Ou3',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xj1XXpEa3lKBYpke(bh, parentSpanInst);
      //appendnew_next_sd_60Hfwoq7DChE2Ou3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_60Hfwoq7DChE2Ou3',
        spanInst,
        'sd_60Hfwoq7DChE2Ou3'
      );
    }
  }

  async sd_xj1XXpEa3lKBYpke(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xj1XXpEa3lKBYpke',
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
        'sd_xj1XXpEa3lKBYpke',
        spanInst,
        'sd_xj1XXpEa3lKBYpke'
      );
    }
  }

  async sd_LQpdHL5jJMQLWCxJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LQpdHL5jJMQLWCxJ',
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
      bh = await this.sd_9bG3BQujkCZGqfyh(bh, parentSpanInst);
      //appendnew_next_sd_LQpdHL5jJMQLWCxJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LQpdHL5jJMQLWCxJ',
        spanInst,
        'sd_LQpdHL5jJMQLWCxJ'
      );
    }
  }

  async sd_9bG3BQujkCZGqfyh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9bG3BQujkCZGqfyh',
      parentSpanInst
    );
    try {
      const sd_mnva22CDRaaAIZ7PInstance: sd_mnva22CDRaaAIZ7P.idsutil =
        sd_mnva22CDRaaAIZ7P.idsutil.getInstance();
      let outputVariables =
        await sd_mnva22CDRaaAIZ7PInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_914znRrgwifwKW6j(bh, parentSpanInst);
      //appendnew_next_sd_9bG3BQujkCZGqfyh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9bG3BQujkCZGqfyh',
        spanInst,
        'sd_9bG3BQujkCZGqfyh'
      );
    }
  }

  async sd_914znRrgwifwKW6j(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_914znRrgwifwKW6j',
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
      bh = await this.sd_6VoaXehjRAJmPPEU(bh, parentSpanInst);
      //appendnew_next_sd_914znRrgwifwKW6j
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_914znRrgwifwKW6j',
        spanInst,
        'sd_914znRrgwifwKW6j'
      );
    }
  }

  async sd_6VoaXehjRAJmPPEU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6VoaXehjRAJmPPEU',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZqhPyp6ba2BJdEYQ(bh, parentSpanInst);
      //appendnew_next_sd_6VoaXehjRAJmPPEU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6VoaXehjRAJmPPEU',
        spanInst,
        'sd_6VoaXehjRAJmPPEU'
      );
    }
  }

  async sd_ZqhPyp6ba2BJdEYQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZqhPyp6ba2BJdEYQ',
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
        bh = await this.sd_Pcu8lto6eJiAJdq2(bh, parentSpanInst);
      } else {
        bh = await this.sd_4p9c4enxv6BPnXhG(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZqhPyp6ba2BJdEYQ',
        spanInst,
        'sd_ZqhPyp6ba2BJdEYQ'
      );
    }
  }

  async sd_Pcu8lto6eJiAJdq2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Pcu8lto6eJiAJdq2',
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
      await this.sd_RVI0t6nsH4stP0xG(bh, parentSpanInst);
      //appendnew_next_sd_Pcu8lto6eJiAJdq2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pcu8lto6eJiAJdq2',
        spanInst,
        'sd_Pcu8lto6eJiAJdq2'
      );
    }
  }

  async sd_RVI0t6nsH4stP0xG(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RVI0t6nsH4stP0xG');
    }
  }

  async sd_4p9c4enxv6BPnXhG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4p9c4enxv6BPnXhG',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HSEbaixTaX4HULxE(bh, parentSpanInst);
      //appendnew_next_sd_4p9c4enxv6BPnXhG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4p9c4enxv6BPnXhG',
        spanInst,
        'sd_4p9c4enxv6BPnXhG'
      );
    }
  }

  async sd_HSEbaixTaX4HULxE(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HSEbaixTaX4HULxE');
    }
  }

  async sd_UMuT6N9hq4Hrmqyi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UMuT6N9hq4Hrmqyi',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ut86gwNvJcTpBvgN(bh, parentSpanInst);
      //appendnew_next_sd_UMuT6N9hq4Hrmqyi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UMuT6N9hq4Hrmqyi',
        spanInst,
        'sd_UMuT6N9hq4Hrmqyi'
      );
    }
  }

  async sd_ut86gwNvJcTpBvgN(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ut86gwNvJcTpBvgN');
    }
  }

  async sd_B5UxXa9aKcyy9F5i(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B5UxXa9aKcyy9F5i',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_B5UxXa9aKcyy9F5i
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B5UxXa9aKcyy9F5i',
        spanInst,
        'sd_B5UxXa9aKcyy9F5i'
      );
    }
  }

  async sd_EpXp9UfwXFgC0BB9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EpXp9UfwXFgC0BB9',
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
      bh = await this.sd_YyY9Xc9wU1sbfaZD(bh, parentSpanInst);
      //appendnew_next_sd_EpXp9UfwXFgC0BB9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EpXp9UfwXFgC0BB9',
        spanInst,
        'sd_EpXp9UfwXFgC0BB9'
      );
    }
  }

  async sd_YyY9Xc9wU1sbfaZD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YyY9Xc9wU1sbfaZD',
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
      bh = await this.sd_htRWJRt63xEEOfdC(bh, parentSpanInst);
      //appendnew_next_sd_YyY9Xc9wU1sbfaZD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YyY9Xc9wU1sbfaZD',
        spanInst,
        'sd_YyY9Xc9wU1sbfaZD'
      );
    }
  }

  async sd_htRWJRt63xEEOfdC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_htRWJRt63xEEOfdC',
      parentSpanInst
    );
    try {
      const sd_mnva22CDRaaAIZ7PInstance: sd_mnva22CDRaaAIZ7P.idsutil =
        sd_mnva22CDRaaAIZ7P.idsutil.getInstance();
      let outputVariables =
        await sd_mnva22CDRaaAIZ7PInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6Nh5nOvKl4MYjncl(bh, parentSpanInst);
      //appendnew_next_sd_htRWJRt63xEEOfdC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_htRWJRt63xEEOfdC',
        spanInst,
        'sd_htRWJRt63xEEOfdC'
      );
    }
  }

  async sd_6Nh5nOvKl4MYjncl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6Nh5nOvKl4MYjncl',
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
        bh = await this.sd_EnLYJERCFBN3SUBK(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_YbMz0EkdE67hQ5rE(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6Nh5nOvKl4MYjncl',
        spanInst,
        'sd_6Nh5nOvKl4MYjncl'
      );
    }
  }

  async sd_EnLYJERCFBN3SUBK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EnLYJERCFBN3SUBK',
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
      //appendnew_next_sd_EnLYJERCFBN3SUBK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EnLYJERCFBN3SUBK',
        spanInst,
        'sd_EnLYJERCFBN3SUBK'
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
      await this.sd_FIuGA34BPQhKjOIb(bh, parentSpanInst);
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

  async sd_FIuGA34BPQhKjOIb(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FIuGA34BPQhKjOIb');
    }
  }

  async sd_YbMz0EkdE67hQ5rE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YbMz0EkdE67hQ5rE',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FIuGA34BPQhKjOIb(bh, parentSpanInst);
      //appendnew_next_sd_YbMz0EkdE67hQ5rE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YbMz0EkdE67hQ5rE',
        spanInst,
        'sd_YbMz0EkdE67hQ5rE'
      );
    }
  }

  async sd_ceu31ESZcswOk2nk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ceu31ESZcswOk2nk',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gYT16r0GykTOoCvs(bh, parentSpanInst);
      //appendnew_next_sd_ceu31ESZcswOk2nk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ceu31ESZcswOk2nk',
        spanInst,
        'sd_ceu31ESZcswOk2nk'
      );
    }
  }

  async sd_gYT16r0GykTOoCvs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gYT16r0GykTOoCvs',
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
        bh = await this.sd_p8lt2tuiDpunBfnQ(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_fTUVBopn1sUKFXeV(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gYT16r0GykTOoCvs',
        spanInst,
        'sd_gYT16r0GykTOoCvs'
      );
    }
  }

  async sd_p8lt2tuiDpunBfnQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p8lt2tuiDpunBfnQ',
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
      await this.sd_JOrimd0f2rtwKFaf(bh, parentSpanInst);
      //appendnew_next_sd_p8lt2tuiDpunBfnQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p8lt2tuiDpunBfnQ',
        spanInst,
        'sd_p8lt2tuiDpunBfnQ'
      );
    }
  }

  async sd_JOrimd0f2rtwKFaf(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JOrimd0f2rtwKFaf');
    }
  }

  async sd_fTUVBopn1sUKFXeV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fTUVBopn1sUKFXeV',
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
      bh = await this.sd_rM8WO3dkVZe8tpue(bh, parentSpanInst);
      //appendnew_next_sd_fTUVBopn1sUKFXeV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fTUVBopn1sUKFXeV',
        spanInst,
        'sd_fTUVBopn1sUKFXeV'
      );
    }
  }

  async sd_rM8WO3dkVZe8tpue(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rM8WO3dkVZe8tpue',
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
      bh = await this.sd_pH1lUviRwx8YHh59(bh, parentSpanInst);
      //appendnew_next_sd_rM8WO3dkVZe8tpue
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rM8WO3dkVZe8tpue',
        spanInst,
        'sd_rM8WO3dkVZe8tpue'
      );
    }
  }

  async sd_pH1lUviRwx8YHh59(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pH1lUviRwx8YHh59',
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
        bh = await this.sd_JUxDQD6Gm8XfB8QH(bh, parentSpanInst);
      } else {
        bh = await this.sd_7ZbWB6DZ9n5cmQux(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pH1lUviRwx8YHh59',
        spanInst,
        'sd_pH1lUviRwx8YHh59'
      );
    }
  }

  async sd_JUxDQD6Gm8XfB8QH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JUxDQD6Gm8XfB8QH',
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
      await this.sd_QPFEcCM6siuVhFQP(bh, parentSpanInst);
      //appendnew_next_sd_JUxDQD6Gm8XfB8QH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JUxDQD6Gm8XfB8QH',
        spanInst,
        'sd_JUxDQD6Gm8XfB8QH'
      );
    }
  }

  async sd_QPFEcCM6siuVhFQP(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QPFEcCM6siuVhFQP');
    }
  }

  async sd_7ZbWB6DZ9n5cmQux(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7ZbWB6DZ9n5cmQux',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TIveHXYNa5c3Bpaq(bh, parentSpanInst);
      //appendnew_next_sd_7ZbWB6DZ9n5cmQux
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7ZbWB6DZ9n5cmQux',
        spanInst,
        'sd_7ZbWB6DZ9n5cmQux'
      );
    }
  }

  async sd_TIveHXYNa5c3Bpaq(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TIveHXYNa5c3Bpaq');
    }
  }

  async sd_ZNdIUKRGR4z54TdL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZNdIUKRGR4z54TdL',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dI8iOMLG6QppiGhE(bh, parentSpanInst);
      //appendnew_next_sd_ZNdIUKRGR4z54TdL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZNdIUKRGR4z54TdL',
        spanInst,
        'sd_ZNdIUKRGR4z54TdL'
      );
    }
  }

  async sd_dI8iOMLG6QppiGhE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dI8iOMLG6QppiGhE',
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
      bh = await this.sd_qVlG38IH9ilKoZb4(bh, parentSpanInst);
      //appendnew_next_sd_dI8iOMLG6QppiGhE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dI8iOMLG6QppiGhE',
        spanInst,
        'sd_dI8iOMLG6QppiGhE'
      );
    }
  }

  async sd_qVlG38IH9ilKoZb4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qVlG38IH9ilKoZb4',
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
      bh = await this.sd_xM7sQ9omRALviKt6(bh, parentSpanInst);
      //appendnew_next_sd_qVlG38IH9ilKoZb4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qVlG38IH9ilKoZb4',
        spanInst,
        'sd_qVlG38IH9ilKoZb4'
      );
    }
  }

  async sd_xM7sQ9omRALviKt6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xM7sQ9omRALviKt6',
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
        bh = await this.sd_CjYdGOC2HiMVR4se(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_oVchVZlpbY8YSvtD(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xM7sQ9omRALviKt6',
        spanInst,
        'sd_xM7sQ9omRALviKt6'
      );
    }
  }

  async sd_CjYdGOC2HiMVR4se(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CjYdGOC2HiMVR4se',
      parentSpanInst
    );
    try {
      const sd_mnva22CDRaaAIZ7PInstance: sd_mnva22CDRaaAIZ7P.idsutil =
        sd_mnva22CDRaaAIZ7P.idsutil.getInstance();
      let outputVariables = await sd_mnva22CDRaaAIZ7PInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vJ4clxOAMBbSxuXh(bh, parentSpanInst);
      //appendnew_next_sd_CjYdGOC2HiMVR4se
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CjYdGOC2HiMVR4se',
        spanInst,
        'sd_CjYdGOC2HiMVR4se'
      );
    }
  }

  async sd_vJ4clxOAMBbSxuXh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vJ4clxOAMBbSxuXh',
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
        bh = await this.sd_TMlu2cFQltTm1fTy(bh, parentSpanInst);
      } else {
        bh = await this.sd_k91LpPOp7uv3TeGm(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vJ4clxOAMBbSxuXh',
        spanInst,
        'sd_vJ4clxOAMBbSxuXh'
      );
    }
  }

  async sd_TMlu2cFQltTm1fTy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TMlu2cFQltTm1fTy',
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
      bh = await this.sd_XhVuVWIZU0hwgD0Q(bh, parentSpanInst);
      //appendnew_next_sd_TMlu2cFQltTm1fTy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TMlu2cFQltTm1fTy',
        spanInst,
        'sd_TMlu2cFQltTm1fTy'
      );
    }
  }

  async sd_XhVuVWIZU0hwgD0Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XhVuVWIZU0hwgD0Q',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5vIbeF6J2NmxhARG(bh, parentSpanInst);
      //appendnew_next_sd_XhVuVWIZU0hwgD0Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XhVuVWIZU0hwgD0Q',
        spanInst,
        'sd_XhVuVWIZU0hwgD0Q'
      );
    }
  }

  async sd_5vIbeF6J2NmxhARG(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5vIbeF6J2NmxhARG');
    }
  }

  async sd_k91LpPOp7uv3TeGm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k91LpPOp7uv3TeGm',
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
        bh = await this.sd_5CqWDkneA681pD3F(bh, parentSpanInst);
      } else {
        bh = await this.sd_5GK09CZIWP0U6kQV(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k91LpPOp7uv3TeGm',
        spanInst,
        'sd_k91LpPOp7uv3TeGm'
      );
    }
  }

  async sd_5CqWDkneA681pD3F(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5CqWDkneA681pD3F',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_A6LHL8XfEcbHYMXU(bh, parentSpanInst);
      //appendnew_next_sd_5CqWDkneA681pD3F
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5CqWDkneA681pD3F',
        spanInst,
        'sd_5CqWDkneA681pD3F'
      );
    }
  }

  async sd_A6LHL8XfEcbHYMXU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A6LHL8XfEcbHYMXU',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5GK09CZIWP0U6kQV(bh, parentSpanInst);
      //appendnew_next_sd_A6LHL8XfEcbHYMXU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A6LHL8XfEcbHYMXU',
        spanInst,
        'sd_A6LHL8XfEcbHYMXU'
      );
    }
  }

  async sd_5GK09CZIWP0U6kQV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5GK09CZIWP0U6kQV',
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
        'sd_5GK09CZIWP0U6kQV',
        spanInst,
        'sd_5GK09CZIWP0U6kQV'
      );
    }
  }

  async sd_oVchVZlpbY8YSvtD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oVchVZlpbY8YSvtD',
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
        bh = await this.sd_YCQZ5ZWbamSeNnEt(bh, parentSpanInst);
      } else {
        bh = await this.sd_tX4CNQvP5Z2Vfdn7(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oVchVZlpbY8YSvtD',
        spanInst,
        'sd_oVchVZlpbY8YSvtD'
      );
    }
  }

  async sd_YCQZ5ZWbamSeNnEt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YCQZ5ZWbamSeNnEt',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5vIbeF6J2NmxhARG(bh, parentSpanInst);
      //appendnew_next_sd_YCQZ5ZWbamSeNnEt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YCQZ5ZWbamSeNnEt',
        spanInst,
        'sd_YCQZ5ZWbamSeNnEt'
      );
    }
  }

  async sd_tX4CNQvP5Z2Vfdn7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tX4CNQvP5Z2Vfdn7',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5vIbeF6J2NmxhARG(bh, parentSpanInst);
      //appendnew_next_sd_tX4CNQvP5Z2Vfdn7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tX4CNQvP5Z2Vfdn7',
        spanInst,
        'sd_tX4CNQvP5Z2Vfdn7'
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
      (await this.sd_XaizSfPzgOeNmiiN(bh, parentSpanInst)) ||
      (await this.sd_iKpzoRl0SWkWKCR8(bh, parentSpanInst))
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
  async sd_XaizSfPzgOeNmiiN(bh, parentSpanInst) {
    const nodes = [
      'sd_HAM2VkBwgVzvSrcZ',
      'sd_BVoxer6iJGPBzTeD',
      'sd_9bG3BQujkCZGqfyh',
      'sd_914znRrgwifwKW6j',
      'sd_LQpdHL5jJMQLWCxJ',
      'sd_ZqhPyp6ba2BJdEYQ',
      'sd_Pcu8lto6eJiAJdq2',
      'sd_4p9c4enxv6BPnXhG',
      'sd_RVI0t6nsH4stP0xG',
      'sd_HSEbaixTaX4HULxE',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_B5UxXa9aKcyy9F5i(bh, parentSpanInst);
      //appendnew_next_sd_XaizSfPzgOeNmiiN
      return true;
    }
    return false;
  }
  async sd_iKpzoRl0SWkWKCR8(bh, parentSpanInst) {
    const nodes = ['sd_CjYdGOC2HiMVR4se'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_XhVuVWIZU0hwgD0Q(bh, parentSpanInst);
      //appendnew_next_sd_iKpzoRl0SWkWKCR8
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
