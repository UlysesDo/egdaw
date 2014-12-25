function GetPlatformAction( isDesktop, lang ){
    if( isDesktop )
        return Lang[lang][9];
    else
        return Lang[lang][8];
}

var Lang = {
    'en':
    [
        "Game Over",   
        "Score",
        "Best",
        "",
        "Play Again",
        "Rate Game",
        "More Games",
        "New",
        "Tap",
        "Tap"
    ],

    'ru':
    [
        "Конец Игры",
        "Результат",
        "Лучший",
        "Награда",
        "Снова",
        "Рейтинг",
        "Больше Игр",
        "Новый",
        "Тап",
        "Клик"
    ],

    'de':
    [
        'Game Over',
        'Ergebnis',
        'Rekord',
        'Belohnung',
        'Noch einmal',
        'Wertung',
        'Mehr Spiele',
        'Neu',
        'Antippen',
        'Klick'
    ],

    'es':
    [
        'Fin del juego', 
        'Resultado',
        'Mejor',
        'Premio',
        'Otra vez',
        'Puntuación',
        'Más juegos',
        'Nuevo',
        'Pulsar',
        'Haz clic'
    ],

    'fr':
    [
        'Terminé',
        'Score',
        'Meilleur',
        'Récompense',
        'Rejouer',
        'Évaluation',
        'Plus de jeux',
        'Nouveau',
        'Tapez',
        'Cliquez'
    ],

    'it':    
    [
        'Game Over',
        'Risultato',
        'Migliore',
        'Premio',
        'Gioca ancora',
        'Valutazione',
        'Altri giochi',
        'Nuovo',
        'Tap',
        'Clic'
    ],

    'pt':    
    [
        'Fim do Jogo',
        'Resultado',
        'Melhor',
        'Prémio',
        'Outra vez',
        'Classificação',
        'Mais Jogos',
        'Novo',
        'Tocar',
        'Clicar'
    ],

    'tr':
    [
        'Oyun Bitti',
        'Sonuç',
        'En iyi',
        'Ödül',
        'Tekrar',
        'Değerlendirmesi',
        'Daha Fazla Oyun',
        'Yeni',
        'Tuşla',
        'Tıkla'
    ] 
};
