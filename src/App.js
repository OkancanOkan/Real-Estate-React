import {Routes, Route} from 'react-router-dom';

import FormProje from "./FormProje";
import FormCalisan from "./FormCalisan";
import FormMusteri from "./FormMusteri";
import FormDaire from "./FormDaire";
import FormSatis from "./FormSatis";
import FormZiyaret from "./FormZiyaret";
import ListeZiyaret from "./ListeZiyaret";
import ListeCalisan from "./ListeCalisan";
import ListeDaire from "./ListeDaire";
import ListeMusteri from "./ListeMusteri";
import ListeProje from "./ListeProje";
import ListeSatis from "./ListeSatis";
import ListeSehir from "./ListeSehir";
import ListeProjeDurumu from "./ListeProjeDurumu";
import ListeDaireTipi from "./ListeDaireTipi";
import ListeCinsiyet from "./ListeCinsiyet";
import ListeGelirTipi from "./ListeGelirTipi";
import Deneme from "./Deneme";
import Login from "./Login";
import Home from  "./Home";
import GuncelleMusteriList from './GuncelleMusteriLİst';






function App() {
  return (

   <Routes>
     <Route path="/FormProje" element={<FormProje/>}/>
     <Route path="/FormCalisan" element={<FormCalisan/>}/>
     <Route path="/FormMusteri" element={<FormMusteri/>}/>
     <Route path="/FormDaire" element={<FormDaire/>}/>
     <Route path="/FormSatis" element={<FormSatis/>}/>
     <Route path="/FormZiyaret" element={<FormZiyaret/>}/>
     <Route path="/ListeZiyaret" element={<ListeZiyaret/>}/>
     <Route path="/ListeCalisan" element={<ListeCalisan/>}/>
     <Route path="/ListeDaire" element={<ListeDaire/>}/>
     <Route path="/ListeMusteri" element={<ListeMusteri/>}/>
     <Route path="/ListeProje" element={<ListeProje/>}/>
     <Route path="/ListeSatis" element={<ListeSatis/>}/>
     <Route path="/ListeSehir" element={<ListeSehir/>}/>
     <Route path="/ListeProjeDurumu" element={<ListeProjeDurumu/>}/>
     <Route path="/ListeDaireTipi" element={<ListeDaireTipi/>}/>
     <Route path="/ListeCinsiyet" element={<ListeCinsiyet/>}/>
     <Route path="/ListeGelirTipi" element={<ListeGelirTipi/>}/>
     <Route path="/Deneme" element={<Deneme/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path='/' element={<Home/>}/>
     <Route path="/GuncelleMusteriList" element={<GuncelleMusteriList/>}/>









     


   </Routes>
    

  );
}

export default App;
