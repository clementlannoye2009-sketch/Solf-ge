import React, { useState } from "react";
import { createRoot } from "react-dom/client";


const COURSES = [
{ id: 0, title: "Note explicative", content: `Les débuts de la formation musicale.\n\nAvant la première leçon, je te présente en dessous des informations sur les signes principaux pour l’étude de la musique afin que tu puisses te familiariser avec les différentes figures que tu pourrais retrouver dans les leçons même s’ils ne font pas l’objet d’une étude immédiate.\n\nLa portée :\nElle se compose de 5 lignes et de 4 interlignes.\n\nLes clés :\nIls existent plusieurs Clé :\nSol :\n\nFa :\n\nD’ut :\n\n(Nous étudierons d’abord la clé de sol)\n\nLes noms des notes sur une clé de sol :` },
];


for (let lvl = 1; lvl <= 9; lvl++) {
let lessons = [];
for (let i = 1; i <= 24; i++) {
lessons.push({ id: `${lvl}-${i}`, title: `Leçon ${i}`, content: `Cette leçon n'est pour le moment pas disponible.` });
}
COURSES.push({ id: lvl, title: `Niveau ${lvl}`, lessons });
}


function Lesson({ lesson }) {
return (
<div className="border rounded p-3 m-1 bg-white shadow-sm">
<h4 className="font-semibold mb-2">{lesson.title}</h4>
<p className="text-sm whitespace-pre-line">{lesson.content}</p>
</div>
);
}


function Level({ level }) {
const [selectedLesson, setSelectedLesson] = useState(null);


if (level.lessons) {
return (
<div className="mb-4">
<h3 className="text-lg font-bold mb-2">{level.title}</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
{level.lessons.map((lesson) => (
<div key={lesson.id} onClick={() => setSelectedLesson(lesson)} className="cursor-pointer hover:bg-slate-100 p-2 rounded border">
{lesson.title}
</div>
))}
</div>
{selectedLesson && <Lesson lesson={selectedLesson} />}
</div>
);
} else {
return (
<div className="mb-4">
<h3 className="text-lg font-bold mb-2">{level.title}</h3>
<Lesson lesson={level} />
</div>
);
}
}


function App() {
return (
<div className="min-h-screen bg-slate-100 p-6">
<h1 className="text-2xl font-bold mb-6">Formation musicale</h1>
{COURSES.map((level) => (
<Level key={level.id} level={level} />
root.render(<App />);
