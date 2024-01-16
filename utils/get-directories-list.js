const fs = require('fs')
const files = fs.readdirSync('./directories')

module.exports = function () {
    const flattenedDirectories = []

    files.forEach((file) => {
        const { directories } = require(`../directories/${file}`)

        flattenedDirectories.push(...directories)
    })

    flattenedDirectories.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

    return flattenedDirectories
}
