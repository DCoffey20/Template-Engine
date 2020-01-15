const fs = require("fs");

function cards(data) {
    console.log(data);
    if (data.getRole() === "Manager") {
        let template = fs.readFileSync("./templates/manager.html", "utf8").split("$%");
        for (let key in data) {
            if ((key !== "getRole") || (key !== "getOfficeNumber")) {
                let ind = template.indexOf(key);
                template[ind] = data[key];
            };
        };
        return (template.join(" "));
    } else if (data.getRole() === "Engineer") {
        let template = fs.readFileSync("./templates/engineer.html", "utf8").split("$%");
        for (let key in data) {
            if ((key !== "getRole") || (key !== "getGithub")) {
                let ind = template.indexOf(key);
                template[ind] = data[key];
            };
        };
        return (template.join(" "));
    } else if (data.getRole() === "Intern") {
        let template = fs.readFileSync("./templates/intern.html", "utf8").split("$%");
        for (let key in data) {
            if ((key !== "getRole") || (key !== "getSchool")) {
                let ind = template.indexOf(key);
                template[ind] = data[key];
            };
        };
        return (template.join(" "));
    }
    return ("placeholder");
};

module.exports = {
    cards: cards
}