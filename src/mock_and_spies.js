class SendMessage {
    
    constructor(number, message) {

        this.number = number;
        this.message = message;
    }

    //Getters and setters
    getNumber() { 
        
        return this.number; 
        
    }

    getMessage() { 
        
            return this.message; 
    }

    //Public methods
    toString() { 

        console.log(`${this.getNumber()} has ${this.getMessage()}`)
        return (`${this.getNumber()} has ${this.getMessage()}`)
    }
}

var user = new SendMessage( '0681203162', 'changed');

user.toString();


