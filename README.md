# Sergio's Mirth Angular App

### What is this?
This application is in response to a job description, where the outlined criteria include:
My qualifications for each requirement are as follows:

`3+ years development experience`  
I've started develping as of June of 2016, have been consulting for the past 1 year, with internship experience during the summer of 2015. This nearly 3 full years of experience.

`2+ years web development`  
I've been developing web applications for each role during my career.

`Angular development`  
I have extensive AngularJS experience from Thomson Reuters, and working Angular 2-7 experience from Thomson Reuters, as well as Sergio Solutions.

`SQL/DDL development in relational databases (Oracle, SQL Server, MySQL, etc)`  
I've been a full stack developer for the past two years, working extensively with Oracle and MySQL databases, along with NoSQL databases.

`Excellent written and verbal communication skills`  
Please observe this documentation as an example of my verbal communcation skills. As a business owner the past 1 year, I've developed extensive verbal skills as a necessary requirement to acquire business.

`Unix`  
2+ years of experience working with linux servers through my various occupations.

`Javascript`  
I've used Javascript more than any other language, building some applications with Full-Stack Javascript.

`Positive attitude`  
Positive attitude mixed with Optimism are necessary ingredients for exceptional team members, leaders, and success in all facets of life! Every day I strive to be as positive as possible.

`Java and/or C# experience`  
During my undergraduate program I used Java for 3 years. Through Pearson VUE and Thomson Reuters, I extensively used Java for the back-end services.

`Shell scripting (ksh/bash) experience`  
I've often used shell scripting to automate or reduce time spent on launching or killing sequences of processes

`Mirth development experience`  
I took this opportunity to learn software - I've set up a Mirth Connect server, and have called a REST endpoint in my Angular application on load. Please view the Mirth Connect server here: https://ec2-3-16-78-46.us-east-2.compute.amazonaws.com:8443/

Use the username: admin  
Use the password: ozzypassword

If you user the MC Admin Launcher, the same username and password will suffice.

`Azure exposure`  
Limited Azure exposure, though I'm comfortable with AWS, which is conceptually nearly identical to Azure.
# Important links
Client side hosted on github pages (explained below) which connects to back-end REST API  
https://sergnio.github.io/angular7mirth/

Database and back-end server hosted on AWS (explained below)
https://ec2-3-16-78-46.us-east-2.compute.amazonaws.com:8443

username and password to access dashboard listed a few lines above

# The Process
### Why build this application?
The purpose of building this application was to showcase my current understanding of languages and frameworks, and also to give a better understand of what type of candidate I am.

### Underlying Technology
##### Back-end
- This application needs to be HIPAA compliant, secure, available, and scalable. 
- EC2 instance, encrypted EBS volume (to protect patience data)
- I used a MySQL/MariaDB database (part of job requirements)
- We're running on Java 1.8 (MC requires additional steps for java 1.9+ compatibility, we gotta move fast!)
- Mirth Connect (part of job requirements)

##### Front-end
- Angular 7
- Angular routing
- Javascript
- NPM
- Bootstrap 4

### Steps I took
_**Disclaimer:**_ I've chosen to use **AWS** to quickly build out this application, as I wanted to create something quickly that demonstrates my knowledge of all or most of the technologies that are sought after.
1) First I created an EC2 instance, ensuring to encrypt the columes which will theoretically contain patient information. To do so, I created a enw EBS boot volume, and installed my application on it accordingly.
2) I then configured the security settings to allow `TCP` connections from port `80` from my personal IP, along with `HTTP` requests on `port 8080`, and finally `HTTPS` requests on `port 8443` (which is necessary for later)
3) I went ahead and installed the `java 1.8`, `mariadb` and `mariadb-server` packages, and started up the mariadb server.
4) I created a new user called 'admin'.
5) As the root user, I logged into the database and created database called 'mirth', and proceeded to grant all permissions for the 'admn' user on the table 'mirth', and left the database along for a little while.
6) Now I used wget to download mirth connect version 3.4.2 rpm and proceeded to unzip the package.
7) I changed to conf/mirth.properties file to add my MySQL dburl, username, and password, so MC knows which database to use and how to log into it.
8) I then started the MC Service - at this point, MC auto populated 13 tables in my database, confirming my service is running properly.
9) As a bonus, I added Mirthconnect to my Systemd startup, so it MC automatically starts upon server reboot/start.
10) I then logged into my MC Administrator by accessing `http://ec2-3-16-78-46.us-east-2.compute.amazonaws.com:8080`, and clicking the "access secure website" button.
11) I then downloaded the new MC Admin launcher (https://www.nextgen.com/products-and-services/NextGen-Connect-Integration-Engine-Downloads), and proceeded to log into the MC server I just created, using the credentials listed above.

I now wanted to play around a little more with Mirth, to gain a deeper understanding of this technology.
After some research and experimenting, I've learned that Mirth is an application that can be used to share patient information accross software platforms. Each system has to commnicate with a central repository, and Mirth can be used to transform the information within the messages being sent to suit the requirements of the end user.

It's one thing to learn and another to apply, so here's a few things that I did within my Mirth App.

12) I grabbed a sample HL7 message, and pasted that into the message template.
13) I then created a new filter, to only accept messages that messages that equal ADT.
14) I also use the message builder to update a message, and as an example, I set any outbound MSH.4 message to the value that's coming in from the MSH.3 inbound message.

While I might not entirely understand exactly all the ins and outs for using MC, I brainstormed a few use potential use cases for MC with my current knowledge:
1) Filter patient records where blood pressure is within a certain range (i.e. > 120/80)
2) Check if patient is on a specific medication, such as ibuprofen
3) If a patient uses a substance such as alcohol, categorize them into a group called "Alcohol Users" by modifying the incoming message.

Now that the MC server is up and running, it's time to build a front end application.
While most of my time was spent familiarizing and configuring this Mirth Application, so I didn't put much of an effort towards creating an extensive angular app.

15) I downloaded the angular cli tool, and created a base app with routing and with scss support.
16) Then I added a title service, bootstrap 4, and created some basic general purpose scss classes.
17) Next I created some header, footer, and a home page component with routing for the base path ('') to point to the home component.
18) For fun I then added a simple sidebar that redirects to the home page (only page) and I'll spare all the details as to how I added some div tags, h1 tags, coloring, etc.
19) And finally I created a simple api service class, which has some hard coded endpoints and login information to hit an endpoint. I'm not as familiar with Xml HTTP requests, but I managed to successfully hit an endpoint which is running on the EC2 instance and return a success message, which I then simply displayed in a div tag.
20) I then threw it up on github, and used github pages to host this application, as I've been running out of time and wanted a quick solution to host this client server.

And that's about it!
My main goal for this was to create a backend app, a simple Angular app, and call some REST API to demonstrate working knowledge of requirements.

### Struggles and pains
- I've never worked with Mirth before, and the documentation is so very limited, but I made some good friends on the Mirth Development Team (Nick and Chris were life savers!) and they were able to answer so many of my questions.
- Github pages was surprisingly not as easy to host an angular website on. I'm dealing with some strange double uri (https://sergnio.github.io/**angular7mirth/angular7mirth**/)
- Setting up servers from scratch can be a pain. I had to deal with CORS, downgrading versions of Mirth and Java because of existing bugs, and again, little documentation makes life sometimes difficult as a developer

### Lessons learned
- Mirth Developers are among the nicest, quickest people to work with and to have questions answered. It never ceases to amaze me how willing some strangers are to help other strangers!
- Humans (or maybe just me) are often poor estimators of time. What I thought would be a day or two project turned into be a much longer project, but...
- You reap what you sow - there's no shortcut. You get out what you put in. Period. I've learned and relearned so much about these technologies I've been working with, and I had a blast through it all.

### Wrapping it up
While this isn't a perfect representation of all technologies involved, and while I may not have showcased everything (there aren't too many ways to showcase SELECT and JOIN statements), I belive this is a fantastic representation of my abilities to:
- Produce on a timeline
- Prove initiative
- Deep knowledge of full stack technologies.

Thank you for reading!  

Best Regards,  
Sergio Najera
