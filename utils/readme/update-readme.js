const getDirectoriesList = require('../get-directories-list')
const createTables = require('./create-tables')
const writeToFile = require('../write-to-file')

const directoriesList = getDirectoriesList()

const url = 'https://thedirectory.com/?ref=github-readme'

const description = `<div align="center">The list that power <a href="${url}" target="_blank" rel="noopener">The Directory</a> website</div>\n\n`

const logoDR = `<a href="${url}" style="display: flex; align-items: center; justify-content: center;"><p align="center"><img src="./assets/icon.svg" width="40" height="40" style="margin-right: 10px;">
    <span>THE DIRECTORY</span></a>\n\n`
const warning =
    '---\n>❗️ This `README.md` file and the `/db` folder are auto-generated, so please ***do not*** edit them. Changes related to directories should happen within the `/directories` folder.\n---\n\n'

const contributionGuide = 'To add a directory, check the [contributing guide](CONTRIBUTING.md).\n\n'

const directoriesCount = `### Total directories: ${directoriesList.length}\n\n`

async function updateReadme() {
    try {
        const tables = createTables(directoriesList)

        await writeToFile({
            data: `${description} ${logoDR} ${warning} ${contributionGuide} ${directoriesCount} ${tables}`,
            filePath: './README.md',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateReadme()
