images = [
'first_item.jpg',
"21.jpg",
"20.jpg",
"19.jpg",
"18.jpg",
"17.jpg",
"16.jpg",
"15.jpg",
"14.jpg",
"13.jpg",
"12.jpg",
"11.jpg",
"10.jpg",
"09.jpg",
"08.jpg",
"07.jpg",
"06.jpg",
"05.jpg",
"04.jpg",
"03.jpg",
"01.jpg",





]
descriptions = [
"first desription",
"second description"
]

var element = document.getElementById("modellingrow")
console.log(element)
for (let i = 0; i < images.length; i++) {
    console.log(images[i])
    element.innerHTML+=text =  `
    <div class="col-md-4 col-sm-6">
                                <div class="item">
                                    <div class="thumb">
                                        <a href="img/${images[i]}" data-lightbox="image-1"><div class="hover-effect">
                                            <div class="hover-content">
                                                <h2>Number ${i}</h2>
                                                <p>${descriptions[i]}</p>
                                            </div>
                                        </div></a>
                                        <div class="image">
                                            <img src="img/${images[i]}">
                                        </div>
                                    </div>
                                </div>
                            </div>
    `;
  }
