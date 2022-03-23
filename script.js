
function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Carrée rouge a 10 et 10 x et y du bord  et 50px de largeur
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    // carrée bleu transparant
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);

    // triangle
    ctx.beginPath();
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.moveTo(75,50); // move to permet de deplacer le style à un endroit specifique du canvas
    ctx.lineTo(125, 75); // crée une premiere ligne en partant de la position précédente
    ctx.lineTo(125, 25); // puis une seconde ligne
    ctx.fill(); // demande de remplir le dessin. Trace auto une ligne pour fermer le dessin.

    // smiley
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.arc(150, 150, 50, 0, Math.PI * 2, true); // cercle exterieur
    
    ctx.moveTo(185, 150);
    ctx.arc(150, 150, 35, 0, Math.PI, false); // bouche (sens horaire);
    ctx.moveTo(142, 134);
    ctx.arc(134, 134, 8, 0, Math.PI * 2, true); // oeuil gauche
    ctx.moveTo(170, 134);
    ctx.arc(162, 134, 8, 0, Math.PI * 2, true); // oeuil droit
    ctx.stroke();

    
    

    

    


    }
}
  
document.addEventListener('DOMContentLoaded', draw());
