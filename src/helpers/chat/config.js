// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import { LearningOptions } from "./learningOptions/LearningOptions";
import { LinkList } from "./LinkList";

const config = {
  botName: "UvsBot",
  initialMessages: [
    createChatBotMessage(
      "Hola, estoy aqui para ayudar. Que quieres aprender?",
      {
        widget: "LearningOptions",
      }
    ),
  ],

  widgets: [
    {
      widgetName: "LearningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
