import { Selector, RequestMock } from 'testcafe';

const fixtureHook = RequestMock()
  .onRequestTo('http://localhost:8080/api.json')
  .respond({
    output: 'fixture'
  }, 200)

fixture`Just testing`
  .requestHooks(fixtureHook)
  .page('http://localhost:8080')

const testHook = RequestMock()
  .onRequestTo('http://localhost:8080/api.json')
  .respond({
    output: 'test'
  })

test.requestHooks(testHook)('Is there an <h1> tag?', async t => {
  await t
    .expect(Selector('h1').exists).eql(true)
  await t.debug()
})
