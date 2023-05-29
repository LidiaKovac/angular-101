- Angular supports form management => the CRUD ops are natively inside of Angular 
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
- Just like React **NEVER USE DOM MANIP**
- Commands:
    - `ng new APPNAME` => creates a new angular app
    - `ng generate component COMPNAME` => creates a new component => **SCHEMATICS EXTENSION**

- Files: 
    - angular.json => schema of the app, usually not needed to change it, handles pipelines, errors etc. 
    - karma.conf.js => configuration of tests
    - .editorconfig =>  equivalent of prettierrc 
    - /app => all the application files fo here
    - /app/app.component.html => The HTML of the template APP

- More: 
    - **{{}}** => data binding (one way)
    - **ngOnInit** => equivalent of componentDidMount 
