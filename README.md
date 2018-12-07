# Sergio's Mirth Angular App

This application is in response to a job description, where the outlined criteria include:
My qualifications for each bullet point are as follows:

- 3+ years development experience
I graduated in June of 2016, with internship experience during the summer of 2015. This nearly 3 full years of experience.
- 2+ years web development 
I've been developing web applications for each role during my career.
- Angular development 
I have extensive AngularJS experience from Thomson Reuters, and working Angular 2-7 experience from Thomson Reuters, as well as Sergio Solutions.
- SQL/DDL development in relational databases (Oracle, SQL Server, MySQL, etc) 
I've been a full stack developer for the past two years, working extensively with Oracle and MySQL databases, along with NoSQL databases.
- Excellent written and verbal communication skills 
Please observe this documentation as an example of my verbal communcation skills. As a business owner the past 1 year, I've developed extensive verbal skills as a necessary requirement to acquire business.
- Unix 
2+ years of experience working with linux servers through my various occupations.
- Javascript 
I've used Javascript more than any other language, building some applications with Full-Stack Javascript.
- Positive attitude
Positive attitude mixed with Optimism are necessary ingredients for exceptional team members, leaders, and success in all facets of life! Every day I strive to be as positive as possible.
- Java and/or C# experience 
During my undergraduate program I used Java for 3 years. Through Pearson VUE and Thomson Reuters, I extensively used Java for the back-end services.
- Shell scripting (ksh/bash) experience 
I've often used shell scripting to automate or reduce time spent on launching or killing sequences of processes
- Mirth development experience 
I took this opportunity to learn software - I've set up a Mirth Connect server, and have called a REST endpoint in my Angular application on load. Please view the Mirth Connect server here: https://ec2-3-16-78-46.us-east-2.compute.amazonaws.com:8443/
Use the username: admin
Use the password: ozzypassword

If you user the MC Admin Launcher, the same username and password will suffice.

- Azure exposure
Limited Azure exposure, though I'm comfortable with AWS, which is conceptually nearly identical to Azure.

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
- Javascript
- NPM
- Bootstrap 4
- 

### Steps I took
First I created an EC2 instance, ensuring to encrypt the columes which will theoretically contain patient information. To do so, I created a enw EBS boot volume, and installed my application on it accordingly.
I've chosen to use AWS to quickly build out this application, as I wanted to create something quickly that demonstrates my knowledge of all or most of the technologies that are sought after.
### Struggles and pains

### Lessons learned
I've learned that Mirth is an application that can be used to share patient information accross software platforms. Each system has to commnicate with a central repository, and Mirth can be used to transform the information within the messages being sent to suit the requirements of the end user.





### Some nice things I've done
