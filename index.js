let btn= document.getElementById("generate");

let qoutes=[
    ' “If you want to live a happy life, tie it to a goal, not to people or things.”– Albert Einstein',
    ' “The purpose of our lives is to be happy.” — Dalai Lama',
    '“Life is what happens when you’re busy making other plans.” — John Lennon',
    ' “Get busy living or get busy dying.” — Stephen King',
    ' “You only live once, but if you do it right, once is enough.” — Mae West',
    '“Money and success don’t change people; they merely amplify what is already there.” — Will Smith',
    ' “If life were predictable it would cease to be life, and be without flavor.” – Eleanor Roosevelt',
    '“In order to write about life first you must live it.”– Ernest Hemingway',
    '“The big lesson in life, baby, is never be scared of anyone or anything.”– Frank Sinatra',
    '“Curiosity about life in all of its aspects, I think, is still the secret of great creative people.” – Leo Burnett',
    '“Life is not a problem to be solved, but a reality to be experienced.”– Soren Kierkegaard',
    '“The unexamined life is not worth living.” — Socrates',
    '“Turn your wounds into wisdom.” — Oprah Winfrey',
    '“The way I see it, if you want the rainbow, you gotta put up with the rain.” —Dolly Parton',
    '“Everything negative – pressure, challenges – is all an opportunity for me to rise.” — Kobe Bryant',
    '“You never really learn much from hearing yourself speak.” ― George Clooney',
    '“Life is like riding a bicycle. To keep your balance, you must keep moving.” — Albert Einstein',
    'Life is a succession of lessons which must be lived to be understood.” — Helen Keller',
    '“When we do the best we can, we never know what miracle is wrought in our life or the life of another.” — Helen Keller',
    '“The healthiest response to life is joy.” — Deepak Chopra',
    '“Life is like a coin. You can spend it any way you wish, but you only spend it once.” — Lillian Dickson',
    '“In three words I can sum up everything I’ve learned about life: It goes on.” ― Robert Frost',
    
]



btn.addEventListener('click',function(){
    let num= Math.floor(Math.random() * (qoutes.length));
    console.log(num);

    document.getElementById("para").innerHTML= qoutes[num];
})
console.log(qoutes[2]);