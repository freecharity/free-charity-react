export const toggleSidebar = closed => ({
    type: closed ? 'OPEN_SIDEBAR' : 'CLOSE_SIDEBAR'
});

export const toggleDonate = (closed, success) => ({
    type: closed ? 'OPEN_DONATION' : 'CLOSE_DONATION',
    success: success
});
