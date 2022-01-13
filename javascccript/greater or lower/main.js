
let X = (Math.floor(Math.random() * 100));
let Y = (Math.floor(Math.random() * 100));
let GrootsteGetal;

const result = prompt(X + ` or ` + Y);

if (X > Y) { 
  GrootsteGetal  = X;    
console.log(GrootsteGetal)
}

else{
 GrootsteGetal = Y;
 console.log(GrootsteGetal)
};

if (GrootsteGetal == result){
 alert('correct')
}

else {
    alert('fout')
}



