
import Projects from './components/Projects'
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';

function App() {

  // console.log('Objects:', Object.values(icons))
  // const navIconArr = Object.values(icons)

  // console.log('arr:', navIconArr[0]);

  return (
    <div className='grid-container'>

      <header>
        <h1>David <span>O</span></h1>
        <Navbar />
      </header>

      <main>
        <section>

          <Resume />
          <Projects />
          <AboutMe />

        </section>
      </main>

      <footer>

      </footer>

    </div>
  );
}

export default App;
