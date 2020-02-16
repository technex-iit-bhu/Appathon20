# Technex Appathon 2019

## Steps to submit
- Fork this repository. 
- Clone it to your local computer. 
- Commit your code in a branch named after your team name. 
- Push your code to your remote fork. 
- Create a new pull request from your branch to the main branch of this repository. 

## PR format
- The pull request should have your Team name and product name in the title. 
- Write a brief description about your product in the PR Description. 
- If possible, provide links in case of website or built APK in case of mobile app. 
- Make sure your submitted code/PR contains instructions on how to build your code and any prerequisites that needs to be installed. 



# AgriConnect
This is the official code repository for **nerds**.

## Project Information
- Project Name : AgriConnect
- Short Project Description : Connecting and empowering farmers through digital technology and Artificial Intelligence.
- Team Name : nerds
- Team Members : [Shravan Nayak](https://github.com/BAJUKA)

## 🚩 Pitch
India being an agrarian economy over 22% per cent of the population are either cultivators or agricultural labourers, and nearly 53% of the people directly or indirectly dependent on agriculture. Hence, the prosperity of the farming sector is essential for the growth of our country. In a recent survey, it was found that around 76 per cent of the farmers wanted to give up farming. The reasons were bleak future and inadequate income, which can be attributed to bad agricultural practices and lack of use of technology. AgriConnect aims to solve this problem by using the power of digital technology and artificial intelligence. The following are the key aspects of AgriConnect.
- We create communities where farmers of a given locality or regions are grouped. We believe that instead of targeting the farming issue as a global issue, it must be treated as a group of several local ones. This is because India being a country with diverse environmental factors, one solution for farming is infeasible. Through communities, the farmers will stay connected, and there will be an exchange of knowledge between them. We bring this environment through several features which are described subsequently.
- We use the power of Machine Learning to give meaningful insights to the farmers regarding various aspects of farming. These include the trends in pricing, yield and many other statistical insights from the data input by the farmers. 
- A platform where farmers can rent their tools to the other farmers in the community. Some of the pieces of equipment may not be affordable by some farmers. In this case, those who have the priveledges to afford them can rent them when not in use. We provide a platform where farmers of a given community can access these equipments directly contacting the renters.
- A community forum where farmers in a given community can discuss their problems and help each other solve them.

Through these technologies, we not only connect the farmers and form strong networks but also empower the farmers with modern technology to solve their problem. We further aim to involve the research community into solving several agricultural issues. We have a vast pool of data gathered through farmers which involve their grievances obtained from community forums and various agrarian parameters. This data can be anonymized and open-sourced so that research groups can use this to derive meaningful insights. Moreover, the fact that we divide the farmers into communities based on the region can further help in developing region-specific solutions.

## 🚀 Technologies used
- [Django](https://www.djangoproject.com/) for Web Framework
- [Django Channels](https://channels.readthedocs.io/en/latest/) for WebSockets
- [Daphne](https://github.com/django/daphne) for ASGI web server
- [Redis](https://redis.io/) for Channel Layer Backend
- [PostGreSQl](https://www.postgresql.org/) for professional RDBMS engine
- CanvasJS, Ajax, jQuery and Bootstrap
- Git :heart:

## AWS Services used
- AWS EC2
- AWS RDS (PostgreSQL)
- AWS SageMaker (Time Series Prediction)
- AWS Lambda functions
- AWS API Gateway
- AWS S3

## 🔧 How to build
- The project requires Python 3.7+ and uses [Pipenv](https://pypi.org/project/pipenv/) for dependency management.
- The project also depends on [Redis](https://redis.io/) so make to install redis server and start it using `redis-server &`.
- Navigate to project directory and install all python dependencies and activate environment using:
```bash
pipenv install
pipenv shell
```
- Run the Django migrations using `python manage.py migrate`.
- Run the local development server using `python manage.py runserver`.

## Points we want to highlight
- All Machine Learning models were trained and deployed using Amazon Sage Maker.
- The inference is made by requesting via an api endpoint, built using AWS Lambda service.
