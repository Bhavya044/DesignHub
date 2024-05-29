import React, { useState } from "react";

interface ChatComponentProps {
  onClose: () => void;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", message: "Hello! How can we assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      setMessages([
        ...messages,
        { sender: "user", message: userInput },
        {
          sender: "bot",
          message: `You can reach out to us on ${getContactNumber()}`,
        },
      ]);
      setUserInput("");
    }
  };

  const getContactNumber = () => {
    return "098110 01353 / bhupeshbhaskar21@gmail.com";
  };

  // Check if the input component should be rendered
  const renderInputComponent = messages?.length >= 1 && messages?.length < 3;

  return (
    <div className="fixed bottom-0 rounded-lg right-0 w-80 bg-black border border-golden-500 text-white shadow-lg p-4">
      <div className="mb-4 text-lg font-semibold text-amber-500">
        Chat Support
      </div>
      <div className="chat-container max-h-60 overflow-y-auto">
        {messages?.map((item, index) => (
          <div
            key={index}
            className={`mb-2 ${
              item.sender === "user"
                ? "text-right text-blue-400"
                : "text-left text-white"
            }`}
          >
            {item?.message}
          </div>
        ))}
      </div>
      {renderInputComponent && (
        <div className="mt-4 flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow border-2 p-2 h-9 rounded  mr-2 text-gray-800 bg-white"
            value={userInput}
            onChange={handleUserInput}
          />
          <button
            className="text-amber-500  py-2 px-4 rounded-full hover:bg-gray-600"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      )}
      <div
        className="absolute top-4 right-4 cursor-pointer text-amber-500"
        onClick={onClose}
      >
        X
      </div>
    </div>
  );
};

export default ChatComponent;
