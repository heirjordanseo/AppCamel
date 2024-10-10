const postToInstagram = async (imageUrl, caption) => {
    const url = `https://graph.facebook.com/v15.0/${process.env.INSTAGRAM_USER_ID}/media`;
    const response = await axios.post(url, {
        image_url: imageUrl,
        caption: caption,
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
    });
    return response.data;
};
