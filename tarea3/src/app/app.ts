import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IMovie } from './interfaces/imovie';
import { SideBar } from './pages/side-bar/side-bar';
import { Movies } from './pages/movies/movies';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar, Movies],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  moviesList = signal<IMovie[] | undefined>(undefined);

  constructor() {
    this.moviesList.set([
      {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        producer: "Emma Thomas",
        genre: "Ciencia Ficción",
        year: 2010,
        description: "Un ladrón especializado en el robo de secretos a través del plano subconsciente recibe la oportunidad de borrar su historial criminal a cambio de implantar una idea en la mente de un CEO.",
        imgURL: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500"
      },
      {
        id: 2,
        title: "El Padrino",
        director: "Francis Ford Coppola",
        producer: "Albert S. Ruddy",
        genre: "Crimen",
        year: 1972,
        description: "El envejecido patriarca de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su hijo reacio.",
        imgURL: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500"
      },
      {
        id: 3,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        producer: "Lawrence Bender",
        genre: "Crimen",
        year: 1994,
        description: "Las vidas de dos matones de la mafia, la esposa de su jefe, un boxeador y una pareja de atrancadores de restaurantes se entrelazan en cuatro historias de violencia y redención.",
        imgURL: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500"
      },
      {
        id: 4,
        title: "El Caballero de la Noche",
        director: "Christopher Nolan",
        producer: "Emma Thomas",
        genre: "Acción",
        year: 2008,
        description: "Cuando la amenaza conocida como el Guasón causa estragos en Gotham, Batman debe someterse a una de las mayores pruebas psicológicas y físicas para luchar contra la injusticia.",
        imgURL: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500"
      },
      {
        id: 5,
        title: "Interstellar",
        director: "Christopher Nolan",
        producer: "Emma Thomas",
        genre: "Ciencia Ficción",
        year: 2014,
        description: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por garantizar la supervivencia de la humanidad ante una Tierra moribunda.",
        imgURL: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500"
      },
      {
        id: 6,
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        producer: "Joel Silver",
        genre: "Ciencia Ficción",
        year: 1999,
        description: "Un hacker descubre por medio de misteriosos rebeldes la verdadera naturaleza de su realidad y su rol en la guerra contra los controladores del mundo simulado.",
        imgURL: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500"
      },
      {
        id: 7,
        title: "Parásitos",
        director: "Bong Joon-ho",
        producer: "Kwak Sin-ae",
        genre: "Thriller",
        year: 2019,
        description: "La discriminación de clase y la codicia amenazan la relación simbiótica recién formada entre la adinerada familia Park y el indigente clan Kim.",
        imgURL: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500"
      },
      {
        id: 8,
        title: "Parque Jurásico",
        director: "Steven Spielberg",
        producer: "Kathleen Kennedy",
        genre: "Aventura",
        year: 1993,
        description: "Un paleontólogo pragmático que visita un parque temático casi completo se ve obligado a proteger a dos niños tras un fallo catastrófico de seguridad que libera a los dinosaurios.",
        imgURL: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=500"
      },
      {
        id: 9,
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        producer: "Wendy Finerman",
        genre: "Drama",
        year: 1994,
        description: "Los eventos icónicos de varias décadas de historia estadounidense se desarrollan desde la perspectiva de un afable hombre de Alabama con un coeficiente intelectual bajo.",
        imgURL: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500"
      },
      {
        id: 10,
        title: "El viaje de Chihiro",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
        genre: "Animación",
        year: 2001,
        description: "Durante la mudanza de su familia, una niña de 10 años se adentra en un mundo gobernado por dioses, brujas y espíritus donde sus padres son transformados en cerdos.",
        imgURL: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500"
      },
      {
        id: 11,
        title: "Gladiador",
        director: "Ridley Scott",
        producer: "Douglas Wick",
        genre: "Acción",
        year: 2000,
        description: "Un ex general romano busca venganza contra el corrupto emperador que asesinó a su familia y lo condenó a la esclavitud en las arenas del Coliseo.",
        imgURL: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?w=500"
      },
      {
        id: 12,
        title: "Titanic",
        director: "James Cameron",
        producer: "Jon Landau",
        genre: "Romance",
        year: 1997,
        description: "Una aristócrata de 17 años se enamora de un artista bohemio pero humilde a bordo del lujoso e insumergible R.M.S. Titanic.",
        imgURL: "https://images.unsplash.com/photo-1500077423678-25eeaf4e5138?w=500"
      },
      {
        id: 13,
        title: "Whiplash",
        director: "Damien Chazelle",
        producer: "Jason Blum",
        genre: "Drama",
        year: 2014,
        description: "Un joven y prometedor baterista de jazz se inscribe en un conservatorio elitista donde sus aspiraciones de grandeza son empujadas al límite por un instructor implacable.",
        imgURL: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500"
      },
      {
        id: 14,
        title: "La lista de Schindler",
        director: "Steven Spielberg",
        producer: "Branko Lustig",
        genre: "Biografía",
        year: 1993,
        description: "En la Polonia ocupada durante la Segunda Guerra Mundial, el empresario industrial Oskar Schindler se preocupa por su fuerza laboral judía tras presenciar la persecución nazi.",
        imgURL: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500"
      },
      {
        id: 15,
        title: "Avatar",
        director: "James Cameron",
        producer: "Jon Landau",
        genre: "Ciencia Ficción",
        year: 2009,
        description: "Un marine parapléjico enviado a la luna Pandora en una misión única se debate entre seguir órdenes y proteger el mundo alienígena al que ahora considera su hogar.",
        imgURL: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500"
      }
    ]);
  }

}

console.log('logSysPrint-app.ts: App component initialized');
