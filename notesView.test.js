/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesClient = require('./notesClient');
const NotesView = require('./notesView');

jest.mock('./notesClient');

describe ('NotesView', () => {

  let model;
  let client;
  let view;

  beforeEach(() => {
    NotesClient.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel();
    client = new NotesClient();
    view = new NotesView(model, client);
  });

  it('displays all notes', () => {
    model.addNote('First note');
    model.addNote('Second note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  });

  xit('adds a new note and displays it', () => {
    const addNoteButtonEl = document.querySelector('#add-note-button');

    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'secret note';

    addNoteButtonEl.click();

    const notes = document.querySelectorAll('.note');

    expect(notes.length).toBe(1);
    expect(notes[0].textContent).toEqual('secret note');
  });

  it('displays the correct number of notes when displayNotes is called twice', () => {
    model.addNote('First note');
    model.addNote('Second note');
    view.displayNotes();

    model.addNote('Third note');
    model.addNote('Fourth note');
    view.displayNotes();

    const notes = document.querySelectorAll('.note');
    
    expect(notes.length).toBe(4);
  });

  it('displays notes from API', async () => {
    const notes = [{test: 'test'}, {test: 'test1'}];

    client.loadNotes.mockImplementationOnce((callback) => {
      callback(notes);
    });

    const setNotesSpy = jest.spyOn(model, 'setNotes');
    const displayNotesSpy = jest.spyOn(view, 'displayNotes');

    await view.displayNotesFromApi();

    expect(client.loadNotes).toHaveBeenCalled();
    expect(setNotesSpy).toHaveBeenCalledWith(notes);
    expect(displayNotesSpy).toHaveBeenCalled();
  });

  it('calls createNote method and displays notes from API when the user adds a new note', async () => {
    const addNoteButtonEl = document.querySelector('#add-note-button');
    const inputEl = document.querySelector('#note-input');
  
    inputEl.value = 'New note';
  
    const clientCreateNoteSpy = jest.spyOn(client, 'createNote');
    const viewDisplayNotesFromApiSpy = jest.spyOn(view, 'displayNotesFromApi');
  
    await addNoteButtonEl.click();
  
    expect(clientCreateNoteSpy).toHaveBeenCalledWith('New note');
    expect(viewDisplayNotesFromApiSpy).toHaveBeenCalled();
  });

});