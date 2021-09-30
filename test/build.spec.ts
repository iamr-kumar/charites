import { assert } from 'chai'
import path from 'path'
import fs from 'fs'
import os from 'os'

import { build } from '../src/commands/build'

describe('Test for the `build.ts`.', () => {

  const stylePath = path.join(__dirname, 'data/style.yml')

  it('Should convert `data/style.yml` to JSON.', () => {
    const tmpdir = fs.mkdtempSync(path.join(os.tmpdir(), 'charites-'))
    const styleJson = path.join(tmpdir, 'style.json')

    build(stylePath, styleJson)

    // The file should exists.
    assert.deepEqual(true, !! fs.statSync(styleJson))
    assert.deepEqual(8, JSON.parse(fs.readFileSync(styleJson, 'utf-8')).version)
  });
});