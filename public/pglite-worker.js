// Import the PGlite class for interacting with the SQLite database
import { PGlite } from '@electric-sql/pglite';
// Import the worker utility to run database operations in a Web Worker
import { worker } from '@electric-sql/pglite/worker';

// Initialize the worker with a function that returns a new PGlite instance
worker({
  // The init function is called when the worker starts
  async init() {
    // Create a new PGlite database using IndexedDB for storage
    return new PGlite('idb://my-pgdata');
  },
});