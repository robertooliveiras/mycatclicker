var imageCat = {
    qtClicks: 0,
    src: 'img/gato.jpg',
    name: 'Gato',
    reference: 'http://meninadosbotoes.files.wordpress.com/2011/08/gatinho-lindo.jpg'
};


var app = {

    incrementClicks: function() {
        imageCat.qtClicks++;
        this.countElem.textContent = imageCat.qtClicks;
    },

    init: function() {
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            imageCat.qtClicks++;
            //this.countElem.innerHTML = imageCat.qtClicks;
            console.log(imageCat.qtClicks)
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        this.catImageElem.src = imageCat.src;
        this.countElem.textContent = imageCat.qtClicks;
    }
};




app.init();