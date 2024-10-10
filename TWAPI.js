const axios = require('axios');

const postTweet = async (text) => {
    const url = 'https://api.twitter.com/2/tweets';
    const response = await axios.post(url, {
        text: text,
    }, {
        headers: {
            Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        }
    });
    return response.data;
};
