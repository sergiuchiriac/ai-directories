const getDirectoriesList = require('../get-directories-list')
const writeToFile = require('../write-to-file')

const formatJson = (data) => {
    return `{\n"count": ${data.length},\n"data": ${JSON.stringify(data, null, 4)}}`
}

async function updateDB() {
    try {
        const directoriesList = getDirectoriesList()

        await writeToFile({
            data: formatJson(directoriesList),
            filePath: './db/directories.json',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateDB()
