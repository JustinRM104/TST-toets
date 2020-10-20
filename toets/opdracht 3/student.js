function Student(naam, studentId) {
    this.name = naam + 'Hi';
    this.id = studentId;
    this.cijfers = [];
    this.klas = '';

    this.veranderKlas = function(klas) {
        this.klas = klas;
        console.log("Niewe klas is: " . klas)
    }

    this.veranderNaam = function(nieuweNaam) {
        this.name = nieuweNaam;
        console.log("Niewe naam is: " . nieuweNaam);
    }

    this.veranderId = function(nieuwId) {
        this.id = nieuwId;
        console.log("Niew id is: " . nieuwId);
    }

    this.veranderCijfers = function(nieuweArray) {
        // Moet een nieuwe array mee gegeven worden en of een lege.
        this.cijfers = nieuweArray;
    }

    this.getNaam = function() {
        return this.name;
    }

    this.getId = function() {
        return this.id;
    }

    this.getCijfers = function() {
        return this.cijfers;
    }

    this.getklas = function() {
        return this.klas;
    }
}

let student = new Student('myName', '0001');
student.veranderKlas = "MD2Aa";

// Hier moet je de variabele klas een waarde geven bijvoorbeeld MD2
console.log(
    /* Hier moet de variabele klas getoond worden */
)