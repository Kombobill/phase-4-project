# Phase-4-Project

# Description

- This is a client and API repository for an hospital management.

# Getting Started

- In order to use this repo you need to have the following installed:

-0 OS [either: Windows 10+, Linux or MacOS

- Ruby - 3.1.+

# Installation

- To use this repo on your machine requires some simple steps

# Alternative One

- Open a terminal / command line interface on your computer

- Clone the repo by using the following:

        -  git@github.com:Kombobill/phase-4-project.git

- Change directory to the repo folder:

        - cd phase-4-project.git

- Open it in Visual Studio Code

        - code .

(Alternate Option) Open it in any editor of your choice.

# Alternative Two

- On the top right corner of this page there is a button labelled Fork.

- Click on that button to fork the repo to your own account.

- Take on the process in Alternative One above.

- Remember to replace your username when cloning.

        -  git@github.com:Kombobill/phase-4-project.git


# Project SetUp

- This project requires alot of installation as follows:

- To install a rails application:

        - rails new (name of the app) --skip-javascript(this command skips js)

- To run the serializer  add the following to the gemfile

        - gem 'active_model_serializers'

- To run and install our gems in the gemfile in the terminal run

        - bundle install

- To generate the serializers folder and respective files on the terminal run

         - rails g serializer (the name of the file you want to create in lower case)

 - To generate migrations which in returns both controllers and models

          - rails g resource Hero name:string super_name:string 

 - To run the migrations

        - rails db:migrate

 - To seed  data 

        -  rails db:seed

- To acces a the server

        - rails s 

# React Set-up
- This project run in a Javascript libary react.

- To work with react:
    
        - npm install
    
- create a react app 

          - npx create-react-app my-app

- change directory to your app

         -  cd my-app         

  - To run our page

            - npm start  --prefix client



# Technologies used

- Ruby on Rails

# Authors

- This project was contributed to by:

- Faith Chemutai
- Bob Oyier
- Brian Isaboke
- Billgates Kombo
- Dorothy Jebet


