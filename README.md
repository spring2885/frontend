Setting up your Spring-2885 Front End Environment
==================

This document will walk you through the steps to build and use the initial Front End Deveopment Environment for this project.

----------

# Table of Contents
1. [Necessary Installations](#Necessary-Installations)
2. [Pull in Project Dependancies](#Pull-in-Project-Dependancies)
3. [Use Grunt to put it all together](#Use-Grunt-to-put-it-all-together)
4. [Current Packages Installed](#Current-Packages-Installed)
5. [File Structure](#File-Structure)

##Necessary Installations

-------------
We will be using both Grunt and NPM in our Dev environment, so you will need to make sure you have Node.js installed on your machine globally.

**In you terminal:**

> $ node -v

*Should return a version number, if it says something to the effect of command not found something went wrong with the download. Current Version: v5.3.0*

**If you do not have node.js installed**

>- Goto: [Node Js's Web Site](https://nodejs.org/en/)
>- Download the appropriate 64-bit version for you operation system
>- Run the installer and choose default settings

**Sanity Check Install**
> $ node -v

Now that we have Node.js we can use the Node Package Module tool, NPM to install dependencies and we can run our Task Manager, Grunt.  Speaking of Grunt...

**Install Grunt CLI**
*For Mac use Sudo*

> $ npm install -g grunt-cli

*Should print a lot of output, warnings ok, BUT NO ERRORS*

**Install Bower**
Bower is a helpful Package manager we will use to pull our dependancies.

*For Mac use Sudo*
>$ npm install  -g bower

*Should print a lot of output, warnings ok, BUT NO ERRORS*

**Sanity Check your Installs?**

Great, you're ready to go!


## Pull in Project Dependancies

-------------

After you have cloned the project, and whenever you pull and we have added a new depdancy, you will want to run these commands. CD into the Directory and run:

*In Terminal*
> $ npm install

This will go to the package.json file and pull all of the listed dependacies and download them into the node_modules Directory.

*Next:*
> $ bower install

This will pull all of the dependcies listed in the bower.json file and download them into the bower_componets Directory.

Now you have everything you need to run the front end app!

## Use Grunt to put it all together

-------------
Start by cd'ing into the frontend directory.

You now have a powerful tool called grunt availible to you in your command line that will help you build and test your code.

The main command that you will be using is:
> $ grunt

This will run the default set of tasks that were assigned in the Gruntfile.  In our set up this will be the command used for development.  It will hint your code, concat it, open a static file server on local host at port 8001, launch a browser window, and then it will watch for changes.

## Current Packages Installed

-------------

**Angular.js**
We will be using Angular.js to make our single page application.  Read more from the docs: [Angular.js API Docs](https://docs.angularjs.org/api)

**Bootstrap**
A mobile first CSS framework for developing responsive web apps.  Check it out: [Bootstrap](http://getbootstrap.com/)

**jQuery**
jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. Check it out: [jQuery](https://jquery.com/)

**Angular-Bootstrap**
This is a great integration between Bootstrap and Angular.  Check it out: [Angular-UI-Bootstrap](http://angular-ui.github.io/bootstrap/)

**Font Awesome**
Library of SVG icons that we can use throughout the app.  Check it out: [Font Awesome](https://fortawesome.github.io/Font-Awesome/)

**Angular Chosen**
An integration between the jQuery plugin [Chosen](http://harvesthq.github.io/chosen/)  Check it out: [Angular-Chosen](https://github.com/localytics/angular-chosen)

**Angular Translate**
angular-translate is a JavaScript translation library for AngularJS 1.x app Check it out: [angular-translate](https://github.com/angular-translate/angular-translate)




## File Structure

-------------

```
frontend/
    bower_componenets/
       \_ ...
    bower.json
    CodingStyleGuide.md
    CONTRIBUTING.md
    docs/
       \_ ...
    fonts/
       \_ ...
    generated/
       \_ ...
    Gruntfile.js
    node_modules/
       \_ ...
    package.json
    README.md
    src/
       \_ assets/
             \_ core/
                  \_ JSON
             \_ css/
                  \_ ...
             \_ images/
                  \_ ...
             \_ languages/
                   \_ JSON
       \_ favicon.ico
       \_ index.html
       \_ js/
            \_ app.js
            \_ config.js
            \_ controllers/
                 \_ ...
            \_ directives/
                 \_ ...
            \_ filters/
                 \_ ...
            \_ routes_protection.js
            \_ routes.js
            \_ services/
                 \_ ...
       \_ templates/
             \_ footer/
                  \_ ...
             \_ navbar
                  \_ ...
       \_ views/
            \_ admin
                 \_ ...
            \_ info
                 \_ ...
            \_ jobs
                 \_ ...
            \_ login
                 \_ ...
            \_ lostPassword
                 \_ ...
            \_ newsfeed
                 \_ ...
            \_ profile
                 \_ ...
            \_ status
                 \_ ...
    tasks/
       \_ ...
```