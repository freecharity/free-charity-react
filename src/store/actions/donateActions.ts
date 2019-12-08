export const showResult = (success: boolean) => ({
    type: 'SHOW_DONATION_RESULT',
    success: success
});

export const hideResult = () => ({
    type: 'HIDE_DONATION_RESULT'
});