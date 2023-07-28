var map = L.map('map').setView([36.7525,3.04197], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


var marker = L.marker([36.80110658677832, 3.042593882927742],{alt : 'Notre Dame d\'Afrique'}).addTo(map)
.bindPopup("<p>Lieu:Notre Dame d'Afrique</p>\
<p>Site: Alger</p>\
<p>Catégorie:Eglise</p>\
<p>Thème:Historique et Religieuse</p>\
<p>Description: Notre Dame d’Afrique, connue autrefois par les algérois comme « Madame l’Afrique » ou encore « Lella Myriam » est située dans le quartier de Z’Ghara, sur la commune de Bologhine. Elle se dresse à 124 mètres d’altitude et domine de ce fait les quartiers ouest d’Alger.</p>\
<img src='https://files.structurae.net/files/photos/1/notre_dame_dafrique2.jpg' class='ig'>");






var marker2 = L.marker([36.784472176090034, 3.0600243375168192],{alt : 'Casbah'}).addTo(map)
.bindPopup("<p>Lieu:Casbah</p>\
<p>Site: Alger</p>\
<p>Catégorie:Cité historique</p>\
<p>Thème:Historique</p>\
<p>Description: La Casbah (qui signifie la « citadelle ») est l’ancienne citadelle d’Alger, peu à peu on appela la Casbah l’ensemble du quartier autour de la citadelle.La Casbah d’Alger fût fondée sur les ruines de l’ancienne ville fondée par les Romains, Icosium. Construite sur une colline, descendant vers la mer et divisée en deux : la haute Casbah et la basse Casbah.</p>\
<img src='https://babzman.com/wp-content/uploads/2014/05/casbah.jpg' class='ig'>");




var marker3 = L.marker([36.77558349992017, 5.106709587791557],{alt : 'Cap Carbon'}).addTo(map)
.bindPopup("<p>Lieu:Cap Carbon</p>\
<p>Site: Bejaia</p>\
<p>Catégorie:Cité historique</p>\
<p>Thème:Historique</p>\
<p>Le Cap carbon est connu pour être le phare naturel le\
plus élevé du monde, appelé aussi El Metqoub, il est\
couronné par deux édifices, le phare et le sémaphore. Le\
phare fut construit en 1889 et s’élève à 220 m au-dessus\
de la mer et sa lumière est visible à une distance de 35\
Milles marins.</p>\
<img src='https://dia-algerie.com/wp-content/uploads/2021/03/cap-carbon.jpg' class='ig'>");





var marker4 = L.marker([36.890801211059426, 7.716270114043993],{alt : 'Saint Augustin'}).addTo(map)
.bindPopup("<p>Lieu:Saint Augustin</p>\
<p>Site: Annaba</p>\
<p>Catégorie:Eglise</p>\
<p>Thème:Historique et Religieuse</p>\
<p>Description: Par la mer ou par la route, de jour ou de nuit, le premier\
monument apparent, de loin, pour les visiteurs de la ville\
d’Annaba (Bone) est la célèbre Basilique Saint Augustin\
qui est l’unique « église » de la ville qui n’a pas été\
détruite ou transformée en mosquée.\
Pour les bônois, la population de la ville d’Annaba et de\
toute l’Algérie, la Basilique Saint Augustin n’est pas\
uniquement une basilique religieuse, mais l’un des plus\
importants monuments historiques au monde et donc un\
site touristique qui est visité par des milliers familles de\
toutes religions notamment les familles musulmanes.</p>\
<img src='https://dz.ambafrance.org/IMG/arton1212.png?1382541704' class='ig'>");






var marker5 = L.marker([35.70967533679525, -0.6644072729163855],{alt : 'Fort Santa Cruz'}).addTo(map)
.bindPopup("<p>Lieu:Fort Santa Cruz</p>\
<p>Site: Oran</p>\
<p>Catégorie:Eglise</p>\
<p>Thème:Historique et Religieuse</p>\
<p>Description: Le fort de Santa Cruz est l’un des vestiges forts de\
l’occupation espagnole. Cette citadelle, construite il y a des\
siècles et implantée à des centaines de mètres de hauteur,\
offre un panorama unique sur le port d’El Kébir et sur toute la\
station balnéaire ! Cette forteresse impressionne son monde\
avec sa fabuleuse ossature et sa mythique bâche d’eau.\
Comme pour tout couronner, le site jouxte une enceinte\
religieuse à la réputation immense qui vous ouvrira ses portes\
pour un séjour inoubliable !</p>\
<img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Notre_Dame_de_Santa_Cruz.jpg' class='ig'>");





var marker6 = L.marker([25.92657889972973, 8.343844708499564],{alt : 'Parc culturel du Tassili'}).addTo(map)
.bindPopup("<p>Lieu:Parc culturel du Tassili</p>\
<p>Site: Illizi</p>\
<p>Catégorie:Musée</p>\
<p>Thème:Nature / Culture</p>\
<p>Le Tassili N’ajjer est classé depuis 1982 au Patrimoine\
mondial de L’UNESCO ! à l’heure actuelle ce lieu contient plus\
de 15 000 gravures et peintures d’art rupestre\
impressionnantes et réalisées à même la pierre dans le désert\
du Sahara ces peintures représentent notamment des\
Hommes ainsi que des animaux mais ce n’est pas tout</p>\
<img src='https://pbs.twimg.com/media/EMPohzRXsAEoFJa.jpg:large' class='ig'>");

