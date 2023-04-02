const NotesModel = require('./notesModel');
const NotesClient = require('./notesClient');
const NotesView = require('./notesView');


console.log('The notes app is running');

const model = new NotesModel();
const client = new NotesClient();
const view = new NotesView(model, client);

view.displayNotesFromApi();