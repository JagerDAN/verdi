import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams = [
    [
      {
        title: 'продюссер',
        team: [
            'Есенбек Исламхан',
            'Владимир Путин'
        ]
      },
      {
        title: 'Колорист',
        team: [
          'Дмитрий Медведев'
        ]
      },
      {
        title: 'Оператор',
        team: [
          'Дональд Трамп'
        ]
      },
      {
        title: 'Режиссер',
        team: [
          'Касым Жомарт Токаев'
        ]
      }
    ],
    [
      {
        title: 'Монтажер',
        team: [
          'Владимир Зеленский',
          'Мишель Обама'
        ]
      },
      {
        title: 'Сценарист',
        team: [
          'Карменов Расул'
        ]
      },
      {
        title: 'Монтажер',
        team: [
          'Ангела Меркель'
        ]
      }
    ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
