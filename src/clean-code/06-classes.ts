(() =>{

    type Gender = 'M'|'F';

    class Person{

        constructor(
           public name      : string,
           public gender    : Gender,
           public birthdate : Date
           ){}
    }

    const person = new Person('Leonardo Yuseff Gobantes', 'M', new Date('1993-08-3'));
    console.log({person})

    class User extends Person {
        
        public lastAccess: Date;

        constructor(
            public email    : string,
            public role     : string, 
            name            : string,
            gender          : Gender,
            birthdate       : Date
        ){
            super(name, gender, birthdate)
            this.lastAccess = new Date()
        }

        checkCredentials(){
            return true;
        }
    }

    const user = new User(
        'leo.yuseff.g@gmail.com', 
        'Developer', 'Leonardo Yuseff Gobantes', 
        'M',
        new Date('1993-08-3') 
    );

    console.log({user})

    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder  : string,
            email                  : string,
            role                   : string,
            name                   : string,
            gender                 : Gender,
            birthdate              : Date
        ){
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        'usr/home',
        '/bin',
        'leo.yuseff.g@gmail.com', 
        'Developer', 'Leonardo Yuseff Gobantes', 
        'M',  
        new Date('1993-08-3') 
    );

    console.log({userSettings})
})(); 