const suma = require("./suma.js")

test("sumar dos numeros", () => {
  expect(suma(1,2)).toBe(3)
})