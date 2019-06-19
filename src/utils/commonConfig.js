// 通用配置

const { hostname } = window.location;
const isTest = hostname.indexOf('test') !== -1;
const isLocal = hostname.indexOf('localhost') !== -1;

let apiDomain = '/';

if (isTest || isLocal) {
  // 测试环境
  apiDomain = '//localhost:4141';
}

export default {
  isTest,
  apiDomain,
  emptyText: '-',
  timeFormat: 'YYYY-MM-DD HH:mm:ss',
  dateFormat: 'YYYY-MM-DD',
  dateFormat2: 'YYYYMMDD',
  errMsg: '系统错误，请稍后再试'
};
