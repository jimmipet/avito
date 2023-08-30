// import React, { useState, useEffect } from 'react';
// import { json } from 'react-router';

// function Api() {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     const fetchDate = async ()=>{
//         const responce= await fetch('https://www.freetogame.com/api/game?id=452');
//         const json = await responce.json();
//         setGames(json);
//     }
//     fetchDate();
//   },[]); // Пустой массив зависимостей для выполнения один раз при монтировании

//   console.log(games); // Выводим данные в консоль

//   return (
//     <div>
//       <h1>Fetching Data</h1>
//     </div>
//   );
// }

// export default Api;
