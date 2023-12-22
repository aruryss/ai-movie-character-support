import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    try {
      setIsGenerating(true);
      console.log("Calling OpenAI...");

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const { output } = data;

      console.log("OpenAI replied...", output);

      setApiOutput(output);
    } catch (error) {
      console.error("Error calling API:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Generate encouraging message from your favourite movie characters</h1>
          </div>
          <div className="header-subtitle">
            <h2>Write the name of your character and the movie/tv series they are from in the format:</h2>
            <h2>movie character from movie name</h2>
          </div>
        </div>
        { /* wtf */}
        <div className="prompt-container">
          <textarea
            className="prompt-box"
            placeholder="Elsa from Frozen"
            value={userInput}
            onChange={onUserChangedText}
          />
          <div className="prompt-buttons">
                  <button className="generate-button" onClick={callGenerateEndpoint}>
                    <div className="generate">
                      <p>Generate</p>
                    </div>
                  </button>
                </div>
            {apiOutput && (
              <div className="output">
                <div className="output-header-container">
                  <div className="output-header">
                    <h3>Message is:</h3>
                  </div>
                </div>
                <div className="output-content">
                  <p>{apiOutput}</p>
                </div>
              </div>
            )}
          </div>
        </div>

      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
