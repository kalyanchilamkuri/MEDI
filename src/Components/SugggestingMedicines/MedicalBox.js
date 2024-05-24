import Headdis from "./Hddis.jsx"
import { useState } from "react";
import './MedicalBox.css'
export default function MedicineBox(){
  let [dis,setdis]=useState("This is discription about medicines");
  let [med,setmed]=useState("These are the medicines to be taken");
  let [related,setrelated]=useState("These are the related queries before based on data in database")

  async function head (){
    let hd= document.querySelector("#prohead");
    let hc= document.querySelector("#procnt");
    hd.innerText=hc.value;
    let nam=hc.value;
     try{
      let res= await fetch("http://localhost:8080/service/"+nam);
      if (!res.ok) {

        throw new Error('Network response was not ok ' + res.statusText);
      }
      const data = await res.json();
      setmed(data.med);
      if(nam=="fever"){
        setdis(`For ${nam}: Rest and Hydration: Get plenty of rest and drink fluids like water, herbal tea, or broth to stay hydrated and aid recovery.
        Medication: Take over-the-counter fever-reducing medication like ibuprofen or acetaminophen as directed by your healthcare provider.
        Cool Compress: Apply a cool, damp cloth to your forehead or take a lukewarm bath to help lower your body temperature.
        Monitor Symptoms: Keep track of your temperature and any other symptoms. Contact a healthcare professional if your fever persists or worsens.
        Seek Medical Attention: If your fever is accompanied by severe symptoms like difficulty breathing, chest pain, or confusion, seek medical attention immediately.`)
      }
      else{
        setdis(`For ${nam}: Stay Hydrated: Drink plenty of fluids such as water, herbal tea, or clear broth to stay hydrated and help relieve congestion.
        Rest: Get plenty of rest to help your body recover and strengthen your immune system.
        Steam Inhalation: Inhale steam from a bowl of hot water or take a hot shower to help relieve nasal congestion and soothe your throat.
        Over-the-Counter Medication: Consider taking over-the-counter cold medications such as decongestants, antihistamines, or pain relievers to alleviate symptoms. Always follow the recommended dosage instructions.
        Warm Soups and Herbal Remedies: Enjoy warm soups or try herbal remedies like honey and lemon tea or ginger tea to help soothe your throat and alleviate symptoms`)
      }
      setrelated(data.realted);

     }
     catch(e){
      alert("unable to fetch : "+e);
     }
  }
    return(
        <>
        <h1>Suggesting Medicines</h1>
        <div id="MediBox">
            
          <div id="Hdleft">
          <div id="problem">
            <p onClick={head} id="prohead">Problem Statement: </p>
            <input id="procnt" type="text" name="problm" placeholder="Enter your problem "/>
          </div>
            <Headdis id="pt0" head="Discription & Suggestion" dis={dis} heigh={400} />
          </div>
            <div id="Hdright">
            <Headdis id="pt1" head="Medicines" dis={med} heigh={200}/> 
            <Headdis id="pt2" head="Related problem query before" dis={related} heigh={300} />
            <Headdis id="pt3" head="Reciept for this related problem" dis="This is based on the data which will be stored in database and if it exists selects the best match and displays" heigh={300} />
            </div>
        </div>
        </>
    )
}