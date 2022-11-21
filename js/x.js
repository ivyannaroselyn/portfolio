images = [
'first_item.jpg',
"first_bg.jpg"





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
