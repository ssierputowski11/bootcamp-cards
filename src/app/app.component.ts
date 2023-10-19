import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      user: '@nature',
      content: 'Saw this awesome tree during my hike',
      imgUrl: 'assets/tree.jpeg'
    },
    {
      title: 'Snowy Mountain',
      user: '@mountainlover',
      content: 'Here is a picture of a snowy mountain',
      imgUrl: 'assets/mountain.jpeg'
    },
    {
      title: 'Mountain Biking',
      user: '@biking1222',
      content: 'I went biking today',
      imgUrl: 'assets/biking.jpeg'
    },
  ];
}
