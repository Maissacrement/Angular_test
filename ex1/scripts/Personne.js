class Personne {

    // constante


    // constructeur
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    /** ----Methode---- **/

    // getteur
    getName(){
        return this._name;
    }
    getAge(){
        return this._age;
    }

    // setteur
    setName(name){
        this._name = name;
    }
    setAge(age){
        this._age = age;
    }

    // Autre

    estPlusAgeQue(a_Personne){
        plusGrand = null;
        if(typeof a_Personne.getAge() == "number"){
            if(this._age > a_Personne.getAge()){
                plusGrand = true;
            }
            else{
                if(this._age == a_Personne.getAge()){
                    console.log("Vous avez le meme age");
                }
                plusGrand = false;
            }
        }
        else {
            console.log("Vous n'avez pas entrez un object avec un attribut age de type number");
        }
    }

}
