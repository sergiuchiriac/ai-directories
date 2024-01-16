function createRow(directory) {
    const { name, link, submission_link, domain_rating, monthly_visits, submission_experience, pricing } = directory;

    // Determine the display color for submission experience and pricing
    let experience_result = '';
    if (submission_experience) {
        experience_result = submission_experience === 'Good' ? `**🟢 ${submission_experience}**` : `**🔴 ${submission_experience}**`;
    }

    let price_result = '';
    if (pricing) {
        price_result = pricing === 'Free' ? `**🟢 ${pricing}**` : `**🔴 ${pricing}**`;
    }

    return `| ${name} | [${name}](${link}) | [Submit](${submission_link}) | ${domain_rating} | ${monthly_visits} | ${experience_result} | ${price_result} |\n`;
}

function createTables(directoriesList) {
    // Table headings
    let table = `| Name | Link | Submission Link | Domain Rating | Monthly Visits | Submission Experience | Pricing |\n|---|---|---|---|---|---|---|\n`;

    // Add each directory as a row
    directoriesList.forEach(directory => {
        table += createRow(directory);
    });

    return `\n\n### AI Directories\n${table}`;
}

module.exports = function (resources) {
    // Generate tables from resources
    const tables = createTables(resources);

    return `\n\n${tables}`;
}
