# DFG-CIV
I'd like to start this off with an apology. I left a lot of lose ends - I was unable to complete most of the things that I wanted to do. There is still a lot of work to be done - please see the folder for the work that I started but was unable to finish (documentation sign up!, website features, app features file). This file should serve as a pretty decent orientation, things that took me a good couple of weeks to fully figure out.

# Website
## Brief Summary of How the Website was Built
There are two major parts to the website: [the main csss-ci site](https://www.csss-ci.com/) and the dashboard after logging in. The majority of the website ([the main csss-ci site](https://www.csss-ci.com/) + all of the backend) was built utilizing CodeIgniter. I'm not positive what version the website is running, but the documentation linked above seems to be accurate. Code Igniter operates on a model-view-controller framework. If you know what that means, great! Feel free to skip this next portion. If not, then here is a quick rundown (assuming you have some web dev experience).

---
#### THE MVC

![alt text](https://github.com/kchou0907/DFG-CIV/blob/main/how%20the%20website%20works.png?raw=true)

- Models are interact with the SQL (that is hosted on PHP MyAdmin), so basically they're what you use to query stuff, find stuff in the database or for DML.
- "Controllers" act as a middleman between the models and the views. Essentially, this is your backend - you use these to find information through the functions in the "models", route the contact form message to your email, etc etc. It is using the "models" to generate an API. For those of you familiar with JS, it's basically a PHP version of ExpressJS (conceptually, not syntactically)
- Views are basically your front end. If you go to any file in website/views/ and compare them to their corresponding page on [the main csss-ci site](https://www.csss-ci.com/), you can see that you can match up the html almost 1:1. 

This pretty much summarizes everything you need to know to edit [the main csss-ci site](https://www.csss-ci.com/). 

---

The dashboard, on the other hand is a little more complicated. While the backend is still done utilizing Code Igniter, the front end was generated utilizing Angular JS, which is why there is so much spaghetti code in the dashboard.csss-ci folder (dw, you don't have to care about any of it). The front end source code is located in csss_source. I believe the OG dev is currently working on that documentation - you'll have to check in with Sara about that.

## File Layout
### css_source code/
This constains all of the code that is then fed into Angular JS. Honestly really unsure about what exactly is in here, but I do know that this is in place of the dashboard's "views"
### dashboard.csss-ci.com/server/api
This contains all the backend code for the dashboard. This is the Code Igniter stuff. For controllers, keep clicking the folders until there are no more folders.

### dashboard.csss-ci.com/assets
Contains all the images, icons accessible by the dashboard. Also includes the styling for mobile devices.

### website
Contains all the code for the main csss-ci page. Self-explanatory.

# Other Notable Things
- I have not uploaded any of the changes to the website yet (have not yet replaced the folders on CPanel). 
- In order to download folders from CPanel, you have to right click on the folder -> press "compress" -> right click on the compressed folder -> click download
- The PHP MyAdmin database, website stats are all accessible through CPanel
- I am not completely sure if the "get" functions in Admins.php (lines 163 - 294, dashboard controller file) are correct. Could not for the life of me figure out why they're adding the number of rows to the total headcount (the `$data = $age + count($kj)` line; I might just be reading the code wrong)

# Resources
## For More Documentation Info:
### CodeIgniter User Guide
<https://codeigniter.com/userguide3/index.html>

## Commenting Style Guide
<https://codeigniter.com/userguide3/general/styleguide.html#commenting>

## Other Resources
### [Master Folder](https://drive.google.com/drive/folders/19lKZhVk8i2uWt0LwOYrq81o7ZIIcTPN2?usp=sharing)
### [Master Doc](https://docs.google.com/document/d/1tiVSJb_-o1nW99FSnSPuVsQOeQK91frzJYR2fx-d-84/edit?usp=sharing)
### [Our Figma Designs](https://www.figma.com/files/project/16958987/Care-CISSS)

