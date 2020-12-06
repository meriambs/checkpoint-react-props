
import ProfilCompoment from './compoment/profile/profilCompoment';


function App() {
  return (
     <div className="App">
    {/* //   <header className="App-header">
    //     
    //   </header> */}

    <ProfilCompoment name="Meriam" bio="doing many things and nothing"  profession="ingenieur en biologie industrielle">
     <img src="./img/photo-de-profil.jpg" />
    </ProfilCompoment>
    
    </div>
  );
}

export default App;
