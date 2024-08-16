const crypto = require('crypto');

class BadgeModel {
    constructor(name, description) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
    }

    getData() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
        };
    }
}

module.exports = BadgeModel;
