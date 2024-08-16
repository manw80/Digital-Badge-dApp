const BadgeModel = require('../model/badgeModel');
const BadgeStorage = require('../storage/badgeStorage');

class BadgeController {
    async createBadge(data) {
        if (!data.name || !data.description) {
            return { error: 'Name and description must be provided.' };
        }

        const newBadge = new BadgeModel(data.name, data.description);
        BadgeStorage.addOne(newBadge);

        return {
            success: true,
            message: 'Badge created successfully!',
            badge: newBadge.getData(),
        };
    }

    async issueBadge(badgeId, recipient) {
        const badge = BadgeStorage.getOneById(badgeId);
        if (!badge) {
            return { error: `Badge not found for id '${badgeId}'` };
        }

        return {
            success: true,
            message: 'Badge issued successfully!',
            badge: badge.getData(),
            recipient,
        };
    }

    async getBadgeById(id) {
        const badge = BadgeStorage.getOneById(id);
        if (!badge) {
            return { error: `Badge not found for id '${id}'` };
        }

        return { badge: badge.getData() };
    }

    async getAllBadges() {
        return { badges: BadgeStorage.getAll() };
    }
}

module.exports = new BadgeController();
