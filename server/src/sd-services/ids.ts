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
import * as sd_xaGiS47j2euO56Gc from './idsutil'; //_splitter_
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
          bh = await this.sd_8dL8kUywOOJPv8Oy(bh, parentSpanInst);
          //appendnew_next_sd_UVfc5iz2Af6n6lfG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UVfc5iz2Af6n6lfG');
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
          bh = await this.sd_oCtZiEK39OOJqrHm(bh, parentSpanInst);
          //appendnew_next_sd_4h4eq7L3Svs0cLYz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4h4eq7L3Svs0cLYz');
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
          bh = await this.sd_IWaC67hCVwiAVn0G(bh, parentSpanInst);
          //appendnew_next_sd_Tr8XTZHBEQfUpQlT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Tr8XTZHBEQfUpQlT');
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
          bh = await this.sd_C8oQ7R419Ox1nIwl(bh, parentSpanInst);
          //appendnew_next_sd_l1C2kTdOqaaULxPX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_l1C2kTdOqaaULxPX');
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
          bh = await this.sd_ZZQK9a6KawGjlPrv(bh, parentSpanInst);
          //appendnew_next_sd_qdyjOpTsaAwAwG2Q
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qdyjOpTsaAwAwG2Q');
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
          bh = await this.sd_E6Vpjf85g2WSS2VH(bh, parentSpanInst);
          //appendnew_next_sd_5S7TSy1Tfa88ksz4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5S7TSy1Tfa88ksz4');
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
          bh = await this.sd_7BIqlx0QYlMkZ11K(bh, parentSpanInst);
          //appendnew_next_sd_UE1jBeD8PMcZzV7l
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UE1jBeD8PMcZzV7l');
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

  async sd_IWaC67hCVwiAVn0G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IWaC67hCVwiAVn0G',
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
      bh = await this.sd_qH5YwdIRckFoyy2R(bh, parentSpanInst);
      //appendnew_next_sd_IWaC67hCVwiAVn0G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IWaC67hCVwiAVn0G',
        spanInst,
        'sd_IWaC67hCVwiAVn0G'
      );
    }
  }

  async sd_qH5YwdIRckFoyy2R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qH5YwdIRckFoyy2R',
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
        bh = await this.sd_sQmndYmMU4BYqoBo(bh, parentSpanInst);
      } else {
        bh = await this.sd_5V8B8NTfcC19Zvmt(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qH5YwdIRckFoyy2R',
        spanInst,
        'sd_qH5YwdIRckFoyy2R'
      );
    }
  }

  async sd_sQmndYmMU4BYqoBo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sQmndYmMU4BYqoBo',
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
      bh = await this.sd_Jh2WE9u9MLZ4OKfb(bh, parentSpanInst);
      //appendnew_next_sd_sQmndYmMU4BYqoBo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sQmndYmMU4BYqoBo',
        spanInst,
        'sd_sQmndYmMU4BYqoBo'
      );
    }
  }

  async sd_Jh2WE9u9MLZ4OKfb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Jh2WE9u9MLZ4OKfb',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VReP1UJRTP9y4rjv(bh, parentSpanInst);
      //appendnew_next_sd_Jh2WE9u9MLZ4OKfb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jh2WE9u9MLZ4OKfb',
        spanInst,
        'sd_Jh2WE9u9MLZ4OKfb'
      );
    }
  }

  async sd_VReP1UJRTP9y4rjv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VReP1UJRTP9y4rjv',
      parentSpanInst
    );
    try {
      const sd_xaGiS47j2euO56GcInstance: sd_xaGiS47j2euO56Gc.idsutil =
        sd_xaGiS47j2euO56Gc.idsutil.getInstance();
      let outputVariables =
        await sd_xaGiS47j2euO56GcInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UpWn3SbhEmQVDcoS(bh, parentSpanInst);
      //appendnew_next_sd_VReP1UJRTP9y4rjv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VReP1UJRTP9y4rjv',
        spanInst,
        'sd_VReP1UJRTP9y4rjv'
      );
    }
  }

  async sd_UpWn3SbhEmQVDcoS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UpWn3SbhEmQVDcoS',
      parentSpanInst
    );
    try {
      const sd_xaGiS47j2euO56GcInstance: sd_xaGiS47j2euO56Gc.idsutil =
        sd_xaGiS47j2euO56Gc.idsutil.getInstance();
      let outputVariables =
        await sd_xaGiS47j2euO56GcInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6mYNCNzdJtryQ9BV(bh, parentSpanInst);
      //appendnew_next_sd_UpWn3SbhEmQVDcoS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UpWn3SbhEmQVDcoS',
        spanInst,
        'sd_UpWn3SbhEmQVDcoS'
      );
    }
  }

  async sd_6mYNCNzdJtryQ9BV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6mYNCNzdJtryQ9BV',
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
      await this.sd_4boxyfovzISJLhvH(bh, parentSpanInst);
      //appendnew_next_sd_6mYNCNzdJtryQ9BV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6mYNCNzdJtryQ9BV',
        spanInst,
        'sd_6mYNCNzdJtryQ9BV'
      );
    }
  }

  async sd_4boxyfovzISJLhvH(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4boxyfovzISJLhvH');
    }
  }

  async sd_5V8B8NTfcC19Zvmt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5V8B8NTfcC19Zvmt',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mvXZE31gq0NNjM1K(bh, parentSpanInst);
      //appendnew_next_sd_5V8B8NTfcC19Zvmt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5V8B8NTfcC19Zvmt',
        spanInst,
        'sd_5V8B8NTfcC19Zvmt'
      );
    }
  }

  async sd_mvXZE31gq0NNjM1K(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mvXZE31gq0NNjM1K');
    }
  }

  async sd_8dL8kUywOOJPv8Oy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8dL8kUywOOJPv8Oy',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UO7VVA3dwbfPYjHl(bh, parentSpanInst);
      //appendnew_next_sd_8dL8kUywOOJPv8Oy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8dL8kUywOOJPv8Oy',
        spanInst,
        'sd_8dL8kUywOOJPv8Oy'
      );
    }
  }

  async sd_UO7VVA3dwbfPYjHl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UO7VVA3dwbfPYjHl',
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
        'sd_UO7VVA3dwbfPYjHl',
        spanInst,
        'sd_UO7VVA3dwbfPYjHl'
      );
    }
  }

  async sd_C8oQ7R419Ox1nIwl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_C8oQ7R419Ox1nIwl',
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
      bh = await this.sd_b6WU529ypgivYBtT(bh, parentSpanInst);
      //appendnew_next_sd_C8oQ7R419Ox1nIwl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C8oQ7R419Ox1nIwl',
        spanInst,
        'sd_C8oQ7R419Ox1nIwl'
      );
    }
  }

  async sd_b6WU529ypgivYBtT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_b6WU529ypgivYBtT',
      parentSpanInst
    );
    try {
      const sd_xaGiS47j2euO56GcInstance: sd_xaGiS47j2euO56Gc.idsutil =
        sd_xaGiS47j2euO56Gc.idsutil.getInstance();
      let outputVariables =
        await sd_xaGiS47j2euO56GcInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BQ679kRBuRyI04bG(bh, parentSpanInst);
      //appendnew_next_sd_b6WU529ypgivYBtT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_b6WU529ypgivYBtT',
        spanInst,
        'sd_b6WU529ypgivYBtT'
      );
    }
  }

  async sd_BQ679kRBuRyI04bG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BQ679kRBuRyI04bG',
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
      bh = await this.sd_eGo3IYSK22m6xKt6(bh, parentSpanInst);
      //appendnew_next_sd_BQ679kRBuRyI04bG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BQ679kRBuRyI04bG',
        spanInst,
        'sd_BQ679kRBuRyI04bG'
      );
    }
  }

  async sd_eGo3IYSK22m6xKt6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eGo3IYSK22m6xKt6',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4Pxb9J540IkxvsI0(bh, parentSpanInst);
      //appendnew_next_sd_eGo3IYSK22m6xKt6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eGo3IYSK22m6xKt6',
        spanInst,
        'sd_eGo3IYSK22m6xKt6'
      );
    }
  }

  async sd_4Pxb9J540IkxvsI0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4Pxb9J540IkxvsI0',
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
        bh = await this.sd_2ZdHXG761n0eREXL(bh, parentSpanInst);
      } else {
        bh = await this.sd_zp7Qi5Oz6xTy1lfH(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4Pxb9J540IkxvsI0',
        spanInst,
        'sd_4Pxb9J540IkxvsI0'
      );
    }
  }

  async sd_2ZdHXG761n0eREXL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2ZdHXG761n0eREXL',
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
      await this.sd_3BFgQn35RBlw0o2J(bh, parentSpanInst);
      //appendnew_next_sd_2ZdHXG761n0eREXL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2ZdHXG761n0eREXL',
        spanInst,
        'sd_2ZdHXG761n0eREXL'
      );
    }
  }

  async sd_3BFgQn35RBlw0o2J(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3BFgQn35RBlw0o2J');
    }
  }

  async sd_zp7Qi5Oz6xTy1lfH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zp7Qi5Oz6xTy1lfH',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_eIqLAwfxRCEdqwNY(bh, parentSpanInst);
      //appendnew_next_sd_zp7Qi5Oz6xTy1lfH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zp7Qi5Oz6xTy1lfH',
        spanInst,
        'sd_zp7Qi5Oz6xTy1lfH'
      );
    }
  }

  async sd_eIqLAwfxRCEdqwNY(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eIqLAwfxRCEdqwNY');
    }
  }

  async sd_ZZQK9a6KawGjlPrv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZZQK9a6KawGjlPrv',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_27PazXhl8EsRmcsj(bh, parentSpanInst);
      //appendnew_next_sd_ZZQK9a6KawGjlPrv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZZQK9a6KawGjlPrv',
        spanInst,
        'sd_ZZQK9a6KawGjlPrv'
      );
    }
  }

  async sd_27PazXhl8EsRmcsj(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_27PazXhl8EsRmcsj');
    }
  }

  async sd_0NtpQ6QOzsbrgZEP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0NtpQ6QOzsbrgZEP',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_0NtpQ6QOzsbrgZEP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0NtpQ6QOzsbrgZEP',
        spanInst,
        'sd_0NtpQ6QOzsbrgZEP'
      );
    }
  }

  async sd_E6Vpjf85g2WSS2VH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E6Vpjf85g2WSS2VH',
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
      bh = await this.sd_bpDuxM9DEvoPtXhK(bh, parentSpanInst);
      //appendnew_next_sd_E6Vpjf85g2WSS2VH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E6Vpjf85g2WSS2VH',
        spanInst,
        'sd_E6Vpjf85g2WSS2VH'
      );
    }
  }

  async sd_bpDuxM9DEvoPtXhK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bpDuxM9DEvoPtXhK',
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
      bh = await this.sd_zHW9AYH7X6UbacW0(bh, parentSpanInst);
      //appendnew_next_sd_bpDuxM9DEvoPtXhK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bpDuxM9DEvoPtXhK',
        spanInst,
        'sd_bpDuxM9DEvoPtXhK'
      );
    }
  }

  async sd_zHW9AYH7X6UbacW0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zHW9AYH7X6UbacW0',
      parentSpanInst
    );
    try {
      const sd_xaGiS47j2euO56GcInstance: sd_xaGiS47j2euO56Gc.idsutil =
        sd_xaGiS47j2euO56Gc.idsutil.getInstance();
      let outputVariables =
        await sd_xaGiS47j2euO56GcInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pICRHMYIvUsQxwhg(bh, parentSpanInst);
      //appendnew_next_sd_zHW9AYH7X6UbacW0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zHW9AYH7X6UbacW0',
        spanInst,
        'sd_zHW9AYH7X6UbacW0'
      );
    }
  }

  async sd_pICRHMYIvUsQxwhg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pICRHMYIvUsQxwhg',
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
        bh = await this.sd_bJHmJLBFtDnJEG0s(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_wegQX7xDeiMIkPQ0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pICRHMYIvUsQxwhg',
        spanInst,
        'sd_pICRHMYIvUsQxwhg'
      );
    }
  }

  async sd_bJHmJLBFtDnJEG0s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bJHmJLBFtDnJEG0s',
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
      //appendnew_next_sd_bJHmJLBFtDnJEG0s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bJHmJLBFtDnJEG0s',
        spanInst,
        'sd_bJHmJLBFtDnJEG0s'
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
      await this.sd_rnLLCgCpoqheAg12(bh, parentSpanInst);
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

  async sd_rnLLCgCpoqheAg12(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rnLLCgCpoqheAg12');
    }
  }

  async sd_wegQX7xDeiMIkPQ0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wegQX7xDeiMIkPQ0',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rnLLCgCpoqheAg12(bh, parentSpanInst);
      //appendnew_next_sd_wegQX7xDeiMIkPQ0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wegQX7xDeiMIkPQ0',
        spanInst,
        'sd_wegQX7xDeiMIkPQ0'
      );
    }
  }

  async sd_7BIqlx0QYlMkZ11K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7BIqlx0QYlMkZ11K',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0x7lSsbkZ09SlSgm(bh, parentSpanInst);
      //appendnew_next_sd_7BIqlx0QYlMkZ11K
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7BIqlx0QYlMkZ11K',
        spanInst,
        'sd_7BIqlx0QYlMkZ11K'
      );
    }
  }

  async sd_0x7lSsbkZ09SlSgm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0x7lSsbkZ09SlSgm',
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
        bh = await this.sd_Arb3g1e0v9pQS5Zz(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xzo9y0rO0lFCgP7x(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0x7lSsbkZ09SlSgm',
        spanInst,
        'sd_0x7lSsbkZ09SlSgm'
      );
    }
  }

  async sd_Arb3g1e0v9pQS5Zz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Arb3g1e0v9pQS5Zz',
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
      await this.sd_cbE6fwiBnxpRE6lo(bh, parentSpanInst);
      //appendnew_next_sd_Arb3g1e0v9pQS5Zz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Arb3g1e0v9pQS5Zz',
        spanInst,
        'sd_Arb3g1e0v9pQS5Zz'
      );
    }
  }

  async sd_cbE6fwiBnxpRE6lo(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cbE6fwiBnxpRE6lo');
    }
  }

  async sd_xzo9y0rO0lFCgP7x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xzo9y0rO0lFCgP7x',
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
      bh = await this.sd_z3loFQZHWOq6OGRu(bh, parentSpanInst);
      //appendnew_next_sd_xzo9y0rO0lFCgP7x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xzo9y0rO0lFCgP7x',
        spanInst,
        'sd_xzo9y0rO0lFCgP7x'
      );
    }
  }

  async sd_z3loFQZHWOq6OGRu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z3loFQZHWOq6OGRu',
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
      bh = await this.sd_os6dpetHiApWXQcZ(bh, parentSpanInst);
      //appendnew_next_sd_z3loFQZHWOq6OGRu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z3loFQZHWOq6OGRu',
        spanInst,
        'sd_z3loFQZHWOq6OGRu'
      );
    }
  }

  async sd_os6dpetHiApWXQcZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_os6dpetHiApWXQcZ',
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
        bh = await this.sd_i1vIdqDyTWRl6j6M(bh, parentSpanInst);
      } else {
        bh = await this.sd_bZvYnlX8U4FChGD4(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_os6dpetHiApWXQcZ',
        spanInst,
        'sd_os6dpetHiApWXQcZ'
      );
    }
  }

  async sd_i1vIdqDyTWRl6j6M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i1vIdqDyTWRl6j6M',
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
      await this.sd_SY9nHOUrjYQmWB5i(bh, parentSpanInst);
      //appendnew_next_sd_i1vIdqDyTWRl6j6M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i1vIdqDyTWRl6j6M',
        spanInst,
        'sd_i1vIdqDyTWRl6j6M'
      );
    }
  }

  async sd_SY9nHOUrjYQmWB5i(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SY9nHOUrjYQmWB5i');
    }
  }

  async sd_bZvYnlX8U4FChGD4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bZvYnlX8U4FChGD4',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0fNQj0oBjXyVe3mm(bh, parentSpanInst);
      //appendnew_next_sd_bZvYnlX8U4FChGD4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bZvYnlX8U4FChGD4',
        spanInst,
        'sd_bZvYnlX8U4FChGD4'
      );
    }
  }

  async sd_0fNQj0oBjXyVe3mm(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0fNQj0oBjXyVe3mm');
    }
  }

  async sd_oCtZiEK39OOJqrHm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oCtZiEK39OOJqrHm',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_m4Pt8KZ1ZEseJqEn(bh, parentSpanInst);
      //appendnew_next_sd_oCtZiEK39OOJqrHm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oCtZiEK39OOJqrHm',
        spanInst,
        'sd_oCtZiEK39OOJqrHm'
      );
    }
  }

  async sd_m4Pt8KZ1ZEseJqEn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m4Pt8KZ1ZEseJqEn',
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
      bh = await this.sd_ORywGiJfoL8O1FsB(bh, parentSpanInst);
      //appendnew_next_sd_m4Pt8KZ1ZEseJqEn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m4Pt8KZ1ZEseJqEn',
        spanInst,
        'sd_m4Pt8KZ1ZEseJqEn'
      );
    }
  }

  async sd_ORywGiJfoL8O1FsB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ORywGiJfoL8O1FsB',
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
      bh = await this.sd_CKjVHfvqbIhQUmEV(bh, parentSpanInst);
      //appendnew_next_sd_ORywGiJfoL8O1FsB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ORywGiJfoL8O1FsB',
        spanInst,
        'sd_ORywGiJfoL8O1FsB'
      );
    }
  }

  async sd_CKjVHfvqbIhQUmEV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CKjVHfvqbIhQUmEV',
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
        bh = await this.sd_yjRTp2ljbHVgD9oW(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_jI7R6lysPcHccpNx(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CKjVHfvqbIhQUmEV',
        spanInst,
        'sd_CKjVHfvqbIhQUmEV'
      );
    }
  }

  async sd_yjRTp2ljbHVgD9oW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yjRTp2ljbHVgD9oW',
      parentSpanInst
    );
    try {
      const sd_xaGiS47j2euO56GcInstance: sd_xaGiS47j2euO56Gc.idsutil =
        sd_xaGiS47j2euO56Gc.idsutil.getInstance();
      let outputVariables = await sd_xaGiS47j2euO56GcInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7h9jJseeamJAvFAB(bh, parentSpanInst);
      //appendnew_next_sd_yjRTp2ljbHVgD9oW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yjRTp2ljbHVgD9oW',
        spanInst,
        'sd_yjRTp2ljbHVgD9oW'
      );
    }
  }

  async sd_7h9jJseeamJAvFAB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7h9jJseeamJAvFAB',
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
        bh = await this.sd_Tkm3CSVrOPGnhdyu(bh, parentSpanInst);
      } else {
        bh = await this.sd_ZYlQSLcz3rTa8L6Z(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7h9jJseeamJAvFAB',
        spanInst,
        'sd_7h9jJseeamJAvFAB'
      );
    }
  }

  async sd_Tkm3CSVrOPGnhdyu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Tkm3CSVrOPGnhdyu',
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
      bh = await this.sd_0GE3hHeLIlPpbxav(bh, parentSpanInst);
      //appendnew_next_sd_Tkm3CSVrOPGnhdyu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Tkm3CSVrOPGnhdyu',
        spanInst,
        'sd_Tkm3CSVrOPGnhdyu'
      );
    }
  }

  async sd_0GE3hHeLIlPpbxav(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0GE3hHeLIlPpbxav',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lCrVqgpwP3cyLzHy(bh, parentSpanInst);
      //appendnew_next_sd_0GE3hHeLIlPpbxav
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0GE3hHeLIlPpbxav',
        spanInst,
        'sd_0GE3hHeLIlPpbxav'
      );
    }
  }

  async sd_lCrVqgpwP3cyLzHy(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lCrVqgpwP3cyLzHy');
    }
  }

  async sd_ZYlQSLcz3rTa8L6Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZYlQSLcz3rTa8L6Z',
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
        bh = await this.sd_jHiza2rBI1hdfsHd(bh, parentSpanInst);
      } else {
        bh = await this.sd_VfUDr9OSmapZMkHa(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZYlQSLcz3rTa8L6Z',
        spanInst,
        'sd_ZYlQSLcz3rTa8L6Z'
      );
    }
  }

  async sd_jHiza2rBI1hdfsHd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jHiza2rBI1hdfsHd',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZIFuYbbJUSYXbkjh(bh, parentSpanInst);
      //appendnew_next_sd_jHiza2rBI1hdfsHd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jHiza2rBI1hdfsHd',
        spanInst,
        'sd_jHiza2rBI1hdfsHd'
      );
    }
  }

  async sd_ZIFuYbbJUSYXbkjh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZIFuYbbJUSYXbkjh',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_VfUDr9OSmapZMkHa(bh, parentSpanInst);
      //appendnew_next_sd_ZIFuYbbJUSYXbkjh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZIFuYbbJUSYXbkjh',
        spanInst,
        'sd_ZIFuYbbJUSYXbkjh'
      );
    }
  }

  async sd_VfUDr9OSmapZMkHa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VfUDr9OSmapZMkHa',
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
        'sd_VfUDr9OSmapZMkHa',
        spanInst,
        'sd_VfUDr9OSmapZMkHa'
      );
    }
  }

  async sd_jI7R6lysPcHccpNx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jI7R6lysPcHccpNx',
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
        bh = await this.sd_1IdGRZXB2HMyuDVv(bh, parentSpanInst);
      } else {
        bh = await this.sd_CHqvTHtZ01wSZQFu(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jI7R6lysPcHccpNx',
        spanInst,
        'sd_jI7R6lysPcHccpNx'
      );
    }
  }

  async sd_1IdGRZXB2HMyuDVv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1IdGRZXB2HMyuDVv',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lCrVqgpwP3cyLzHy(bh, parentSpanInst);
      //appendnew_next_sd_1IdGRZXB2HMyuDVv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1IdGRZXB2HMyuDVv',
        spanInst,
        'sd_1IdGRZXB2HMyuDVv'
      );
    }
  }

  async sd_CHqvTHtZ01wSZQFu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CHqvTHtZ01wSZQFu',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lCrVqgpwP3cyLzHy(bh, parentSpanInst);
      //appendnew_next_sd_CHqvTHtZ01wSZQFu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CHqvTHtZ01wSZQFu',
        spanInst,
        'sd_CHqvTHtZ01wSZQFu'
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
      (await this.sd_KcVGpyCOjjvtP7u6(bh, parentSpanInst)) ||
      (await this.sd_Z6OvJd5pgAvQHNPA(bh, parentSpanInst))
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
  async sd_KcVGpyCOjjvtP7u6(bh, parentSpanInst) {
    const nodes = [
      'sd_UpWn3SbhEmQVDcoS',
      'sd_l1C2kTdOqaaULxPX',
      'sd_b6WU529ypgivYBtT',
      'sd_BQ679kRBuRyI04bG',
      'sd_C8oQ7R419Ox1nIwl',
      'sd_4Pxb9J540IkxvsI0',
      'sd_2ZdHXG761n0eREXL',
      'sd_zp7Qi5Oz6xTy1lfH',
      'sd_3BFgQn35RBlw0o2J',
      'sd_eIqLAwfxRCEdqwNY',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_0NtpQ6QOzsbrgZEP(bh, parentSpanInst);
      //appendnew_next_sd_KcVGpyCOjjvtP7u6
      return true;
    }
    return false;
  }
  async sd_Z6OvJd5pgAvQHNPA(bh, parentSpanInst) {
    const nodes = ['sd_yjRTp2ljbHVgD9oW'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_0GE3hHeLIlPpbxav(bh, parentSpanInst);
      //appendnew_next_sd_Z6OvJd5pgAvQHNPA
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
