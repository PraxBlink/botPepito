const Discord = require("discord.js");
const client = new Discord.Client();
/* var mysql = require('mysql'); */
var prefix = '!';
var phrasePepitoCommune="J'ai une petite question mais vous êtes pas obligés d'y répondre.";
var phrasePepitoLegendaire="J'peux savoir pourquoi j'suis dans une classe de cons ?";
var phrasePepitoLegendaire2="J'peux savoir ce que vous foutez au fond ?!";
var phrasePepitoRare="Parfois, faut pas chercher à comprendre, c'est juste logique.";
var phrasePepitoRare2="Schweitz !";
/* var connexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users"
}); */

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});
/* connexion.connect(function(err) {
  if (err) throw err; 
  console.log("Connexion à la base de donnée : Ok!");*/
client.on('message', msg => {
  var author = msg.author;
  var name = author.tag;

  if (msg.content === prefix + "help"){
    msg.channel.send("Voici les commandes pour fair réagir notre très cher Pépito :");
    msg.channel.send("!pepito random : Vous offre le plaisir de retrouver ses fameuses phrases. Certaines sont plus rares.");
    msg.channel.send("De nouvelles commandes et un enrichissement de son vocabulaire arriveront prochainement");
  }
  if (msg.content[0] === prefix){
    var splitMessage = msg.content.split(" ");
    if (splitMessage[0] === "!pepito")
    {
      if (splitMessage[1] === "random")
      {
        msg.delete();
        var nombreRandom = Math.random();
        if (nombreRandom<0.1){
          msg.channel.send(phrasePepitoLegendaire);
        }
        else{
          if (nombreRandom<0.2){
            msg.channel.send(phrasePepitoRare);
          }
          else{
            if (nombreRandom<0.5){
              msg.channel.send(phrasePepitoCommune);
            }
            else{
              if (nombreRandom<0.75){
                msg.channel.send(phrasePepitoRare2);
              }
              else{
                if (nombreRandom<0.9){
                  msg.channel.send(phrasePepitoCommune);
                }
                else{
                  msg.channel.send(phrasePepitoLegendaire2);
                }
              }
            }
          }
        }
      }
    }
  }


});
/* }); */

client.login('NTE1ODU0MDAyNzU2NTE3ODg4.Duh6qg.fQ78yiB8SDZL28ApDdDGYEdF4hU');
