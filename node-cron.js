const cron = require('node-cron');

// Schedule a post to X
cron.schedule('0 9 * * *', async () => {
    await postTweet('Scheduled tweet example');
});
