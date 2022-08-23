import React from 'react';

const Home = () => {
  return (
    <div id="homeContainer" >
      <img src={`${process.env.PUBLIC_URL}/assets/home/PutriNurhaliza.jpg`} alt="me" className='img-fluid' />
      <h1>Hello!</h1>
      <h2>Putri Nurhaliza</h2>
      <p>A 3rd year student who is passionate in Software Engineering.
        Contributed to several projects of web/app development, robotics, and digital marketing.
        Able to work well in a team with leadership and fast learning skills.</p>
    </div>
  )
}

export default Home