Setting up your Spring-2885 Front End Environment
==================

This document will walk you through the steps to build and use the initial Front End Deveopment Environment for this project.

----------

# Table of Contents
1. [Necessary Installations](#Necessary Installations)
2. [Pull in Project Dependancies](#Pull in Project Dependancies)
3. [Use Grunt to put it all together](#Use Grunt to put it all together)
4. [Current Packages Installed](#Current Packages Installed)
5. [File Structure](#File Structure)

##Necessary Installations

-------------
We will be using both Grunt and NPM in our Dev environment , so you will need to make sure you have Node.js installed on you machine globaly.

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
We will be using Angular.js to make our single page application.  Read more from the docs:
[Angular.js API Docs](https://docs.angularjs.org/api)

**Bootstrap**
A great framework for developing responsive web-apps.  Check it out: [Bootstrap](http://getbootstrap.com/)

**jQuery**
JavaScript Library. Check it out: [jQuery](https://jquery.com/)

**Angular-Bootstrap**
This is a great integration between Bootstrap and Angular.  Check it out : [Angular-UI-Bootstrap](http://angular-ui.github.io/bootstrap/)

**Font Awesome**
This is a great library of SVGs that we can use to build the app.  Check it out: [Font Awesome](https://fortawesome.github.io/Font-Awesome/)

**Angular-Chosen**
A cool integration between the jQuery plugin [Chosen](http://harvesthq.github.io/chosen/)  Check it out: [Angular-Chosen](https://github.com/localytics/angular-chosen)

...more to come

Find something cool we need, let Sean know!




## File Structure

-------------

**Project:**

![Hmm something went wrong...](http://s16.postimg.org/t04oemjj9/Screen_Shot_2016_01_30_at_12_02_08_PM.png)

**src Directory:**

![Hmm something went wrong...](http://s21.postimg.org/3sk04wqzr/Screen_Shot_2016_01_30_at_12_03_03_PM.png)



