const allProjects = [
    {
        "id":1,
        "tag":"UX/UI CASE STUDY 001",
        "name":`Blocks`,
        "text":`The best app to organize every area of your life! Connect your tasks, habits & schedule in one place!`,
        "image":"/img/recent_project-1.jpg",
    },
    {
        "id":2,
        "tag":"UX/UI CASE STUDY 002",
        "name":`YL Lamps`,
        "text":`YL lamps is a responsive website for a lamps e-commerce, with the objective of facilitating the user in choosing the correct lamp for them, based on great filters, clear design and an articles section.`,
        "image":"/img/recent_project-2.jpg",
    },
    {
        "id":3,
        "tag":"UX/UI CASE STUDY 003",
        "name":`Easy Help`,
        "text":`Easy help is a social good mobile app for joining, donating or creating volunteering events, with the main objective of simplifying all these actions so anyone in the community can easily help others. It also has it’s own responsive website where all the events and blog entries from the community are shown.`,
        "image":"/img/recent_project-3.jpg",
    },
    {
        "id":4,
        "tag":"UI CHALLENGE",
        "name":`Figma Challenge`,
        "text":`The best app to organize every area of your life! Connect your tasks, habits & schedule in one place!`,
        "image":"/img/other_projects-figmaCh.png",
    },
    {
        "id":5,
        "tag":"PROGRAMMING",
        "name":`Frontend Challenge`,
        "text":`The best app to organize every area of your life! Connect your tasks, habits & schedule in one place!`,
        "image":"/img/other_projects-frontendCh.png",
    },
];

/*
1- clickeas boton
2- boton cambia el local storage y carga la pagina
3- Al cargar la pagina, actualiza la informacion en base al localStorage

4- Boton next / last project: Cambia el ID, y actualiza la pagina

*/










/*
//window.onload = updateContent();



function updateContent () {
  const selectedButtonId = localStorage.getItem('selectedButtonId');

  const data = allProjects.find(item => item.id === selectedButtonId);

  if (!data) {
    document.getElementById('contentTitle').innerText = 'Content not found.';
    document.getElementById('contentDescription').innerText = '';
    return;
  }


  document.querySelectorAll(".single__project-img").innerText = data.img;
  document.querySelectorAll(".single__project-name").innerText = data.name;
  document.querySelectorAll(".single__project-text").innerText = data.text;
  document.querySelectorAll(".single__project-tag").innerText = data.tag;

}





function updateId(buttonId) {
  localStorage.setItem('selectedButtonId', buttonId);
  window.location.href = "single_project.html"  
}






// Check if a selected button ID is stored in localStorage
const selectedButtonId = localStorage.getItem('selectedButtonId');






// Function to update the content based on the selected button
function updateContent(buttonId) {
  const data = allProjects.find(item => item.id === buttonId);


  if (!data) {
    document.getElementById('contentTitle').innerText = 'Content not found.';
    document.getElementById('contentDescription').innerText = '';
    return;
  }

  document.querySelector(".single__project-text").innerText = data.text;
  document.querySelector(".single__project-img").src = data.img;
  document.querySelector(".single__project-name").innerText = data.name;
  document.querySelector(".single__project-tag").innerText = data.tag;


  // Store the selected button ID in localStorage
  localStorage.setItem('selectedButtonId', buttonId);
  window.location.href = "single_project.html"  
}



// If there is a selected button ID, update the content accordingly
if (selectedButtonId) {
  updateContent(selectedButtonId);
}
*/