// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { DmUtils } from '../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class motor_poc {
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
    this.serviceName = 'motor_poc';
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
      instance = new motor_poc(
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
    //appendnew_flow_motor_poc_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: motor_poc');
    //appendnew_flow_motor_poc_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: motor_poc');

    this.app['get'](
      `${this.serviceBasePath}/policy/:policyNo`,
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
          bh = await this.sd_FjDor9NpmnxAK2fC(bh, parentSpanInst);
          //appendnew_next_sd_bakCx6yrlecHq2xA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bakCx6yrlecHq2xA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/master-data`,
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
          bh = await this.sd_uE4GcJ4ef7fJllB9(bh, parentSpanInst);
          //appendnew_next_sd_rGWwCe5qoHvHsTss
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rGWwCe5qoHvHsTss');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/policy-validation`,
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
          bh = await this.sd_qWjIUr6tk17rocYW(bh, parentSpanInst);
          //appendnew_next_sd_4PGOkusOyCUFGH2G
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4PGOkusOyCUFGH2G');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/createclaim`,
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
          bh = await this.sd_UDwaCKUxiodEyAo7(bh, parentSpanInst);
          //appendnew_next_sd_YSXY3A85oZNjqaeI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YSXY3A85oZNjqaeI');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/claim/:id/surveyor-action`,
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
          bh = await this.sd_QIxIEgnegbS6YyOM(bh, parentSpanInst);
          //appendnew_next_sd_8pCm6vtZksIhyPEo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8pCm6vtZksIhyPEo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/claim/:id/manager-action`,
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
          bh = await this.sd_NvZgHBjf3j7ST3Ib(bh, parentSpanInst);
          //appendnew_next_sd_sjZ7nrCLZMRBlsYQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sjZ7nrCLZMRBlsYQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_motor_poc_HttpIn
  }
  //   service flows_motor_poc

  //appendnew_flow_motor_poc_start

  async sd_FjDor9NpmnxAK2fC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FjDor9NpmnxAK2fC',
      parentSpanInst
    );
    try {
      var policyNo = bh.input.params.policyNo;

      console.log('policyNo:', policyNo);

      bh.local.GetQuery =
        "SELECT * FROM policies WHERE policy_no = '" + policyNo + "'";
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getquery(bh, parentSpanInst);
      //appendnew_next_sd_FjDor9NpmnxAK2fC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FjDor9NpmnxAK2fC',
        spanInst,
        'sd_FjDor9NpmnxAK2fC'
      );
    }
  }

  async getquery(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getquery', parentSpanInst);
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_H3p2aFTyqGNTPPKY'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.GetResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.GetQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.errorScript(bh, parentSpanInst);
      //appendnew_next_getquery
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YZ6Ro4ASXv9Is469',
        spanInst,
        'getquery'
      );
    }
  }

  async errorScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'errorScript',
      parentSpanInst
    );
    try {
      var notexists = bh.local.GetResult.length == 0;

      if (notexists) {
        bh.local.statusCode = 404;

        let msg = 'Policy Not Found';

        bh.local.responseBody = {
          error: msg,
        };

        throw new Error(msg);
      }

      // Policy exists
      var policy = bh.local.GetResult[0];

      // Check policy status
      if (String(policy.status).toUpperCase() !== 'ACTIVE') {
        bh.local.statusCode = 404;

        let msg = 'Policy is not ACTIVE';

        bh.local.responseBody = {
          error: msg,
        };

        throw new Error(msg);
      }

      // Policy found and ACTIVE
      bh.local.statusCode = 200;

      bh.local.responseBody = policy;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ly9rmzytmsNRb1pt(bh, parentSpanInst);
      //appendnew_next_errorScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IrTOoIrGCyVl8qRO',
        spanInst,
        'errorScript'
      );
    }
  }

  async sd_ly9rmzytmsNRb1pt(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ly9rmzytmsNRb1pt');
    }
  }

  async sd_SarsATYFesBZkLQ6(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SarsATYFesBZkLQ6');
    }
  }

  async sd_uE4GcJ4ef7fJllB9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uE4GcJ4ef7fJllB9',
      parentSpanInst
    );
    try {
      const BASE_URL = bh.system.environment.REELS_BASE_URL;

      const TOKEN = bh.system.environment.REELS_TOKEN;

      const PART_GROUP_DATASET_ID = '72b58c39-817f-4204-95dc-4f5eec8fd929';

      const PART_GROUP_MDM_ID = '284f6b9e-8f83-4359-af14-3a3d51e9755e';

      const PART_GROUP_ENTITY_ID = '5e37b7ae-e8d3-4e16-a404-ed577e40161a';

      const LOSS_TYPE_DATASET_ID = '72b58c39-817f-4204-95dc-4f5eec8fd929';

      const LOSS_TYPE_MDM_ID = '5caf278d-1c55-492e-a1c3-c7686fe07a99';

      const LOSS_TYPE_ENTITY_ID = '97128efa-bdfe-4b79-941c-c8a980b381c4';

      const buildUrl = (datasetId, mdmId, entityId) =>
        `${BASE_URL}/integration/api/records/filter/${datasetId}/${mdmId}/${entityId}`;

      bh.local.headers = {
        token: TOKEN,
        'Content-Type': 'application/json',
      };

      bh.local.requestBody = {
        pageNumber: 0,
        pageSize: 100,
        filter: {},
        multiplicity: 'multiple',
        totalCount: true,
      };

      bh.local.partGroupUrl = buildUrl(
        PART_GROUP_DATASET_ID,
        PART_GROUP_MDM_ID,
        PART_GROUP_ENTITY_ID
      );

      bh.local.lossTypeUrl = buildUrl(
        LOSS_TYPE_DATASET_ID,
        LOSS_TYPE_MDM_ID,
        LOSS_TYPE_ENTITY_ID
      );

      console.log('Motor OD master-data URLs prepared');

      console.log('partGroup:', bh.local.partGroupUrl);

      console.log('lossType:', bh.local.lossTypeUrl);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lLE8kBgwYDa1uvgn(bh, parentSpanInst);
      //appendnew_next_sd_uE4GcJ4ef7fJllB9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uE4GcJ4ef7fJllB9',
        spanInst,
        'sd_uE4GcJ4ef7fJllB9'
      );
    }
  }

  async sd_lLE8kBgwYDa1uvgn(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.partGroupUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.partGroupResponse = responseMsg;
      bh = await this.sd_PNFivCpEu61d3S6Y(bh, parentSpanInst);
      //appendnew_next_sd_lLE8kBgwYDa1uvgn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lLE8kBgwYDa1uvgn');
    }
  }

  async sd_PNFivCpEu61d3S6Y(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.lossTypeUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.lossTypeResponse = responseMsg;
      bh = await this.sd_NaGgNAtVcKi5afdE(bh, parentSpanInst);
      //appendnew_next_sd_PNFivCpEu61d3S6Y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PNFivCpEu61d3S6Y');
    }
  }

  async sd_NaGgNAtVcKi5afdE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NaGgNAtVcKi5afdE',
      parentSpanInst
    );
    try {
      const getRecords = (response) =>
        response?.payload?.records || response?.records || [];

      bh.local.masterDataResponse = {
        partGroups: getRecords(bh.local.partGroupResponse),

        lossTypes: getRecords(bh.local.lossTypeResponse),
      };

      console.log(
        'Motor OD Master Data Response:',
        JSON.stringify(bh.local.masterDataResponse, null, 2)
      );

      bh.input.masterDataResponse = bh.local.masterDataResponse;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_znRSDpMBY1V7ibQT(bh, parentSpanInst);
      //appendnew_next_sd_NaGgNAtVcKi5afdE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NaGgNAtVcKi5afdE',
        spanInst,
        'sd_NaGgNAtVcKi5afdE'
      );
    }
  }

  async sd_znRSDpMBY1V7ibQT(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.masterDataResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_znRSDpMBY1V7ibQT');
    }
  }

  async sd_qWjIUr6tk17rocYW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qWjIUr6tk17rocYW',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};
      bh.local.policyNo = body.policyNo;
      bh.local.lossDate = body.lossDate;
      console.log('bh.input.body', bh.input.body);
      bh.local.GetQuery =
        'SELECT * FROM policies ' +
        "WHERE policy_no = '" +
        bh.local.policyNo +
        "' " +
        "AND status = 'ACTIVE'";

      console.log('bh.local.GetQuery11', bh.local.GetQuery);
      const SETTLEMENT_DATASET_ID = '72b58c39-817f-4204-95dc-4f5eec8fd929';

      const SETTLEMENT_MDM_ID = '96418f46-a2f2-46a8-85fa-a579796fc703';

      const SETTLEMENT_ENTITY_ID = '7da6f6a6-00db-456e-966d-a3a96adb8eca';

      const BASE_URL = bh.system.environment.REELS_BASE_URL;

      const TOKEN = bh.system.environment.REELS_TOKEN;

      const buildUrl = (datasetId, mdmId, entityId) =>
        `${BASE_URL}/integration/api/records/filter/${datasetId}/${mdmId}/${entityId}`;

      bh.local.headers = {
        token: TOKEN,
        'Content-Type': 'application/json',
      };

      bh.local.requestBody = {
        pageNumber: 0,
        pageSize: 100,
        filter: {},
        multiplicity: 'multiple',
        totalCount: true,
      };

      bh.local.settlementUrl = buildUrl(
        SETTLEMENT_DATASET_ID,
        SETTLEMENT_MDM_ID,
        SETTLEMENT_ENTITY_ID
      );
      console.log('bh.local.settlementUrl11', bh.local.settlementUrl);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TSyg8UbmWaKGMG95(bh, parentSpanInst);
      //appendnew_next_sd_qWjIUr6tk17rocYW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qWjIUr6tk17rocYW',
        spanInst,
        'sd_qWjIUr6tk17rocYW'
      );
    }
  }

  async sd_TSyg8UbmWaKGMG95(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TSyg8UbmWaKGMG95',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_H3p2aFTyqGNTPPKY'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.GetResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.GetQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EISDaQwVM8kv6W4s(bh, parentSpanInst);
      //appendnew_next_sd_TSyg8UbmWaKGMG95
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TSyg8UbmWaKGMG95',
        spanInst,
        'sd_TSyg8UbmWaKGMG95'
      );
    }
  }

  async sd_EISDaQwVM8kv6W4s(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.settlementUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.headers,
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.settlementResponse = responseMsg;
      bh = await this.bpmError(bh, parentSpanInst);
      //appendnew_next_sd_EISDaQwVM8kv6W4s
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EISDaQwVM8kv6W4s');
    }
  }

  async bpmError(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('bpmError', parentSpanInst);
    try {
      console.log('========================================');
      console.log('START POLICY & COVER VALIDATION');
      console.log('========================================');

      // ============================================================
      // 1. INITIALIZE DEFAULT RESPONSE
      // ============================================================

      var notexists = bh.local.GetResult.length == 0;

      if (notexists) {
        bh.local.statusCode = 404;

        let msg = 'Policy Not Found';

        bh.local.responseBody = {
          error: msg,
        };

        throw new Error(msg);
      }

      // Policy exists
      var policy = bh.local.GetResult[0];

      // Check policy status
      if (String(policy.status).toUpperCase() !== 'ACTIVE') {
        bh.local.statusCode = 404;

        let msg = 'Policy is not ACTIVE';

        bh.local.responseBody = {
          error: msg,
        };

        throw new Error(msg);
      }

      bh.local.statusCode = 200;

      bh.local.responseBody = {
        isValid: true,
      };

      // ============================================================
      // 2. GET INTIMATION WINDOW FROM SETTLEMENT PARAMETERS REEL
      // ============================================================

      console.log('bh.local.settlementResponse22', bh.local.settlementResponse);
      console.log('bh.local.GetResult22', bh.local.GetResult);

      var records =
        bh.local.settlementResponse?.payload?.records ||
        bh.local.settlementResponse?.records ||
        [];

      var intimationWindowDays = null;

      for (var i = 0; i < records.length; i++) {
        var parameterKey = records[i]['Key'];

        var parameterValue = records[i]['Value'];

        if (String(parameterKey).trim() === 'INTIMATION_WINDOW_DAYS') {
          intimationWindowDays = Number(parameterValue);

          break;
        }
      }

      bh.local.intimationWindowDays = intimationWindowDays;

      console.log('INTIMATION_WINDOW_DAYS:', bh.local.intimationWindowDays);

      // ============================================================
      // 3. VALIDATE INTIMATION WINDOW PARAMETER
      // ============================================================

      if (
        bh.local.intimationWindowDays === null ||
        isNaN(bh.local.intimationWindowDays)
      ) {
        console.log('INTIMATION_WINDOW_DAYS parameter not found');

        bh.local.isValid = false;
      }

      // ============================================================
      // 4. CHECK POLICY RESULT
      // ============================================================

      if (
        bh.local.isValid &&
        (!bh.local.GetResult || bh.local.GetResult.length === 0)
      ) {
        console.log('Policy Not Found');

        bh.local.isValid = false;
      }

      // ============================================================
      // 5. GET POLICY
      // ============================================================

      var policy = null;

      if (bh.local.isValid) {
        policy = bh.local.GetResult[0];

        console.log('policy', policy);
      }

      // ============================================================
      // 6. CHECK POLICY STATUS
      // ============================================================

      if (bh.local.isValid && policy) {
        if (String(policy.status).toUpperCase() !== 'ACTIVE') {
          console.log('Policy is not ACTIVE');

          bh.local.isValid = false;
        }
      }

      // ============================================================
      // 7. READ LOSS DATE
      // ============================================================

      var lossDate = null;

      if (bh.local.isValid) {
        lossDate = new Date(bh.local.lossDate);

        if (isNaN(lossDate.getTime())) {
          console.log('Invalid Date of Loss');

          bh.local.isValid = false;
        }
      }

      // ============================================================
      // 8. CREATE TODAY DATE
      // ============================================================

      var today = new Date();

      today.setHours(0, 0, 0, 0);

      if (lossDate) {
        lossDate.setHours(0, 0, 0, 0);
      }

      // ============================================================
      // 9. LOG DATES
      // ============================================================

      if (lossDate) {
        console.log('Today:', today.toISOString().split('T')[0]);

        console.log('Loss Date:', lossDate.toISOString().split('T')[0]);
      }

      // ============================================================
      // 10. FUTURE DATE VALIDATION
      // ============================================================

      if (bh.local.isValid && lossDate) {
        if (lossDate > today) {
          console.log('Date of Loss is in the future');

          bh.local.isValid = false;
        }
      }

      // ============================================================
      // 11. POLICY PERIOD VALIDATION
      // ============================================================

      var policyStart = null;
      var policyEnd = null;

      if (bh.local.isValid && policy && lossDate) {
        policyStart = new Date(policy.policy_start_date);

        policyEnd = new Date(policy.policy_end_date);

        policyStart.setHours(0, 0, 0, 0);

        policyEnd.setHours(0, 0, 0, 0);

        console.log('Policy Start:', policyStart.toISOString().split('T')[0]);

        console.log('Policy End:', policyEnd.toISOString().split('T')[0]);

        if (lossDate < policyStart || lossDate > policyEnd) {
          console.log('Date of Loss is outside policy period');

          bh.local.isValid = false;
        }
      }

      // ============================================================
      // 12. INTIMATION WINDOW VALIDATION
      // ============================================================

      var differenceDays = null;

      if (bh.local.isValid && lossDate) {
        var differenceMs = today.getTime() - lossDate.getTime();

        differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

        console.log('Days since loss:', differenceDays);

        console.log('Maximum allowed days:', bh.local.intimationWindowDays);

        if (differenceDays > Number(bh.local.intimationWindowDays)) {
          console.log('Intimation window exceeded');

          bh.local.isValid = false;
        }
      }

      // ============================================================
      // 13. FINAL RESPONSE
      // ============================================================

      bh.local.statusCode = 200;

      bh.local.responseBody = {
        isValid: bh.local.isValid,
      };

      console.log('========================================');

      console.log('FINAL VALIDATION RESULT:', bh.local.isValid);

      console.log('FINAL RESPONSE BODY:', bh.local.responseBody);

      console.log('FINAL STATUS CODE:', bh.local.statusCode);

      console.log('========================================');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sFqT8q939sEif28e(bh, parentSpanInst);
      //appendnew_next_bpmError
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jxjH1KPpTRaWoHEx',
        spanInst,
        'bpmError'
      );
    }
  }

  async sd_sFqT8q939sEif28e(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sFqT8q939sEif28e');
    }
  }

  async sd_aHl2wIHJ3tq5It1N(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.statusCode).send(bh.local.responseBody);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aHl2wIHJ3tq5It1N');
    }
  }

  async sd_UDwaCKUxiodEyAo7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UDwaCKUxiodEyAo7',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      /* =========================================================
   READ FRONTEND VALUES
   ========================================================= */

      bh.local.policyNo = String(body.policyNo || '').trim();

      bh.local.dateOfLoss = body.dateOfLoss || null;

      bh.local.lossCode = String(body.lossType || '');

      bh.local.partGroupCode = String(body.primaryDamageGroup || '');

      bh.local.estimatedPartsCost = Number(body.estimatedPartsCost || 0);

      bh.local.garageType = String(body.garageType || '');

      bh.local.firFiled = body.firFiled ?? false;

      bh.local.validLicence = body.validDrivingLicence ?? false;

      bh.local.lossDescription = String(body.lossDescription || '');

      bh.local.createdBy = body.createdBy || 'FNOL_USER';

      /* =========================================================
   ESCAPE STRING VALUES
   ========================================================= */

      const escapeSql = (value) => String(value).replace(/'/g, "''");

      /* =========================================================
   CLAIM INSERT SQL
   ========================================================= */

      bh.local.claimSql = `
    INSERT INTO claims (
        claim_id,
        policy_no,
        date_of_loss,
        intimated_at,
        loss_code,
        part_group_code,
        estimated_parts_cost,
        garage_type,
        fir_filed,
        valid_licence,
        loss_description,
        depreciated_parts,
        labour_cost,
        gross_assessed,
        system_net_payable,
        surveyor_net_payable,
        deduction_trace,
        surveyor_remarks,
        manager_remarks,
        settlement_ref,
        status,
        created_at,
        updated_at
    )
    VALUES (

        'CLM-' ||
        TO_CHAR(CURRENT_DATE, 'YYYYMMDD') ||
        '-' ||
        LPAD(
            nextval('claim_number_seq')::TEXT,
            5,
            '0'
        ),

        '${escapeSql(bh.local.policyNo)}',

        '${escapeSql(String(bh.local.dateOfLoss).substring(0, 10))}',

        CURRENT_TIMESTAMP,

        '${escapeSql(bh.local.lossCode)}',

        '${escapeSql(bh.local.partGroupCode)}',

        ${bh.local.estimatedPartsCost},

        '${escapeSql(bh.local.garageType)}',

        ${bh.local.firFiled},

        ${bh.local.validLicence},

        '${escapeSql(bh.local.lossDescription)}',

        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,

        'REGISTERED',

        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    )

    RETURNING
        claim_id,
        policy_no,
        status,
        created_at;
`;

      /* =========================================================
   DEBUG
   ========================================================= */

      console.log('========== CLAIM INSERT SQL ==========');

      console.log(bh.local.claimSql);

      console.log('=======================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.claimSqlNode(bh, parentSpanInst);
      //appendnew_next_sd_UDwaCKUxiodEyAo7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UDwaCKUxiodEyAo7',
        spanInst,
        'sd_UDwaCKUxiodEyAo7'
      );
    }
  }

  async claimSqlNode(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'claimSqlNode',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_H3p2aFTyqGNTPPKY'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.GetResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.claimSql,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gP3lR1gQC1PGI8tw(bh, parentSpanInst);
      //appendnew_next_claimSqlNode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n3uS9CwmTwrT9w9w',
        spanInst,
        'claimSqlNode'
      );
    }
  }

  async sd_gP3lR1gQC1PGI8tw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gP3lR1gQC1PGI8tw',
      parentSpanInst
    );
    try {
      const CLIENT_ID = bh.system.environment.CASE_SERVICE_CLIENT_ID;

      const CLIENT_SECRET = bh.system.environment.CASE_SERVICE_CLIENT_SECRET;

      console.log('========== FINAL RESPONSE ==========');

      const result =
        bh.local.GetResult && bh.local.GetResult.length > 0
          ? bh.local.GetResult[0]
          : null;

      console.log('SQL Result:', JSON.stringify(result, null, 2));

      if (!result) {
        bh.local.responseStatus = 500;

        bh.local.response = {
          success: false,
          message: 'Claim creation failed',
        };
      } else {
        bh.local.claimId = result.claim_id;

        bh.local.claimStatus = result.status;

        bh.local.responseStatus = 201;

        bh.local.response = {
          success: true,
          claimId: result.claim_id,
          status: result.status,
        };
      }

      console.log('Response Status:', bh.local.responseStatus);

      console.log('Response Body:', JSON.stringify(bh.local.response, null, 2));
      // =====================================================
      // TOKEN REQUEST
      // =====================================================

      bh.local.caseTokenUrl = 'https://ids-ctr-pt.neutrinos-apps.com/token';

      bh.local.caseTokenBody =
        'grant_type=client_credentials' +
        '&client_id=' +
        encodeURIComponent(CLIENT_ID) +
        '&client_secret=' +
        encodeURIComponent(CLIENT_SECRET);

      bh.local.caseTokenHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      };

      console.log('TOKEN URL:', bh.local.caseTokenUrl);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.token(bh, parentSpanInst);
      //appendnew_next_sd_gP3lR1gQC1PGI8tw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gP3lR1gQC1PGI8tw',
        spanInst,
        'sd_gP3lR1gQC1PGI8tw'
      );
    }
  }

  async token(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.caseTokenUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.caseTokenHeaders,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.caseTokenBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.caseTokenResponse = responseMsg;
      bh = await this.sd_FKSmz2vTb8dw0I37(bh, parentSpanInst);
      //appendnew_next_token
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RX4D1GcneRpjuRB3');
    }
  }

  async sd_FKSmz2vTb8dw0I37(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FKSmz2vTb8dw0I37',
      parentSpanInst
    );
    try {
      const rawTokenResponse = bh.local.caseTokenResponse || {};

      const tokenResponse =
        rawTokenResponse &&
        rawTokenResponse.payload &&
        typeof rawTokenResponse.payload === 'object'
          ? rawTokenResponse.payload
          : rawTokenResponse;

      console.log('========== CASE TOKEN RESPONSE ==========');

      console.log(JSON.stringify(tokenResponse, null, 2));

      // =====================================================
      // EXTRACT TOKEN
      // =====================================================

      if (
        !tokenResponse.access_token ||
        typeof tokenResponse.access_token !== 'string' ||
        !tokenResponse.access_token.trim()
      ) {
        bh.local.caseTokenSuccess = false;

        bh.local.caseAccessToken = '';

        throw new Error(
          'Case Service authentication failed: access token missing.'
        );
      }

      bh.local.caseTokenSuccess = true;

      bh.local.caseAccessToken = tokenResponse.access_token.trim();

      console.log('Case Service authentication successful.');

      // =====================================================
      // CASE CREATE URL
      // =====================================================

      bh.local.caseCreationUrl =
        'https://alpha-pt.neutrinos-apps.com' +
        '/caseservice/case/instance/create?branch=main';

      // =====================================================
      // CASE CREATE HEADERS
      // =====================================================

      bh.local.caseCreationHeaders = {
        Authorization: 'Bearer ' + bh.local.caseAccessToken,

        'Content-Type': 'application/json',

        Accept: 'application/json',
      };

      console.log('========== CASE CREATION REQUEST ==========');

      console.log('URL:', bh.local.caseCreationUrl);

      console.log('Token available:', !!bh.local.caseAccessToken);

      console.log('============================================');
      const body = bh.local.claimInput || bh.input.body || {};

      // =====================================================
      // CASE REQUEST
      // =====================================================

      bh.local.caseCreationRequest = {
        caseType: 'motor_ragu',

        caseData: {
          claimId: bh.local.claimId,

          policyNumber: String(body.policyNo || ''),

          customerName: String(body.customerName || ''),

          vehicleRegistration: String(body.vehicleRegistration || ''),

          vehicleType: String(body.vehicleType || ''),

          yearOfManufacture: String(body.yearOfManufacture || ''),

          idv: String(body.idv || ''),

          policyStartDate: String(body.policyStartDate || ''),

          policyEndDate: String(body.policyEndDate || ''),

          policyStatus: String(body.policyStatus || ''),

          dateOfLoss: String(body.dateOfLoss || ''),

          lossCode: String(body.lossType || ''),

          partGroupCode: String(body.primaryDamageGroup || ''),

          estimatedPartsCost: String(body.estimatedPartsCost || ''),

          garageType: String(body.garageType || ''),

          firFiled: body.firFiled ?? false,

          validDrivingLicence: body.validDrivingLicence ?? false,

          lossDescription: String(body.lossDescription || ''),
        },

        wfData: {
          claimId: bh.local.claimId,

          policyNumber: String(body.policyNo || ''),

          customerName: String(body.customerName || ''),

          vehicleRegistration: String(body.vehicleRegistration || ''),

          vehicleType: String(body.vehicleType || ''),

          yearOfManufacture: String(body.yearOfManufacture || ''),

          idv: String(body.idv || ''),

          policyStartDate: String(body.policyStartDate || ''),

          policyEndDate: String(body.policyEndDate || ''),

          policyStatus: String(body.policyStatus || ''),

          dateOfLoss: String(body.dateOfLoss || ''),

          lossCode: String(body.lossType || ''),

          partGroupCode: String(body.primaryDamageGroup || ''),

          estimatedPartsCost: String(body.estimatedPartsCost || ''),

          garageType: String(body.garageType || ''),

          firFiled: body.firFiled ?? false,

          validDrivingLicence: body.validDrivingLicence ?? false,

          lossDescription: String(body.lossDescription || ''),
        },
      };

      console.log(
        'CASE BODY:',
        JSON.stringify(bh.local.caseCreationRequest, null, 2)
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.casecreate(bh, parentSpanInst);
      //appendnew_next_sd_FKSmz2vTb8dw0I37
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FKSmz2vTb8dw0I37',
        spanInst,
        'sd_FKSmz2vTb8dw0I37'
      );
    }
  }

  async casecreate(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.caseCreationUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.caseCreationHeaders,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.caseCreationRequest,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.caseCreateResponse = responseMsg;
      bh = await this.sd_rokFuSYpU5XvCjeC(bh, parentSpanInst);
      //appendnew_next_casecreate
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_81GtbVF4FzUEP344');
    }
  }

  async sd_rokFuSYpU5XvCjeC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rokFuSYpU5XvCjeC',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_H3p2aFTyqGNTPPKY');
      bh.local.GetResult = await dmUtilsInst.find(
        '_EN_r7wcg63pag',
        { claim_id: bh.local.claimId },
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.lastFind(bh, parentSpanInst);
      //appendnew_next_sd_rokFuSYpU5XvCjeC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rokFuSYpU5XvCjeC',
        spanInst,
        'sd_rokFuSYpU5XvCjeC'
      );
    }
  }

  async lastFind(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('lastFind', parentSpanInst);
    try {
      console.log('===== FIND RESULT =====');
      console.log(bh.local.GetResult);

      const result = bh.local.GetResult || [];

      if (!Array.isArray(result) || result.length === 0) {
        bh.local.responseStatus = 404;

        bh.local.response = {
          success: false,
          message: 'Claim not found',
          claimId: bh.local.claimId,
        };

        throw new Error('Claim not found: ' + bh.local.claimId);
      } else {
        bh.local.claimId = result[0].claim_id;

        bh.local.claimStatus = result[0].status;

        bh.local.responseStatus = 201;

        bh.local.response = {
          success: true,
          claimId: result[0].claim_id,
          status: result[0].status,
          netPayable: result[0].system_net_payable,
        };
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pgpdTuEbPYuXCirq(bh, parentSpanInst);
      //appendnew_next_lastFind
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_miyFD6ac8lQVaMcl',
        spanInst,
        'lastFind'
      );
    }
  }

  async sd_pgpdTuEbPYuXCirq(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pgpdTuEbPYuXCirq');
    }
  }

  async sd_e5wZwhevoQAuVDvv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e5wZwhevoQAuVDvv',
      parentSpanInst
    );
    try {
      console.log('========== ERROR HANDLER ==========');

      console.log('Error:', bh.error);

      // =====================================================
      // DEFAULT
      // =====================================================

      let statusCode = 500;

      let message = 'Internal server error';

      // =====================================================
      // GET ERROR STATUS
      // =====================================================

      if (bh.error && bh.error.response && bh.error.response.statusCode) {
        statusCode = Number(bh.error.response.statusCode);
      }

      // =====================================================
      // FALLBACK FROM ERROR MESSAGE
      // =====================================================

      const errorMessage = String(bh.error?.message || bh.error || '');

      // =====================================================
      // DETECT COMMON HTTP STATUS
      // =====================================================

      if (errorMessage.includes('Response code 400')) {
        statusCode = 400;
      } else if (errorMessage.includes('Response code 401')) {
        statusCode = 401;
      } else if (errorMessage.includes('Response code 403')) {
        statusCode = 403;
      } else if (errorMessage.includes('Response code 404')) {
        statusCode = 404;
      } else if (errorMessage.includes('Response code 500')) {
        statusCode = 500;
      } else if (errorMessage.includes('Response code 502')) {
        statusCode = 502;
      } else if (errorMessage.includes('Response code 503')) {
        statusCode = 503;
      }

      // =====================================================
      // ERROR MESSAGE
      // =====================================================

      if (statusCode === 400) {
        message = 'Bad request.';
      } else if (statusCode === 401) {
        message = 'Authentication failed.';
      } else if (statusCode === 403) {
        message = 'Access denied.';
      } else if (statusCode === 404) {
        message = 'Requested service or resource not found.';
      } else if (statusCode >= 500) {
        message = 'Internal server or external service error.';
      }

      // =====================================================
      // FINAL ERROR RESPONSE
      // =====================================================

      bh.local.responseStatus = statusCode;

      bh.local.response = {
        success: false,

        message: message,

        statusCode: statusCode,
      };

      console.log('========== ERROR RESPONSE ==========');

      console.log(JSON.stringify(bh.local.response, null, 2));
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PDto1Vxb6jd2S0jd(bh, parentSpanInst);
      //appendnew_next_sd_e5wZwhevoQAuVDvv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e5wZwhevoQAuVDvv',
        spanInst,
        'sd_e5wZwhevoQAuVDvv'
      );
    }
  }

  async sd_PDto1Vxb6jd2S0jd(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PDto1Vxb6jd2S0jd');
    }
  }

  async sd_QIxIEgnegbS6YyOM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QIxIEgnegbS6YyOM',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      const claimId = String(bh.input.params.id || '').trim();

      const action = String(body.action || '')
        .trim()
        .toUpperCase();

      const revisedNetPayable =
        body.revised_net_payable !== undefined &&
        body.revised_net_payable !== null &&
        body.revised_net_payable !== ''
          ? Number(body.revised_net_payable)
          : null;

      const remark = String(body.remark || '').trim();

      if (!claimId) {
        throw new Error('Claim ID is missing.');
      }

      bh.local.claimId = claimId;
      bh.local.surveyorAction = action;
      bh.local.revisedNetPayable = revisedNetPayable;
      bh.local.surveyorRemark = remark;

      console.log('CLAIM ID FROM URL =>', bh.local.claimId);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_m5JapzlHnWChriLx(bh, parentSpanInst);
      //appendnew_next_sd_QIxIEgnegbS6YyOM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QIxIEgnegbS6YyOM',
        spanInst,
        'sd_QIxIEgnegbS6YyOM'
      );
    }
  }

  async sd_m5JapzlHnWChriLx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m5JapzlHnWChriLx',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_H3p2aFTyqGNTPPKY');
      bh.local.GetResult = await dmUtilsInst.find(
        '_EN_r7wcg63pag',
        { claim_id: bh.local.claimId },
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.findafter(bh, parentSpanInst);
      //appendnew_next_sd_m5JapzlHnWChriLx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m5JapzlHnWChriLx',
        spanInst,
        'sd_m5JapzlHnWChriLx'
      );
    }
  }

  async findafter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('findafter', parentSpanInst);
    try {
      console.log('===== FIND RESULT =====');
      console.log(bh.local.GetResult);

      const result = bh.local.GetResult || [];

      if (!Array.isArray(result) || result.length === 0) {
        bh.local.responseStatus = 404;

        bh.local.response = {
          success: false,
          message: 'Claim not found',
          claimId: bh.local.claimId,
        };

        throw new Error('Claim not found: ' + bh.local.claimId);
      }

      const claim = result[0];

      let surveyorNetPayable = claim.system_net_payable;

      if (bh.local.surveyorAction === 'REVISE') {
        surveyorNetPayable = bh.local.revisedNetPayable;
      }

      if (bh.local.surveyorAction === 'CONFIRM') {
        surveyorNetPayable = claim.system_net_payable;
      }

      if (bh.local.surveyorAction === 'REPUDIATE') {
        surveyorNetPayable = 0;
      }

      bh.local.updateObject = {
        claim_id: bh.local.claimId,

        surveyor_net_payable: surveyorNetPayable,

        surveyor_remarks: bh.local.surveyorRemark,

        status:
          bh.local.surveyorAction === 'REPUDIATE'
            ? 'REPUDIATED'
            : 'SURVEYOR_COMPLETED',

        updated_at: new Date().toISOString(),
      };

      console.log('===== UPDATE OBJECT =====');
      console.log(bh.local.updateObject);

      console.log('===== UPDATE OBJECT =====');
      console.log(bh.local.updateObject);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hTvpPGwVQfvFjXDD(bh, parentSpanInst);
      //appendnew_next_findafter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TbNW3NZNTTM60oPJ',
        spanInst,
        'findafter'
      );
    }
  }

  async sd_hTvpPGwVQfvFjXDD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hTvpPGwVQfvFjXDD',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_H3p2aFTyqGNTPPKY');
      bh.local.UpdateResult = await dmUtilsInst.updateById(
        '_EN_r7wcg63pag',
        bh.local.updateObject
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateAfter(bh, parentSpanInst);
      //appendnew_next_sd_hTvpPGwVQfvFjXDD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hTvpPGwVQfvFjXDD',
        spanInst,
        'sd_hTvpPGwVQfvFjXDD'
      );
    }
  }

  async updateAfter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateAfter',
      parentSpanInst
    );
    try {
      console.log('================================');
      console.log('SURVEYOR UPDATE RESPONSE');
      console.log('UpdateResult =', bh.local.UpdateResult);
      console.log('Claim ID =', bh.local.claimId);
      console.log('================================');

      bh.local.responseStatus = 200;

      bh.local.response = {
        success: true,
        message: 'Surveyor action updated successfully.',
        claimId: bh.local.claimId,
        action: bh.local.surveyorAction,
        revisedNetPayable: bh.local.revisedNetPayable,
        remark: bh.local.surveyorRemark,
        updateResult: bh.local.UpdateResult,
      };

      console.log('responseStatus =', bh.local.responseStatus);
      console.log('response =', bh.local.response);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jj3j59Cb4VcVIJcw(bh, parentSpanInst);
      //appendnew_next_updateAfter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xDgH3WPmbFxHTqvd',
        spanInst,
        'updateAfter'
      );
    }
  }

  async sd_jj3j59Cb4VcVIJcw(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jj3j59Cb4VcVIJcw');
    }
  }

  async sd_2ditQwxIdIu3hjwo(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2ditQwxIdIu3hjwo');
    }
  }

  async sd_NvZgHBjf3j7ST3Ib(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NvZgHBjf3j7ST3Ib',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      const claimId = String(bh.input.params.id || '').trim();

      const action = String(body.action || '')
        .trim()
        .toUpperCase();

      const remark = String(body.remark || '').trim();

      if (!claimId) {
        throw new Error('Claim ID is missing.');
      }

      if (!action) {
        throw new Error('Manager action is required.');
      }

      if (action !== 'APPROVE' && action !== 'REJECT') {
        throw new Error('Invalid manager action. Use APPROVE or REJECT.');
      }

      if (!remark) {
        throw new Error('Manager remark is required.');
      }

      bh.local.claimId = claimId;
      bh.local.managerAction = action;
      bh.local.managerRemark = remark;

      console.log('================================');
      console.log('MANAGER ACTION');
      console.log('Claim ID =', bh.local.claimId);
      console.log('Action =', bh.local.managerAction);
      console.log('Remark =', bh.local.managerRemark);
      console.log('================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hsfWmbrKwWtN8nsH(bh, parentSpanInst);
      //appendnew_next_sd_NvZgHBjf3j7ST3Ib
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NvZgHBjf3j7ST3Ib',
        spanInst,
        'sd_NvZgHBjf3j7ST3Ib'
      );
    }
  }

  async sd_hsfWmbrKwWtN8nsH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hsfWmbrKwWtN8nsH',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_H3p2aFTyqGNTPPKY');
      bh.local.GetResult = await dmUtilsInst.find(
        '_EN_r7wcg63pag',
        { claim_id: bh.local.claimId },
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.findafter1(bh, parentSpanInst);
      //appendnew_next_sd_hsfWmbrKwWtN8nsH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hsfWmbrKwWtN8nsH',
        spanInst,
        'sd_hsfWmbrKwWtN8nsH'
      );
    }
  }

  async findafter1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'findafter1',
      parentSpanInst
    );
    try {
      console.log('================================');
      console.log('MANAGER - FIND RESULT');
      console.log('Claim ID =', bh.local.claimId);
      console.log('GetResult =', bh.local.GetResult);
      console.log('================================');

      const result = bh.local.GetResult || [];

      if (!Array.isArray(result) || result.length === 0) {
        bh.local.responseStatus = 404;

        bh.local.response = {
          success: false,
          message: 'Claim not found.',
          claimId: bh.local.claimId,
        };

        throw new Error('Claim not found: ' + bh.local.claimId);
      }

      const claim = result[0];

      let newStatus = '';
      let settlementRef = null;

      if (bh.local.managerAction === 'APPROVE') {
        newStatus = 'SETTLED';

        const year = new Date().getFullYear();

        const randomNumber = Math.floor(100000 + Math.random() * 900000);

        settlementRef = 'STL-' + year + '-' + randomNumber;
      } else if (bh.local.managerAction === 'REJECT') {
        newStatus = 'REPUDIATED';

        settlementRef = null;
      }

      bh.local.updateObject = {
        claim_id: bh.local.claimId,

        manager_remarks: bh.local.managerRemark,

        status: newStatus,

        settlement_ref: settlementRef,

        updated_at: new Date().toISOString(),
      };

      console.log('================================');
      console.log('MANAGER UPDATE OBJECT');
      console.log(bh.local.updateObject);
      console.log('================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RiFs2mX30w4oNmKO(bh, parentSpanInst);
      //appendnew_next_findafter1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jyqvWNHE9kJTKE9p',
        spanInst,
        'findafter1'
      );
    }
  }

  async sd_RiFs2mX30w4oNmKO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RiFs2mX30w4oNmKO',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_H3p2aFTyqGNTPPKY');
      bh.local.UpdateResult = await dmUtilsInst.updateById(
        '_EN_r7wcg63pag',
        bh.local.updateObject
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updateAfter1(bh, parentSpanInst);
      //appendnew_next_sd_RiFs2mX30w4oNmKO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RiFs2mX30w4oNmKO',
        spanInst,
        'sd_RiFs2mX30w4oNmKO'
      );
    }
  }

  async updateAfter1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updateAfter1',
      parentSpanInst
    );
    try {
      console.log('================================');
      console.log('MANAGER UPDATE RESULT');
      console.log('UpdateResult =', bh.local.UpdateResult);
      console.log('================================');

      bh.local.responseStatus = 200;

      bh.local.response = {
        success: true,

        message:
          bh.local.managerAction === 'APPROVE'
            ? 'Claim approved and settled successfully.'
            : 'Claim rejected and repudiated successfully.',

        claimId: bh.local.claimId,

        action: bh.local.managerAction,

        status: bh.local.updateObject.status,

        settlementRef: bh.local.updateObject.settlement_ref,

        remark: bh.local.managerRemark,

        updateResult: bh.local.UpdateResult,
      };

      console.log('Response Status =', bh.local.responseStatus);
      console.log('Response =', bh.local.response);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sIokTcNMwCp5N4CJ(bh, parentSpanInst);
      //appendnew_next_updateAfter1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6SYorNX3jbCMyGmf',
        spanInst,
        'updateAfter1'
      );
    }
  }

  async sd_sIokTcNMwCp5N4CJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sIokTcNMwCp5N4CJ');
    }
  }

  async sd_adj03AfIT4G083vt(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_adj03AfIT4G083vt');
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
      (await this.sd_k3h5vidrloXWe07q(bh, parentSpanInst)) ||
      (await this.sd_0TOiyi4K9Xq2320V(bh, parentSpanInst)) ||
      (await this.sd_3fRt259NdLAx5mRn(bh, parentSpanInst)) ||
      (await this.sd_vEzTKoSzWplJFLOv(bh, parentSpanInst)) ||
      (await this.sd_7RojkF7seRhQWEQG(bh, parentSpanInst))
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
  async sd_k3h5vidrloXWe07q(bh, parentSpanInst) {
    const nodes = ['sd_IrTOoIrGCyVl8qRO'];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_SarsATYFesBZkLQ6(bh, parentSpanInst);
      //appendnew_next_sd_k3h5vidrloXWe07q
      return true;
    }
    return false;
  }
  async sd_0TOiyi4K9Xq2320V(bh, parentSpanInst) {
    const nodes = ['sd_jxjH1KPpTRaWoHEx'];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_aHl2wIHJ3tq5It1N(bh, parentSpanInst);
      //appendnew_next_sd_0TOiyi4K9Xq2320V
      return true;
    }
    return false;
  }
  async sd_3fRt259NdLAx5mRn(bh, parentSpanInst) {
    const nodes = [
      'sd_n3uS9CwmTwrT9w9w',
      'sd_RX4D1GcneRpjuRB3',
      'sd_81GtbVF4FzUEP344',
      'sd_miyFD6ac8lQVaMcl',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_e5wZwhevoQAuVDvv(bh, parentSpanInst);
      //appendnew_next_sd_3fRt259NdLAx5mRn
      return true;
    }
    return false;
  }
  async sd_vEzTKoSzWplJFLOv(bh, parentSpanInst) {
    const nodes = ['sd_TbNW3NZNTTM60oPJ'];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_2ditQwxIdIu3hjwo(bh, parentSpanInst);
      //appendnew_next_sd_vEzTKoSzWplJFLOv
      return true;
    }
    return false;
  }
  async sd_7RojkF7seRhQWEQG(bh, parentSpanInst) {
    const nodes = ['sd_jyqvWNHE9kJTKE9p'];
    if (nodes.includes(bh.errorSource)) {
      await this.sd_adj03AfIT4G083vt(bh, parentSpanInst);
      //appendnew_next_sd_7RojkF7seRhQWEQG
      return true;
    }
    return false;
  }
  //appendnew_flow_motor_poc_Catch
}
