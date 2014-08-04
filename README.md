Search Guardian
==============

  The Search Guardian is a privacy web application to improve your awareness of personal information available on the Web and promote its users to manage this information more carefully. Keeping safe online information reduces significantly the risk of privacy incidents and of putting yourself in a delicate situation.

The guidelines for users are provided below so that anybody can test the application. 

#First steps to the SearchGuardian
##Requirements
To be able to use this application, you will have to:

1. Install [**Ruby and Compass**] (http://rubyinstaller.org/downloads/) because the bootstrap of the application requires it
2. Install [**NodeJS**] (http://nodejs.org/)
3. **Reboot** your machine to finish both installations properly
4. Install **Yeoman** with the following [tutorial] (http://yeoman.io/learning/index.html)
Further explanations for this last step are provided below if needed.

##Installing Yeoman
1. Open a console
2. Type the command line : `npm install -g yo`

##Launching the application

Now that you have Yeoman installed, you need to:

1. Open a console and go to the repository where you want to create the folder for the project (e.g. in your "Documents" folder)
2. Create the new folder with the following command lines
```sh
mkdir searchguardian-project
cd searchguardian-project
```
3. Install the web application generator by typing the command line: `npm install -g generator-webapp`
4. Create a new project by typing the command line: `yo webapp`
5. The creation of the project will be automatically done, you only need to confirm to use Bootstrap (option by default)
6. Implement the project (via [Git](http://git-scm.com/downloads) or by copying the files manually)
7. Start the application by typing the command line: `grunt serve`
The application should start in your main web browser and you are now ready to try the first functionalities implemented for this prototype.

#Functionalties of the application
##Facebook features
###Log in Facebook  
  Click on the Log in button and log on your Facebook account. If it doesn't appear, it may be because:
  - You are already logged in and this caused a problem, so refresh the page.
  - One of your plugin may be blocking the scripts
  - You might have unactivated Javascript

_Note: The first time you will try this application on your machine, it will ask you the permission to access informations available in your Facebook account, accept the conditions._

###Your personal profile
  Most of your personal information are displayed. The information displayed are the one I judged pertinent but more information could be returned (see documentation of Graph API).
  
_Note: Since you gave permission to the application to access that data, it will retrieve it no matter what the privacy setting is. Besides, the privacy settings of the profile cannot be returned by using Graph API, therefore if you never set it properly, do check them and change them if reguired.._

###Your albums
  This part is dedicated to the albums released on your profile. The privacy parameter you set is available in the table and you will be able to go straight to the album if you want to via the link provided in the last column. Clicking on the button will open a scroll where you will be able to view the pictures in the album you selected.

###Your publications
  Your last activities (e.g. commenting a picture and posting on a wall) on Facebook are recorded in your activity log. Check out here who can see this The nature of your activity will be mentioned followed by the activity itself. 
  
You will notice some privacy parameter are returned as "", that is because graphAPI returned no value which means the privacy setting of this post depends on the privacy of the wall you published it. For instance, if you posted a comment on the wall of one of your friend and the privacy of his wall is set to viewable by "Friends", then the privacy of your comment is set to the friends of the wall's owner as well. On the other hand, if the privacy is set to "Everyone", then anybody can see that comment. In that case, even Internet users not logged on Facebook can access your post if they possess the URL which is also provided by the application. 

_Note: You can test the privacy of your comment by opening a different web browser where you are not logged in Facebook and pasting the URL in the browser. You will see the post even though you are not logged in Facebook._


##LinkedIn features
  LinkedInAPI only allows us to read information and it is very limited, thus you can only log in your LinkedIn account and see what it returns to you.

##Search engines
  Google: Search yourself on the web and see if one of the websites registered to the Google search engine I implemented can find you. Check by yourself then on the website 

