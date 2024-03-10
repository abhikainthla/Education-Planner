import React, { useState } from 'react';
import './Main.css';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

function Main() {
  const [subject, setSubject] = useState('');
  const [hour, setHour] = useState('');
  const [plan, setPlan] = useState([]);

  const handleAddToPlan = () => {
    if (!subject || !hour){ 
        alert("Missing input");
        return;
    }

    const newCard = {
      subject: subject,
      hour: hour
    };

    setPlan([...plan, newCard]);
    setSubject('');
    setHour('');
  };

  const handleRemoveFromPlan = (index) => {
    const updatedPlan = [...plan];
    updatedPlan.splice(index, 1);
    setPlan(updatedPlan);
  };

  
  const minusHour = (index) => {
    const updatedPlan = [...plan];
    let hou = parseInt(updatedPlan[index].hour);
    if (hou > 0) {
      updatedPlan[index].hour = (hou - 1).toString();
      setPlan(updatedPlan);
    }
  };

  const plusHour = (index) => {
    const updatedPlan = [...plan];
    updatedPlan[index].hour = (parseInt(updatedPlan[index].hour) + 1).toString();
    setPlan(updatedPlan);
  };

  return (
    <div className='main'>
      <div>
        <h1>Geekster Education Planner</h1>
      </div>
      <section className="container">
        <div className='input-field'>
          <input
            type='text'
            placeholder='Subject'
            id='subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type='number'
            placeholder='Hours'
            id='hour'
            min={1}
            max={24}
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
          <button onClick={handleAddToPlan} className='btn'>Add to Plan</button>
        </div>
      </section>
      <section className='cards'>
        <table>
          <tbody>
            {plan.map((card, index) => (
              <tr key={index}>
                <td id='sub'>{card.subject}</td>
                <td id='time'>{card.hour} hours</td>
                <td><button className='minus' onClick={() => minusHour(index)}><RiSubtractFill/></button></td>
                <td><button className='plus' onClick={() => plusHour(index)}><IoMdAdd/></button></td>
                <td><buttonc className='delete' onClick={() => handleRemoveFromPlan(index)}><MdDeleteForever /></buttonc></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Main;