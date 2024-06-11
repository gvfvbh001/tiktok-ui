/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import classNames from 'classnames/bind';

import style from '~/pages/Profile/Profile.module.scss';
import UserInfo from './UserInfo';
import * as VideoLikeService from '~/service/VideoLikeService';
import { useEffect, useState } from 'react';
import ListVideo from './ListVideo';

const cx = classNames.bind(style);

function Profile() {
    const [listVideos, setListVideos] = useState({});
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await VideoLikeService.VideoLikes();
            setListVideos(result);
        };
        fetchAPI();
    }, []);
    useEffect(() => {
        if (listVideos.videos) {
            setVideos(listVideos.videos);
        }
    }, [listVideos]);
    return (
        <div className={cx('wrapper')}>
            <UserInfo data={listVideos} />
            <div className={cx('listWrapper')}>
                {videos.map((item) => (
                    <ListVideo key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}
export default Profile;
