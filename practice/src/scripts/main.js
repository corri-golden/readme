console.log("yo")




/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
// const sectionEl = document.querySelector(".article__section")
// console.log(sectionEl, "1")

// const footerEl = document.querySelector(".article__footer")
// console.log(footerEl, "2")

// const smallTextEl = document.querySelector(".smallText")
// console.log(smallTextEl, "3")

// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// smallTextEl.classList.add("largeText")

// const sectionEl = document.querySelectorAll(".article__section")
// console.log(sectionEl, "4")

// 1.  Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const header = document.querySelector(".article__header")
header.textContent = "Welcome to Corri Golden Blog"

// 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

let headers = document.querySelectorAll(".article__header")
    for( let i = 0; i < headers.length; i++){
        headers[i].classList = "article__header important"
    }
console.log(headers, "headers")

// 3. Obtain a reference the element with a class of dashed and remove it.
let dashedEl = document.querySelector(".dashed")
    dashedEl.classList.remove("dashed")

//  4.   Obtain a reference the element with a class of article__footer and add the class of goldenrod it.

let footer = document.querySelector(".article__footer")
    footer.classList.add("goldenrod")