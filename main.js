
$(document).ready(() => {

    let $cardsArea=$('#cardsArea')
    $cardsArea.isotope({
        itemSelector: '.item',
        percentPosition: true,
        masonry: {
            columnWidth: 30,
            gutter: 8.8
        }
    }) 
    
    $("#btnEverything").click (function (event) {
        $cardsArea.isotope({ filter: '.Everything' });
    });

    $("#btnVedios").click (function (event) {
        $cardsArea.isotope({ filter: '.vedios' });
    });

    $("#btnPopular").click (function(event) {
        $cardsArea.isotope({ filter: '.popular' });
    });

    $("#btnGifts").click (function(event) {
        $cardsArea.isotope({ filter: '.gifts' });
    });

});

