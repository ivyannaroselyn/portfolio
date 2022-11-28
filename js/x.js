images = [
"16.jpg",
"06.jpg",
"19.jpeg",
"18.jpg",
"17.jpg",
"11.jpg",
"15.jpg",
"14.jpg",
"13.jpeg",
"21.jpeg",
"20.jpeg",
"12.jpg",
"08.jpg",
"09.jpg",
"07.jpg",
"04.jpeg",
"10.JPG",
"05.jpg",
"03.jpg",
"01.jpeg",
]
descriptions = [
"first desription",
"second description"
]

var element = document.getElementById("modellingrow")
console.log(element)
for (let i = 0; i < images.length; i++) {
    let idx = i+1
    console.log(images[i])
    if (i %3 ==0)element.innerHTML+= `<div class="row">`;
    element.innerHTML+=text =  `
    <div class="col-md-4 col-sm-12 border">
                                <div class="item">
                                    <div class="thumb">
                                        <a href="img/${images[i]}" data-lightbox="image-1"><div class="hover-effect max">
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
    if (i %3 ==0)element.innerHTML+= `</div>`;
  }
  
