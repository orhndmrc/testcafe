
import { t, Selector } from 'testcafe'
const testdata = require('../data/testdata')
export default class Base {
  constructor () {
    this.title = 'ToolsQA'
    this.baseUrl = testdata.baseUrl
  }

  async navigateToWebsite () {
    await t.navigateTo(this.baseUrl)
    const appTitle = await Selector('title').innerText
    await t.expect(appTitle).eql(this.title)
  }
}
