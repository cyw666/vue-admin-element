import _ from 'lodash'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
  return (+num || 0)
    .toString()
    .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export function currencyFormate(num) {
  if (!num || !_.toNumber(num)) return ''
  if (!_.isNumber(num)) {
    num = _.toNumber(num)
  }
  return new Intl.NumberFormat('zh-Hans-CN', {
    style: 'currency',
    currency: 'CNY',
  }).format(num)
}

/**
 *
 * @desc 格式化日期
 * @export
 * @param {*} time
 * @param {string} [format='YYYY-MM-DD']
 * @returns
 */
export function dateFormat(time, format = 'YYYY-MM-DD') {
  // YYYY-MM-DD HH:mm:ss
  return dayjs(time).format(format)
}

export function RMBFormat(val, zero = true) {
  if (!zero && !+val) {
    return '-（无）-'
  }
  let a = Math.abs(+val)
  if (val >= 0) {
    return '￥' + a.toFixed(2)
  } else {
    return '-￥' + a.toFixed(2)
  }
}
