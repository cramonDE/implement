// example-1 按顺序输出 1，2，3，4

setTimeout(_ => console.log(4))

new Promise(resolve => {
    resolve(true)
    console.log(1)
}).then(_ => {
    console.log(3)
})

console.log(2)



// example-2  按顺序输出 1，2，3，4
// await 的下文都当作 promise.then 的内容

setTimeout(_ => console.log(4))

async function main() {
  console.log(1)
  await Promise.resolve()
  console.log(3)
}

main()

console.log(2)
