import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createElement } from "react";
import { render } from "react-dom";
import Sidebar from "./navbar.tsx" ;

const DemandeOffre = () => {
  const [autre, setautre] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [Description, setDescription] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
 
  const [startDate, setStartDate] = useState(null); // Etat pour la date d'entrée
  const [deadline, setDeadline] = useState(null); // Etat pour la deadline
 

  const [robotique, setRobotique] = useState(false);
  const [vente, setVente] = useState(false);
  const [electrique, setElectrique] = useState(false);
  const [maintenance, setMaintenance] = useState(false);
  const [Formation, setFormation] = useState(false);
  const [Mécanique, setMécanique] = useState(false);
  const [Automatisme, setAutomatisme] = useState(false);
  const [Invention, setInvention] = useState(false);
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ position: 'relative' }}>
    <div className="md:py-7px ">
     
    <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#005ba3", marginLeft: "400px" ,marginTop:"20px"}}>
      Demande D'offre
    </h2>
    <div className="md:py-07px" style={{ position: 'absolute', top: 0, left: 0 }}>
        <Sidebar />
      </div>
    <div
  className="md:py-20 pl-50 bg-white rounded-2xl shadow-1xl flex flex-col w-full"
  style={{
    justifyContent: "space-around",
    padding: "20px",
    margin: "20px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    width: "60%",
    marginLeft: "400px",
  }}
>
    <div>
    <div className="md:py-5 ml-10px grid grid-cols-1.5 gap-3">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
  <div style={{ width: "100%" ,marginLeft:"30px"}}>
    <h2 style={{ fontWeight: "bold",marginLeft:"10px" }}>Demande reçu par </h2>
        <div
        className="pt-5px ml-3 "
        style={{ 
         
          backgroundColor: "#f1f1f1",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          width: "30%",
        }}
      >
        <form>
          <label>
             Téléphone
            <input
              type="radio"
              value="Par Téléphone"
              checked={selectedOption === "Par Téléphone"}
              onChange={handleOptionChange}
            />
          </label>
          <br />
          <label>
            Email
            <input
              type="radio"
              value="Par Email"
              checked={selectedOption === "Par Email"}
              onChange={handleOptionChange}
            />
          </label>
          <br />
          <label>
            Perspection
            <input
              type="radio"
              value="Perspection"
              checked={selectedOption === "Perspection"}
              onChange={handleOptionChange}
            />
          </label>
          <br />
          <label>
            Autre
            <input
              type="radio"
              value="Autre"
              checked={selectedOption === "Autre"}
              onChange={handleOptionChange}
            />
          </label>
          <br />
        </form>
        
      </div>
        <div style={{ display: "flex",alignItems: "center",  marginTop: "40px" ,marginRight:"10px"}}>
              <label style={{ marginRight: "10px" }}>
                Date d'entrée:
                <br />
                <input 
                 type="date"
                 value={startDate}
                 onChange={(event) => setStartDate(event.target.value)}
                className="border border-black"
                  />
              </label>
              <label >
                Deadline: 
                <br />
                <input type="date" 
                 value={deadline}
                 onChange={(event) => setDeadline(event.target.value)}
                  dateFormat="dd/MM/yyyy"
                  className="border border-black"
                 />
              </label>
            </div>
            
           </div>
          
     
    </div>
    <div style={{ marginLeft: "30px", width: "80%" }}>
      <h2 style={{ fontWeight: "bold", marginRight: "20px" }}>Contact Client</h2>
      <div  
        style={{
          display: "flex", alignItems: "center" ,
          backgroundColor: "#f1f1f1",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          width: "60%",
        }}
      >
        
        <form>
          <label>
            Email:
            <input
             className=" px-2 m-2 py-1 w-4/5 md:w-full border-[1px] border-gray-300  focus:shadow-md focus:border-gray-400 focus:outline-none focus:ring-0"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
             className=" px-2 m-2 py-1 w-4/5 md:w-full border-[1px] border-gray-300  focus:shadow-md focus:border-gray-400 focus:outline-none focus:ring-0"
            
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <br />
          <label>
            Autre:
            <input
             className=" px-2 m-2 py-1 w-4/5 md:w-full border-[1px] border-gray-300  focus:shadow-md focus:border-gray-400 focus:outline-none focus:ring-0"
              type="text"
              value={autre}
              onChange={(e) => setautre(e.target.value)}
            />
          </label>
        </form>
        </div>
        </div>
       </div>
       </div>
      
        <div className="md:py-2 ml-10px grid grid-cols-1.2 gap-3">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
  <div style={{ width: "80%", marginLeft:"30px" }}>
    <h2 style={{ fontWeight: "bold" }}>Projet & Informations </h2>
    <div className="pt-5px ml-5 "
      style={{
        margin: "5px",
        backgroundColor: "#f1f1f1",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        
      }}
    >
      <form>
        <label>
          Responsable Projet:
          <input
            className="px-2 m-2 py-1 w-4/5 md:w-full border-[1px] border-gray-300 focus:shadow-md focus:border-gray-400 focus:outline-none focus:ring-0"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Nom Client:
          <input
            className="px-2 m-2 py-1 w-4/5 md:w-full border-[1px] border-gray-300 focus:shadow-md focus:border-gray-400 focus:outline-none focus:ring-0"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contact Client:
          <input
            className="px-2 m-2 py-1 w-4/5 md:w-full border-[1px] border-gray-300 focus:shadow-md focus:border-gray-400 focus:outline-none focus:ring-0"
            type="text"
            value={autre}
            onChange={(e) => setautre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Référence:
          <input
            className="px-2 m-2 py-1 w-4/5 md:w-full border-[1px] border-gray-300 focus:shadow-md focus:border-gray-400 focus:outline-none focus:ring-0"
            type="text"
            value={autre}
            onChange={(e) => setautre(e.target.value)}
          />
        </label>
      </form>
    </div>
  </div>
 
  </div>
  <div style={{ marginLeft: "30px", width: "80%" }}>
    <h2 style={{ fontWeight: "bold" }}>Description</h2>
    <div className="pt-5px"
      style={{
       
        marginLeft:"5px",
        backgroundColor: "#f1f1f1",
        border: "1px solid #ccc",
        borderRadius: "5px",
        
    
      }}
    >
      <textarea
        className="px-2 m-2 py-1 w-4/5 md:w-full border-[1px] border-gray-300 focus:shadow-md focus:border-gray-400 focus:outline-none focus:ring-0"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
</div>
</div>

<div>
  <h2 style={{ fontWeight: "bold", marginTop: "20px"  ,marginLeft:"30px" }}>Département</h2>
  <div style={{ display: "flex", flexDirection: "column" ,width:"80%", marginTop:"8px",marginLeft:"30px"}}>
  <div className="pt-5px"
      style={{
        padding:"20px",
        marginLeft:"5px",
        backgroundColor: "#f1f1f1",
        border: "1px solid #ccc",
        borderRadius: "5px",
        
    
      }}
    >
    <label style={{ marginRight: "10px" }}>
      <input
        type="checkbox"
        value="robotique"
        checked={robotique}
        onChange={() => setRobotique(!robotique)}
      />
      Robotique
    </label>
    <label style={{ marginRight: "10px" }}>
      <input
        type="checkbox"
        value="Inventione"
        checked={Invention}
        onChange={() => setInvention(!Invention)}
      />
      Invention
    </label>
    <label style={{ marginRight: "10px" }}>
      <input
        type="checkbox"
        value="Automatisme"
        checked={ Automatisme}
        onChange={() => setAutomatisme(!Automatisme)}
      />
      Automatisme
    </label>
    <label style={{ marginRight: "10px" }}>
      <input
        type="checkbox"
        value="Mécaniquee"
        checked={Mécanique}
        onChange={() => setMécanique(!Mécanique)}
      />
      Mécanique
    </label>
    <br/>
    <label style={{ marginRight: "10px" }}>
      <input
        type="checkbox"
        value="électrique"
        checked={electrique}
        onChange={() => setElectrique(!electrique)}
      />
      Électrique
    </label>
    <label style={{ marginRight: "10px" }}>
      <input
        type="checkbox"
        value="vente"
        checked={vente}
        onChange={() => setVente(!vente)}
      />
      Vente
    </label>
 
    <label style={{ marginRight: "10px" }}>
      <input
        type="checkbox"
        value="maintenance"
        checked={maintenance}
        onChange={() => setMaintenance(!maintenance)}
      />
      Maintenance
    </label>
    <label style={{ marginRight: "10px" }}>
      <input
        type="checkbox"
        value="Formation"
        checked={Formation}
        onChange={() => setFormation(!Formation)}
      />
    Formation
    </label>
    </div>
  </div>
</div>
<div style={{ display: "flex", alignItems: "center" ,marginTop:"8px" ,marginLeft:"30px"}}>
      <h2 style={{ fontWeight: "bold", marginRight: "20px" }}>Equipe</h2>
<button
    
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        cursor: "pointer",
      }}
     
    >
      <FaPlus size={20} />
    </button>
    </div>
</div>

    </div>
 </div>
  );
};

export default DemandeOffre;