const postToTikTok = async (videoUrl, description) => {
    const url = 'https://open-api.tiktok.com/share/video';
    const response = await axios.post(url, {
        video_url: videoUrl,
        description: description,
        access_token: process.env.TIKTOK_ACCESS_TOKEN,
    });
    return response.data;
};
