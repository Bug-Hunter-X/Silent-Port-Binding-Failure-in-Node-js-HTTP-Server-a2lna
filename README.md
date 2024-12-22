# Silent Port Binding Failure in Node.js HTTP Server

This repository demonstrates a common, yet often overlooked, issue in Node.js: the silent failure of an HTTP server when attempting to bind to an already-occupied port.

## The Problem

The provided `bug.js` file contains a simple HTTP server.  If you run this server and another application is already using port 8080, the server will fail to start without providing any error messages to the console. This makes debugging challenging.

## The Solution

The `bugSolution.js` file presents a solution. By using the `error` event listener of the `http.createServer` object, we gracefully handle port binding errors. This allows the application to provide feedback to the user, preventing confusion and streamlining the debugging process.

## How to Reproduce

1.  Clone this repository.
2.  Run `bug.js`.
3.  While `bug.js` is running, try running it again.  Observe the lack of error messages. 
4.  Run `bugSolution.js`. Try running it again while it is running; Observe the error handling mechanism.

## How to Run

Use Node.js to run the Javascript files.
```bash
node bug.js
node bugSolution.js
```