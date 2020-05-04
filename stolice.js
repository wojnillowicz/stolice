
var europeCapitals = {Albania:'Tirana', Andora:'Andorra', Austria: 'Wieden', Bialorus:'Minsk', Belgia:'Bruksela', BosniaHerzegovina:'Sarajevo', Bulgaria:'Sofia', Croatia:'Zagreb', Cyprus: 'Nicosia', Czechia:'Prague', Denmark:'Copenhagen', Estonia:'Tallinn', Finland: 'Helsinki', France: 'Paris', Georgia: 'Tbilisi', Germany: 'Berlin', Greece: 'Athens', Hungary:'Budapest', Iceland:'Reykjavik', Ireland: 'Dublin', Italy:'Rome', Kosovo:'Pristina', Latvia: 'Riga',
Liechtenstein:'Vaduz', Litwa:'Wilno', Luksemburg:'Luksemburg', Malta: 'Valletta', Moldawia: 'Kiszyniow', Monako: 'Monako', Montenegro:'Podgorica', Netherlands:'Amsterdam', Macedonia:'Skopje', Norway: 'Oslo', Poland: 'Warsaw', Portugal: 'Lisbon', Romania:'Bucharest', Russia:'Moscow', SanMarino: 'San Marino', Serbia:'Belgrade', Slovakia: 'Bratislava', Slovenia: 'Ljubljana', Spain: 'Madrid', Sweden: 'Stockholm', Switzerland: 'Bern', Turkey: 'Ankara', Ukraine: 'Kyiv',
WielkaBrytania: 'Londyn', VaticanCityState: 'Vatican'}

var europeCountries = ['Albania', 'Andora', 'Austria', 'Belarus', 'Belgium', 'BosniaHerzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia',
'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'SanMarino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'UnitedKingdom', 'VaticanCityState']

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//setting some variables for the first game
var chosenCountry = "Polska";
var correctAnswer = "Warszawa";
var tot = 0;
var count = 0;

function fn1(){
  var userAnswer = document.getElementById('guess').value;
  document.getElementById('showingUserAnswer').innerHTML = userAnswer;
  document.getElementById('showingCorrectAnswer').innerHTML = correctAnswer;
  userAnswer = capitalizeFirstLetter(userAnswer);
  if (userAnswer == correctAnswer) {
    document.getElementById('correctOrNot').innerHTML = "Dobrze!";
    tot = tot + 1;
    document.getElementById('totalPoints').innerHTML = tot;
  }else {
    document.getElementById('correctOrNot').innerHTML = "Źle...";
  }
  //changing the site for a new try
  document.getElementById('guess').value = "";
  count = count + 1
  var av = tot/count*100
  document.getElementById('average').innerHTML = av.toFixed(2);
  var randomIndex = getRandomInt(48);
  console.log(randomIndex);
  var randomCountry = europeCountries[randomIndex];
  console.log(randomCountry);
  console.log(europeCapitals[randomCountry]);
  chosenCountry = randomCountry;
  correctAnswer = europeCapitals[randomCountry];
  document.getElementById('country').innerHTML = chosenCountry;

}
