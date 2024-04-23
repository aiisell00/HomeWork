// const ulElem = document.createElement("ul");
// ulElem.setAttribute("class", "student-lists");
// document.body.append(ulElem);
// const header = document.createElement("header");
// const containerDiv = document.createElement("div");
// // containerDiv.className = "container";
// // containerDiv.classList.add("container");
// containerDiv.setAttribute("class", "container");
// const headerDiv = document.createElement("div");
// headerDiv.setAttribute("class", "header");

// const logo = document.createElement("h1");
// logo.style.color = "#fff";
// logo.style.fontSize = "2.5rem";
// logo.textContent = "Azmp101";
// const navElem = document.createElement("nav");

// const listElem = document.createElement("ul");
// listElem.setAttribute("class", "list");
// ulElem.innerHTML = `
//     <li>
//          <a href="#">About</a>
//     </li>
//     <li>
//          <a href="#">Team</a>
//     </li>
//     <li>
//          <a href="#">Contact</a>
//     </li>
// `;
// navElem.append(ulElem);
// headerDiv.append(logo, navElem);
// header.append(containerDiv);
// containerDiv.append(headerDiv);
// document.body.prepend(header);

const containerDiv = document.createElement("div");
containerDiv.setAttribute("class", "container");

const twitterDiv = document.createElement("div");
twitterDiv.setAttribute("class", "twitter");
const instagramDiv = document.createElement("div");
instagramDiv.setAttribute("class", "instagram");
const youtubeDiv = document.createElement("div");
youtubeDiv.setAttribute("class", "youtube");

const twitter = document.createElement("i");
twitter.setAttribute("class", "fa-brands fa-twitter");
const instagram = document.createElement("i");
instagram.setAttribute("class", "fa-brands fa-instagram");
const youtube = document.createElement("i");
youtube.setAttribute("class", "fa-brands fa-youtube");

const h1twitter = document.createElement("h1");
h1twitter.setAttribute("class", "h1twitter")
const h1instagram = document.createElement("h1");
h1twitter.setAttribute("class", "h1instagram")
const h1youtube = document.createElement("h1");
h1twitter.setAttribute("class", "h1youtube")

const p = document.createElement("p");
const button = document.createElement("button");

button.style.backgroundColor = 'black'
button.style.borderRadius = '30px'
button.style.height = '30px'
button.style.width = '60px'

h1twitter.textContent = "Twitter"
h1instagram.textContent = "Instagram"
h1youtube.textContent = "Youtube"

p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
button.textContent = "Read More"

document.body.appendChild(containerDiv)
twitterDiv.append(containerDiv);
instagramDiv.append(containerDiv);
youtubeDiv.append(containerDiv);


twitter.append(twitterDiv);
instagram.append(instagramDiv);
youtube.append(youtubeDiv);

h1twitter.append(twitterDiv);
h1instagram.append(instagramDiv);
h1youtube.append(youtubeDiv);

p.append(twitterDiv);
p.append(instagramDiv);
p.append(youtubeDiv);

button.append(twitterDiv);
button.append(instagramDiv);
button.append(youtubeDiv);

