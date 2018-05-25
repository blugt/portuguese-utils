import 'core-js/modules/es6.array.filter'
import 'core-js/modules/es6.array.find'

/**
 * As per dns.pt (https://www.dns.pt/en/faq/) there are currently 5 different portuguese domains
 * for registration:
 *
 *  .PT
 *  .GOV.PT
 *  .EDU.PT
 *  .COM.PT
 **/

function getUrlHostname(url) {
  return url
    .split(/\//)
    .filter(part => !part || part.indexOf('?') == -1)
    .find(part => part.indexOf('.') != -1)
}

function validateDomain(url) {
  const parsed = getUrlHostname(url.toLowerCase())

  const split = parsed.split('.')
  const len = split.length

  if (split[len - 1] && split[len - 1] !== 'pt') {
    return false
  }
  /*
  else if (split[len - 2]) {
    const found = DOMAINS
      .filter(d => d != 'pt')
      .find(d => d === split[len - 2])
    return !!found
  }
*/
  return true
}

export default function isValidDomain(url) {
  if (typeof url != 'string') return false

  const domain = validateDomain(url)

  return validateDomain(url)
}
