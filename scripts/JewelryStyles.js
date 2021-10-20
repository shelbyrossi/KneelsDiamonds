import { getStyles , setStyle } from "./database.js"

const styles = getStyles()

// the radio button controls generate a CHANGE EVENT that is listened for
// when the user selects radio input option, the VALUE of event target is the value attribute of chosen option
// if the name of the target event has a value of "styles" - invoke a window alert 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    // .map() iterates the array and invokes function (styles)
    // Styles function is argument that .map method will accept 
    // iterates array - takes object at current location - pass it as arg to function
    // function defines size parameter - object goes into function - string returned into new array

    const listItemsArray = styles.map(
        (styles) => {
            return `<li>
            <input type="radio" name="style" value="${styles.id}" /> ${styles.style}
            </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}


// style.id 
// style.style
