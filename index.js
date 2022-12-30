console.log("try catch finally demo")

try {
    console.log('Works')
} catch (error) {
    console.log('error thrown')
} finally {
    console.log('boosh...always outputted')
}

console.log("try throw catch finally demo")
try {
    throw new (error)
    console.log('Works')
} catch (error) {
    console.log('error thrown')
} finally {
    console.log('boosh...always outputted')
}