Search Guardian
==============

  The Search Guardian is a privacy web application to improve your awareness of personal information available on the Web and promote its users to manage this information more carefully. Keeping safe online information reduces significantly the risk of privacy incidents and of putting yourself in a delicate situation.
  
  The web application mainly use HTML5, CSS3 and AngularJS (Javascript framework) and is supported by Mozilla Firefox, Google Chrome and Opera and is not supported by Internet Explorer. Before you start using it: 
  - Change the URL 127.0.0.1:9000 into localhost:9000 for Facebook features to function properly
  - Make sure Javascript is not deactivated on your browser.
  - Make sure the plugins of your web browsers (e.g. AdBlock Plus) are not blocking the page of the web application at least to be able to display the popup containing pieces of advice.
  
This application runs locally on your main web browser and does not interact with any kind of server which was done on purpose so you could use the application and not fear having a third party company collecting data or storing your credentials for instance. However, because of that, installations are required so it can start from your machine and there is no current solution to start it 'easily'. Below are provided :
- Guidelines so that anybody can install the application in about 15-20 minutes and test the application
- Description of the features of the application
- Acknowledgments to specific individuals who deserve credits for the development of this application

#First steps to the SearchGuardian
####Requirements
To be able to use this application, you will have to:

1. If you are not a developer or do not want to bother with installing dependencies for an AngularJS project, you can simply **download** the ZIP folder of the [**project**] (https://www.dropbox.com/sh/g2on50ca2r7k94o/AAAuNtkMsDE4c3zptAqN55wma/test-jimmy.zip) whichi will **contain the application and every library needed**. Else, pull the project from this git and follow the instructions provided for developers.
2. Install [**NodeJS**] (http://nodejs.org/) on your machine.
3. If you are a developer, there is an appropriate section for you. Else, depending on the operating system, read the appropriate instructions below to install [**Yeoman (Grunt and Bower)**] (http://yeoman.io/learning/index.html) and is mandatory to start the application.

####Windows
**Open the zip folder** you downloaded previously, extract it and **execute the start.bat file** which opens a console (or terminal window) for you and ask you if you want to install [**Yeoman**] (http://yeoman.io/learning/index.html) (only need to be done the first time you use the application). 
- If you press Y and press Enter, the NodeJS command line `npm install -g yo` will be executed to download and install [**Yeoman**] (http://yeoman.io/learning/index.html). Then it will start the web application in your browser.
- If you press N and press Enter, the console will directly try to start the web application in your browser.

Several tester had issues while executing the batch file. Refer to the section "Potential problems with Windows" below.

####Linux and Mac OS X
If you use a machine operating on Linux or Mac OS X, then the instructions are slightly different from Windows. A shell file was prepared to execute the two command lines but it is impossible to execute it by double clicking on it like on Windows. Therefore, follow those instructions:

1. Open a console (Mac OS X: Applications > Utilities) and go to the repository where you extracted the zip folder.
2. Execute the following command line to give permission to execute the shell file: `chmod +x start.sh`
3. Execut the following command line to execute the shell file (the sudo is necessary since the first command line of the shellf file installs [**Yeoman**] (http://yeoman.io/learning/index.html)).
4. The installations will be automatically done and the application should start by itself in your browser.

None of the testers of the application have encountered problems so far, **contact me directly for any situations/problems so I can add them to the list and suggest solutions.**

###If you are a developer
1. Open a console and go to the repository where you want to create the folder for the project (with the instruction cd)
2. Type the command line : `npm install -g yo` which is a NodeJS command to install [**Yeoman (Grunt and Bower)**] (http://yeoman.io/learning/index.html)
3. If you decided to just pull the project from the git and the dependencies are missing (node modules), install them by typing `bower install`
4. Start the application by typing the command line: `grunt serve --force`


#####Potential problems with Windows:

The batch file should stay open and starts the application by itself once the installations are over. In general, everything is fine when you execute the batch file but several testers encountered problems. Two potential issues are mentioned below:

**If the console shuts down immediately after it starts**, then the problem is very likely NodeJS and the reason is probably that npm was not recognized. To adress this problem, you will need open a console/terminal window. For this: 

1. Type `path` in the console and check there is a path ending by: `AppData\Roaming\npm`and one by `nodejs` wherever you installed nodejs.
2. If it is here, follow the instructions for developers above without the step 3 since you already have the libraries. Executing the command lines in a real console instead of the one opened by the batch file give you the opportunity to have the error message. If npm is still not recognized, the installations may need a **reboot**, else your machine won't recognized the new environment variables. Do it and check again (you may want to keep the links you were using in your bookmark). If it still does not work, contact me.
3. If it is not here, you need to go to C:\Users\your-session-name\Appdata\Roaming and create the folder npm. Try again starting from just after the nodejs installation.

**If the console shuts down after installing several things**, then you will need to:

1. Open a console and go to the repository where you want to create the folder for the project (with the instruction cd)
2. Try to start the application by typing the command line: `grunt serve --force` to check if the installations were completed although the batch execution failed.
3. If the applications fail to launch from here, try the command line `npm install -g yo` to do the installations again, this will show the error which occured if there was one. It may be that your path of nodejs is set to a wrong one, contact me to solve the issue.

**Contact me directly for any other situations/problems so I can add them to the list and suggest solutions.**

#Functionalties of the application
###Facebook features
#####Log in Facebook  
  Click on the Log in button and log on your Facebook account. If it doesn't appear, it may be because:
  - You are already logged in and this caused a problem, so refresh the page.
  - One of your plugin may be blocking the scripts
  - You might have unactivated Javascript

_Note: The first time you will try this application on your machine, it will ask you the permission to access informations available in your Facebook account, accept the conditions._

#####Your personal profile

  Most of your **personal information** is displayed here (only information I judged pertinent are shown, there could be more returned (see documentation of Graph API)).
  
_Note: Since you gave permission to the application to access that data, it will retrieve it no matter what the privacy setting is. Besides, the privacy settings of the profile cannot be returned by using Graph API, therefore if you never set it properly, do check them and change them if required._

#####Your albums

  This part is dedicated to the albums released on your profile. The privacy parameter you set is available in the table and you will be able to go straight to the album if you want to via the link provided in the last column. Clicking on the button will open a scroll where you will be able to view the pictures in the album you selected.

#####Your publications
  Your last activities (e.g. commenting a picture and posting on a wall) on Facebook are recorded in your activity log. Check out here who can see this The nature of your activity will be mentioned followed by the activity itself. 
  
You will notice some privacy parameter are returned as "", that is because graphAPI returned no value which means the privacy setting of this post depends on the privacy of the wall you published it. For instance, if you posted a comment on the wall of one of your friend and the privacy of his wall is set to viewable by "Friends", then the privacy of your comment is set to the friends of the wall's owner as well. On the other hand, if the privacy is set to "Everyone", then anybody can see that comment. In that case, even Internet users not logged on Facebook can access your post if they possess the URL which is also provided by the application. 

This part is dedicated to the **albums** associated with your profile. The **privacy value** and a link to the album are available in the table. With this, it is possible to go straight to the album and to change the privacy value if you wish to. Clicking on the button in the first column of the table will open a scroll pane below where you will be able to view the pictures in the album you selected.

#####Your publications
  Your **last activities** (e.g. commenting a picture and posting on a wall) on Facebook are recorded in your activity log. The application returns part of the activity log and allow you to check who can see them with the **privacy value** returned. You will notice some privacy parameter are returned as "", that is because graphAPI returned no value which means the privacy setting of this post depends on the privacy of the wall you published it. For instance, if you posted a comment on the wall of one of your friend and the privacy of his wall is set to viewable by "Friends", then the privacy of your comment is set to the friends of the wall's owner as well. On the other hand, if the privacy is set to "Everyone", then anybody can see that comment. In that case, even Internet users not logged on Facebook can access your post if they possess the URL which is also provided by the application. 

_Note: You can test the privacy of your comment by opening a different web browser where you are not logged in Facebook and pasting the URL in the browser. You will see the post even though you are not logged in Facebook._

###LinkedIn features

LinkedInAPI only allows us to **read information** and offers a very limited freedom to its consumers. Through the application, the user can only log in his/her LinkedIn account and review the information he entrusted
  
###EXIF data in pictures

The page accessed by the button entitled "**EXIF data**" enables the user to **read the EXIF** data registered on the picture if the picture is in the format.jpeg, .gif and .png and if its size is smaller than 3Mo only. By changing the value of the dropdown list below the drag and drop zone, the user can also **generate this very same picture but without the GPS data contained in the EXIF data**. This is only possible if the picture is smaller than 1.5Mo though because the burden from generating and encoding the data for the picture is too heavy for the browser.

###Future search engine functionality

A Google search engine allows the user to find information about someone on the websites I associated to the search engine. The development of this feature is not over yet but will provide search results pertinent to the profile associated above the search engine.

#Acknowledgments

This section is dedicated to the persons who directly or indirectly contributed to the project:

1. Firstly, I would like to thanks Dr. Shirley Atkinson, lecturer in Information Systems and my supervisor for my MSc project, who guided me through this project and took on her time to advise me.
2. Secondly, this project was not entirely developed from scratch. Indeed, the application use codes that  come from the following projects:

- An angular library facilitating the connection to Facebok developed by [**Almog Baku**] (https://github.com/GoDisco/ngFacebook">https://github.com/GoDisco/ngFacebook)
- An angular directive to detect drag and drop developed by [**Louis Sivillo**] (https://gist.github.com/lsiv568/5623361">https://gist.github.com/lsiv568/5623361)
- A Javascript library reading EXIF data developed by [**Jacob Seidelin**] (https://github.com/jseidelin/exif-js">https://github.com/jseidelin/exif-js)
- A Javascript library from [**menucool**] (http://www.menucool.com/javascript-image-slider).
- An angular directive to show pop-ups developed by [**nohros**](https://github.com/nohros/nsPopover ).
