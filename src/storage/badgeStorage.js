class BadgeStorage {
    constructor() {
        this.badges = new Map();
    }

    addOne(badge) {
        this.badges.set(badge.id, badge);
    }

    getOneById(id) {
        return this.badges.get(id);
    }

    getAll() {
        return Array.from(this.badges.values());
    }
}

module.exports = new BadgeStorage();
