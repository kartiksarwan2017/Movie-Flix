import MovieList from "./MovieList";
import Student from "./Student";


function App() {
  return (
    <>
     {/* <h1>Movie App</h1>
     <MovieList /> */}

     <Student stuname = "Krishna!" marks={80} />
     <Student stuname = "Balram!" marks={70}  />
     {/* <Student  marks={89} /> */}
     <Student />
    </>
  );
}

Student.defaultProps = {
  stuname: "Student",
  marks: "N.A"
}

export default App;
