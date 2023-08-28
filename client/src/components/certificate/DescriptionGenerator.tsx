import React, { useState } from "react";
import axios from "axios";

interface Props {}

const DescriptionGenerator: React.FC<Props> = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [suggestedDescription, setSuggestedDescription] = useState<string>("");

  const apiKey = import.meta.env.VITE_CHATGPT_APIKEY as string; // Replace with your actual API key
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const handleTopicChange = (topic: string) => {
    setSelectedTopics((prevTopics) => (prevTopics.includes(topic) ? prevTopics.filter((t) => t !== topic) : [...prevTopics, topic]));
  };

  const generateDescription = async () => {
    const topicsText = selectedTopics.map((topic) => `#${topic}`).join(" ");
    const userMessage = `Generate a description for a product about ${topicsText}.`;

    try {
      const response = await axios.post(
        apiUrl,
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      console.log(response);
      setSuggestedDescription(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  return (
    <div>
      <h1>Description Generator</h1>
      <div>
        <label>
          Select Topics:
          <input type="checkbox" onChange={() => handleTopicChange("technology")} />
          Technology
          <input type="checkbox" onChange={() => handleTopicChange("fashion")} />
          Fashion
          {/* Add more topics */}
        </label>
      </div>
      <button type="button" onClick={generateDescription}>Generate Description</button>
      <div>
        <p>Suggested Description:</p>
        <p>{suggestedDescription}</p>
      </div>
    </div>
  );
};

export default DescriptionGenerator;
