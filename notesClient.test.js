const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('NotesClient', () => {

  it('uses fetch to load data and then calls the callback with the result', async () => {
    const mockCallback = jest.fn();
    const client = new NotesClient();

    const mockData = {test: 'test'};
    
    fetch.mockResponseOnce(JSON.stringify(mockData));

    await client.loadNotes(mockCallback);
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledWith(mockData);
  });
  
});