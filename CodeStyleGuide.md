Coding Style and Standards
====


 - [About](#about)
 - [Issue Tracking](#issue-tracking)
 - [Naming Conventions](#naming-conventions)
 - [HTML](#html)
     - [Spaces](#spaces)  
     - [Code Blocks](#code-blocks)
     - [Use Lowercase Name Elements](#use-lowercase-name-elements)
     - [Equals Signs in Attributes](#equals-signs-in-attributes)

 - [CSS](#css)
    - [Spaces](#spaces-1)
    - [Code Blocks](#code-blocks-1)
    - [Styles Location](#styles-location)


- [JavaScript](#javascript)
    - [Naming Conventions](#naming-conventions)
    - [Code Indentation](#code-indentation)
    - [Line Wrapping](#line-wrapping)
    - [Variable Creation and Spacing](#variable-creation-and-spacing)
    - [Functions](#functions)
    - [Loops](#loops)
    - [Conditionals](#conditionals)
    - [Checking Equality](#checking-equality)
    - [eval](#eval)


## About
-----

This document defines best practices and expected code formatting for the NDNU Senior Project.  Team members are expected to adhere to all standards and review other teammates' code to keep the code base readable, maintainable, and uniform.  Pull requests not adhering to the standards laid out in this document will not have the request approved.

## Issue Tracking
-----
Issue tracking and project management for the project will be handled through GitHub's Issues feature. 

 - Issues should have descriptive titles, detailed descriptions of the problem, and expected solution when needed.
 - Each issue should have a label associated with it indicating a Bug, a New Feature...etc.
 - Bug issues should have associated screen shots when necessary. 
 - For questions and concerns, attach comments to issues.
 - Issues taking longer than one week should include comments from the assignee updating status weekly.
 

## Naming Conventions
-----
 - Please only use descriptive names for Variables, Functions, Classes, Ids, etc.

## HTML
------

### Spaces
----------

 - Four spaces will be the standard indent for this project.  Please set
   your tab button to this amount or only use your space bar.

### Code Blocks
----------
 - Please Block code logically.  
 - Any line longer than 80 characters must use line breaks.
 - You should consider breaking lines for every parent element.
Child elements (`<p>`, `<i>`, `<em>`, `<b>`,  `<td>`, `<li>`,  sometimes `<span>`, etc) can be writen on the same line with no spaces when appropriate.

**Bad:**

    <div><span><i>Hello</i></span></div>

**Good:**

    <div>
        <span>
            <i>Hello</i>
        </span>
    </div>

 - When an element has many attributes split them out onto multiple lines.

**Bad:**

    <div id="myId" class="myClass someOtherClass yetAnotherClass" >
        <input type="number" id="numberInput" step=1 class="form-control" min=0 max=100/>
    </div>

**Better:**

    <div id="myId" 
        class="myClass someOther
        yetAnotherClass">
        <input type="number"
            id="numberInput"
            class="form-control" 
            step=1
            min=0
            max=100/>
    </div>

**Best:**

    <div id="myId" 
        class="myClass 
              someOtherClass 
              yetAnotherClass" >
        <input type="number"
            id="numberInput"
            class="form-control" 
            step=1
            min=0
            max=100/>
    </div>

 - When small enough, multiple attributes are ok.

    <div id="theDiv" class="coolDeal">
        <p>Super Cool</p>
    </div>

 - Remember readability is the main idea when creating code blocks.


### Use Lowercase Name Elements
----------
**Bad:**

    <DIV>
        <p>Hello World</p>
    </DIV>

**Worse:**
Do not mix upper and lower case.

    <Span>
        Oh No!
    </SPAN>

**Good:**

    <section>
        <p>Ah, that's better.</p>
    </section>

### Equals Signs in Attributes
----------

 - There should be no space in an attributes declaration.

**Bad:**

    <div id = "myDiv" class= "myClass">

**Good:**

    <div id="myDiv" class="myClass">

## CSS
-----
### Spaces
----------

 - Four spaces will be the standard indent for this project.  Please set
   your tab button to this amount or only use your space bar.

### Code Blocks
----------

 - All CSS code blocks should start on the far left with the name of the
   class or id to apply styling too.  All styling should be done in a
   code block below.
 - An empty line should follow each closure of a block.

**Example**

    .myClass {
        padding: 0px;
        color: #9999 !important;
    }
    
    #welcomeDiv {
        background-color: powderblue;
    }
### Styles Location
----------

 - Styling HTML in-line should be avoided or at least kept to a minimum.  All CSS styles should be kept in a separate StyleSheet located in the project and linked to the HTML in the header.

##JavaScript
-----
### Naming Conventions
----------

 - Global variables and Constants should be named in UPPECASE.
 - Functions and Variables should be named in camelCase.
 - Underscores should only be used in naming for partials, or data names (like
   from the database).

### Code Indentation
----------

 - All code blocks should have 4 spaces of indentation.

**Example**

    function foo() {
        var Baz = 100;
        var fizz = function() {
            return true; 
        }
        var obj = {
            name1: 'value1'
        };
    }
### Line Wrapping
----------

 - For readability, avoid lines longer than 80 characters.
 - If a JavaScript statement does not fit on one line, the best place to break it is after an operator or a comma.

**Example**

    document.getElementById("buzz").innerHTML =
        "Hello World.";

**Complex Example**

    if (someCoolThingIsTrue 
        && thisLongVariable === 'This long String'
        && !!myFirstGlobalVariable) {
        return false;
    }

### Variable Creation and Spacing
----------

 - All operators should have space on either side of it.
 - All simple statements should end with a semicolon.

**Example**

    var bizz = x + y;
    var arr = ["Tom", "Dick", "Harry"];

### Functions
----------

 - Put the opening bracket at the end of the first line.
 - Use one space before the opening bracket.
 - Put the closing bracket on a new line, without leading spaces.
 - Do not end a complex statement with a semicolon.

**Example**

    function bar(result) {
        return 'Yes';
    }

### Loops
----------
 - Put the opening bracket at the end of the first line.
 - Use one space before the opening bracket.
 - Put the closing bracket on a new line, without leading spaces.
 - Do not end a complex statement with a semicolon.

**Example**

    for (var i = 0; i < myArray.length; i++) {
        ++count;
    }
### Conditionals
----------
 - Use a space between the conditional and the checked value.
 - Use one space before the opening bracket.
 - Put the closing bracket on a new line, without leading spaces.
 - Do not end a complex statement with a semicolon.
 - `else` and `else if` should start on a new line.

**Example**

    if (a === b) {
        console.log('It's True!!!');
    }
    else if (a === c) {
        console.log('That worked!');
    }
    else {
        console.log('This example didn't go where you thought');
    }
### Checking Equality
----------

 - Use the `===`operator _NOT_ the `==` operator to test exact equality to prevent errors. 
 - Use the `!==` operator _NOT_ the `!=` operator to test inequality to prevent errors.
 - The `==` and `!=` operators do type coercion and should not be used.

### eval
----------
 - The eval function is the most misused feature of JavaScript. Avoid
   it.
