import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });  

const basePromptPrefix = "Generate encouraging letter with words of advice to the person facing hard times from fictional character ";
const generateAction = async (req, res) => {
  // Run first prompt
    //console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

    const baseCompletion = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: `${basePromptPrefix}${req.body.userInput}\n`,
        temperature: 0.8,
        max_tokens: 200,
    });
    //console.log(baseCompletion['choices'][0]['text'])
    const basePromptOutput = baseCompletion['choices'][0]['text'];
    //console.log(`Output is: ${basePromptOutput}`)
    res.status(200).json({ output: basePromptOutput });
};

export default generateAction;