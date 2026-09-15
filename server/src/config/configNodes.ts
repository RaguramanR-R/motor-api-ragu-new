export default {
    "db-config": {
        "sd_H3p2aFTyqGNTPPKY": {
            "id": "sd_H3p2aFTyqGNTPPKY",
            "type": "db-config",
            "erdPath": "claims",
            "viewType": "server",
            "nodeType": "flow",
            "dbOption": {
                "name": "Ragu",
                "type": "postgres",
                "host": process.env.dbhost,
                "port": process.env.dbport,
                "username": process.env.dbusername,
                "password": process.env.dbpassword,
                "database": process.env.dbname,
                "schema": "public",
                "uuidExtension": "",
                "synchronize": false
            },
            "disabledb": false,
            "selectedDB": "postgres",
            "selectedOption": "postgres",
            "dbCategory": "sql",
            "category": "config",
            "__ssdTypeInputs__": {
                "mssql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mssql_port": {
                    "type": "num",
                    "value": 1433
                },
                "mssql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mssql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mssql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mssql_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.instanceName": {
                    "type": "str",
                    "value": ""
                },
                "mssql_pool.max": {
                    "type": "num",
                    "value": 10
                },
                "mssql_pool.min": {
                    "type": "num",
                    "value": 1
                },
                "mssql_pool.idleTimeoutMillis": {
                    "type": "num",
                    "value": 30000
                },
                "mssql_options.cancelTimeout": {
                    "type": "num",
                    "value": 5000
                },
                "mssql_options.packetSize": {
                    "type": "num",
                    "value": 4096
                },
                "mssql_options.useUTC": {
                    "type": "bool",
                    "value": true
                },
                "mssql_options.localAddress": {
                    "type": "str",
                    "value": ""
                },
                "mssql_options.readOnlyIntent": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.encrypt": {
                    "type": "bool",
                    "value": true
                },
                "mssql_options.trustServerCertificate": {
                    "type": "bool",
                    "value": true
                },
                "oracle_connectString": {
                    "type": "str",
                    "value": "oracle"
                },
                "oracle_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "oracle_port": {
                    "type": "num",
                    "value": 1521
                },
                "oracle_username": {
                    "type": "str",
                    "value": "username"
                },
                "oracle_password": {
                    "type": "str",
                    "value": "password"
                },
                "oracle_serviceName": {
                    "type": "str",
                    "value": "orcl"
                },
                "oracle_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mongodb_url": {
                    "type": "str",
                    "value": "mongodb://localhost:27017"
                },
                "mongodb_options": {
                    "type": "str",
                    "value": ""
                },
                "mysql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mysql_port": {
                    "type": "num",
                    "value": 3306
                },
                "mysql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mysql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mysql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mysql_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mysql_extra.connectionLimit": {
                    "type": "num",
                    "value": 10
                },
                "mysql_charset": {
                    "type": "str",
                    "value": "UTF8_GENERAL_CI"
                },
                "mysql_timezone": {
                    "type": "str",
                    "value": "local"
                },
                "mysql_connectTimout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_acquireTimeout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_insecureAuth": {
                    "type": "bool",
                    "value": false
                },
                "mysql_supportBigNumbers": {
                    "type": "bool",
                    "value": true
                },
                "mysql_bigNumberStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_dateStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_debug": {
                    "type": "bool",
                    "value": false
                },
                "mysql_trace": {
                    "type": "bool",
                    "value": true
                },
                "mysql_multipleStatements": {
                    "type": "bool",
                    "value": false
                },
                "mysql_flags": {
                    "type": "str",
                    "value": "flags"
                },
                "mariadb_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mariadb_port": {
                    "type": "num",
                    "value": 3306
                },
                "mariadb_username": {
                    "type": "str",
                    "value": "username"
                },
                "mariadb_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_password": {
                    "type": "str",
                    "value": "password"
                },
                "mariadb_database": {
                    "type": "str",
                    "value": "database"
                },
                "mariadb_charset": {
                    "type": "str",
                    "value": "UTF8_GENERAL_CI"
                },
                "mariadb_timezone": {
                    "type": "str",
                    "value": "local"
                },
                "mariadb_extra.connectionLimit": {
                    "type": "num",
                    "value": 10
                },
                "mariadb_connectTimout": {
                    "type": "num",
                    "value": 10000
                },
                "mariadb_acquireTimeout": {
                    "type": "num",
                    "value": 10000
                },
                "mariadb_insecureAuth": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_supportBigNumbers": {
                    "type": "bool",
                    "value": true
                },
                "mariadb_bigNumberStrings": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_dateStrings": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_debug": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_trace": {
                    "type": "bool",
                    "value": true
                },
                "mariadb_multipleStatements": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_flags": {
                    "type": "str",
                    "value": "flags"
                },
                "postgres_host": {
                    "type": "server_env",
                    "value": "dbhost"
                },
                "postgres_port": {
                    "type": "server_env",
                    "value": "dbport"
                },
                "postgres_username": {
                    "type": "server_env",
                    "value": "dbusername"
                },
                "postgres_password": {
                    "type": "server_env",
                    "value": "dbpassword"
                },
                "postgres_database": {
                    "type": "server_env",
                    "value": "dbname"
                },
                "postgres_schema": {
                    "type": "str",
                    "value": "public"
                },
                "postgres_uuidExtension": {
                    "type": "str",
                    "value": ""
                },
                "postgres_synchronize": {
                    "type": "bool",
                    "value": false
                }
            },
            "__n_excludedFromValidation__": {}
        },
        "sd_UaLCoWfxVWrxVMvp": {
            "id": "sd_UaLCoWfxVWrxVMvp",
            "type": "db-config",
            "viewType": "server",
            "nodeType": "flow",
            "dbOption": {
                "type": "postgres",
                "host": "localhost",
                "port": 5432,
                "username": "username",
                "password": "password",
                "database": "database",
                "schema": "public",
                "uuidExtension": "",
                "synchronize": false,
                "name": "postgres_0"
            },
            "disabledb": true,
            "selectedDB": "postgres",
            "selectedOption": "postgres",
            "dbCategory": "sql",
            "category": "config",
            "__ssdTypeInputs__": {
                "mssql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mssql_port": {
                    "type": "num",
                    "value": 1433
                },
                "mssql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mssql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mssql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mssql_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.instanceName": {
                    "type": "str",
                    "value": ""
                },
                "mssql_pool.max": {
                    "type": "num",
                    "value": 10
                },
                "mssql_pool.min": {
                    "type": "num",
                    "value": 1
                },
                "mssql_pool.idleTimeoutMillis": {
                    "type": "num",
                    "value": 30000
                },
                "mssql_options.cancelTimeout": {
                    "type": "num",
                    "value": 5000
                },
                "mssql_options.packetSize": {
                    "type": "num",
                    "value": 4096
                },
                "mssql_options.useUTC": {
                    "type": "bool",
                    "value": true
                },
                "mssql_options.localAddress": {
                    "type": "str",
                    "value": ""
                },
                "mssql_options.readOnlyIntent": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.encrypt": {
                    "type": "bool",
                    "value": false
                },
                "oracle_connectString": {
                    "type": "str",
                    "value": "oracle"
                },
                "oracle_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "oracle_port": {
                    "type": "num",
                    "value": 1521
                },
                "oracle_username": {
                    "type": "str",
                    "value": "username"
                },
                "oracle_password": {
                    "type": "str",
                    "value": "password"
                },
                "oracle_serviceName": {
                    "type": "str",
                    "value": "orcl"
                },
                "oracle_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mysql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mysql_port": {
                    "type": "num",
                    "value": 3306
                },
                "mysql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mysql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mysql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mysql_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mysql_extra.connectionLimit": {
                    "type": "num",
                    "value": 10
                },
                "mysql_charset": {
                    "type": "str",
                    "value": "UTF8_GENERAL_CI"
                },
                "mysql_timezone": {
                    "type": "str",
                    "value": "local"
                },
                "mysql_connectTimout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_acquireTimeout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_insecureAuth": {
                    "type": "bool",
                    "value": false
                },
                "mysql_supportBigNumbers": {
                    "type": "bool",
                    "value": true
                },
                "mysql_bigNumberStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_dateStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_debug": {
                    "type": "bool",
                    "value": false
                },
                "mysql_trace": {
                    "type": "bool",
                    "value": true
                },
                "mysql_multipleStatements": {
                    "type": "bool",
                    "value": false
                },
                "mysql_flags": {
                    "type": "str",
                    "value": "flags"
                },
                "postgres_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "postgres_port": {
                    "type": "num",
                    "value": 5432
                },
                "postgres_username": {
                    "type": "str",
                    "value": "username"
                },
                "postgres_password": {
                    "type": "str",
                    "value": "password"
                },
                "postgres_database": {
                    "type": "str",
                    "value": "database"
                },
                "postgres_schema": {
                    "type": "str",
                    "value": "public"
                },
                "postgres_uuidExtension": {
                    "type": "str",
                    "value": ""
                },
                "postgres_synchronize": {
                    "type": "bool",
                    "value": false
                }
            },
            "__n_excludedFromValidation__": {}
        }
    }
}