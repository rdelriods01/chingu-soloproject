# Hello Chingus! 

This is my solo-project. Tier 2 / Tier 3: Frontend Project with API Integration

It's a react app. 
The Google Books API integration it's made with Firebase functions to keep the APIKEY secret. It takes a query string and returns an Array as a response. 

### firebase function
```js
const functions = require('firebase-functions');
const { google } = require('googleapis');

const books = google.books({
    version: 'v1',
    auth: 'APIKEY'
})

exports.searchBook = functions.https.onCall((data) => {
    let query = '';
    let splitted = data.split(' ');
    for (let i = 0; i < splitted.length - 1; i++) {
        query += splitted[i] + '+';
    }
    query += splitted[splitted.length - 1];
    const search = new Promise((resolve, reject) => {
        books.volumes.list({ q: query, country: 'US' }, (err, res) => {
            if (err) {
                console.log('The API return an err on SEARCH: ' + err);
                reject(err)
            }
            console.log('Request SEARCH sucess');
            resolve(res)
        })
    })
    return search.then(res => {
        return res.data;
    })
})
```

### front-end call to API

```js
const readBooks = fb.functions().httpsCallable('searchBook');
    readBooks(query)
    .then(res => {
      if (res.data.items) {
        this.setState({
          items: res.data.items
        })
      } else {
        this.setState({
          items: []
        })
      }
    })
    .catch(err => {
        console.log(err);
    })

```

It is mobile responsive, show notifications if it has an empty string on search input or if there are no matches.  