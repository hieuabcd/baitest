let text = document.getElementById("title");
let position = window.innerWidth;

setInterval(function () {
  position -= 2;
  text.style.left = position + "px";

  if (position < -text.offsetWidth) {
    position = window.innerWidth;
  }
}, 20);

// Promise.all([
//   fetch('https://api.api-ninjas.com/v2/randomuser?count=30',{
//     headers: {
//       'X-Api-Key' : 'QY5nR0ON7m7co7bAhxbPVsSSgDoKysuCmkYKkJEw'
//     }
// }).then(res => res.json()),

// fetch('https://api.api-ninjas.com/v1/loremipsum?paragraphs=2',{
//   headers:{
//           'X-Api-Key' : 'QY5nR0ON7m7co7bAhxbPVsSSgDoKysuCmkYKkJEw'
//   }
// }).then(res=>res.json())
// ])
// .then(([users,lorems]) => {
//   const tablebody = document.getElementById('table');
//   let rows = '';
//   users.map(user => {
//     rows += `
//     <tr>
//       <td>${user.id}</td>
//       <td>${user.first_name}</td>
//       <td>${user.last_name}</td>
//       <td>${user.age}</td>
//       <td>${lorems.text}</td>

//     </tr>
//     `;
//   });
//   tablebody.innerHTML = rows
// })

// fetch('https://api.api-ninjas.com/v2/randomuser?count=1',{
//     headers: {
//       'X-Api-Key' : 'QY5nR0ON7m7co7bAhxbPVsSSgDoKysuCmkYKkJEw'
//     }
// }).then(res => res.json())
// .then(users=>{
//   const tablebody = document.getElementById('table');
//   let rows = '';
//   users.map(user => {
//     rows += `
//     <tr>
//       <td>${user.id}</td>
//       <td>${user.first_name}</td>
//       <td>${user.last_name}</td>
//       <td>${user.age}</td>
//     </tr>
//     `;
//   });
//   tablebody.innerHTML = rows
// })

// fetch('https://api.api-ninjas.com/v2/randomuser?count=30',{
//     headers: {
//       'X-Api-Key' : 'QY5nR0ON7m7co7bAhxbPVsSSgDoKysuCmkYKkJEw'
//     }
// }).then(res => res.json())
// .then(users => {
//    fetch('https://api.api-ninjas.com/v1/loremipsum?paragraphs=1&max_length=4&random=30',{
//   headers:{
//           'X-Api-Key' : 'QY5nR0ON7m7co7bAhxbPVsSSgDoKysuCmkYKkJEw'
//   }
// }).then(res=>res.json())
// .then(lorems=>{
//   const tablebody = document.getElementById('table');
//   let rows = '';
//   users.map(user => {
//     rows += `
//     <tr>
//       <td>${user.id}</td>
//       <td>${user.first_name}</td>
//       <td>${user.last_name}</td>
//       <td>${user.age}</td>
//       <td>${lorems.text}</td>

//     </tr>
//     `;
//   });
//   tablebody.innerHTML = rows
// })
// })

// async function loadData() {
//   const userRes = await fetch(
//     "https://api.api-ninjas.com/v2/randomuser?count=30",
//     {
//       headers: {
//         "X-Api-Key": "QY5nR0ON7m7co7bAhxbPVsSSgDoKysuCmkYKkJEw",
//       },
//     },
//   );

//   const users = await userRes.json();

//   let rows = "";

//   for (let user of users) {
//     const loremRes = await fetch(
//       "https://api.api-ninjas.com/v1/loremipsum?paragraphs=2&max_length=9&random=100",
//       {
//         headers: {
//           "X-Api-Key": "QY5nR0ON7m7co7bAhxbPVsSSgDoKysuCmkYKkJEw",
//         },
//       },
//     );

//     const lorem = await loremRes.json();

//     rows += `
//       <tr>
//         <td>${user.id}</td>
//         <td>${user.first_name}</td>
//         <td>${user.last_name}</td>
//         <td>${user.age}</td>
//         <td>${lorem.text}</td>
//       </tr>
//     `;
//   }

//   document.getElementById("table").innerHTML = rows;
// }

// loadData();



async function get100user() {

  const headers = {
        'X-Api-Key' : 'QY5nR0ON7m7co7bAhxbPVsSSgDoKysuCmkYKkJEw'
  };

  const requests = [
    fetch('https://api.api-ninjas.com/v2/randomuser?count=30', { headers }),
    fetch('https://api.api-ninjas.com/v2/randomuser?count=30', { headers }),
    fetch('https://api.api-ninjas.com/v2/randomuser?count=30', { headers }),
    fetch('https://api.api-ninjas.com/v2/randomuser?count=10', { headers })
  ];

  const responses = await Promise.all(requests);

  const data = await Promise.all(
    responses.map(res => res.json())
  );

  const users = data.flat();

  let rows = "";
  
  users.map((user,index) => {
    if(user.age == 60){
       rows += `
      <tr>
        <td>${index + 1} </td>
        <td>${user.id}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.age}</td>
        <td>${generateRandomString(8)}</td>

      </tr>
    `;
    }
  });

  document.getElementById("table").innerHTML = rows;
}

get100user()


function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

