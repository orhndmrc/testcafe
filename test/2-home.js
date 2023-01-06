
import LoginPage from '../pages/loginpage'
const testdata = require('../data/testdata')

fixture('Home Tests')

test('login with valid credentials', async t => {
  await LoginPage.login(testdata.username, testdata.password)
  // await t.expect(7 + 2).eql(10)
})

test('b', async t => {
  console.log(4 + 7)
})
