# Northcoders News

### Hosted API: https://elena-nc-news.herokuapp.com/api

### Backend Repository: https://github.com/elena-cav/be-nc-news

### Hosted frontend: https://nc-news-ec.netlify.app/

---

Northcoders News is a social news aggregation, web content rating, and discussion website.

### Functionalities

- A user can view a list of all articles
  - Each article has user curated ratings and can be up or down voted using the API.
  - A user can remove articles which they have added.
- A user can view a page for each topic with a list of related articles.
- Articles can be sorted by:
  - date created
  - comment_count
  - votes
- A user can view an individual article.
- A user can view an individual article's comments.
  - Users can add comments about an article.
  - Comments can also be up or down voted. A user can add comments and remove any comments which they have added.
- The user cannot vote for their own comments and articles.

### Error-handling

- 404 on non-existent path/a path for a non-existent article/topic.
- 400 error on a invalid article ID.
- Cannot post a comment if all form boxes have not been filled .

## Setup

- Fork this repo
- Git clone URL on your machine
- npm install
- npm start
  - Runs the app in the development mode.
  - Open http://localhost:3000 to view it in the browser.
  - The page will reload if you make edits.
  - You will also see any lint errors in the console.
