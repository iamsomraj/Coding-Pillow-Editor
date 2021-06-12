# 🖥 Coding Pillow Editor

Coding Pillow Editor is a web-based code editor for web developers. When you register for Coding Pillow Editor, users get a coding environment with some already existing HTML, CSS and JavaScript code-snippets.

You can either use Coding Pillow Editor now with the help of `live version` or setup this project on your `local machine`.

## Top Features

- Online Code editor
- User Auth & Registration
- File Explorer & Any type of File Creation
- Preview Based on Code
- Light and Dark Mode toggle for editor
- Mulitple windows such as File Editor, Code Editor and Preview
- Resizable Windows
- Basic Terminal
- Persisting Code even after Refresh

## Status of CI/CD Setup

![Deploy](https://github.com/iamsomraj/Coding-Pillow-Editor/actions/workflows/main.yml/badge.svg)

![Client Unit Test](https://github.com/iamsomraj/Coding-Pillow-Editor/actions/workflows/unit-tests.yml/badge.svg)

## Documentation

For developing this project, I prepared one basic design documentation. I will encourage you to see that first, so that you can get a better idea what to expect from this.

[Design Document - Link](https://viewer.diagrams.net/?target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=CodingPillowEditor.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1LB5tqI6q0m9oAXTLk9yQuO8I8cNiopW-%26export%3Ddownload)

## Demo

- [Live Version - Heroku - CI/CD](http://codingpilloweditor.herokuapp.com/)
- [Live Version - AWS](http://13.234.32.19:5000/)

## Install Coding Pillow Editor

- Open Terminal

- Clone Coding Pillow Editor Repository

```bash
    git clone https://github.com/iamsomraj/Coding-Pillow-Editor.git
```

- Install dependencies for Server & Client

```bash
  cd Coding-Pillow-Editor
  npm run setup
```

## Run Coding Pillow Editor

- Setup Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `NODE_ENV` : production or development
- `PORT` : port for express server
- `MONGO_URI` : URI for Mongo DB connection
- `JWT_SECRET` : For User tokens

Create these environment variables, save them in Coding Pillow Editor root folder. File name can be `.env`.

- `.env` file -

```
NODE_ENV = development
PORT = 5000
MONGO_URI = {MONGODB}://{USER}:{PASSWORD}@{CLUSTER_NAME}.{URI}/{DATABASE}
JWT_SECRET = {YOUR_SECRET_KEY}
```

- Start Coding Pillow Editor

```bash
  npm run dev
```

## Running Tests

Coding Pillow Editor currently supports some frontend tests using `jest` & `react-testing-library` . To run tests, run the following command

```bash
  npm run client:test
```

## Tech Stack

**Client:** React, Redux

**Server:** Node, Express, Mongoose

**Language Used:** Typescript (Client), Javascript (Server)

## Express API Reference

These are available API end-points for our server

### User Routes

#### Auth user & get token

```http
  POST /api/users/login
```

| Access   | Route              | Description                      |
| :------- | :----------------- | :------------------------------- |
| `public` | `/api/users/login` | Login and get token for the user |

#### Register user

```http
  POST /api/users
```

| Access   | Route        | Description            |
| :------- | :----------- | :--------------------- |
| `public` | `/api/users` | Create new user record |

#### Get user information

```http
  GET /api/users/profile
```

| Access    | Route                | Description      |
| :-------- | :------------------- | :--------------- |
| `private` | `/api/users/profile` | Get user profile |

### File Routes

#### Get all files

```http
  GET /api/files
```

| Access    | Route        | Description                 |
| :-------- | :----------- | :-------------------------- |
| `private` | `/api/files` | Fetch all files of the user |

#### Get file

```http
  GET /api/files/:id
```

| Access    | Route            | Description      |
| :-------- | :--------------- | :--------------- |
| `private` | `/api/files/:id` | Fetch file by id |

#### Create file

```http
  POST /api/files/
```

| Access    | Route         | Description          |
| :-------- | :------------ | :------------------- |
| `private` | `/api/files/` | Create file for user |

#### Update file

```http
  PUT /api/files/:id
```

| Access    | Route            | Description             |
| :-------- | :--------------- | :---------------------- |
| `private` | `/api/files/:id` | Update file of the user |

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback or you want to give me some tips related to development, please reach out to me at iamsomraj@gmail.com.
