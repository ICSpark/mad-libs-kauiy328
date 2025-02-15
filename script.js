// ---- Write code below ---- \\
function dinner() {
    let Food = prompt("Name a food: ");
    let Smell = prompt("Give me a strange smell: ");
    let Adjective = prompt("Give me an adjective: ");
    let Animal = prompt("Name an animal: ");
    let Verb = prompt("Give me a verb: ");
    let Object = prompt("Name an object: ");
    let FunnyQuote = prompt("Give me a funny quote: ");
    let FunnyQuote_2 = prompt("Give me another funny quote: ");

    document.getElementById("output").innerHTML = `
<p>The dinner party started with a dish of ${Food} that smelled like ${Smell}. 
Suddenly, a ${Adjective} ${Animal} appeared and started ${Verb}ing on the table! 
The host grabbed a ${Object} and yelled "${FunnyQuote}!" 
We all laughed and said "${FunnyQuote_2}." It was unforgettable!</p>
`;
}

//it does not have to be the same variable name nor prompt
function mystery()
{
  const adj = prompt("Give me an adjective");
  const place = prompt("Give me a place");
  const sound = prompt("Give me a sound");
  const silName = prompt("Give me a silly name");
  const obj = prompt("Give me an object");
  const noun = prompt("Give me a noun");
  const name = prompt("Give me a name");
  const jobTitle = prompt("Give me a job title");
  const verb = prompt("Give me a verb");
  const sub = prompt("Give me a substance");
  const food = prompt("Give me a food");

  //assuming the variables are the same in step 13
    document.getElementById("output").innerHTML = `
<p>On a(n) ${adj} night in the grand ${place}, a loud ${sound} revealed Lord ${silName} lying beside a ${obj}, muttering, "It was the ${noun}!"
Detective ${name}, questioned the ${jobTitle}, who was caught ${verb}ing near the scene. But the truth was stranger than fiction.
It turns out Lord ${silName} had slipped on ${sub} while trying to steal a plate of ${food}.
Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
`;
}

function travel()
{
  //it does not have to be the same variable name nor prompt
  const histFig = prompt("A Historical Figure");
  const place = prompt("A Place in Time");
  const obj = prompt("A Object");
  const pluNoun = prompt("A Plural Noun");
  const adj1 = prompt("Adjective");
  const verb = prompt("Verb");
  const histPlace = prompt("A Historical Place");
  const silName = prompt("A Silly Name");
  const adj2 = prompt("Adjective");

    document.getElementById("output").innerHTML = `
<p>Your time machine malfunctions, and a ${histFig} steals your homework escaping to ${place}!
Armed with a ${obj}, you chase them through time, dodging ${pluNoun} and a ${adj1} dinosaur trying to ${verb} you.
You finally catch the thief at the ${histPlace} and grab your homework just time.
Back in class, your teacher, ${silName}, says, "That's the most ${adj2} excuse ever!" But hey, you got an A!</p>
`;
}

function generateSuperheroStory() {
    const adjective1 = prompt("Adjective");
    const place = prompt("Place");
    const adjective2 = prompt("Adjective");
    const superheroName = prompt("Superhero Name");
    const verb1 = prompt("Verb");
    const pluralNoun = prompt("Plural Noun");
    const verb2 = prompt("Verb Ending in -ing");
    const location = prompt("Location");
    const adjective3 = prompt("Adjective");
    const villainName = prompt("Villain Name");
    const verb3 = prompt("Verb");
    const sidekickName = prompt("Sidekick's Name");
    const superpower = prompt("Superpower");
    const verb4 = prompt("Verb");
    const adjective4 = prompt("Adjective");
    const noun = prompt("Noun");
    const verb5 = prompt("Verb");
    const adjective5 = prompt("Adjective");

    document.getElementById("output").innerHTML = `
        <p>The Superhero Adventure</p>

        <p>Once upon a time, in the city of ${adjective1} ${place}, there lived a ${adjective2} superhero named ${superheroName}. Every day, ${superheroName} would ${verb1} around the city, looking for ${pluralNoun} in need of help. One day, while ${verb2} at ${location}, ${superheroName} discovered a ${adjective3} plot by the evil villain ${villainName}.</p>

        <p>${superheroName} knew they had to act fast. With their trusty sidekick, ${sidekickName}, they ${verb3} to the scene. Using their incredible powers of ${superpower}, they managed to ${verb4} the ${adjective4} ${noun} and save the day. The people of ${place} cheered and celebrated as ${superheroName} and ${sidekickName} ${verb5} off into the sunset, ready for their next ${adjective5} adventure.</p>
    `;
}
