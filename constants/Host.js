const LOCALHOST = '192.168.1.38';

export const convertLocalHost = (url) => {
    if(!url) return url;
    return url.replace('localhost', LOCALHOST);
}

