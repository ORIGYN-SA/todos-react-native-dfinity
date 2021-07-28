import {polyfill as polyfillEncoding} from 'react-native-polyfill-globals/src/encoding';
import {polyfill as polyfillURL} from 'react-native-polyfill-globals/src/url';
import {polyfill as polyfillCrypto} from 'react-native-polyfill-globals/src/crypto';
import {polyfill as polyfillFetch} from 'react-native-polyfill-globals/src/fetch';
import {polyfill as polyfillReadableStream} from 'react-native-polyfill-globals/src/readable-stream';

polyfillEncoding();
polyfillReadableStream();
polyfillURL();
polyfillCrypto();
polyfillFetch();

if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer/').Buffer;
}
