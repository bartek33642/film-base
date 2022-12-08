import './App.css';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Movies from './components/Movies';

function App() {

  const movies = [
    {
      title: "Forrest Gump",
      imgPath: "https://fwcdn.pl/fpo/09/98/998/8021615.3.jpg",
      description: "Historia życia Forresta, chłopca o niskim ilorazie inteligencji z niedowładem kończyn, który staje się miliarderem i bohaterem wojny w Wietnamie.",
      genre: "Dramat, Komedia",
      casts: "Tom Hanks, Robin Wright, Sally Field, Gary Sinse, Mykelti Williamson",
      grade: "9/10",
      year: "1994",
      star: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-black-starstargeometricallydecagonconcavestardomclipartblack-1421526502766dkgv4.png&f=1&nofb=1&ipt=119d395e93cef9b1e6efe711536373b9beb8e6b773605c1fed473c4483fa7977&ipo=images",
    },
    {
      title: "Pianista",
      imgPath: "https://fwcdn.pl/fpo/22/25/32225/7229614.3.jpg",
      description: "Podczas drugiej wojny światowej Władysław Szpilman, znakomity polski pianista, stara się przeżyć w okupowanej Warszawie.",
      genre: "Biograficzny, Dramat, Wojenny",
      casts: "Adrien Brody, Thomas Kretschmann, Emilia Fox, Maureen Lipman, Jessica Kate Meyer, Julia Rayner",
      grade: "8/10",
      year: "2002",
      star: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-black-starstargeometricallydecagonconcavestardomclipartblack-1421526502766dkgv4.png&f=1&nofb=1&ipt=119d395e93cef9b1e6efe711536373b9beb8e6b773605c1fed473c4483fa7977&ipo=images",
    },
    {
      title: "Interstellar",
      imgPath: "https://fwcdn.pl/fpo/56/29/375629/7736099.3.jpg",
      description: "Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych. Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.",
      genre: "Sci-Fi",
      casts: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine, Ellen Burstyn",
      grade: "8/10",
      year: "2014",
      star: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-black-starstargeometricallydecagonconcavestardomclipartblack-1421526502766dkgv4.png&f=1&nofb=1&ipt=119d395e93cef9b1e6efe711536373b9beb8e6b773605c1fed473c4483fa7977&ipo=images",
    },
    {
      title: "Skazani na Shawshank",
      imgPath: "https://fwcdn.pl/fpo/10/48/1048/6925401.3.jpg",
      description: "Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.",
      genre: "Dramat",
      casts: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler,  Clancy Brown, Gil Bellows",
      grade: "8/10",
      year: "1994",
      star: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-black-starstargeometricallydecagonconcavestardomclipartblack-1421526502766dkgv4.png&f=1&nofb=1&ipt=119d395e93cef9b1e6efe711536373b9beb8e6b773605c1fed473c4483fa7977&ipo=images",
    }
  ]

  return (

    <div className="App">
      <div className='top-side'>
    <Logo />
        <Navbar />
      </div>
      <div className='movie-section-fill'>
        {movies.map((movie) => <Movies imgPath={movie.imgPath} title={movie.title} description={movie.description} genre={movie.genre} casts={movie.casts} grade={movie.grade} year={movie.year} star={movie.star}/> )}
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
