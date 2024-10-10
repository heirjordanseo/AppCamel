const cron = require('node-cron');
const axios = require('axios');

const schedulePostToTwitter = (tweet, time) => {
    cron.schedule(time, async () => {
        try {
            const response = await axios.post(
                'https://api.twitter.com/2/tweets',
                { text: tweet },
                {
                    headers: { Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}` },
                }
            );
            console.log('Tweet posted successfully:', response.data);
        } catch (error) {
            console.error('Error posting tweet:', error);
        }
    });
};

// Example: Schedule to post at 9 AM daily
schedulePostToTwitter('Good morning!', '0 9 * * *');
