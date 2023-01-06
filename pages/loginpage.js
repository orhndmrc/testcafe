
import { Selector, t } from 'testcafe'
import Base from './base'

class LoginPage extends Base {
  constructor () {
    super()
    this.usernameBox = Selector('#userName')
    this.passwordBox = Selector('#password')
    this.submit = Selector('#login')
    this.appTitle = Selector('title')
    this.searchBox = '//*[@id="searchBox"]'
    this.search = '//*[@class="input-group-text"]//span'
  }

  async login (username, password) {
    await super.navigateToWebsite()
    await t.typeText(this.usernameBox, username)
    await t.typeText(this.passwordBox, password)
    await t.click(this.submit)
  }

  async open () {
    super.navigateToWebsite()
  }
}
export default new LoginPage()
