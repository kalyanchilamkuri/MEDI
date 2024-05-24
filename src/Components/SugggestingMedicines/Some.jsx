import React, { useState } from 'react';

function Some() {
  const [fromDistance, setFromDistance] = useState(0);
  const [toDistance, setToDistance] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const hospitals = [
    {
      name: 'Indira Gandhi Hospital',
      address: '123 Gomti Nagar, Lucknow',
      averageCost: '₹5000',
      distance: 5,
      doctors: [
        { name: 'Dr. Rajesh Sharma', specialization: 'Cardiology', appointments: 10, avgTime: 30 },
        { name: 'Dr. Priya Singh', specialization: 'Neurology', appointments: 8, avgTime: 25 },
        { name: 'Dr. Anjali Verma', specialization: 'Orthopedics', appointments: 12, avgTime: 20 },
        { name: 'Dr. Amit Kumar', specialization: 'Pediatrics', appointments: 15, avgTime: 15 },
        { name: 'Dr. Niharika Gupta', specialization: 'General Surgery', appointments: 7, avgTime: 45 },
      ],
    },
    {
      name: 'Apollo Hospital',
      address: '456 Hazratganj, Lucknow',
      averageCost: '₹8000',
      distance: 7,
      doctors: [
        { name: 'Dr. Sunil Verma', specialization: 'Cardiology', appointments: 20, avgTime: 40 },
        { name: 'Dr. Sunita Mishra', specialization: 'Neurology', appointments: 18, avgTime: 35 },
        { name: 'Dr. Manish Singh', specialization: 'Orthopedics', appointments: 22, avgTime: 25 },
        { name: 'Dr. Renuka Yadav', specialization: 'Pediatrics', appointments: 25, avgTime: 20 },
        { name: 'Dr. Anurag Gupta', specialization: 'General Surgery', appointments: 17, avgTime: 50 },
      ],
    },
    {
      name: 'Sahara Hospital',
      address: '789 Alambagh, Lucknow',
      averageCost: '₹6000',
      distance: 9,
      doctors: [
        { name: 'Dr. Abhishek Tiwari', specialization: 'Cardiology', appointments: 11, avgTime: 30 },
        { name: 'Dr. Ananya Singh', specialization: 'Neurology', appointments: 9, avgTime: 25 },
        { name: 'Dr. Manoj Kumar', specialization: 'Orthopedics', appointments: 13, avgTime: 20 },
        { name: 'Dr. Neha Srivastava', specialization: 'Pediatrics', appointments: 16, avgTime: 15 },
        { name: 'Dr. Vikas Singh', specialization: 'General Surgery', appointments: 8, avgTime: 45 },
      ],
    },
    {
      name: 'Lucknow Medical Center',
      address: '567 Vikas Nagar, Lucknow',
      averageCost: '₹4500',
      distance: 12,
      doctors: [
        { name: 'Dr. Ramesh Yadav', specialization: 'Cardiology', appointments: 10, avgTime: 30 },
        { name: 'Dr. Arpita Singh', specialization: 'Neurology', appointments: 12, avgTime: 25 },
        { name: 'Dr. Pradeep Gupta', specialization: 'Orthopedics', appointments: 15, avgTime: 20 },
        { name: 'Dr. Nisha Sharma', specialization: 'Pediatrics', appointments: 20, avgTime: 15 },
        { name: 'Dr. Vikrant Singh', specialization: 'General Surgery', appointments: 9, avgTime: 45 },
      ],
    },
    {
      name: 'Sanjeevani Hospital',
      address: '890 Ashiyana, Lucknow',
      averageCost: '₹5500',
      distance: 15,
      doctors: [
        { name: 'Dr. Sameer Verma', specialization: 'Cardiology', appointments: 19, avgTime: 35 },
        { name: 'Dr. Pooja Singh', specialization: 'Neurology', appointments: 21, avgTime: 30 },
        { name: 'Dr. Rakesh Gupta', specialization: 'Orthopedics', appointments: 17, avgTime: 25 },
        { name: 'Dr. Simran Khanna', specialization: 'Pediatrics', appointments: 22, avgTime: 20 },
        { name: 'Dr. Pranav Mishra', specialization: 'General Surgery', appointments: 13, avgTime: 50 },
      ],
    },
    {
      name: 'City Hospital',
      address: '234 Faizabad Road, Lucknow',
      averageCost: '₹7000',
      distance: 17,
      doctors: [
        { name: 'Dr. Deepak Sharma', specialization: 'Cardiology', appointments: 14, avgTime: 30 },
        { name: 'Dr. Nidhi Singh', specialization: 'Neurology', appointments: 10, avgTime: 25 },
        { name: 'Dr. Manpreet Kaur', specialization: 'Orthopedics', appointments: 13, avgTime: 20 },
        { name: 'Dr. Arvind Kumar', specialization: 'Pediatrics', appointments: 19, avgTime: 15 },
        { name: 'Dr. Anjali Dubey', specialization: 'General Surgery', appointments: 11, avgTime: 45 },
      ],
    },
    {
      name: 'Lucknow Advanced Hospital',
      address: '345 Gomti Nagar, Lucknow',
      averageCost: '₹7500',
      distance: 20,
      doctors: [
        { name: 'Dr. Ravi Verma', specialization: 'Cardiology', appointments: 16, avgTime: 35 },
        { name: 'Dr. Neha Gupta', specialization: 'Neurology', appointments: 18, avgTime: 30 },
        { name: 'Dr. Ankit Singh', specialization: 'Orthopedics', appointments: 20, avgTime: 25 },
        { name: 'Dr. Sangeeta Rai', specialization: 'Pediatrics', appointments: 25, avgTime: 20 },
        { name: 'Dr. Vikas Verma', specialization: 'General Surgery', appointments: 15, avgTime: 50 },
      ],
    },
    {
      name: 'Lilavati Hospital',
      address: '678 Mahanagar, Lucknow',
      averageCost: '₹6500',
      distance: 22,
      doctors: [
        { name: 'Dr. Anand Sharma', specialization: 'Cardiology', appointments: 12, avgTime: 30 },
        { name: 'Dr. Sonali Verma', specialization: 'Neurology', appointments: 14, avgTime: 25 },
        { name: 'Dr. Pawan Kumar', specialization: 'Orthopedics', appointments: 18, avgTime: 20 },
        { name: 'Dr. Sneha Singh', specialization: 'Pediatrics', appointments: 22, avgTime: 15 },
        { name: 'Dr. Rahul Gupta', specialization: 'General Surgery', appointments: 10, avgTime: 45 },
      ],
    },
    {
      name: 'Nirvana Hospital',
      address: '789 Jankipuram, Lucknow',
      averageCost: '₹6000',
      distance: 25,
      doctors: [
        { name: 'Dr. Amit Singh', specialization: 'Cardiology', appointments: 15, avgTime: 30 },
        { name: 'Dr. Reena Sharma', specialization: 'Neurology', appointments: 16, avgTime: 25 },
        { name: 'Dr. Akash Verma', specialization: 'Orthopedics', appointments: 20, avgTime: 20 },
        { name: 'Dr. Pooja Yadav', specialization: 'Pediatrics', appointments: 23, avgTime: 15 },
        { name: 'Dr. Rajeev Singh', specialization: 'General Surgery', appointments: 12, avgTime: 45 },
      ],
    },
    {
      name: 'Medanta Hospital',
      address: '890 Kalyanpur, Lucknow',
      averageCost: '₹8000',
      distance: 30,
      doctors: [
        { name: 'Dr. Ashish Kumar', specialization: 'Cardiology', appointments: 18, avgTime: 35 },
        { name: 'Dr. Aarti Singh', specialization: 'Neurology', appointments: 20, avgTime: 30 },
        { name: 'Dr. Mohit Verma', specialization: 'Orthopedics', appointments: 22, avgTime: 25 },
        { name: 'Dr. Sakshi Sharma', specialization: 'Pediatrics', appointments: 25, avgTime: 20 },
        { name: 'Dr. Akshay Gupta', specialization: 'General Surgery', appointments: 15, avgTime: 50 },
      ],
    },
  ];

  const ratings = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐']; // Ratings symbols

  const filteredHospitals = hospitals.filter(
    (hospital) => hospital.distance >= fromDistance && hospital.distance <= toDistance
  );

  const handleSearch = () => {
    setShowResults(true); // Set showResults to true when search button is clicked
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff', borderRadius: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid black', padding: '10px',marginLeft:'30%', marginRight: '50px', borderRadius: '20px', fontSize: '16px' }}>
          <div style={{ marginRight: '5px' }}>From:</div>
          <input
            type="text"
            value={fromDistance}
            onChange={(e) => setFromDistance(parseInt(e.target.value) || 0)}
            style={{ width: '60px', textAlign: 'right', marginLeft: '50px', borderRadius: '10px', fontSize: '16px', padding: '15px' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid black', padding: '10px', marginRight: '50px', borderRadius: '20px', fontSize: '16px' }}>
          <div style={{ marginRight: '5px' }}>To:</div>
          <input
            type="text"
            value={toDistance}
            onChange={(e) => setToDistance(parseInt(e.target.value) || 0)}
            style={{ width: '60px', textAlign: 'right', marginLeft: '50px', borderRadius: '10px', fontSize: '16px', padding: '15px' }}
          />
        </div>
        <button onClick={handleSearch} style={{ fontSize: '20px', marginLeft: '20px', backgroundColor: '#007bff', border: 'none', borderRadius: '20px', color: 'white', padding: '10px 20px' }}>Search</button>
      </div>
      {showResults && (
        <div>
          <h1 style={{ textAlign: 'center' }}>Hospitals in Range</h1>
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital, index) => (
              <div key={index} style={{  marginTop:'40px', marginBottom:'30px', backgroundColor: '#e9ecef', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', border: '3px solid #007bff', textAlign: 'center', margin: '0 auto', width: '60%' }}>
                <h4 style={{ textAlign: 'center', fontSize: '40px' }}>{hospital.name}</h4>
                <p style={{ fontSize: '18px' }}><strong>Address:</strong> {hospital.address}</p>
                <p style={{ fontSize: '18px' }}><strong>Average Cost:</strong> {hospital.averageCost}</p>
                <h5 style={{ fontSize: '20px', marginBottom: '10px' }}>Doctors:</h5>
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {hospital.doctors.map((doctor, docIndex) => (
                    <li key={docIndex} style={{ marginBottom: '10px', marginRight: '10px', backgroundColor: '#fff', borderRadius: '10px', padding: '10px', border: '2px solid #007bff', width: '45%' }}>
                      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{doctor.name}</div>
                      <div style={{ fontSize: '16px' }}>({doctor.specialization})</div>
                      <div style={{ fontSize: '16px' }}>Appointments: {doctor.appointments}</div>
                      <div style={{ fontSize: '16px' }}>Average Time: {doctor.avgTime} mins</div>
                      <div style={{ fontSize: '18px', color: '#ffd700', marginTop: '5px' }}>{ratings[Math.floor(Math.random() * ratings.length)]}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', fontSize: '18px' }}>No hospitals in range</div>
          )}
        </div>
      )}
      <div style={{ marginTop: '20px', borderTop: '1px solid black', paddingTop: '10px' }}>
        <h4 style={{ fontSize: '20px' }}>Distances Below Chosen Range:</h4>
        {hospitals.map((hospital, index) => (
          hospital.distance < fromDistance && (
            <span key={index} style={{ marginRight: '10px', display: 'inline-block', padding: '5px 10px', backgroundColor: '#e0e0e0', borderRadius: '5px', marginBottom: '5px' }}>{hospital.distance} km</span>
          )
        ))}
      </div>
    </div>
  );
}

export default Some;