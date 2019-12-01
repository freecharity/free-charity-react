const avatar_1 = require('assets/img/avatars/avatar_1.svg');
const avatar_2 = require('assets/img/avatars/avatar_2.svg');
const avatar_3 = require('assets/img/avatars/avatar_3.svg');
const avatar_4 = require('assets/img/avatars/avatar_4.svg');
const avatar_5 = require('assets/img/avatars/avatar_5.svg');
const avatar_6 = require('assets/img/avatars/avatar_6.svg');
const avatar_7 = require('assets/img/avatars/avatar_7.svg');
const avatar_8 = require('assets/img/avatars/avatar_8.svg');
const avatar_9 = require('assets/img/avatars/avatar_9.svg');

export const avatars = [
    avatar_1,
    avatar_2,
    avatar_3,
    avatar_4,
    avatar_5,
    avatar_6,
    avatar_7,
    avatar_8,
    avatar_9
];

export const getAvatar = (avatar: string) => {
    switch (avatar) {
        case 'avatar_1':
            return avatars[0];
        case 'avatar_2':
            return avatars[1];
        case 'avatar_3':
            return avatars[2];
        case 'avatar_4':
            return avatars[3];
        case 'avatar_5':
            return avatars[4];
        case 'avatar_6':
            return avatars[5];
        case 'avatar_7':
            return avatars[6];
        case 'avatar_8':
            return avatars[7];
        case 'avatar_9':
            return avatars[8];
        default:
            return avatars[0];
    }
};

const badge_1 = require('assets/img/badges/027-trophy-1.svg');
const badge_2 = require('assets/img/badges/028-second-prize.svg');
const badge_3 = require('assets/img/badges/029-third-prize.svg');
const badge_4 = require('assets/img/badges/001-badge.svg');

export const badges = [
    badge_1,
    badge_2,
    badge_3,
    badge_4
];

export const getBadge = (badge: string) => {
    switch (badge) {
        case 'badge_1':
            return badges[0];
        case 'badge_2':
            return badges[1];
        case 'badge_3':
            return badges[2];
        default:
            return badges[3];
    }
};

const category_1 = require('assets/img/categories/032-pc.svg');
const category_2 = require('assets/img/categories/019-tetris.svg');
const category_3 = require('assets/img/categories/044-stationery.svg');

export const categories = [
    category_1,
    category_2,
    category_3
];

export const getCategory = (category: string) => {
    switch (category) {
        case 'category_1':
            return categories[0];
        case 'category_2':
            return categories[1];
        case 'category_3':
            return categories[2];
        default:
            return categories[0];
    }
};
