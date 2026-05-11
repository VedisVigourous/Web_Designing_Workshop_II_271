import StudentCard from "./Components/StudentCard.jsx";

function App() {
  return (
    <div className="AppDefault">
    <h1><code>Student Card App</code></h1>
    <StudentCard name="Vedant" course="Computer Science" marks="95" />
    <StudentCard name="Uttam" course="Computer Science" marks="89" />
    <StudentCard name="Tushar" course="Computer Science" marks="99" />
    </div>
  );
}

export default App;