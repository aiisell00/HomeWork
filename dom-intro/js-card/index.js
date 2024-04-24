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

const ptwit = document.createElement("p");
h1twitter.setAttribute("class", "ptwit")
const pinsta = document.createElement("p");
h1twitter.setAttribute("class", "pinsta")
const pyout = document.createElement("p");
h1twitter.setAttribute("class", "pyout")

const btntwit = document.createElement("button");
h1twitter.setAttribute("class", "btntwit")
const btninsta = document.createElement("button");
h1twitter.setAttribute("class", "btninsta")
const btnyout = document.createElement("button");
h1twitter.setAttribute("class", "btnyout")

containerDiv.style.height='100vh'
containerDiv.style.display='flex'
containerDiv.style.justifyContent='space-around'
containerDiv.style.alignItems='center'

twitterDiv.style.width='300px '
twitterDiv.style.height='300px'
twitterDiv.style.textAlign='center'
twitterDiv.style.padding='10px'
twitterDiv.style.borderRadius='20px'
twitterDiv.style.border='1px solid black'

instagramDiv.style.width='300px '
instagramDiv.style.height='300px'
instagramDiv.style.textAlign='center'
instagramDiv.style.padding='10px'
instagramDiv.style.borderRadius='20px'
instagramDiv.style.border='1px solid black'

youtubeDiv.style.width='300px '
youtubeDiv.style.height='300px'
youtubeDiv.style.textAlign='center'
youtubeDiv.style.padding='10px'
youtubeDiv.style.borderRadius='20px'
youtubeDiv.style.border='1px solid black'

twitter.style.marginTop='50px'
instagram.style.marginTop='50px'
youtube.style.marginTop='50px'

btntwit.style.backgroundColor = 'black'
btntwit.style.borderRadius = '30px'
btntwit.style.height = '30px'
btntwit.style.width = '100px'
btntwit.textContent = "Read More"
btntwit.style.color = "white"
btninsta.style.backgroundColor = 'black'
btninsta.style.borderRadius = '30px'
btninsta.style.height = '30px'
btninsta.style.width = '100px'
btninsta.textContent = "Read More"
btninsta.style.color = "white"
btnyout.style.backgroundColor = 'black'
btnyout.style.borderRadius = '30px'
btnyout.style.height = '30px'
btnyout.style.width = '100px'
btnyout.textContent = "Read More"
btnyout.style.color = "white"

h1twitter.textContent = "Twitter"
h1instagram.textContent = "Instagram"
h1youtube.textContent = "Youtube"

ptwit.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
pinsta.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
pyout.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";

document.body.append(containerDiv)
containerDiv.append(twitterDiv);
containerDiv.append(instagramDiv);
containerDiv.append(youtubeDiv);

twitterDiv.append(twitter);
instagramDiv.append(instagram);
youtubeDiv.append(youtube);

twitterDiv.append(h1twitter);
instagramDiv.append(h1instagram);
youtubeDiv.append(h1youtube);

twitterDiv.append(ptwit);
instagramDiv.append(pinsta);
youtubeDiv.append(pyout);

twitterDiv.append(btntwit);
instagramDiv.append(btninsta);
youtubeDiv.append(btnyout);

