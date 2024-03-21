/*
  Document Object Model (DOM) in JavaScript

  The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML and XML documents and allows manipulation of their content, structure, and style.

  Accessing DOM Elements:
  - document.getElementById(id): Returns the element with the specified ID.
  - document.getElementsByClassName(className): Returns a collection of elements with the specified class name.
  - document.getElementsByTagName(tagName): Returns a collection of elements with the specified tag name.
  - document.querySelector(selector): Returns the first element that matches a specified CSS selector.
  - document.querySelectorAll(selector): Returns a static NodeList representing all elements that match a specified CSS selector.

  Example:
    Let's access and manipulate DOM elements in a simple HTML document.
*/

// Accessing DOM elements
// const header = document.getElementById("header");
// const paragraphs = document.getElementsByClassName("paragraph");
// const firstParagraph = document.getElementsByTagName("p")[0];
// const intro = document.querySelector(".intro");
// const allParagraphs = document.querySelectorAll("p");

// Manipulating DOM elements
// header.textContent = "New Header";
// firstParagraph.style.color = "blue";

// Adding event listener to a button
// const button = document.getElementById("myButton");
// button.addEventListener("click", function () {
// 	alert("Button clicked!");
// });

/*
  Note:
  - The DOM provides methods and properties to interact with elements in a web document.
  - getElementById, getElementsByClassName, and getElementsByTagName are faster than querySelector and querySelectorAll, but they have limited functionality.
  - querySelector and querySelectorAll are more flexible and can use CSS selectors, but they are slower.
  - Event listeners can be added to DOM elements to handle user interactions.
*/

/*
  Example: Creating and Appending DOM Elements

  Let's create new DOM elements and append them to an existing element in the HTML document.
*/

// Create a new paragraph element
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new paragraph.";

// Append the new paragraph to the intro section
// intro.appendChild(newParagraph);

/*
  Difference Between InnerText, textContent, and InnerHTML

  InnerText, textContent, and InnerHTML are properties used to manipulate the text content of HTML elements. Although they might seem similar, they have distinct behaviors and use cases.

  InnerText:
  - Represents the rendered text content of an element and its descendants.
  - Ignores invisible text such as text within hidden elements or text styled with "display: none".
  - Returns only visible text.

  Syntax:
    element.innerText

  Example:
    <div id="example">Hello <span style="display: none;">hidden</span> World!</div>
    In JavaScript:
    const element = document.getElementById('example');
    console.log(element.innerText); // Output: Hello World!

  textContent:
  - Represents the text content of an element and its descendants, including invisible text.
  - Preserves whitespace and respects CSS styling (e.g., "display: none").
  - Returns all text, including hidden text.

  Syntax:
    element.textContent

  Example:
    <div id="example">Hello <span style="display: none;">hidden</span> World!</div>
    In JavaScript:
    const element = document.getElementById('example');
    console.log(element.textContent); // Output: Hello hidden World!

  InnerHTML:
  - Represents the HTML content of an element.
  - Can be used to both retrieve and update the HTML content of an element.
  - Allows inserting HTML markup, including tags and attributes.

  Syntax:
    element.innerHTML

  Example:
    <div id="example"><p>Hello</p></div>
    In JavaScript:
    const element = document.getElementById('example');
    console.log(element.innerHTML); // Output: <p>Hello</p>

  Note:
  - InnerText and textContent are safer for handling user-generated content to prevent XSS attacks compared to InnerHTML.
  - Use InnerHTML with caution, especially when dealing with untrusted data, as it can lead to security vulnerabilities.
*/

// <h1 id="firstHeading" class="myTitle">
//    Chai aur Code | JavaScript <span>Jarvish Dev</span>
// </h1>
// const heading = document.getElementById('firstHeading');
// heading.innerHTML
// `Chai aur Code | JavaScript <span style="display: none;">Jarvish Dev</span>`
// heading.innerText
// `Chai aur Code | JavaScript`
// heading.textContent
// `Chai aur Code | JavaScript Jarvish Dev`

// ! DOM Practice
// ? GetElementById
// document.getElementById('firstHeading')
// <h1 id=​"firstHeading" class=​"myTitle">​ Chai aur Code | JavaScript ​</h1>​
// document.getElementById('firstHeading').className
// 'myTitle'
// document.getElementById('firstHeading').id
// 'firstHeading'
// document.getElementById('firstHeading').innerHTML = "Jarvish Dev";
// 'Jarvish Dev'
// document.getElementById('firstHeading').class
// undefined
// document.getElementById('firstHeading').getAttribute('id')
// 'firstHeading'
// document.getElementById('firstHeading').getAttribute('class')
// 'myTitle'
// document.getElementById('firstHeading').getAttribute('style')
// null
// const heading = document.getElementById('firstHeading')
// undefined
// heading.style.backgroundColor = 'green'
// 'green'


// ! HTMLCollection, NodeList and Array 