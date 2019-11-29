/**
 * This file contains reusable snippets of code.
 */

export const shuffleArray = (items: any[]) => {
    let j, x, i;
    for (i = items.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = items[i];
        items[i] = items[j];
        items[j] = x;
    }
    return items;
};

export const sleep = (ms: number) => {
    return new Promise(res => {
        return setTimeout(res, ms);
    });
};
