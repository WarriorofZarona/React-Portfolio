import {
    PasswordGenerator,
    CodingQuiz,
    DayPlanner,
    HungryHub,
    WeatherDashboard,
    GoodReadMeGenerator,
    TeamTemplate,
    NoteTaker,
    Burger,
    WorkoutTracker,
    EmployeeDirectory,
    GoogleBooksSearch,
    Waypoint
} from "../assets/images"

export const ProjectsArr = [
    {
        id: 0,
        title: "Password Generator",
        description: "A user is prompted with criteria of character length and types of characters, and the password generator will randomly generate a password string the user can use.",
        languages: ["HTML", "CSS", "Javascript"],
        image: PasswordGenerator,
        github: "https://github.com/warriorofzarona/Password-Generator/",
        deployed: "https://warriorofzarona.github.io/password-generator",
        demo: ""
    },
    {
        id: 1,
        title: "Coding Quiz",
        description: "A timed multiple-choice quiz themed around Javascript. Answer correctly to score points. Wrong answers take 10 seconds off the timer.The user can save their initials and score to a High Score List.",
        languages: ["HTML", "CSS", "Bootstrap", "Javascript"],
        image: CodingQuiz,
        github: "https://github.com/warriorofzarona/Coding-Quiz/",
        deployed: "https://warriorofzarona.github.io/Coding-Quiz",
        demo: ""
    },
    {
        id: 2,
        title: "Day Planner",
        description: "Displays current day schedule to add hourly events. Events are color-coded by time of day: past hour is in gray, current hour is in red, future hours are in green. Uses moment.js.",
        languages: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"],
        image: DayPlanner,
        github: "https://github.com/warriorofzarona/Day-Planner/",
        deployed: "https://warriorofzarona.github.io/Day-Planner",
        demo: ""
    },
    {
        id: 3,
        title: "Hungry Hub",
        description: "A search web app that lets hungry users search for restaurants by location or search for recipes by ingredients. This was collaborated project. Uses Edamam and Zomato API's.",
        languages: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"],
        image: HungryHub,
        github: "https://github.com/warriorofzarona/Hungry-Hub/",
        deployed: "https://warriorofzarona.github.io/Hungry-Hub",
        demo: ""
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: "Search for a city to see local current weather information as well as a five day forecast. Uses openweathermap API.",
        languages: ["HTML", "CSS", "Javascript", "jQuery"],
        image: WeatherDashboard,
        github: "https://github.com/warriorofzarona/Weather-Dashboard/",
        deployed: "https://warriorofzarona.github.io/Weather-Dashboard",
        demo: ""
    },
    {
        id: 5,
        title: "Good README Generator",
        description: "Node app that allows a user to quickly generate a README for projects.",
        languages: ["Javascript", "Node.js"],
        image: GoodReadMeGenerator,
        github: "https://github.com/warriorofzarona/Good-README-Generator/",
        deployed: "",
        demo: "https://youtu.be/30-ST643zSA"
    },
    {
        id: 6,
        title: "Team Template Generator",
        description: "Node app that allows a team manager to quickly generate an HTML page listing their employees and basic information.",
        languages: ["HTML", "CSS", "Javascript", "jQuery", "Node.js"],
        image: TeamTemplate,
        github: "https://github.com/warriorofzarona/Team-Template/",
        deployed: "",
        demo: "https://youtu.be/0fL2Y_P3EzY"
    },
    {
        id: 7,
        title: "Note Taker",
        description: "Allows a user to type in notes, save them in a list, retrieve when needed, and delete when they click the delete button.",
        languages: ["HTML", "CSS", "Javascript", "jQuery", "Node.js", "Express.js"],
        image: NoteTaker,
        github: "https://github.com/warriorofzarona/Note-Taker/",
        deployed: "",
        demo: "https://youtu.be/eT8_S1iAaOg"
    },
    {
        id: 8,
        title: "Eat-Da-Burger!",
        description: "Enter a burger, then choose to devour the burger. Burgers appear on the left until devoured, then appear on the right. Uses handlebars.js",
        languages: ["HTML", "CSS", "Javascript", "Node.js", "Express.js", "mySQL"],
        image: Burger,
        github: "https://github.com/warriorofzarona/burger/",
        deployed: "https://stark-falls-30386.herokuapp.com",
        demo: ""
    },
    {
        id: 9,
        title: "Workout Tracker",
        description: "A user can keep track of exercises, with options to continue their last session or start a new one. Users can also see their overall exercise stats.",
        languages: ["HTML", "CSS", "Javascript", "Node.js", "Express.js", "MongoDB"],
        image: WorkoutTracker,
        github: "https://github.com/warriorofzarona/workout-tracker/",
        deployed: "https://protected-depths-80302.herokuapp.com/",
        demo: ""
    },
    {
        id: 10,
        title: "Employee Directory",
        description: "Business owners can use this app to quickly search and sort through their employee information. Uses RandomUser API.",
        languages: ["HTML", "CSS", "Javascript", "REACT.js", "Node.js"],
        image: EmployeeDirectory,
        github: "https://github.com/WarriorofZarona/employee-directory",
        deployed: "https://nameless-meadow-45326.herokuapp.com/",
        demo: ""
    },
    {
        id: 11,
        title: "Google Books Search",
        description: "Use the Search Bar to find books from Google Books, view them in the store, or save them for viewing later. Uses Google Books API.",
        languages: ["HTML", "CSS", "Javascript", "REACT.js", "Node.js", "Express.js", "MongoDB"],
        image: GoogleBooksSearch,
        github: "https://github.com/WarriorofZarona/Google-Books-Search/",
        deployed: "https://calm-tundra-54547.herokuapp.com/",
        demo: ""
    }, {
        id: 12,
        title: "Waypoint App Messenger",
        description: "Create a profile to search for other games with similar interests, then open a chat with them to create connections for multiplayer opportunities. This was collaborated project. Uses RAWG Games API.",
        languages: ["HTML", "CSS", "Javascript", "REACT.js", "Node.js", "Express.js", "mySQL"],
        image: Waypoint,
        github: "https://github.com/WarriorofZarona/media-matcher",
        deployed: "https://ancient-dusk-51587.herokuapp.com/",
        demo: ""
    }
];