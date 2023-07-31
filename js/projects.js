const recentWorks = [
    {
        "id":"blocks",
        "tag":"UX/UI CASE STUDY 001",
        "name":`Blocks`,
        "text":`The best app to organize every area of your life! Connect your tasks, habits & schedule in one place!`,
        "image":"./img/recent_project-1.jpg",
        "button": "read more",
    },
    {
        "id":"yllamps",
        "tag":"UX/UI CASE STUDY 002",
        "name":`YL Lamps`,
        "text":`The best app to organize every area of your life! Connect your tasks, habits & schedule in one place!`,
        "image":"./img/recent_project-2.jpg",
        "button": "read more",
        
    },
    {
        "id":"easyhelp",
        "tag":"UX/UI CASE STUDY 003",
        "name":`Easy Help`,
        "text":`The best app to organize every area of your life! Connect your tasks, habits & schedule in one place!`,
        "image":"./img/recent_project-3.jpg",
        "button": "read more",

    },
]
const otherWorks = [
    {
        "id": "uichallenge",
        "tag":"UI CHALLENGE",
        "name":`Figma Challenge`,
        "text":`The best app to organize every area of your life! Connect your tasks, habits & schedule in one place!`,
        "image":"./img/other_projects-figmaCh.png",
        "button": "go to page",
    },
    {
        "id": "frontendchallenge",
        "tag":"PROGRAMMING",
        "name":`Frontend Challenge`,
        "text":`The best app to organize every area of your life! Connect your tasks, habits & schedule in one place!`,
        "image":"./img/other_projects-frontendCh.png",
        "button": "go to page",
    },
]


const recent_container = document.querySelector(".recent__projects");
const other_container = document.querySelector(".other__projects");


//load items
window.addEventListener('DOMContentLoaded', function(){
    displayRecentItems(recentWorks);
    displayOtherItems(otherWorks);
  });



  /* dynamic displays */
function displayRecentItems(menuItems){
    let counter = 1;
    let displayMenu = menuItems.map(function(item){
        if(counter % 2 !== 0){
            counter += 1;
        return `
        <article class=" mycard wow fadeInUp" data-wow-delay="0.2s">
            <div class="mytag">
                <p>${item.tag}</p>
            </div>
            <div class="cardbody">
                <h2>${item.name}</h2>
                <p class="body2">${item.text}</p>
                <button class="btn__primary" onclick= changeSingle("${item.id}")> ${item.button}</button>
            </div>
            <div class="cardhead">
                <img src=${item.image} alt="image">
            </div>
        </article>
        `
        }
        else {
        counter += 1;
        return `
        <article class="mycard wow fadeInUp" data-wow-delay="0.2s">
            <div class="cardhead">
                <img src=${item.image} alt="image">
            </div>
            <div class="cardbody">
                <h2>${item.name}</h2>
                <p class="body2">${item.text}</p>
                <button class="btn__primary" onclick= changeSingle("${item.id}") > ${item.button}</button>
            </div>
            <div class="mytag_r">
                <p>${item.tag}</p>
            </div>
        </article>        
        `
        }
    }).join("");
    recent_container.innerHTML = displayMenu;
}

function displayOtherItems(menuItems){
    let counter = 1;
    let displayMenu = menuItems.map(function(item){
        if(counter % 2 !== 0){
            counter += 1;
        return `
        <article class=" mycard wow fadeInUp" data-wow-delay="0.2s">
            <div class="mytag">
                <p>${item.tag}</p>
            </div>
            <div class="cardbody">
                <h2>${item.name}</h2>
                <p class="body2">${item.text}</p>
                <button class="btn__primary" onclick= changeSingle("${item.id}") > ${item.button}</button>
            </div>
            <div class="cardhead">
                <img src=${item.image} alt="image">
            </div>
        </article>
        `
        }
        else {
        counter += 1;
        return `
        <article class="mycard wow fadeInUp" data-wow-delay="0.2s">
            <div class="cardhead">
                <img src=${item.image} alt="image">
            </div>
            <div class="cardbody">
                <h2>${item.name}</h2>
                <p class="body2">${item.text}</p>
                <button class="btn__primary" onclick= changeSingle("${item.id}") > ${item.button}</button>
            </div>
            <div class="mytag_r">
                <p>${item.tag}</p>
            </div>
        </article>        
        `
        }
    }).join("");
    other_container.innerHTML = displayMenu;
}



function changeSingle(pageId) {

  window.location.href = `/${pageId}.html`
}