

// Question

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


// Answer

1. ## getElementById:
In HTML an id name must be unique.It returns only one element.If there has many ID in an HTML but name must be unique.

## getElementByClassName:
An HTML element can find by className. ClassName can be unique or same in the different sections.It returns multiple elements.It is a HTML Collections(like an array but not totally accurate)

## querySelector
CSS selector.It returns the first matching element

## querySelectorAll
It returns the NodeList of matching element.

2. ## Create and Insert new element in DOM:
We can create element using **document.createElement()*
adding text or content using *.textContent .innerHTML .innerText*
we can insert an element in DOM using *appendChild()*

3. ## Event Bubbling
Event bubbling is a mechanism of DOM.It works, when we click on a child element,the event first happens on that element, then it goes up to its parent, then to the parent's parent, and so on until the stop(document).
Event goes from child to parents

4. ## Event Delagation:
Event Delegation is when we attach an event to a parent and use bubblimg to handle events of child elements.It is useful for performance and handling dynamic elemnts.It saves memory.

5. ## preventDefault()
It stops the default behaviour of an element

## stopPropagation()
Stops event from bubbling up or capturing down the DOM

