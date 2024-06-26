import * as request from '~/util/httpsRequest';

export const VideoLikes = async (nickName = '') => {
    try {
        const res = await request.get(`users/${nickName}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
