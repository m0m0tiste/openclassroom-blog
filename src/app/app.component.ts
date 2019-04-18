import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    new Post('Einstein',
             'Placez votre main sur un poêle une minute et ça vous semble durer une heure. '
             + 'Asseyez vous auprès d\'une jolie fille une heure et ça vous semble durer une minute. '
             + 'C\'est ça la relativité.',
             0)
    ,
    new Post('Coluche',
             'Mesdames, un conseil. Si vous cherchez un homme beau, riche et intelligent... prenez-en trois !',
             0)
    ,
    new Post('Yoda',
             'Difficile à voir. Toujours en mouvement est l\'avenir.',
             0)
  ];

}
