const { useState } = React;

const COURSES = [
  { id: 0, title: "Note explicative", content: `Les débuts de la formation musicale.

Avant la première leçon, je te présente en dessous des informations sur les signes principaux pour l’étude de la musique afin que tu puisses te familiariser avec les différentes figures que tu pourrais retrouver dans les leçons même s’ils ne font pas l’objet d’une étude immédiate.

La portée :
Elle se compose de 5 lignes et de 4 interlignes.

Les clés : 
Ils existent plusieurs Clé :
Sol :

Fa :

D’ut :

(Nous étudierons d’abord la clé de sol)

Les noms des notes sur une clé de sol :` },
];

// Génération des 9 niveaux et 24 leçons par niveau
for (let lvl = 1; lvl <= 9; lvl++) {
  let lessons = [];
  for (let i = 1; i <= 24; i++) {
    lessons.push({ id: `${lvl}-${i}`, title: `Leçon ${i}`, content: `Cette leçon n'est pour le moment pas disponible.` });
  }
  COURSES.push({ id: lvl, title: `Niveau ${lvl}`, lessons });
}

// Composants React
function Lesson({ lesson }) {
  return React.createElement("div", { className: "border rounded p-3 m-1 bg-white shadow-sm" },
    React.createElement("h4", { className: "font-semibold mb-2" }, lesson.title),
    React.createElement("p", { className: "text-sm whitespace-pre-line" }, lesson.content)
  );
}

function Level({ level }) {
  const [selectedLesson, setSelectedLesson] = useState(null);

  if (level.lessons) {
    return React.createElement("div", { className: "mb-4" },
      React.createElement("h3", { className: "text-lg font-bold mb-2" }, level.title),
      React.createElement("div", { className: "grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-3" },
        level.lessons.map(lesson =>
          React.createElement("div", {
            key: lesson.id,
            onClick: () => setSelectedLesson(lesson),
            className: "cursor-pointer hover-bg p-2 rounded border"
          }, lesson.title)
        )
      ),
      selectedLesson && React.createElement(Lesson, { lesson: selectedLesson })
    );
  } else {
    return React.createElement("div", { className: "mb-4" },
      React.createElement("h3", { className: "text-lg font-bold mb-2" }, level.title),
      React.createElement(Lesson, { lesson: level })
    );
  }
}

function App() {
  return React.createElement("div", { className: "min-h-screen bg-slate-100 p-6" },
    React.createElement("h1", { className: "text-2xl font-bold mb-6" }, "Formation musicale"),
    COURSES.map(level => React.createElement(Level, { key: level.id, level: level }))
  );
}

// Rendu React
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
