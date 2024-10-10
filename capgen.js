const axios = require('axios');

const generateCaption = async (imageDescription) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: 'gpt-4',
            prompt: `Write an engaging caption for the following: ${imageDescription}`,
            max_tokens: 50,
        }, {
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating caption:', error);
        throw error;
    }
};
