SystemJS.config({
  paths: {
    "github:": "lib/github/",
    "npm:": "lib/npm/",
    "wunderstats/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "ts-runtime": "npm:babel-runtime@5.8.38",
      "typescript": "npm:typescript@2.2.0",
      "core-js": "npm:core-js@1.2.7",
      "module": "npm:jspm-nodelibs-module@0.2.0",
      "net": "npm:jspm-nodelibs-net@0.2.0",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel": "npm:babel-core@5.8.38"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      }
    }
  },
  transpiler: "ts",
  packages: {
    "wunderstats": {
      "main": "wunderstats.js"
    },
    "src": {
      "defaultExtension": "ts"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "aurelia-binding": "npm:aurelia-binding@1.1.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.8",
    "aurelia-history": "npm:aurelia-history@1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.2.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
    "aurelia-pal": "npm:aurelia-pal@1.2.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.1.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0",
    "aurelia-router": "npm:aurelia-router@1.1.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
    "aurelia-templating": "npm:aurelia-templating@1.2.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.2.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.2.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "d3": "npm:d3@4.5.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fetch": "github:github/fetch@2.0.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "jquery": "npm:jquery@3.1.1",
    "moment": "npm:moment@2.17.1",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "promise-polyfill": "npm:promise-polyfill@6.0.2",
    "semantic-ui": "github:Semantic-Org/Semantic-UI@2.2.7",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "ts": "github:frankwallis/plugin-typescript@5.3.3",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0"
  },
  packages: {
    "github:Semantic-Org/Semantic-UI@2.2.7": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.32",
        "jquery": "npm:jquery@2.2.4"
      }
    },
    "github:frankwallis/plugin-typescript@5.3.3": {
      "map": {
        "typescript": "npm:typescript@2.2.0"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.2.0"
      }
    },
    "npm:aurelia-framework@1.0.8": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.1.1",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.2.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
        "aurelia-pal": "npm:aurelia-pal@1.2.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
        "aurelia-templating": "npm:aurelia-templating@1.2.0"
      }
    },
    "npm:aurelia-history-browser@1.0.0": {
      "map": {
        "aurelia-history": "npm:aurelia-history@1.0.0",
        "aurelia-pal": "npm:aurelia-pal@1.2.0"
      }
    },
    "npm:aurelia-loader-default@1.0.0": {
      "map": {
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
        "aurelia-pal": "npm:aurelia-pal@1.2.0"
      }
    },
    "npm:aurelia-loader@1.0.0": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
        "aurelia-path": "npm:aurelia-path@1.1.1"
      }
    },
    "npm:aurelia-logging-console@1.0.0": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.2.0"
      }
    },
    "npm:aurelia-metadata@1.0.3": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.2.0"
      }
    },
    "npm:aurelia-pal-browser@1.1.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.2.0"
      }
    },
    "npm:aurelia-polyfills@1.1.1": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.2.0"
      }
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.1.1"
      }
    },
    "npm:aurelia-task-queue@1.1.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.2.0"
      }
    },
    "npm:aurelia-templating-resources@1.2.0": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.1.1",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.2.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
        "aurelia-pal": "npm:aurelia-pal@1.2.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
        "aurelia-templating": "npm:aurelia-templating@1.2.0"
      }
    },
    "npm:aurelia-templating-router@1.0.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.1.1",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
        "aurelia-logging": "npm:aurelia-logging@1.2.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
        "aurelia-pal": "npm:aurelia-pal@1.2.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-router": "npm:aurelia-router@1.1.1",
        "aurelia-templating": "npm:aurelia-templating@1.2.0"
      }
    },
    "npm:bn.js@4.11.6": {
      "map": {}
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.3.3",
        "inherits": "npm:inherits@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:buffer-xor@1.0.3": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.3"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.7"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.9.1",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:randombytes@2.0.3": {
      "map": {}
    },
    "npm:ripemd160@1.0.1": {
      "map": {}
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:source-map@0.5.6": {
      "map": {}
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:d3@4.5.0": {
      "map": {
        "d3-array": "npm:d3-array@1.0.2",
        "d3-dsv": "npm:d3-dsv@1.0.3",
        "d3-brush": "npm:d3-brush@1.0.3",
        "d3-drag": "npm:d3-drag@1.0.2",
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-chord": "npm:d3-chord@1.0.3",
        "d3-color": "npm:d3-color@1.0.2",
        "d3-axis": "npm:d3-axis@1.0.4",
        "d3-collection": "npm:d3-collection@1.0.2",
        "d3-ease": "npm:d3-ease@1.0.2",
        "d3-random": "npm:d3-random@1.0.2",
        "d3-polygon": "npm:d3-polygon@1.0.2",
        "d3-request": "npm:d3-request@1.0.3",
        "d3-quadtree": "npm:d3-quadtree@1.0.2",
        "d3-format": "npm:d3-format@1.0.2",
        "d3-force": "npm:d3-force@1.0.4",
        "d3-shape": "npm:d3-shape@1.0.4",
        "d3-selection": "npm:d3-selection@1.0.3",
        "d3-scale": "npm:d3-scale@1.0.4",
        "d3-path": "npm:d3-path@1.0.3",
        "d3-queue": "npm:d3-queue@3.0.3",
        "d3-voronoi": "npm:d3-voronoi@1.1.1",
        "d3-timer": "npm:d3-timer@1.0.4",
        "d3-time-format": "npm:d3-time-format@2.0.3",
        "d3-time": "npm:d3-time@1.0.4",
        "d3-zoom": "npm:d3-zoom@1.1.1",
        "d3-hierarchy": "npm:d3-hierarchy@1.1.1",
        "d3-interpolate": "npm:d3-interpolate@1.1.3",
        "d3-geo": "npm:d3-geo@1.4.0",
        "d3-transition": "npm:d3-transition@1.0.3"
      }
    },
    "npm:d3-brush@1.0.3": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-drag": "npm:d3-drag@1.0.2",
        "d3-selection": "npm:d3-selection@1.0.3",
        "d3-interpolate": "npm:d3-interpolate@1.1.3",
        "d3-transition": "npm:d3-transition@1.0.3"
      }
    },
    "npm:d3-drag@1.0.2": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-selection": "npm:d3-selection@1.0.3"
      }
    },
    "npm:d3-chord@1.0.3": {
      "map": {
        "d3-array": "npm:d3-array@1.0.2",
        "d3-path": "npm:d3-path@1.0.3"
      }
    },
    "npm:d3-dsv@1.0.3": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15",
        "rw": "npm:rw@1.3.3",
        "commander": "npm:commander@2.9.0"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:d3-request@1.0.3": {
      "map": {
        "d3-collection": "npm:d3-collection@1.0.2",
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-dsv": "npm:d3-dsv@1.0.3",
        "xmlhttprequest": "npm:xmlhttprequest@1.8.0"
      }
    },
    "npm:d3-force@1.0.4": {
      "map": {
        "d3-collection": "npm:d3-collection@1.0.2",
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-quadtree": "npm:d3-quadtree@1.0.2",
        "d3-timer": "npm:d3-timer@1.0.4"
      }
    },
    "npm:d3-scale@1.0.4": {
      "map": {
        "d3-array": "npm:d3-array@1.0.2",
        "d3-collection": "npm:d3-collection@1.0.2",
        "d3-color": "npm:d3-color@1.0.2",
        "d3-format": "npm:d3-format@1.0.2",
        "d3-time-format": "npm:d3-time-format@2.0.3",
        "d3-time": "npm:d3-time@1.0.4",
        "d3-interpolate": "npm:d3-interpolate@1.1.3"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.6.3"
      }
    },
    "npm:stream-http@2.6.3": {
      "map": {
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "readable-stream": "npm:readable-stream@2.2.2",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "inherits": "npm:inherits@2.0.3",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:elliptic@6.3.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.7"
      }
    },
    "npm:d3-shape@1.0.4": {
      "map": {
        "d3-path": "npm:d3-path@1.0.3"
      }
    },
    "npm:d3-time-format@2.0.3": {
      "map": {
        "d3-time": "npm:d3-time@1.0.4"
      }
    },
    "npm:d3-zoom@1.1.1": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-drag": "npm:d3-drag@1.0.2",
        "d3-selection": "npm:d3-selection@1.0.3",
        "d3-interpolate": "npm:d3-interpolate@1.1.3",
        "d3-transition": "npm:d3-transition@1.0.3"
      }
    },
    "npm:d3-interpolate@1.1.3": {
      "map": {
        "d3-color": "npm:d3-color@1.0.2"
      }
    },
    "npm:d3-geo@1.4.0": {
      "map": {
        "d3-array": "npm:d3-array@1.0.2"
      }
    },
    "npm:d3-transition@1.0.3": {
      "map": {
        "d3-color": "npm:d3-color@1.0.2",
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-ease": "npm:d3-ease@1.0.2",
        "d3-selection": "npm:d3-selection@1.0.3",
        "d3-interpolate": "npm:d3-interpolate@1.1.3",
        "d3-timer": "npm:d3-timer@1.0.4"
      }
    },
    "npm:typescript@2.2.0": {
      "map": {
        "source-map-support": "npm:source-map-support@0.4.11"
      }
    },
    "npm:source-map-support@0.4.11": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    }
  }
});
