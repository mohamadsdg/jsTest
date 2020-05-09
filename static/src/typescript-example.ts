"use strict"

typeof name === "string"

function add(a: number, b: number): number {
  return a + b
}
interface User {
  name: {
    first: string
    middle: string
    last: string
  }
}
function getFullName(user: User): string {
  const {
    name: { first, last, middle },
  } = user

  return [first, last, middle].filter(Boolean).join("")
}

add(1, 2)
getFullName({ name: { first: "joe", middle: "bud", last: "Mattews" } })
