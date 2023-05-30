- Angular is enterprise oriented, it's created for big applications
- Angular supports form management => the CRUD ops are natively inside of Angular
- Just like React **NEVER USE DOM MANIP**

---

- Decorators => adds extra data to classes

  - **@Input**
  - **@Output** => EventEmitter => needs to be emitted

  ```ts
      @Output() selectUser = new EventEmitter<{id: string, name: string}>()


      onSelectUser () {
          this.selectUser.emit(this.users.find(u => u.id === id))
      }
  ```

  - **@Component** => name of component, selector, css and HTML template
    - CSS can be an array

---

- **Commands**:

  - `ng new APPNAME` => creates a new angular app
  - `ng generate component COMPNAME` => creates a new component => **SCHEMATICS EXTENSION**
  - `ng generate @schematics/angular:interface models/user` => creates a new model, can be done with the extension
    - we create a new interface for "User". The interface will be empty, so we need to give it a structure
    ```ts
    export default interface User {
      name: string
      status: string
    }
    ```
  - `ng generate @schematics/angular:service service/user` => Creates a new service for the User, can be done with extension
    - Service needs to create the user, push it in the array, update the user when we click on buttons (will handle CRUD)
---

- **Files**:

  - angular.json => schema of the app, usually not needed to change it, handles pipelines, errors etc.
  - karma.conf.js => configuration of tests
  - .editorconfig => equivalent of prettierrc
  - /app => all the application files fo here
  - /app/app.component.html => The HTML of the template APP

- **Built-in Directives**:

  - **OnInit** => equivalent of componentDidMount
  - **\*ngIf** => equivalent of && in react

---

- **Data binding**

  - **{{}}** => interpolation
  - two way data binding => data comes from the page, gets manipulates and output again
    - vedi form-example.component.html

- **Form Handling** =>
  - in order to send something from html forms to the users component we need both components to know the structure of users
    - we use services for that
  - su AppModule va importato @angular/forms per riconoscere i campi degli input
- Passaggio di dati:

  - con [nomeProp] inseriamo una proprieta' @Input
  - con (click) si chiamano eventi, le funzioni devono essere nel componente ts
  - [(ngModel)] collega l'input ad una variabile del componente

- Services => erogano metodi se devono essere usati da piu' componenti, solitamente collegato a un form

  - su UserService possiamo dichiarare proprieta' che vengono utilizzati in vari componenti

- Routing

  - Il tasto back non funziona
  - no url comunicabile, tutto su /
