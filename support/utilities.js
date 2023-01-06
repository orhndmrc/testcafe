import { Selector } from 'testcafe'

const getXPath = Selector(xpath => {
  const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null)
  const items = []

  let item = iterator.iterateNext()

  while (item) {
    items.push(item)
    item = iterator.iterateNext()
  }

  return items
})
/**
 * Gives opportunity to use xpath string to locate element
 * @param {string} xpath
 * @returns webelement
 */
export async function elementByXPath (xpath) {
  return await getXPath(xpath)
}
