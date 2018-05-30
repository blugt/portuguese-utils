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
const VALID_SUBDOMAINS = ['gov', 'edu', 'com']

function getUrlHostname(url) {
  return url
    .split(/\//)
    .filter(part => !part || part.indexOf('?') == -1)
    .find(part => part.indexOf('.') != -1)
}

function validateDomain(url, validateSubdomain) {
  const parsed = getUrlHostname(url.toLowerCase())

  const split = parsed.split('.')
  const len = split.length

  if (split[len - 1] && split[len - 1] !== 'pt') {
    return false
  } else if (validateSubdomain) {
    return !!(split[len - 2] && VALID_SUBDOMAINS.indexOf(split[len - 2]) > -1)
  }

  return true
}

export default function isValidDomain(url, validateSubdomain = false) {
  if (typeof url != 'string') return false

  return validateDomain(url, validateSubdomain)
}
