# Gallery app 

The app is built using React & node.js

## Stretch
- External gallery API page e.g. art institutes, pinterest 
- Move database to AWS RDS - mySQL, server-side to AWS Lambda and API Gateway
- Authentication
- Update posts
- Styling (SCSS / Tailwind)
- Playlist link, player addon

## Running the app

```sh
git clone https://github.com/zacharychoi-ce/gallery-app-react.git
cd gallery-app-react && npm i
```

Database setup
```sh
npx knex migrate:latest
npx knex seed:run
```

Running the app
```sh
npm run dev
```

On browser, run:
```sh
http://localhost:3000
```