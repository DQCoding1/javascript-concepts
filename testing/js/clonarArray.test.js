const clonarArray = require("./clonarArray.js")

test("clonar array", () => {
  expect(clonarArray([1,2,3])).toEqual([1,2,3])
  expect(clonarArray([1,2,3])).not.toBe([1,2,3])
})
