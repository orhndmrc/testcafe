
import LoginPage from '../pages/loginpage'
import { elementByXPath } from '../support/utilities'
const testdata = require('../data/testdata')

fixture('Login Tests')

test.meta({
  ID: 'TC 1',
  SEVERITY: 'critical',
  STORY: 'BBR-1025',
  TEST_RUN: 'TC-1'
})('login with valid credentials', async t => {
  await LoginPage.login(testdata.username, testdata.password)
  const sBox = await elementByXPath(LoginPage.searchBox)
  const search = await elementByXPath(LoginPage.search)
  await t.typeText(sBox, 'Git Pocket Guide')
  await t.click(search)
})
test('a', async t => {
  console.log('Orhan')
  // await t.expect(5).eql(3+3)
})
