import { expect, test } from 'vitest'
import sharp from 'sharp'
import got from 'got'
import { TritonTensorUtil } from '../../src/utils'

test('TensorUtil can construct NHWC shaped 3D array from image', async () => {
  const { data, info } = await sharp(await got('https://picsum.photos/id/1062/200/300').buffer())
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  const imgBuf = data.buffer
  const tensor = TritonTensorUtil.fromImageBuffer(imgBuf, info.height, info.width, info.channels)
  expect(tensor).toBeDefined()
  expect(tensor.length).toBe(300)
  expect(tensor[0].length).toBe(200)
  expect(tensor[0][0].length).toBe(3)
})

test('TensorUtil can convert string to UTF-8 bytes', async () => {
  const txt = 'テスト テスト　テスト'
  const utf8Buffer = TritonTensorUtil.fromString(txt)
  expect(utf8Buffer).toBeDefined()
  expect(new TextDecoder().decode(utf8Buffer)).toBe(txt)
})
