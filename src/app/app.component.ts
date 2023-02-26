import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'snowy moutain',
      imageUrl:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      username: 'mountain',
      content: 'This is a great mountain',
    },
    {
      title: 'Mountain biking',
      imageUrl:
        'https://images.unsplash.com/photo-1508789454646-bef72439f197?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      username: 'biket',
      content: 'Biking is great',
    },
  ];
}
