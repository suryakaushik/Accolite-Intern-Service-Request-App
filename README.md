# Service Request App

Platform that connects Service Provider and Consumer

## Features
Login using OAuth
Interactive Dashboard with Analytics
## Steps To run in Development Environment
ng serve --proxy-config proxy.config.json

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

1. Create MySQL-DB named service-request-app in MySQL 8.0.2 and add dummy data to DB (write INSERT queries)
`use service-request-app
select database();`

2. Import Java Project Using Eclipse IDE
Update project and build using goals: clean install
Run as SpringBootApplication in eclipse and start mysql server

** Note: eclipse settings--->
  - install spring boot suite and tools,
  - Java SE 15(jvm) and jre 15,add external jar in build path(servlet-api.jar for Tomcatv8.5) ,
  - add server in servers folder(use server at the time of installation.[note: don't use workspace server] ,set path of apache tomcat folder,in server.xml of tomcat in servers folder change port number to 9000(8080->9000)),
			


- Go to localhost:4200/ --> To see frontend (Inside frontend branch, Go to proxy.config.json, modify from 8080 to 9002)
- Go to localhost:9000/  --> To see Tomcatv8.5 Webpage (in server.xml, modify 8080 to 9000)
- Go to localhost:9002/ --> Spring Boot runs here (in application.properties,we write server.port=9002)



### POSTMAN Collection
https://www.getpostman.com/collections/7d64570e504fe31d091c

### SonarQube for Testing
https://stackoverflow.com/questions/59902276/how-to-setup-sonarqube-for-angular-7-project


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
