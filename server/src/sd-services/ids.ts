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
import * as sd_demSUkhSSxbMWT5g from './idsutil'; //_splitter_
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
          bh = await this.sd_IenaOMY8JM081xGT(bh, parentSpanInst);
          //appendnew_next_sd_6HAZXbHzybzMZW1G
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6HAZXbHzybzMZW1G');
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
          bh = await this.sd_a5LJsY8fti8n8oYu(bh, parentSpanInst);
          //appendnew_next_sd_HESKK0JWQboibh5m
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HESKK0JWQboibh5m');
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
          bh = await this.sd_ZbHb8tTRn2O5A4KG(bh, parentSpanInst);
          //appendnew_next_sd_ud1miYs55puxOyIA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ud1miYs55puxOyIA');
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
          bh = await this.sd_pHve0ZPaAyWTAxdi(bh, parentSpanInst);
          //appendnew_next_sd_s9zpKlVAAcZDcqx9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_s9zpKlVAAcZDcqx9');
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
          bh = await this.sd_YCvgdW3zg9IL20vT(bh, parentSpanInst);
          //appendnew_next_sd_AgDun0lLKhIeAuT5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AgDun0lLKhIeAuT5');
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
          bh = await this.sd_vftrBt2JOj0N6r9d(bh, parentSpanInst);
          //appendnew_next_sd_abrijJUUPL0xYVml
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_abrijJUUPL0xYVml');
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
          bh = await this.sd_uWxKoLkvabl3ne8h(bh, parentSpanInst);
          //appendnew_next_sd_DXFCwCK1svMVmpvd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DXFCwCK1svMVmpvd');
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

  async sd_ZbHb8tTRn2O5A4KG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZbHb8tTRn2O5A4KG',
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
      bh = await this.sd_uASIZXASdMYgSUCy(bh, parentSpanInst);
      //appendnew_next_sd_ZbHb8tTRn2O5A4KG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZbHb8tTRn2O5A4KG',
        spanInst,
        'sd_ZbHb8tTRn2O5A4KG'
      );
    }
  }

  async sd_uASIZXASdMYgSUCy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uASIZXASdMYgSUCy',
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
        bh = await this.sd_XpqGYzUxgehG708X(bh, parentSpanInst);
      } else {
        bh = await this.sd_nx9MFHXvSXgwrtsr(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uASIZXASdMYgSUCy',
        spanInst,
        'sd_uASIZXASdMYgSUCy'
      );
    }
  }

  async sd_XpqGYzUxgehG708X(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XpqGYzUxgehG708X',
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
      bh = await this.sd_PuYsyG1RjMIIdtJU(bh, parentSpanInst);
      //appendnew_next_sd_XpqGYzUxgehG708X
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XpqGYzUxgehG708X',
        spanInst,
        'sd_XpqGYzUxgehG708X'
      );
    }
  }

  async sd_PuYsyG1RjMIIdtJU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PuYsyG1RjMIIdtJU',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4wKeyu2a5aFYYgT4(bh, parentSpanInst);
      //appendnew_next_sd_PuYsyG1RjMIIdtJU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PuYsyG1RjMIIdtJU',
        spanInst,
        'sd_PuYsyG1RjMIIdtJU'
      );
    }
  }

  async sd_4wKeyu2a5aFYYgT4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4wKeyu2a5aFYYgT4',
      parentSpanInst
    );
    try {
      const sd_demSUkhSSxbMWT5gInstance: sd_demSUkhSSxbMWT5g.idsutil =
        sd_demSUkhSSxbMWT5g.idsutil.getInstance();
      let outputVariables =
        await sd_demSUkhSSxbMWT5gInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wNPWvtj0wrNz4JcI(bh, parentSpanInst);
      //appendnew_next_sd_4wKeyu2a5aFYYgT4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4wKeyu2a5aFYYgT4',
        spanInst,
        'sd_4wKeyu2a5aFYYgT4'
      );
    }
  }

  async sd_wNPWvtj0wrNz4JcI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wNPWvtj0wrNz4JcI',
      parentSpanInst
    );
    try {
      const sd_demSUkhSSxbMWT5gInstance: sd_demSUkhSSxbMWT5g.idsutil =
        sd_demSUkhSSxbMWT5g.idsutil.getInstance();
      let outputVariables =
        await sd_demSUkhSSxbMWT5gInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BXW9vENiCSeq8Pj3(bh, parentSpanInst);
      //appendnew_next_sd_wNPWvtj0wrNz4JcI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wNPWvtj0wrNz4JcI',
        spanInst,
        'sd_wNPWvtj0wrNz4JcI'
      );
    }
  }

  async sd_BXW9vENiCSeq8Pj3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BXW9vENiCSeq8Pj3',
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
      await this.sd_V08ta2DnQolFbyaU(bh, parentSpanInst);
      //appendnew_next_sd_BXW9vENiCSeq8Pj3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BXW9vENiCSeq8Pj3',
        spanInst,
        'sd_BXW9vENiCSeq8Pj3'
      );
    }
  }

  async sd_V08ta2DnQolFbyaU(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V08ta2DnQolFbyaU');
    }
  }

  async sd_nx9MFHXvSXgwrtsr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nx9MFHXvSXgwrtsr',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_51QHXicZigHStJZg(bh, parentSpanInst);
      //appendnew_next_sd_nx9MFHXvSXgwrtsr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nx9MFHXvSXgwrtsr',
        spanInst,
        'sd_nx9MFHXvSXgwrtsr'
      );
    }
  }

  async sd_51QHXicZigHStJZg(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_51QHXicZigHStJZg');
    }
  }

  async sd_IenaOMY8JM081xGT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IenaOMY8JM081xGT',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_R17vV02VtgWCD9zH(bh, parentSpanInst);
      //appendnew_next_sd_IenaOMY8JM081xGT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IenaOMY8JM081xGT',
        spanInst,
        'sd_IenaOMY8JM081xGT'
      );
    }
  }

  async sd_R17vV02VtgWCD9zH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R17vV02VtgWCD9zH',
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
        'sd_R17vV02VtgWCD9zH',
        spanInst,
        'sd_R17vV02VtgWCD9zH'
      );
    }
  }

  async sd_pHve0ZPaAyWTAxdi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pHve0ZPaAyWTAxdi',
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
      bh = await this.sd_i2u5MMtHPw4W5BeQ(bh, parentSpanInst);
      //appendnew_next_sd_pHve0ZPaAyWTAxdi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pHve0ZPaAyWTAxdi',
        spanInst,
        'sd_pHve0ZPaAyWTAxdi'
      );
    }
  }

  async sd_i2u5MMtHPw4W5BeQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i2u5MMtHPw4W5BeQ',
      parentSpanInst
    );
    try {
      const sd_demSUkhSSxbMWT5gInstance: sd_demSUkhSSxbMWT5g.idsutil =
        sd_demSUkhSSxbMWT5g.idsutil.getInstance();
      let outputVariables =
        await sd_demSUkhSSxbMWT5gInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ctYfKQt9V0tX2Z49(bh, parentSpanInst);
      //appendnew_next_sd_i2u5MMtHPw4W5BeQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i2u5MMtHPw4W5BeQ',
        spanInst,
        'sd_i2u5MMtHPw4W5BeQ'
      );
    }
  }

  async sd_ctYfKQt9V0tX2Z49(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ctYfKQt9V0tX2Z49',
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
      bh = await this.sd_MnJbNlJVltoFRvZB(bh, parentSpanInst);
      //appendnew_next_sd_ctYfKQt9V0tX2Z49
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ctYfKQt9V0tX2Z49',
        spanInst,
        'sd_ctYfKQt9V0tX2Z49'
      );
    }
  }

  async sd_MnJbNlJVltoFRvZB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MnJbNlJVltoFRvZB',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xzPaSYgnqi7ia6sw(bh, parentSpanInst);
      //appendnew_next_sd_MnJbNlJVltoFRvZB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MnJbNlJVltoFRvZB',
        spanInst,
        'sd_MnJbNlJVltoFRvZB'
      );
    }
  }

  async sd_xzPaSYgnqi7ia6sw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xzPaSYgnqi7ia6sw',
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
        bh = await this.sd_QuHmH8bsswgNqwlG(bh, parentSpanInst);
      } else {
        bh = await this.sd_cs2J0o6loHpdIs7G(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xzPaSYgnqi7ia6sw',
        spanInst,
        'sd_xzPaSYgnqi7ia6sw'
      );
    }
  }

  async sd_QuHmH8bsswgNqwlG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QuHmH8bsswgNqwlG',
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
      await this.sd_U7PRu5EkZuHz9IzY(bh, parentSpanInst);
      //appendnew_next_sd_QuHmH8bsswgNqwlG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QuHmH8bsswgNqwlG',
        spanInst,
        'sd_QuHmH8bsswgNqwlG'
      );
    }
  }

  async sd_U7PRu5EkZuHz9IzY(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U7PRu5EkZuHz9IzY');
    }
  }

  async sd_cs2J0o6loHpdIs7G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cs2J0o6loHpdIs7G',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_87ccQDgDF8hedCrF(bh, parentSpanInst);
      //appendnew_next_sd_cs2J0o6loHpdIs7G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cs2J0o6loHpdIs7G',
        spanInst,
        'sd_cs2J0o6loHpdIs7G'
      );
    }
  }

  async sd_87ccQDgDF8hedCrF(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_87ccQDgDF8hedCrF');
    }
  }

  async sd_YCvgdW3zg9IL20vT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YCvgdW3zg9IL20vT',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_szJV91NolHH7zFo7(bh, parentSpanInst);
      //appendnew_next_sd_YCvgdW3zg9IL20vT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YCvgdW3zg9IL20vT',
        spanInst,
        'sd_YCvgdW3zg9IL20vT'
      );
    }
  }

  async sd_szJV91NolHH7zFo7(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_szJV91NolHH7zFo7');
    }
  }

  async sd_ds145PtBSaivotLT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ds145PtBSaivotLT',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ds145PtBSaivotLT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ds145PtBSaivotLT',
        spanInst,
        'sd_ds145PtBSaivotLT'
      );
    }
  }

  async sd_vftrBt2JOj0N6r9d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vftrBt2JOj0N6r9d',
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
      bh = await this.sd_KpLscpUZspuop0ZP(bh, parentSpanInst);
      //appendnew_next_sd_vftrBt2JOj0N6r9d
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vftrBt2JOj0N6r9d',
        spanInst,
        'sd_vftrBt2JOj0N6r9d'
      );
    }
  }

  async sd_KpLscpUZspuop0ZP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KpLscpUZspuop0ZP',
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
      bh = await this.sd_CsKNs9VaFR1Ew8YF(bh, parentSpanInst);
      //appendnew_next_sd_KpLscpUZspuop0ZP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KpLscpUZspuop0ZP',
        spanInst,
        'sd_KpLscpUZspuop0ZP'
      );
    }
  }

  async sd_CsKNs9VaFR1Ew8YF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CsKNs9VaFR1Ew8YF',
      parentSpanInst
    );
    try {
      const sd_demSUkhSSxbMWT5gInstance: sd_demSUkhSSxbMWT5g.idsutil =
        sd_demSUkhSSxbMWT5g.idsutil.getInstance();
      let outputVariables =
        await sd_demSUkhSSxbMWT5gInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4OZIbgIeVomGoPIP(bh, parentSpanInst);
      //appendnew_next_sd_CsKNs9VaFR1Ew8YF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CsKNs9VaFR1Ew8YF',
        spanInst,
        'sd_CsKNs9VaFR1Ew8YF'
      );
    }
  }

  async sd_4OZIbgIeVomGoPIP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4OZIbgIeVomGoPIP',
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
        bh = await this.sd_p8zapdGgha1xcUbF(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_2EW6UQMzbCN7uxNM(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4OZIbgIeVomGoPIP',
        spanInst,
        'sd_4OZIbgIeVomGoPIP'
      );
    }
  }

  async sd_p8zapdGgha1xcUbF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p8zapdGgha1xcUbF',
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
      //appendnew_next_sd_p8zapdGgha1xcUbF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p8zapdGgha1xcUbF',
        spanInst,
        'sd_p8zapdGgha1xcUbF'
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
      await this.sd_RwsNCMI8tNTehS2g(bh, parentSpanInst);
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

  async sd_RwsNCMI8tNTehS2g(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RwsNCMI8tNTehS2g');
    }
  }

  async sd_2EW6UQMzbCN7uxNM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2EW6UQMzbCN7uxNM',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RwsNCMI8tNTehS2g(bh, parentSpanInst);
      //appendnew_next_sd_2EW6UQMzbCN7uxNM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2EW6UQMzbCN7uxNM',
        spanInst,
        'sd_2EW6UQMzbCN7uxNM'
      );
    }
  }

  async sd_uWxKoLkvabl3ne8h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uWxKoLkvabl3ne8h',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0zUoSQRn1UXTiXfS(bh, parentSpanInst);
      //appendnew_next_sd_uWxKoLkvabl3ne8h
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uWxKoLkvabl3ne8h',
        spanInst,
        'sd_uWxKoLkvabl3ne8h'
      );
    }
  }

  async sd_0zUoSQRn1UXTiXfS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0zUoSQRn1UXTiXfS',
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
        bh = await this.sd_DLBEbnRIsqGXQzEv(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DXp561k3Ycg6r0wG(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0zUoSQRn1UXTiXfS',
        spanInst,
        'sd_0zUoSQRn1UXTiXfS'
      );
    }
  }

  async sd_DLBEbnRIsqGXQzEv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DLBEbnRIsqGXQzEv',
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
      await this.sd_ep69yXa6MPeCFwEf(bh, parentSpanInst);
      //appendnew_next_sd_DLBEbnRIsqGXQzEv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DLBEbnRIsqGXQzEv',
        spanInst,
        'sd_DLBEbnRIsqGXQzEv'
      );
    }
  }

  async sd_ep69yXa6MPeCFwEf(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ep69yXa6MPeCFwEf');
    }
  }

  async sd_DXp561k3Ycg6r0wG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DXp561k3Ycg6r0wG',
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
      bh = await this.sd_tqfCMfY5oWPUUKg7(bh, parentSpanInst);
      //appendnew_next_sd_DXp561k3Ycg6r0wG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DXp561k3Ycg6r0wG',
        spanInst,
        'sd_DXp561k3Ycg6r0wG'
      );
    }
  }

  async sd_tqfCMfY5oWPUUKg7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tqfCMfY5oWPUUKg7',
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
      bh = await this.sd_LvH7gNWY3HlmCmTF(bh, parentSpanInst);
      //appendnew_next_sd_tqfCMfY5oWPUUKg7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tqfCMfY5oWPUUKg7',
        spanInst,
        'sd_tqfCMfY5oWPUUKg7'
      );
    }
  }

  async sd_LvH7gNWY3HlmCmTF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LvH7gNWY3HlmCmTF',
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
        bh = await this.sd_Ln70bOokfwILTrT4(bh, parentSpanInst);
      } else {
        bh = await this.sd_8XIwcdGdNq6b1MiS(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LvH7gNWY3HlmCmTF',
        spanInst,
        'sd_LvH7gNWY3HlmCmTF'
      );
    }
  }

  async sd_Ln70bOokfwILTrT4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ln70bOokfwILTrT4',
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
      await this.sd_AvEnper9LioLocwl(bh, parentSpanInst);
      //appendnew_next_sd_Ln70bOokfwILTrT4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ln70bOokfwILTrT4',
        spanInst,
        'sd_Ln70bOokfwILTrT4'
      );
    }
  }

  async sd_AvEnper9LioLocwl(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AvEnper9LioLocwl');
    }
  }

  async sd_8XIwcdGdNq6b1MiS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8XIwcdGdNq6b1MiS',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fTktJ4U44vKuA0JR(bh, parentSpanInst);
      //appendnew_next_sd_8XIwcdGdNq6b1MiS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8XIwcdGdNq6b1MiS',
        spanInst,
        'sd_8XIwcdGdNq6b1MiS'
      );
    }
  }

  async sd_fTktJ4U44vKuA0JR(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fTktJ4U44vKuA0JR');
    }
  }

  async sd_a5LJsY8fti8n8oYu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a5LJsY8fti8n8oYu',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3o89xKJ33tetvGQV(bh, parentSpanInst);
      //appendnew_next_sd_a5LJsY8fti8n8oYu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a5LJsY8fti8n8oYu',
        spanInst,
        'sd_a5LJsY8fti8n8oYu'
      );
    }
  }

  async sd_3o89xKJ33tetvGQV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3o89xKJ33tetvGQV',
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
      bh = await this.sd_48q080z4rHii9F7B(bh, parentSpanInst);
      //appendnew_next_sd_3o89xKJ33tetvGQV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3o89xKJ33tetvGQV',
        spanInst,
        'sd_3o89xKJ33tetvGQV'
      );
    }
  }

  async sd_48q080z4rHii9F7B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_48q080z4rHii9F7B',
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
      bh = await this.sd_3nht2ai9jpVsdycb(bh, parentSpanInst);
      //appendnew_next_sd_48q080z4rHii9F7B
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_48q080z4rHii9F7B',
        spanInst,
        'sd_48q080z4rHii9F7B'
      );
    }
  }

  async sd_3nht2ai9jpVsdycb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3nht2ai9jpVsdycb',
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
        bh = await this.sd_A0KtjJLuDyBXmnAK(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_dJthlPAnoFscvI5a(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3nht2ai9jpVsdycb',
        spanInst,
        'sd_3nht2ai9jpVsdycb'
      );
    }
  }

  async sd_A0KtjJLuDyBXmnAK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A0KtjJLuDyBXmnAK',
      parentSpanInst
    );
    try {
      const sd_demSUkhSSxbMWT5gInstance: sd_demSUkhSSxbMWT5g.idsutil =
        sd_demSUkhSSxbMWT5g.idsutil.getInstance();
      let outputVariables = await sd_demSUkhSSxbMWT5gInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jlLF3b1KNGaHSUoz(bh, parentSpanInst);
      //appendnew_next_sd_A0KtjJLuDyBXmnAK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A0KtjJLuDyBXmnAK',
        spanInst,
        'sd_A0KtjJLuDyBXmnAK'
      );
    }
  }

  async sd_jlLF3b1KNGaHSUoz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jlLF3b1KNGaHSUoz',
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
        bh = await this.sd_MoIIJFRH8iyrQ5gE(bh, parentSpanInst);
      } else {
        bh = await this.sd_pGkoUOerwswYnivO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jlLF3b1KNGaHSUoz',
        spanInst,
        'sd_jlLF3b1KNGaHSUoz'
      );
    }
  }

  async sd_MoIIJFRH8iyrQ5gE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MoIIJFRH8iyrQ5gE',
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
      bh = await this.sd_lbKp0Hm73dOX9P1q(bh, parentSpanInst);
      //appendnew_next_sd_MoIIJFRH8iyrQ5gE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MoIIJFRH8iyrQ5gE',
        spanInst,
        'sd_MoIIJFRH8iyrQ5gE'
      );
    }
  }

  async sd_lbKp0Hm73dOX9P1q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lbKp0Hm73dOX9P1q',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lg2arnoF68DEZIRG(bh, parentSpanInst);
      //appendnew_next_sd_lbKp0Hm73dOX9P1q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lbKp0Hm73dOX9P1q',
        spanInst,
        'sd_lbKp0Hm73dOX9P1q'
      );
    }
  }

  async sd_lg2arnoF68DEZIRG(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lg2arnoF68DEZIRG');
    }
  }

  async sd_pGkoUOerwswYnivO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pGkoUOerwswYnivO',
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
        bh = await this.sd_9DKTwhOnA8pIWyXA(bh, parentSpanInst);
      } else {
        bh = await this.sd_vFiut0bXr4OECPM1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pGkoUOerwswYnivO',
        spanInst,
        'sd_pGkoUOerwswYnivO'
      );
    }
  }

  async sd_9DKTwhOnA8pIWyXA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9DKTwhOnA8pIWyXA',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X8lnauvFddJ16EwA(bh, parentSpanInst);
      //appendnew_next_sd_9DKTwhOnA8pIWyXA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9DKTwhOnA8pIWyXA',
        spanInst,
        'sd_9DKTwhOnA8pIWyXA'
      );
    }
  }

  async sd_X8lnauvFddJ16EwA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X8lnauvFddJ16EwA',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vFiut0bXr4OECPM1(bh, parentSpanInst);
      //appendnew_next_sd_X8lnauvFddJ16EwA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X8lnauvFddJ16EwA',
        spanInst,
        'sd_X8lnauvFddJ16EwA'
      );
    }
  }

  async sd_vFiut0bXr4OECPM1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vFiut0bXr4OECPM1',
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
        'sd_vFiut0bXr4OECPM1',
        spanInst,
        'sd_vFiut0bXr4OECPM1'
      );
    }
  }

  async sd_dJthlPAnoFscvI5a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dJthlPAnoFscvI5a',
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
        bh = await this.sd_ijAUNfaVTeu6fv7x(bh, parentSpanInst);
      } else {
        bh = await this.sd_ftOSBKo1yOvINf79(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dJthlPAnoFscvI5a',
        spanInst,
        'sd_dJthlPAnoFscvI5a'
      );
    }
  }

  async sd_ijAUNfaVTeu6fv7x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ijAUNfaVTeu6fv7x',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lg2arnoF68DEZIRG(bh, parentSpanInst);
      //appendnew_next_sd_ijAUNfaVTeu6fv7x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ijAUNfaVTeu6fv7x',
        spanInst,
        'sd_ijAUNfaVTeu6fv7x'
      );
    }
  }

  async sd_ftOSBKo1yOvINf79(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ftOSBKo1yOvINf79',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lg2arnoF68DEZIRG(bh, parentSpanInst);
      //appendnew_next_sd_ftOSBKo1yOvINf79
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ftOSBKo1yOvINf79',
        spanInst,
        'sd_ftOSBKo1yOvINf79'
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
      (await this.sd_8awFPJ2ZWlmh64LJ(bh, parentSpanInst)) ||
      (await this.sd_vTv8n797Jo9yQtzq(bh, parentSpanInst))
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
  async sd_8awFPJ2ZWlmh64LJ(bh, parentSpanInst) {
    const nodes = [
      'sd_wNPWvtj0wrNz4JcI',
      'sd_s9zpKlVAAcZDcqx9',
      'sd_i2u5MMtHPw4W5BeQ',
      'sd_ctYfKQt9V0tX2Z49',
      'sd_pHve0ZPaAyWTAxdi',
      'sd_xzPaSYgnqi7ia6sw',
      'sd_QuHmH8bsswgNqwlG',
      'sd_cs2J0o6loHpdIs7G',
      'sd_U7PRu5EkZuHz9IzY',
      'sd_87ccQDgDF8hedCrF',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ds145PtBSaivotLT(bh, parentSpanInst);
      //appendnew_next_sd_8awFPJ2ZWlmh64LJ
      return true;
    }
    return false;
  }
  async sd_vTv8n797Jo9yQtzq(bh, parentSpanInst) {
    const nodes = ['sd_A0KtjJLuDyBXmnAK'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_lbKp0Hm73dOX9P1q(bh, parentSpanInst);
      //appendnew_next_sd_vTv8n797Jo9yQtzq
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
