const fs = require('fs')
const files = fs.readdirSync('./directories')

module.exports = function () {
    const flattenedDirectories = [];

    files.forEach((file) => {
        const { directories } = require(`../directories/${file}`);
        flattenedDirectories.push(...directories);
    });

    // Find and remove 'aidirectories.fyi' entry if it exists
    const aiDirectoriesIndex = flattenedDirectories.findIndex(d => d.name.toLowerCase() === 'aitools.fyi');
    let aiDirectoriesEntry;
    if (aiDirectoriesIndex > -1) {
        [aiDirectoriesEntry] = flattenedDirectories.splice(aiDirectoriesIndex, 1);
    }

    // Sort the remaining directories alphabetically
    flattenedDirectories.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    // If 'aidirectories.fyi' was found, add it back as the first element
    if (aiDirectoriesEntry) {
        flattenedDirectories.unshift(aiDirectoriesEntry);
    }

    return flattenedDirectories;
}
