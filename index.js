import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-CTNzTKu6zgT3hu4HsrBjtR84",
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

async function createChat() {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            rule: "user", content: "Hello, World!"
        }]
    });
    console.log(completion.data.choices[0].text);
}

createChat();