'use strict'

import test from 'ava'
import stripIndents from './stripIndents'
import {readFromFixture} from '../utils'

const val = 'amaze'

test('strips all indentation', async (t) => {
  const expected = await readFromFixture('stripIndents')
  const actual = stripIndents`
    wow such indent gone
      very ${val}
        foo bar baz
  `
  t.is(actual, expected)
})
