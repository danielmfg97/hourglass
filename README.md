<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

The application's target audience is professionals who need to record working hours in associated projects.

A RESTful API must be developed to meet the functional requirements of the visual project already presented.
In this API we have 3 main entities: user, project and time. The relationship would be: - Users have projects;
- Projects have recorded working times;
- A user has multiple projects;
- A project has multiple users;
- A project has multiple recorded times;
- A registered time has only one associated project;
- One time has one user;

## Tasks Breakdown and estimated time;

- Study and understanding the project - 1 hour
- Choosing which techologies to use - 1 hour 
- Project creation and initial setup - 1 hour
  - Git repository creation - 10 minutes
  - Architecture definement and database definement - 10 minutes
  - Project initialization - 10 minutes
  - Project initial setup (Database setup, configuration setup) - 30 minutes

- Development
  - Users module setup and development - 4:30 hours
    - Database entity creation - 30 minutes
    - Users module methods development - 3 hours
    - Tests and creation of the tests files - 1 hour

  - Projects module setup and development - 4:30 hours
    - Database entity creation - 30 minutes
    - Projects module methods development - 3 hours
    - Tests and creation of the tests files - 1 hour

  - Hours module setup and development - 4:30 hours
    - Database entity creation - 30 minutes
    - Users module methods development - 3 hours
    - Tests and creation of the tests files - 1 hour

  - Auth module setup and development - 4:30 hours
    - JWT inicial setup and definition of keys - 30 minutes
    - Login logic development - 1 hour
    - Token logic development - 1 hour
    - Applying private/public routes logic into the API's routes - 1 hour
    - Tests and creation of the tests files - 1 hour

  - Tests - 2:30 hours

    - Overall test of the project - 1:30 hour
    - Logic tests and final ajustments - 1 hour

- Total hours - 23:30

  
## How to test

The application was setup to run on port :3000 and the database on port 9000:80 (pgAdmins), so make sure they are not being used by any other software.

There is a "http-tests" folder in the project already configured and setup for the requests with four different files, one for each module. In order to use those requests you have to have the "http-client" extension installed on your vs-code, after installed, there'll be a "Send Request" option on top of every request.

You could also use Postman or Insomnia

Most of the requests are protected by JWT so for them to work you have to create a user first and then login to get the token needed by the authentication method.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# the project contains docker
$ docker-compose up --build

#to go inside the container
$ docker-compose exec app bash

#kill the application
$ docker-compose down
```

## License

Nest is [MIT licensed](LICENSE).
