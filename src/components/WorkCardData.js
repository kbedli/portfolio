import hangman from "../assets/hangman.png";
import card from "../assets/card.png";
import financeCalculator from "../assets/costcalculator.png";
import pizzeria from "../assets/pizzeria.png";
import table from "../assets/table.png";
import converter from "../assets/converter.png";

const ProjectCardData = [
  {
    imgsrc: pizzeria,
    title: "Pizzeria App",
    text: "A fullstack app, where the client can order a pizza and pay for it choosing cash or paypal. There is also an option for admin to log in, check the orders, change the status of the order and add, remove or edit the items/pizzas. The app is connected to MongoDB.",
    view: "https://pizzeria-app-kbedli.vercel.app/",
    source: "https://github.com/kbedli/pizzeria-app",
    technologies: ["Next.js", "MongoDB", "Redux Toolkit"],
  },
  {
    imgsrc: card,
    title: "Shopping Card",
    text: "The project of the shopping cart created using React, Context API and useReduser hook.",
    view: "https://kbedli.github.io/shopping-cart-with-useReducer/",
    source: "https://github.com/kbedli/shopping-cart-with-useReducer",
    technologies: ["React", "Context API", "useReducer"],
  },
  {
    imgsrc: hangman,
    title: "Hangman Game",
    text: "The project of a game. The main objective was to practise working with React and Typescript simultaneously.",
    view: "https://hangman-game-bice.vercel.app/",
    source: "https://github.com/kbedli/hangman-game",
    technologies: ["React", "Typesctipt"],
  },
  {
    imgsrc: table,
    title: "Workers List",
    text: "React project of the table where there is a possibility of adding, deleting or editing an employee. There is also a calculation of the sum of each department.",
    view: "https://kbedli.github.io/workers-list/",
    source: "https://github.com/kbedli/workers-list",
    technologies: ["React", "Table", "Search Bars"],
  },
  {
    imgsrc: converter,
    title: "Currency converter",
    text: "Currency converter created in React to learn React data fetching, state management and the basic application tests.",
    view: "https://kbedli.github.io/react-currency-app/",
    source: "https://github.com/kbedli/react-currency-app",
    technologies: ["React", "Fetch API", "State Management"],
  },
  {
    imgsrc: financeCalculator,
    title: "Finance Calculator",
    text: "A finance calculator created using mainly javascript to practice and learn more about javascript functions.",
    view: "https://kbedli.github.io/finance-calculator/",
    source: "https://github.com/kbedli/finance-calculator",
    technologies: ["JavaScript", "HTML5", "CSS3"],
  },
];

export default ProjectCardData;
