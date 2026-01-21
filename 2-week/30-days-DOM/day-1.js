//1️⃣ The DOM Tree & Selectors: The ConceptThe DOM (Document Object Model) is how JavaScript sees your HTML. It doesn't see text; it sees a Tree of Objects. The window is the browser tab.The document is the page content. Every HTML tag (<h1>, <div>, <p>) is a Node (specifically an Element). To change anything on the screen, you first have to Select it.

//2️⃣The Selectors (Old vs. New) In the past, we used these: document.getElementById('id') document.getElementsByClassName('class') (Returns a "Live" HTMLCollection - tricky!). 🌟 Industry Standard: Today, we almost exclusively use: document.querySelector('css-selector') -> Selects the first match. document.querySelectorAll('css-selector') -> Selects all matches (Returns a NodeList). Why? Because you can use CSS syntax (e.g., 'div > p.intro'), which is powerful and familiar.

// Challenge 1: 
const heading = document.querySelector("#brand");

const paragraph = document.querySelector(".highlight");

const btn = document.querySelectorAll("button");

const secondHeading = document.querySelector("div:nth-of-type(2) > h2");

console.log(heading);
console.log(paragraph);
console.log(btn);
console.log(secondHeading);


//Day-2: Day 2:1️⃣ Content Manipulation & Security Now that we can grab elements, let's change them. 1. The Concept: There are three main ways to change what's inside an element. Knowing the difference is a major security requirement. 1. element.innerText: Gets/Sets visible text. (Aware of CSS styling like display: none). 2. element.textContent: Gets/Sets text (includes hidden text). Faster and standard. 3. element.innerHTML: Gets/Sets HTML tags. Dangerous if not handled correctl. 2️⃣ The Danger Zone (XSS): Industry Standard: Never use innerHTML to insert user-generated content (like a comment or username). If a hacker sets their username to <script>stealPasswords()</script> and you render it with innerHTML, that script runs on every user's computer. This is XSS (Cross-Site Scripting). Rule: Default to textContent. Only use innerHTML when you hardcode the HTML yourself.
