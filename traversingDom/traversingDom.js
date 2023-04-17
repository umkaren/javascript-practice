// Get the header element
// Get all the section elements
// Get the section element with class="current"
// Get the section that comes after the current section
// Get the h2 node from the section before the 'current' section
// Get the div that contains the section that has an h2 with a class of 'highlight'
// Get all the sections that contain an H2 (using a single statement);

console.log(document.getElementsByTagName('header'));

console.log(document.getElementsByTagName('section'));

console.log(document.getElementsByClassName('current'));

console.log(document.querySelector('section:last-child'));

console.log(document.querySelector('h2'))

console.log(document.getElementsByTagName('div'));

const allH2Sections = (document.querySelectorAll('section:has(h2)'))
console.log(allH2Sections)



