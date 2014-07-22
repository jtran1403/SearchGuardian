SearchGuardian
==============

A privacy web application to improve your awareness of personal information available on the Web. The first step to protect one's privacy is to 



#Installations required
```sh
To be able to use this application, you will have to :
Install Ruby and Compass (Ruby&http://rubyinstaller.org/downloads/) because the bootstrap I chose requires it
Install NodeJS
Reboot your machine
Create a repository for the project in your machine (e.g. "SearchGuardian" in your "Documents" folder)
Copy the following folders in the repository created previously to be able to use npm command lines
Install Yeoman with the following tutorial (http://yeoman.io/learning/index.html)
```
Further explanations are provided below if needed

#Copying NodeJS


#Installing Yeoman

Open a console in the repository of the project
>Windows 7
>Windows 8
>Linux


#Testing the application
Download the project 


When installed, you can try out the first functionalities implemented to this prototype.



#Facebook features
  Click on the Log in button and log on Facebook.
  If it doesn't work, it may be because you are already logged in, so refresh the page if you are blocked and try to log in again.
  The first time you will try this application, it will ask you permission to access informations available in your Facebook account, accept the conditions.

  Your personal profile
  The application will return you most of your personal information, check if they are correct. In this section, the web application will retrieve the information even if you set that information as a private one in your account since you just gave it access. More information could be returned and if pertinent, do tell me in the suggestions, the modifications are simple. 

  Your albums
  This part is dedicated to the albums released on your profile. The privacy parameter you set is available in the table and you will be able to go straight to the album if you want to via the link provided in the last column. Clicking on the button will open a scroll where you will be able to view the pictures in the album you selected.

  Your publications
  This section will return you the last events in your activity log (e.g.). The nature of your activity will be mentioned followed by the activity itself. You will notice some privacy parameter are returned as "", that is because graphAPI returned no value which means the privacy setting of this post depends on the privacy of the wall you published it. For instance, if you posted a comment on the wall of one of your friend and the privacy of his wall is set to viewable by "Friends", then only the privacy is set to the friends of the wall's owner as well. On the other hand, if the privacy is set to "Everyone", then anybody can see that comment. In that case, even Internet users not logged on Facebook can access your post via the URL provided by the application. You can try for yourself by opening a new browser where you are not logged in Facebook and pasting the URL in the browser. You will see the post even though you are not logged in Facebook.


#LinkedIn features

  LinkedInAPI only allows us to read information and it is very limited, thus you can only logged in LinkedIn and see what it returns to you.

#Search engines

  Google: Search yourself on the web and see if one of the websites registered to the Google search engine I implemented can find you. Check by yourself then on the website 

