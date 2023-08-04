const recentWorks = [
    {
        "id":"deterio23",
        "tag":"DESIGN SYSTEM",
        "name":`Deterio23`,
        "text":`Style guide created as the final project of the Domestika course, and applied to my portfolio.`,
        "image":"./img/recent_Deterio23.jpg",
        "button": "read more",
    },
    {
        "id":"tuBondi",
        "tag":"UI CHALLENGE",
        "name":`TuBondi redesign`,
        "text":`Small "2 days challenge" to practice my UI skills with the local transport app of Córdoba.`,
        "image":"./img/recent_TuBondi.jpg",
        "button": "read more",
    },
    {
        "id":"easyhelp",
        "tag":"UX/UI CASE STUDY 003",
        "name":`Easy Help`,
        "text":`The easiest way to join, create and donate to volunteering events!`,
        "image":"./img/recent_project-3.jpg",
        "button": "read more",
    },    
    {
        "id":"yllamps",
        "tag":"UX/UI CASE STUDY 002",
        "name":`YL Lamps`,
        "text":`Website to learn about lighting and find the perfect lamp for you!`,
        "image":"./img/recent_project-2.jpg",
        "button": "read more",
        
    },
    {
        "id":"blocks",
        "tag":"UX/UI CASE STUDY 001",
        "name":`Blocks`,
        "text":`The best app to organize every area of your life! Connect your tasks, habits & schedule in one place!`,
        "image":"./img/recent_project-1.jpg",
        "button": "read more",
    },
]
const otherWorks = [
    {
        "id": "uichallenge",
        "tag":"UI CHALLENGE",
        "name":`Figma Challenge`,
        "text":`100 projects made each day to learn UI principles using Figma.`,
        "image":"./img/other_projects-figmaCh.png",
        "button": "go to page",
        "link": "https://www.figma.com/file/A6XPtiDx03uQuN0P7TA1Ki/My-100-Daily-UI-Challenge?type=design&node-id=668-14&mode=design&t=CP51rlzoSE9jhk2c-0",
    },
    {
        "id": "frontendchallenge",
        "tag":"PROGRAMMING",
        "name":`Frontend Challenge`,
        "text":`Small projects created to learn Front-end programming using HTML, CSS, JS & React.`,
        "image":"./img/other_projects-frontendCh.png",
        "button": "go to page",
        "link": "https://gonzaloruiz99.github.io/portfolio2023/",
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
                <a href="${item.link}" target="_blank">
                    <button class="btn__primary"> ${item.button}</button>
                </a>
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
                <a href="${item.link}" target="_blank">
                    <button class="btn__primary"> ${item.button}</button>
                </a>            </div>
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

  window.location.href = `./${pageId}`
}