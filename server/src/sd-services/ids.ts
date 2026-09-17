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
import * as sd_jgCqRynw1avv1l0M from './idsutil'; //_splitter_
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
          bh = await this.sd_zkJDVkFR9wv8iayE(bh, parentSpanInst);
          //appendnew_next_sd_3efRwefn7f5kOZEz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3efRwefn7f5kOZEz');
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
          bh = await this.sd_c4G8Gfg7urrBFRa8(bh, parentSpanInst);
          //appendnew_next_sd_8vSpZujnhAgrFMEO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8vSpZujnhAgrFMEO');
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
          bh = await this.sd_hMynAVtIGBVfhdXp(bh, parentSpanInst);
          //appendnew_next_sd_z4p5vPaB5HChnqe4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_z4p5vPaB5HChnqe4');
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
          bh = await this.sd_Zo0gSzLlftsLIxYB(bh, parentSpanInst);
          //appendnew_next_sd_NESiHaMSwU7Z1s8Q
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NESiHaMSwU7Z1s8Q');
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
          bh = await this.sd_bp2CMwBPfBzwq4H3(bh, parentSpanInst);
          //appendnew_next_sd_A4RN94lfQuBahp78
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_A4RN94lfQuBahp78');
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
          bh = await this.sd_QToC7zb5ERopOMFs(bh, parentSpanInst);
          //appendnew_next_sd_ZQxxGRGSyyCPZLnD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZQxxGRGSyyCPZLnD');
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
          bh = await this.sd_n9jLlnZvcloLxo1a(bh, parentSpanInst);
          //appendnew_next_sd_NgQtx8gIAvuEWZIl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NgQtx8gIAvuEWZIl');
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

  async sd_hMynAVtIGBVfhdXp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hMynAVtIGBVfhdXp',
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
      bh = await this.sd_VHn1NyHwGWzLvKF6(bh, parentSpanInst);
      //appendnew_next_sd_hMynAVtIGBVfhdXp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hMynAVtIGBVfhdXp',
        spanInst,
        'sd_hMynAVtIGBVfhdXp'
      );
    }
  }

  async sd_VHn1NyHwGWzLvKF6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VHn1NyHwGWzLvKF6',
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
        bh = await this.sd_79zEuiQ8DKb20E1u(bh, parentSpanInst);
      } else {
        bh = await this.sd_56ixFFbA0E9h9Uw7(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VHn1NyHwGWzLvKF6',
        spanInst,
        'sd_VHn1NyHwGWzLvKF6'
      );
    }
  }

  async sd_79zEuiQ8DKb20E1u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_79zEuiQ8DKb20E1u',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo|| 'Claim_page',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_drVJTIOsUgQM8IKb(bh, parentSpanInst);
      //appendnew_next_sd_79zEuiQ8DKb20E1u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_79zEuiQ8DKb20E1u',
        spanInst,
        'sd_79zEuiQ8DKb20E1u'
      );
    }
  }

  async sd_drVJTIOsUgQM8IKb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_drVJTIOsUgQM8IKb',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_W1uu4cekFsPJsak1(bh, parentSpanInst);
      //appendnew_next_sd_drVJTIOsUgQM8IKb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_drVJTIOsUgQM8IKb',
        spanInst,
        'sd_drVJTIOsUgQM8IKb'
      );
    }
  }

  async sd_W1uu4cekFsPJsak1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_W1uu4cekFsPJsak1',
      parentSpanInst
    );
    try {
      const sd_jgCqRynw1avv1l0MInstance: sd_jgCqRynw1avv1l0M.idsutil =
        sd_jgCqRynw1avv1l0M.idsutil.getInstance();
      let outputVariables =
        await sd_jgCqRynw1avv1l0MInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hyTX3DH5sDYqIoQW(bh, parentSpanInst);
      //appendnew_next_sd_W1uu4cekFsPJsak1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W1uu4cekFsPJsak1',
        spanInst,
        'sd_W1uu4cekFsPJsak1'
      );
    }
  }

  async sd_hyTX3DH5sDYqIoQW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hyTX3DH5sDYqIoQW',
      parentSpanInst
    );
    try {
      const sd_jgCqRynw1avv1l0MInstance: sd_jgCqRynw1avv1l0M.idsutil =
        sd_jgCqRynw1avv1l0M.idsutil.getInstance();
      let outputVariables =
        await sd_jgCqRynw1avv1l0MInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IczL0SAFISMuqQT8(bh, parentSpanInst);
      //appendnew_next_sd_hyTX3DH5sDYqIoQW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hyTX3DH5sDYqIoQW',
        spanInst,
        'sd_hyTX3DH5sDYqIoQW'
      );
    }
  }

  async sd_IczL0SAFISMuqQT8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IczL0SAFISMuqQT8',
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
      await this.sd_jd2NYfe3QLBNhyOp(bh, parentSpanInst);
      //appendnew_next_sd_IczL0SAFISMuqQT8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IczL0SAFISMuqQT8',
        spanInst,
        'sd_IczL0SAFISMuqQT8'
      );
    }
  }

  async sd_jd2NYfe3QLBNhyOp(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jd2NYfe3QLBNhyOp');
    }
  }

  async sd_56ixFFbA0E9h9Uw7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_56ixFFbA0E9h9Uw7',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_72uUE5gH2Ri9fD8n(bh, parentSpanInst);
      //appendnew_next_sd_56ixFFbA0E9h9Uw7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_56ixFFbA0E9h9Uw7',
        spanInst,
        'sd_56ixFFbA0E9h9Uw7'
      );
    }
  }

  async sd_72uUE5gH2Ri9fD8n(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_72uUE5gH2Ri9fD8n');
    }
  }

  async sd_zkJDVkFR9wv8iayE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zkJDVkFR9wv8iayE',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_j6e68haTvZTcq7sf(bh, parentSpanInst);
      //appendnew_next_sd_zkJDVkFR9wv8iayE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zkJDVkFR9wv8iayE',
        spanInst,
        'sd_zkJDVkFR9wv8iayE'
      );
    }
  }

  async sd_j6e68haTvZTcq7sf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j6e68haTvZTcq7sf',
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
        'sd_j6e68haTvZTcq7sf',
        spanInst,
        'sd_j6e68haTvZTcq7sf'
      );
    }
  }

  async sd_Zo0gSzLlftsLIxYB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Zo0gSzLlftsLIxYB',
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
      bh = await this.sd_yrpkezH4dKaErkGI(bh, parentSpanInst);
      //appendnew_next_sd_Zo0gSzLlftsLIxYB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zo0gSzLlftsLIxYB',
        spanInst,
        'sd_Zo0gSzLlftsLIxYB'
      );
    }
  }

  async sd_yrpkezH4dKaErkGI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yrpkezH4dKaErkGI',
      parentSpanInst
    );
    try {
      const sd_jgCqRynw1avv1l0MInstance: sd_jgCqRynw1avv1l0M.idsutil =
        sd_jgCqRynw1avv1l0M.idsutil.getInstance();
      let outputVariables =
        await sd_jgCqRynw1avv1l0MInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7zNMOPwZuW0jPqQk(bh, parentSpanInst);
      //appendnew_next_sd_yrpkezH4dKaErkGI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yrpkezH4dKaErkGI',
        spanInst,
        'sd_yrpkezH4dKaErkGI'
      );
    }
  }

  async sd_7zNMOPwZuW0jPqQk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7zNMOPwZuW0jPqQk',
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
      bh = await this.sd_L2byX44dPwjOHyKL(bh, parentSpanInst);
      //appendnew_next_sd_7zNMOPwZuW0jPqQk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7zNMOPwZuW0jPqQk',
        spanInst,
        'sd_7zNMOPwZuW0jPqQk'
      );
    }
  }

  async sd_L2byX44dPwjOHyKL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L2byX44dPwjOHyKL',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rVd6O3WNBo5zlJtL(bh, parentSpanInst);
      //appendnew_next_sd_L2byX44dPwjOHyKL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L2byX44dPwjOHyKL',
        spanInst,
        'sd_L2byX44dPwjOHyKL'
      );
    }
  }

  async sd_rVd6O3WNBo5zlJtL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rVd6O3WNBo5zlJtL',
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
        bh = await this.sd_uHENOWcAFPt5kqfu(bh, parentSpanInst);
      } else {
        bh = await this.sd_30xHukC1BV1XzJrD(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rVd6O3WNBo5zlJtL',
        spanInst,
        'sd_rVd6O3WNBo5zlJtL'
      );
    }
  }

  async sd_uHENOWcAFPt5kqfu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uHENOWcAFPt5kqfu',
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
      await this.sd_KLNFQ74tt5VEBYnD(bh, parentSpanInst);
      //appendnew_next_sd_uHENOWcAFPt5kqfu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uHENOWcAFPt5kqfu',
        spanInst,
        'sd_uHENOWcAFPt5kqfu'
      );
    }
  }

  async sd_KLNFQ74tt5VEBYnD(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KLNFQ74tt5VEBYnD');
    }
  }

  async sd_30xHukC1BV1XzJrD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_30xHukC1BV1XzJrD',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TvLiKgvHRHXbziZ0(bh, parentSpanInst);
      //appendnew_next_sd_30xHukC1BV1XzJrD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_30xHukC1BV1XzJrD',
        spanInst,
        'sd_30xHukC1BV1XzJrD'
      );
    }
  }

  async sd_TvLiKgvHRHXbziZ0(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TvLiKgvHRHXbziZ0');
    }
  }

  async sd_bp2CMwBPfBzwq4H3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bp2CMwBPfBzwq4H3',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Hos8R0FtALt7LF7n(bh, parentSpanInst);
      //appendnew_next_sd_bp2CMwBPfBzwq4H3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bp2CMwBPfBzwq4H3',
        spanInst,
        'sd_bp2CMwBPfBzwq4H3'
      );
    }
  }

  async sd_Hos8R0FtALt7LF7n(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Hos8R0FtALt7LF7n');
    }
  }

  async sd_by9yuJ0uFZ5VCTE3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_by9yuJ0uFZ5VCTE3',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_by9yuJ0uFZ5VCTE3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_by9yuJ0uFZ5VCTE3',
        spanInst,
        'sd_by9yuJ0uFZ5VCTE3'
      );
    }
  }

  async sd_QToC7zb5ERopOMFs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QToC7zb5ERopOMFs',
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
      bh = await this.sd_vF4rq8L9pGxQAmL6(bh, parentSpanInst);
      //appendnew_next_sd_QToC7zb5ERopOMFs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QToC7zb5ERopOMFs',
        spanInst,
        'sd_QToC7zb5ERopOMFs'
      );
    }
  }

  async sd_vF4rq8L9pGxQAmL6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vF4rq8L9pGxQAmL6',
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
      bh = await this.sd_pdn7QbVC97YtpMr0(bh, parentSpanInst);
      //appendnew_next_sd_vF4rq8L9pGxQAmL6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vF4rq8L9pGxQAmL6',
        spanInst,
        'sd_vF4rq8L9pGxQAmL6'
      );
    }
  }

  async sd_pdn7QbVC97YtpMr0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pdn7QbVC97YtpMr0',
      parentSpanInst
    );
    try {
      const sd_jgCqRynw1avv1l0MInstance: sd_jgCqRynw1avv1l0M.idsutil =
        sd_jgCqRynw1avv1l0M.idsutil.getInstance();
      let outputVariables =
        await sd_jgCqRynw1avv1l0MInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WEoUxccpCOxcKGFp(bh, parentSpanInst);
      //appendnew_next_sd_pdn7QbVC97YtpMr0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pdn7QbVC97YtpMr0',
        spanInst,
        'sd_pdn7QbVC97YtpMr0'
      );
    }
  }

  async sd_WEoUxccpCOxcKGFp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WEoUxccpCOxcKGFp',
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
        bh = await this.sd_tpD59oXiQD6VQLCp(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_K9pzscrkO4qASqWd(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WEoUxccpCOxcKGFp',
        spanInst,
        'sd_WEoUxccpCOxcKGFp'
      );
    }
  }

  async sd_tpD59oXiQD6VQLCp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tpD59oXiQD6VQLCp',
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
      //appendnew_next_sd_tpD59oXiQD6VQLCp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tpD59oXiQD6VQLCp',
        spanInst,
        'sd_tpD59oXiQD6VQLCp'
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
      await this.sd_gHuOTCOKIO3rekJq(bh, parentSpanInst);
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

  async sd_gHuOTCOKIO3rekJq(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gHuOTCOKIO3rekJq');
    }
  }

  async sd_K9pzscrkO4qASqWd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K9pzscrkO4qASqWd',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gHuOTCOKIO3rekJq(bh, parentSpanInst);
      //appendnew_next_sd_K9pzscrkO4qASqWd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K9pzscrkO4qASqWd',
        spanInst,
        'sd_K9pzscrkO4qASqWd'
      );
    }
  }

  async sd_n9jLlnZvcloLxo1a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_n9jLlnZvcloLxo1a',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k29HfXYoX1FHXzdk(bh, parentSpanInst);
      //appendnew_next_sd_n9jLlnZvcloLxo1a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n9jLlnZvcloLxo1a',
        spanInst,
        'sd_n9jLlnZvcloLxo1a'
      );
    }
  }

  async sd_k29HfXYoX1FHXzdk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k29HfXYoX1FHXzdk',
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
        bh = await this.sd_j9Fv7aFCveBXRGAT(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yvD5CsQiPY7igaft(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k29HfXYoX1FHXzdk',
        spanInst,
        'sd_k29HfXYoX1FHXzdk'
      );
    }
  }

  async sd_j9Fv7aFCveBXRGAT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j9Fv7aFCveBXRGAT',
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
      await this.sd_ECCHJSnUD8uY64yt(bh, parentSpanInst);
      //appendnew_next_sd_j9Fv7aFCveBXRGAT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j9Fv7aFCveBXRGAT',
        spanInst,
        'sd_j9Fv7aFCveBXRGAT'
      );
    }
  }

  async sd_ECCHJSnUD8uY64yt(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ECCHJSnUD8uY64yt');
    }
  }

  async sd_yvD5CsQiPY7igaft(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yvD5CsQiPY7igaft',
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
      bh = await this.sd_cVc0AKEw4PoPErud(bh, parentSpanInst);
      //appendnew_next_sd_yvD5CsQiPY7igaft
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yvD5CsQiPY7igaft',
        spanInst,
        'sd_yvD5CsQiPY7igaft'
      );
    }
  }

  async sd_cVc0AKEw4PoPErud(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cVc0AKEw4PoPErud',
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
      bh = await this.sd_jT0qOAvuAnF3GDAr(bh, parentSpanInst);
      //appendnew_next_sd_cVc0AKEw4PoPErud
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cVc0AKEw4PoPErud',
        spanInst,
        'sd_cVc0AKEw4PoPErud'
      );
    }
  }

  async sd_jT0qOAvuAnF3GDAr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jT0qOAvuAnF3GDAr',
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
        bh = await this.sd_IOpdXbNK38x3MnDN(bh, parentSpanInst);
      } else {
        bh = await this.sd_351S5DkglIFwDtag(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jT0qOAvuAnF3GDAr',
        spanInst,
        'sd_jT0qOAvuAnF3GDAr'
      );
    }
  }

  async sd_IOpdXbNK38x3MnDN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IOpdXbNK38x3MnDN',
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
      await this.sd_quR2RIRYjFWNWXtQ(bh, parentSpanInst);
      //appendnew_next_sd_IOpdXbNK38x3MnDN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IOpdXbNK38x3MnDN',
        spanInst,
        'sd_IOpdXbNK38x3MnDN'
      );
    }
  }

  async sd_quR2RIRYjFWNWXtQ(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_quR2RIRYjFWNWXtQ');
    }
  }

  async sd_351S5DkglIFwDtag(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_351S5DkglIFwDtag',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_O3cKHBkLt1JPDV4P(bh, parentSpanInst);
      //appendnew_next_sd_351S5DkglIFwDtag
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_351S5DkglIFwDtag',
        spanInst,
        'sd_351S5DkglIFwDtag'
      );
    }
  }

  async sd_O3cKHBkLt1JPDV4P(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O3cKHBkLt1JPDV4P');
    }
  }

  async sd_c4G8Gfg7urrBFRa8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c4G8Gfg7urrBFRa8',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2sgobpkBDYLDEIjG(bh, parentSpanInst);
      //appendnew_next_sd_c4G8Gfg7urrBFRa8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c4G8Gfg7urrBFRa8',
        spanInst,
        'sd_c4G8Gfg7urrBFRa8'
      );
    }
  }

  async sd_2sgobpkBDYLDEIjG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2sgobpkBDYLDEIjG',
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
      bh = await this.sd_o5C9N3riCwnqs359(bh, parentSpanInst);
      //appendnew_next_sd_2sgobpkBDYLDEIjG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2sgobpkBDYLDEIjG',
        spanInst,
        'sd_2sgobpkBDYLDEIjG'
      );
    }
  }

  async sd_o5C9N3riCwnqs359(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_o5C9N3riCwnqs359',
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
      bh = await this.sd_HMr6gQOEdWJNXRLJ(bh, parentSpanInst);
      //appendnew_next_sd_o5C9N3riCwnqs359
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o5C9N3riCwnqs359',
        spanInst,
        'sd_o5C9N3riCwnqs359'
      );
    }
  }

  async sd_HMr6gQOEdWJNXRLJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HMr6gQOEdWJNXRLJ',
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
        bh = await this.sd_BFVuhZPZ2ryi6jDy(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_1zDSoiaYUAYKCq2K(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HMr6gQOEdWJNXRLJ',
        spanInst,
        'sd_HMr6gQOEdWJNXRLJ'
      );
    }
  }

  async sd_BFVuhZPZ2ryi6jDy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BFVuhZPZ2ryi6jDy',
      parentSpanInst
    );
    try {
      const sd_jgCqRynw1avv1l0MInstance: sd_jgCqRynw1avv1l0M.idsutil =
        sd_jgCqRynw1avv1l0M.idsutil.getInstance();
      let outputVariables = await sd_jgCqRynw1avv1l0MInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rR61tp984bhH2M3l(bh, parentSpanInst);
      //appendnew_next_sd_BFVuhZPZ2ryi6jDy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BFVuhZPZ2ryi6jDy',
        spanInst,
        'sd_BFVuhZPZ2ryi6jDy'
      );
    }
  }

  async sd_rR61tp984bhH2M3l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rR61tp984bhH2M3l',
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
        bh = await this.sd_i2MhB202AEyzTL3d(bh, parentSpanInst);
      } else {
        bh = await this.sd_2YkXcYi8QRUrOn6J(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rR61tp984bhH2M3l',
        spanInst,
        'sd_rR61tp984bhH2M3l'
      );
    }
  }

  async sd_i2MhB202AEyzTL3d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i2MhB202AEyzTL3d',
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
      bh = await this.sd_5P7JjEt34OzePPsX(bh, parentSpanInst);
      //appendnew_next_sd_i2MhB202AEyzTL3d
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i2MhB202AEyzTL3d',
        spanInst,
        'sd_i2MhB202AEyzTL3d'
      );
    }
  }

  async sd_5P7JjEt34OzePPsX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5P7JjEt34OzePPsX',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GG4SbL0MiPtelQeP(bh, parentSpanInst);
      //appendnew_next_sd_5P7JjEt34OzePPsX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5P7JjEt34OzePPsX',
        spanInst,
        'sd_5P7JjEt34OzePPsX'
      );
    }
  }

  async sd_GG4SbL0MiPtelQeP(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GG4SbL0MiPtelQeP');
    }
  }

  async sd_2YkXcYi8QRUrOn6J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2YkXcYi8QRUrOn6J',
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
        bh = await this.sd_hLturWnmY73IzZjY(bh, parentSpanInst);
      } else {
        bh = await this.sd_sGr2KBtoiksV8yrY(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2YkXcYi8QRUrOn6J',
        spanInst,
        'sd_2YkXcYi8QRUrOn6J'
      );
    }
  }

  async sd_hLturWnmY73IzZjY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hLturWnmY73IzZjY',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VFQHn7Kd8Ak9mrMv(bh, parentSpanInst);
      //appendnew_next_sd_hLturWnmY73IzZjY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hLturWnmY73IzZjY',
        spanInst,
        'sd_hLturWnmY73IzZjY'
      );
    }
  }

  async sd_VFQHn7Kd8Ak9mrMv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VFQHn7Kd8Ak9mrMv',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sGr2KBtoiksV8yrY(bh, parentSpanInst);
      //appendnew_next_sd_VFQHn7Kd8Ak9mrMv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VFQHn7Kd8Ak9mrMv',
        spanInst,
        'sd_VFQHn7Kd8Ak9mrMv'
      );
    }
  }

  async sd_sGr2KBtoiksV8yrY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sGr2KBtoiksV8yrY',
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
        'sd_sGr2KBtoiksV8yrY',
        spanInst,
        'sd_sGr2KBtoiksV8yrY'
      );
    }
  }

  async sd_1zDSoiaYUAYKCq2K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1zDSoiaYUAYKCq2K',
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
        bh = await this.sd_aXxFtbC076h7J8vR(bh, parentSpanInst);
      } else {
        bh = await this.sd_XlrSRL5DdlwIjknZ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1zDSoiaYUAYKCq2K',
        spanInst,
        'sd_1zDSoiaYUAYKCq2K'
      );
    }
  }

  async sd_aXxFtbC076h7J8vR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aXxFtbC076h7J8vR',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GG4SbL0MiPtelQeP(bh, parentSpanInst);
      //appendnew_next_sd_aXxFtbC076h7J8vR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aXxFtbC076h7J8vR',
        spanInst,
        'sd_aXxFtbC076h7J8vR'
      );
    }
  }

  async sd_XlrSRL5DdlwIjknZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XlrSRL5DdlwIjknZ',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GG4SbL0MiPtelQeP(bh, parentSpanInst);
      //appendnew_next_sd_XlrSRL5DdlwIjknZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XlrSRL5DdlwIjknZ',
        spanInst,
        'sd_XlrSRL5DdlwIjknZ'
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
      (await this.sd_mc8vLzOCA0v5ZZmy(bh, parentSpanInst)) ||
      (await this.sd_n8uvA2otfbA2HBgt(bh, parentSpanInst))
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
  async sd_mc8vLzOCA0v5ZZmy(bh, parentSpanInst) {
    const nodes = [
      'sd_hyTX3DH5sDYqIoQW',
      'sd_NESiHaMSwU7Z1s8Q',
      'sd_yrpkezH4dKaErkGI',
      'sd_7zNMOPwZuW0jPqQk',
      'sd_Zo0gSzLlftsLIxYB',
      'sd_rVd6O3WNBo5zlJtL',
      'sd_uHENOWcAFPt5kqfu',
      'sd_30xHukC1BV1XzJrD',
      'sd_KLNFQ74tt5VEBYnD',
      'sd_TvLiKgvHRHXbziZ0',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_by9yuJ0uFZ5VCTE3(bh, parentSpanInst);
      //appendnew_next_sd_mc8vLzOCA0v5ZZmy
      return true;
    }
    return false;
  }
  async sd_n8uvA2otfbA2HBgt(bh, parentSpanInst) {
    const nodes = ['sd_BFVuhZPZ2ryi6jDy'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_5P7JjEt34OzePPsX(bh, parentSpanInst);
      //appendnew_next_sd_n8uvA2otfbA2HBgt
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
