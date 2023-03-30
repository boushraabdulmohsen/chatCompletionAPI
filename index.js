import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-CTNzTKu6zgT3hu4HsrBjtR84",
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{
        rule: "user", content: "Hello, World!"
    }]
});
console.log(completion.data.choices[0].message);