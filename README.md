# Phase 3 React Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My Comic Book Database

### Introduction

This is my frontend application, built using react to code in Ruby that can communicate with an API I set up with Sinatra and Active Record that in order to access a local database of comic book titles and characters.

The backend can be found here:

https://github.com/mitchellht34/phase-3-sinatra-react-project-backend.git

### Getting Started

### Frontend Setup

If you wish to utilize this fronend for your own uses [**Fork and clone**][fork link] this repository to get started. If you wish to use it as it was intended, you must first fork and clone the backend. Once you start running a server with the backend, they will be ready to interact.

[fork link]: https://github.com/mitchellht34/phase-3-sinatra-react-project-frontend.git

First run 
`npm install` to install the gems.

Then run `npm start` to start your frontend server
It will be run on `localhost:3000`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage
The intended use of this application is designed with the idea of someone who does not read comics in mind. Therefore, the best way to begin reading comics is to pick your favorite character or superhero and begin with those books. If you find someone else you are interested in, you can also search for their books.


## Design
The components are layed out in a way to utilize separation of concerns and cut down on excess uses of state, so I made many containers that can access my other components.





----
When you want to begin exploring the app, I reccommend using the backend, as there is plenty of data in the seeds file