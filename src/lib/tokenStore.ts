const tokenStore: { [userId: string]: string } = {};

export const storeToken = (userId: string, token: string) => {
    tokenStore[userId] = token;
};

export const getToken = (userId: string) => {
    return tokenStore[userId];
};