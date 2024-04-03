# Stotles work sample assignment

## Getting started

This sample codebase consists of a separate client & server code.

It's set up in a simple way to make it as easy as possible to start making changes,
the only requirement is having recent versions of `node` & `npm` installed.

This is not a production ready configuration (nor production ready code),
it's only set up for easy development, including live reload.

To run the client bundler:

```
cd client
npm install
npm run dev
```

The processed code will be available at http://localhost:3001

To start the server:

```
cd server
npm install
npm run dev
```

The server will be available at http://localhost:3000 - the page is automatically configured
to use the assets served by vite on port 3001.

You should see something similar to this page:

![Search page](./screenshot.png)

### Disabling/Enabling TypeScript

If you prefer to completely disable TypeScript for a file, add `// @ts-nocheck` on the first line.
If on the other hand you'd like to enable strict type checking, modify `tsconfig.json` according to your needs.

Note that you can import plain JavaScript files that won't be fully typechecked.

### Browsing the database

You should start by looking at the migration in `./migrations` folder.
If you prefer to browse the DB using SQL, you can use the sqlite command line (just run `sqlite3 ./db.sqlite3`)
or any other SQL client that supports sqlite.

If for any reason the database becomes unusable, you can rebuild it using `./reset_db.sh` script`.

## The task

All the instructions are available [here](https://www.notion.so/stotles/Full-stack-software-engineer-work-sample-assignment-ae7c64e08f2a42a097d16cee4bc661fc).

---
I've added a filter above the search. As per the spec this allows independent filtering of the results.

Taking into account that there would be millions of records and thousands of buyers, I opted for a search field.
This allowed me to avoid pagination of all the results to show options that users would select from.

If it had more time, I may use something like this: https://3x.ant.design/components/table/#components-table-demo-row-selection-custom 
as it allows for pagination and is able to keep track of selections across pages. It would likely be easy to integrate with the existing tech.

Optimisations I would make:
- Add testing: There's nothing stopping this feature from impacting other functionality in the future or other features impacting this. Visibility is needed.
- Add debouncing on seach: Each letter pressed results in a round-trip to the server. With millions of records and many users this would mount up.
- Add accessibiily features and test with tools like AXE: Laws are strengthening to enforce minimum level of usability, also it would provide a better UX.
- Improve the styling: I currently tucked the filter above the main search, however I haven't done any testing to know if it's an improvement and useful. AB testing may help and consulting the designers
- Add security: Currenlty I haven't tested the user inputs to make sure that reasonable consideration has gone in to prevent malicious actions from causing a security incident like a breach or loss of data
- Make responsive: A lot of data consumption is done on differing sizes of device. I'd optimise this for responsive layout to provide a better experience for varying screen sizes.
- Refactor: There are places where functionality that could be re-usable is nested within functions that do a few things. I would extract these parts to their own functions so that as development continues we'd leverage speed gains from composability.
- Design patterns: Continuing from the above point I would start to consider and speak with the team about possible design patterns and libraries that would streamline the code paths that are starting to emerge.

