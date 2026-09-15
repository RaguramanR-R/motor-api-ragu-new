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
import * as sd_FYsOjosGFbsl8g7J from './idsutil'; //_splitter_
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
          bh = await this.sd_buw8xewORavgs03N(bh, parentSpanInst);
          //appendnew_next_sd_fNXZ4TdtBA66PffP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fNXZ4TdtBA66PffP');
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
          bh = await this.sd_xMDe5l5h7Vqk3PmK(bh, parentSpanInst);
          //appendnew_next_sd_xLZNdZAeQVh7LpsJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xLZNdZAeQVh7LpsJ');
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
          bh = await this.sd_hescjCLwVUYYQSqW(bh, parentSpanInst);
          //appendnew_next_sd_vmA0KzVZSuuRQVpK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vmA0KzVZSuuRQVpK');
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
          bh = await this.sd_YssEj0ChyDnli6Uz(bh, parentSpanInst);
          //appendnew_next_sd_DiERNyWHPEd6SrYF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DiERNyWHPEd6SrYF');
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
          bh = await this.sd_zTC0uGXpb3oyNfu2(bh, parentSpanInst);
          //appendnew_next_sd_I217g6Sdrho2sOiJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_I217g6Sdrho2sOiJ');
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
          bh = await this.sd_y2C4k9Urhsz9bJor(bh, parentSpanInst);
          //appendnew_next_sd_LUy075A7OJc3txLV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_LUy075A7OJc3txLV');
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
          bh = await this.sd_a6Iqj9sbp7iaF44J(bh, parentSpanInst);
          //appendnew_next_sd_WRQn1qAaDrcTOcNQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_WRQn1qAaDrcTOcNQ');
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

  async sd_hescjCLwVUYYQSqW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hescjCLwVUYYQSqW',
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
      bh = await this.sd_A9iGYJPwZbiU3isT(bh, parentSpanInst);
      //appendnew_next_sd_hescjCLwVUYYQSqW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hescjCLwVUYYQSqW',
        spanInst,
        'sd_hescjCLwVUYYQSqW'
      );
    }
  }

  async sd_A9iGYJPwZbiU3isT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A9iGYJPwZbiU3isT',
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
        bh = await this.sd_au8CESdM4c9Ioqno(bh, parentSpanInst);
      } else {
        bh = await this.sd_QVpW9elEdPlVEBu6(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A9iGYJPwZbiU3isT',
        spanInst,
        'sd_A9iGYJPwZbiU3isT'
      );
    }
  }

  async sd_au8CESdM4c9Ioqno(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_au8CESdM4c9Ioqno',
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
      bh = await this.sd_WfITojQbcYIsMMAh(bh, parentSpanInst);
      //appendnew_next_sd_au8CESdM4c9Ioqno
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_au8CESdM4c9Ioqno',
        spanInst,
        'sd_au8CESdM4c9Ioqno'
      );
    }
  }

  async sd_WfITojQbcYIsMMAh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WfITojQbcYIsMMAh',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NMjAhCdDECQfIczl(bh, parentSpanInst);
      //appendnew_next_sd_WfITojQbcYIsMMAh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WfITojQbcYIsMMAh',
        spanInst,
        'sd_WfITojQbcYIsMMAh'
      );
    }
  }

  async sd_NMjAhCdDECQfIczl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NMjAhCdDECQfIczl',
      parentSpanInst
    );
    try {
      const sd_FYsOjosGFbsl8g7JInstance: sd_FYsOjosGFbsl8g7J.idsutil =
        sd_FYsOjosGFbsl8g7J.idsutil.getInstance();
      let outputVariables =
        await sd_FYsOjosGFbsl8g7JInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Zdyb2hCYvW82v5Up(bh, parentSpanInst);
      //appendnew_next_sd_NMjAhCdDECQfIczl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NMjAhCdDECQfIczl',
        spanInst,
        'sd_NMjAhCdDECQfIczl'
      );
    }
  }

  async sd_Zdyb2hCYvW82v5Up(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Zdyb2hCYvW82v5Up',
      parentSpanInst
    );
    try {
      const sd_FYsOjosGFbsl8g7JInstance: sd_FYsOjosGFbsl8g7J.idsutil =
        sd_FYsOjosGFbsl8g7J.idsutil.getInstance();
      let outputVariables =
        await sd_FYsOjosGFbsl8g7JInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JGSyQSRxdx4uXzJi(bh, parentSpanInst);
      //appendnew_next_sd_Zdyb2hCYvW82v5Up
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zdyb2hCYvW82v5Up',
        spanInst,
        'sd_Zdyb2hCYvW82v5Up'
      );
    }
  }

  async sd_JGSyQSRxdx4uXzJi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JGSyQSRxdx4uXzJi',
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
      await this.sd_12YHc32J2fImp91e(bh, parentSpanInst);
      //appendnew_next_sd_JGSyQSRxdx4uXzJi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JGSyQSRxdx4uXzJi',
        spanInst,
        'sd_JGSyQSRxdx4uXzJi'
      );
    }
  }

  async sd_12YHc32J2fImp91e(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_12YHc32J2fImp91e');
    }
  }

  async sd_QVpW9elEdPlVEBu6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QVpW9elEdPlVEBu6',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_O8Nm5qzprVX5ZZCX(bh, parentSpanInst);
      //appendnew_next_sd_QVpW9elEdPlVEBu6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QVpW9elEdPlVEBu6',
        spanInst,
        'sd_QVpW9elEdPlVEBu6'
      );
    }
  }

  async sd_O8Nm5qzprVX5ZZCX(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O8Nm5qzprVX5ZZCX');
    }
  }

  async sd_buw8xewORavgs03N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_buw8xewORavgs03N',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0mZY9A750xOxlXlk(bh, parentSpanInst);
      //appendnew_next_sd_buw8xewORavgs03N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_buw8xewORavgs03N',
        spanInst,
        'sd_buw8xewORavgs03N'
      );
    }
  }

  async sd_0mZY9A750xOxlXlk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0mZY9A750xOxlXlk',
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
        'sd_0mZY9A750xOxlXlk',
        spanInst,
        'sd_0mZY9A750xOxlXlk'
      );
    }
  }

  async sd_YssEj0ChyDnli6Uz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YssEj0ChyDnli6Uz',
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
      bh = await this.sd_4IeiPEkif2TA6rtD(bh, parentSpanInst);
      //appendnew_next_sd_YssEj0ChyDnli6Uz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YssEj0ChyDnli6Uz',
        spanInst,
        'sd_YssEj0ChyDnli6Uz'
      );
    }
  }

  async sd_4IeiPEkif2TA6rtD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4IeiPEkif2TA6rtD',
      parentSpanInst
    );
    try {
      const sd_FYsOjosGFbsl8g7JInstance: sd_FYsOjosGFbsl8g7J.idsutil =
        sd_FYsOjosGFbsl8g7J.idsutil.getInstance();
      let outputVariables =
        await sd_FYsOjosGFbsl8g7JInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B07aVjuSFkbPwCwf(bh, parentSpanInst);
      //appendnew_next_sd_4IeiPEkif2TA6rtD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4IeiPEkif2TA6rtD',
        spanInst,
        'sd_4IeiPEkif2TA6rtD'
      );
    }
  }

  async sd_B07aVjuSFkbPwCwf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B07aVjuSFkbPwCwf',
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
      bh = await this.sd_DsJGnfmKBl8BbEda(bh, parentSpanInst);
      //appendnew_next_sd_B07aVjuSFkbPwCwf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B07aVjuSFkbPwCwf',
        spanInst,
        'sd_B07aVjuSFkbPwCwf'
      );
    }
  }

  async sd_DsJGnfmKBl8BbEda(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DsJGnfmKBl8BbEda',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bwzsHm5Z5aarRYT2(bh, parentSpanInst);
      //appendnew_next_sd_DsJGnfmKBl8BbEda
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DsJGnfmKBl8BbEda',
        spanInst,
        'sd_DsJGnfmKBl8BbEda'
      );
    }
  }

  async sd_bwzsHm5Z5aarRYT2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bwzsHm5Z5aarRYT2',
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
        bh = await this.sd_akp1MVP7LV6dXDKq(bh, parentSpanInst);
      } else {
        bh = await this.sd_XFtxqmGCC0odZfvH(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bwzsHm5Z5aarRYT2',
        spanInst,
        'sd_bwzsHm5Z5aarRYT2'
      );
    }
  }

  async sd_akp1MVP7LV6dXDKq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_akp1MVP7LV6dXDKq',
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
      await this.sd_dZ93fOzgO35nd4qc(bh, parentSpanInst);
      //appendnew_next_sd_akp1MVP7LV6dXDKq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_akp1MVP7LV6dXDKq',
        spanInst,
        'sd_akp1MVP7LV6dXDKq'
      );
    }
  }

  async sd_dZ93fOzgO35nd4qc(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dZ93fOzgO35nd4qc');
    }
  }

  async sd_XFtxqmGCC0odZfvH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XFtxqmGCC0odZfvH',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SLeShmrImODfrigX(bh, parentSpanInst);
      //appendnew_next_sd_XFtxqmGCC0odZfvH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XFtxqmGCC0odZfvH',
        spanInst,
        'sd_XFtxqmGCC0odZfvH'
      );
    }
  }

  async sd_SLeShmrImODfrigX(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SLeShmrImODfrigX');
    }
  }

  async sd_zTC0uGXpb3oyNfu2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zTC0uGXpb3oyNfu2',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_i01HsCEKIltLWzhy(bh, parentSpanInst);
      //appendnew_next_sd_zTC0uGXpb3oyNfu2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zTC0uGXpb3oyNfu2',
        spanInst,
        'sd_zTC0uGXpb3oyNfu2'
      );
    }
  }

  async sd_i01HsCEKIltLWzhy(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i01HsCEKIltLWzhy');
    }
  }

  async sd_QKGm0RQlvhNOmC63(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QKGm0RQlvhNOmC63',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_QKGm0RQlvhNOmC63
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QKGm0RQlvhNOmC63',
        spanInst,
        'sd_QKGm0RQlvhNOmC63'
      );
    }
  }

  async sd_y2C4k9Urhsz9bJor(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y2C4k9Urhsz9bJor',
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
      bh = await this.sd_xAvDsmwsbKiFbRCN(bh, parentSpanInst);
      //appendnew_next_sd_y2C4k9Urhsz9bJor
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y2C4k9Urhsz9bJor',
        spanInst,
        'sd_y2C4k9Urhsz9bJor'
      );
    }
  }

  async sd_xAvDsmwsbKiFbRCN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xAvDsmwsbKiFbRCN',
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
      bh = await this.sd_MRqHsCueNKVt3Imh(bh, parentSpanInst);
      //appendnew_next_sd_xAvDsmwsbKiFbRCN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xAvDsmwsbKiFbRCN',
        spanInst,
        'sd_xAvDsmwsbKiFbRCN'
      );
    }
  }

  async sd_MRqHsCueNKVt3Imh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MRqHsCueNKVt3Imh',
      parentSpanInst
    );
    try {
      const sd_FYsOjosGFbsl8g7JInstance: sd_FYsOjosGFbsl8g7J.idsutil =
        sd_FYsOjosGFbsl8g7J.idsutil.getInstance();
      let outputVariables =
        await sd_FYsOjosGFbsl8g7JInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ob7GZWtnoqooBasD(bh, parentSpanInst);
      //appendnew_next_sd_MRqHsCueNKVt3Imh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MRqHsCueNKVt3Imh',
        spanInst,
        'sd_MRqHsCueNKVt3Imh'
      );
    }
  }

  async sd_Ob7GZWtnoqooBasD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ob7GZWtnoqooBasD',
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
        bh = await this.sd_FbaLpChhkC32WQER(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_gtmQpgp1MZj3Wbj2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ob7GZWtnoqooBasD',
        spanInst,
        'sd_Ob7GZWtnoqooBasD'
      );
    }
  }

  async sd_FbaLpChhkC32WQER(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FbaLpChhkC32WQER',
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
      //appendnew_next_sd_FbaLpChhkC32WQER
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FbaLpChhkC32WQER',
        spanInst,
        'sd_FbaLpChhkC32WQER'
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
      await this.sd_atz1CZteTIJDFhIb(bh, parentSpanInst);
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

  async sd_atz1CZteTIJDFhIb(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_atz1CZteTIJDFhIb');
    }
  }

  async sd_gtmQpgp1MZj3Wbj2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gtmQpgp1MZj3Wbj2',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_atz1CZteTIJDFhIb(bh, parentSpanInst);
      //appendnew_next_sd_gtmQpgp1MZj3Wbj2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gtmQpgp1MZj3Wbj2',
        spanInst,
        'sd_gtmQpgp1MZj3Wbj2'
      );
    }
  }

  async sd_a6Iqj9sbp7iaF44J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a6Iqj9sbp7iaF44J',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jU44Rs9AbtoVlZiH(bh, parentSpanInst);
      //appendnew_next_sd_a6Iqj9sbp7iaF44J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a6Iqj9sbp7iaF44J',
        spanInst,
        'sd_a6Iqj9sbp7iaF44J'
      );
    }
  }

  async sd_jU44Rs9AbtoVlZiH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jU44Rs9AbtoVlZiH',
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
        bh = await this.sd_Y5Vu84uof9fKpyou(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_gGMKzqRAUgMu8cFM(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jU44Rs9AbtoVlZiH',
        spanInst,
        'sd_jU44Rs9AbtoVlZiH'
      );
    }
  }

  async sd_Y5Vu84uof9fKpyou(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y5Vu84uof9fKpyou',
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
      await this.sd_FIovf6KybqRuaKkd(bh, parentSpanInst);
      //appendnew_next_sd_Y5Vu84uof9fKpyou
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y5Vu84uof9fKpyou',
        spanInst,
        'sd_Y5Vu84uof9fKpyou'
      );
    }
  }

  async sd_FIovf6KybqRuaKkd(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FIovf6KybqRuaKkd');
    }
  }

  async sd_gGMKzqRAUgMu8cFM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gGMKzqRAUgMu8cFM',
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
      bh = await this.sd_faSnkXXgaZ66umdZ(bh, parentSpanInst);
      //appendnew_next_sd_gGMKzqRAUgMu8cFM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gGMKzqRAUgMu8cFM',
        spanInst,
        'sd_gGMKzqRAUgMu8cFM'
      );
    }
  }

  async sd_faSnkXXgaZ66umdZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_faSnkXXgaZ66umdZ',
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
      bh = await this.sd_n633TqjB8qyWorOT(bh, parentSpanInst);
      //appendnew_next_sd_faSnkXXgaZ66umdZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_faSnkXXgaZ66umdZ',
        spanInst,
        'sd_faSnkXXgaZ66umdZ'
      );
    }
  }

  async sd_n633TqjB8qyWorOT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_n633TqjB8qyWorOT',
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
        bh = await this.sd_HPKwEVN35ZQRPMHg(bh, parentSpanInst);
      } else {
        bh = await this.sd_8GXZzidtLrOnvkMO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n633TqjB8qyWorOT',
        spanInst,
        'sd_n633TqjB8qyWorOT'
      );
    }
  }

  async sd_HPKwEVN35ZQRPMHg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HPKwEVN35ZQRPMHg',
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
      await this.sd_GR8mXGGW6pFU3zOr(bh, parentSpanInst);
      //appendnew_next_sd_HPKwEVN35ZQRPMHg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HPKwEVN35ZQRPMHg',
        spanInst,
        'sd_HPKwEVN35ZQRPMHg'
      );
    }
  }

  async sd_GR8mXGGW6pFU3zOr(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GR8mXGGW6pFU3zOr');
    }
  }

  async sd_8GXZzidtLrOnvkMO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8GXZzidtLrOnvkMO',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_7anmlbonhkx1FvX7(bh, parentSpanInst);
      //appendnew_next_sd_8GXZzidtLrOnvkMO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8GXZzidtLrOnvkMO',
        spanInst,
        'sd_8GXZzidtLrOnvkMO'
      );
    }
  }

  async sd_7anmlbonhkx1FvX7(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7anmlbonhkx1FvX7');
    }
  }

  async sd_xMDe5l5h7Vqk3PmK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xMDe5l5h7Vqk3PmK',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cxUAHOREVwnIG3yF(bh, parentSpanInst);
      //appendnew_next_sd_xMDe5l5h7Vqk3PmK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xMDe5l5h7Vqk3PmK',
        spanInst,
        'sd_xMDe5l5h7Vqk3PmK'
      );
    }
  }

  async sd_cxUAHOREVwnIG3yF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cxUAHOREVwnIG3yF',
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
      bh = await this.sd_cbbqGE5k6jja3LDr(bh, parentSpanInst);
      //appendnew_next_sd_cxUAHOREVwnIG3yF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cxUAHOREVwnIG3yF',
        spanInst,
        'sd_cxUAHOREVwnIG3yF'
      );
    }
  }

  async sd_cbbqGE5k6jja3LDr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cbbqGE5k6jja3LDr',
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
      bh = await this.sd_pd85secXvpeSYJ6F(bh, parentSpanInst);
      //appendnew_next_sd_cbbqGE5k6jja3LDr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cbbqGE5k6jja3LDr',
        spanInst,
        'sd_cbbqGE5k6jja3LDr'
      );
    }
  }

  async sd_pd85secXvpeSYJ6F(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pd85secXvpeSYJ6F',
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
        bh = await this.sd_pr1Cd2QIJQLxIX7d(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_N1MVKXyfrq60MfLK(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pd85secXvpeSYJ6F',
        spanInst,
        'sd_pd85secXvpeSYJ6F'
      );
    }
  }

  async sd_pr1Cd2QIJQLxIX7d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pr1Cd2QIJQLxIX7d',
      parentSpanInst
    );
    try {
      const sd_FYsOjosGFbsl8g7JInstance: sd_FYsOjosGFbsl8g7J.idsutil =
        sd_FYsOjosGFbsl8g7J.idsutil.getInstance();
      let outputVariables = await sd_FYsOjosGFbsl8g7JInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cfhXWulYJnVMibsN(bh, parentSpanInst);
      //appendnew_next_sd_pr1Cd2QIJQLxIX7d
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pr1Cd2QIJQLxIX7d',
        spanInst,
        'sd_pr1Cd2QIJQLxIX7d'
      );
    }
  }

  async sd_cfhXWulYJnVMibsN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cfhXWulYJnVMibsN',
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
        bh = await this.sd_FOVB3FldduJmST3J(bh, parentSpanInst);
      } else {
        bh = await this.sd_xGvGhvXO2A9YPPFs(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cfhXWulYJnVMibsN',
        spanInst,
        'sd_cfhXWulYJnVMibsN'
      );
    }
  }

  async sd_FOVB3FldduJmST3J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FOVB3FldduJmST3J',
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
      bh = await this.sd_EeJcjN46Cdh0FmGI(bh, parentSpanInst);
      //appendnew_next_sd_FOVB3FldduJmST3J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FOVB3FldduJmST3J',
        spanInst,
        'sd_FOVB3FldduJmST3J'
      );
    }
  }

  async sd_EeJcjN46Cdh0FmGI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EeJcjN46Cdh0FmGI',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sjNUilkr6auTkuJf(bh, parentSpanInst);
      //appendnew_next_sd_EeJcjN46Cdh0FmGI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EeJcjN46Cdh0FmGI',
        spanInst,
        'sd_EeJcjN46Cdh0FmGI'
      );
    }
  }

  async sd_sjNUilkr6auTkuJf(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sjNUilkr6auTkuJf');
    }
  }

  async sd_xGvGhvXO2A9YPPFs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xGvGhvXO2A9YPPFs',
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
        bh = await this.sd_0MiBGtaky59VthBk(bh, parentSpanInst);
      } else {
        bh = await this.sd_Rs44cGGaCGTYEKg4(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xGvGhvXO2A9YPPFs',
        spanInst,
        'sd_xGvGhvXO2A9YPPFs'
      );
    }
  }

  async sd_0MiBGtaky59VthBk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0MiBGtaky59VthBk',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ul46PpHNa1MnP4Lq(bh, parentSpanInst);
      //appendnew_next_sd_0MiBGtaky59VthBk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0MiBGtaky59VthBk',
        spanInst,
        'sd_0MiBGtaky59VthBk'
      );
    }
  }

  async sd_ul46PpHNa1MnP4Lq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ul46PpHNa1MnP4Lq',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Rs44cGGaCGTYEKg4(bh, parentSpanInst);
      //appendnew_next_sd_ul46PpHNa1MnP4Lq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ul46PpHNa1MnP4Lq',
        spanInst,
        'sd_ul46PpHNa1MnP4Lq'
      );
    }
  }

  async sd_Rs44cGGaCGTYEKg4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Rs44cGGaCGTYEKg4',
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
        'sd_Rs44cGGaCGTYEKg4',
        spanInst,
        'sd_Rs44cGGaCGTYEKg4'
      );
    }
  }

  async sd_N1MVKXyfrq60MfLK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N1MVKXyfrq60MfLK',
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
        bh = await this.sd_a7DTpHuI0uRNXjtM(bh, parentSpanInst);
      } else {
        bh = await this.sd_jt8mUEYDIj6IwwHR(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N1MVKXyfrq60MfLK',
        spanInst,
        'sd_N1MVKXyfrq60MfLK'
      );
    }
  }

  async sd_a7DTpHuI0uRNXjtM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a7DTpHuI0uRNXjtM',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sjNUilkr6auTkuJf(bh, parentSpanInst);
      //appendnew_next_sd_a7DTpHuI0uRNXjtM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a7DTpHuI0uRNXjtM',
        spanInst,
        'sd_a7DTpHuI0uRNXjtM'
      );
    }
  }

  async sd_jt8mUEYDIj6IwwHR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jt8mUEYDIj6IwwHR',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sjNUilkr6auTkuJf(bh, parentSpanInst);
      //appendnew_next_sd_jt8mUEYDIj6IwwHR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jt8mUEYDIj6IwwHR',
        spanInst,
        'sd_jt8mUEYDIj6IwwHR'
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
      (await this.sd_wK1uiFyJbjXOhYrz(bh, parentSpanInst)) ||
      (await this.sd_qDgiS7eMZWFXWxGR(bh, parentSpanInst))
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
  async sd_wK1uiFyJbjXOhYrz(bh, parentSpanInst) {
    const nodes = [
      'sd_Zdyb2hCYvW82v5Up',
      'sd_DiERNyWHPEd6SrYF',
      'sd_4IeiPEkif2TA6rtD',
      'sd_B07aVjuSFkbPwCwf',
      'sd_YssEj0ChyDnli6Uz',
      'sd_bwzsHm5Z5aarRYT2',
      'sd_akp1MVP7LV6dXDKq',
      'sd_XFtxqmGCC0odZfvH',
      'sd_dZ93fOzgO35nd4qc',
      'sd_SLeShmrImODfrigX',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_QKGm0RQlvhNOmC63(bh, parentSpanInst);
      //appendnew_next_sd_wK1uiFyJbjXOhYrz
      return true;
    }
    return false;
  }
  async sd_qDgiS7eMZWFXWxGR(bh, parentSpanInst) {
    const nodes = ['sd_pr1Cd2QIJQLxIX7d'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_EeJcjN46Cdh0FmGI(bh, parentSpanInst);
      //appendnew_next_sd_qDgiS7eMZWFXWxGR
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
