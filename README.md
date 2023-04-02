# Notes App

This is a web application that allows users to create and view notes. It is built using JavaScript and HTML, and relies on a simple server-side API to store the notes. The code has been tested using Jest. This project was completed as part of the Makers Academy coding bootcamp.

## Features

The Notes App has the following features:

* Create a new note by entering text into a form and submitting it.
* View a list of all notes that have been created.
* Reset the list of notes to an empty state by clicking on a "Reset all notes" button.

## Exercises and Challenges

As part of the Makers Academy bootcamp, I completed a number of exercises and challenges to further develop the functionality of the Notes App. These included:

* Testing callbacks: In this exercise, I learned how to write tests for functions that use callbacks to return their results.
* Test-driving the NotesClient class: I test-drove a new NotesClient class that uses fetch to send HTTP requests and retrieve a list of notes from the server.
* Connecting the NotesView and NotesClient classes: I updated the constructor of the NotesView class to allow for dependency injection of a NotesClient instance, and test-drove a new method `displayNotesFromApi()` that loads notes from the server and displays them.
* Creating a new note on the server: I test-drove a new method `createNote()` on the NotesClient class that sends a POST request to the server to create a new note, and updated the NotesView class to call this method when the user submits the form.
* Handling network errors: I modified the NotesView and NotesClient classes to handle network errors that may occur when fetching or creating notes from the server.
* Clearing the list of notes: As a post-challenge extension, I implemented a way for the user to reset the list of notes using a DELETE request to the server.

## Acknowledgements

This project was completed as part of the Makers Academy coding bootcamp. Many thanks to the instructors and coaches who provided guidance and support throughout the development process.
