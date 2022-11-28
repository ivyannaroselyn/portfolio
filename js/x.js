//https://drive.google.com/uc?id=xyz
https://drive.google.com/file/d/1TsnMUBktO6wWFSJdJiolEPn2AYuI6vYw/view?usp=share_link
images = [
"https://ik.imagekit.io/7cwvsazak/16.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619649310",
"https://ik.imagekit.io/7cwvsazak/06.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619640733",
"https://ik.imagekit.io/7cwvsazak/19.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619625721",
"https://ik.imagekit.io/7cwvsazak/18.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619647335",
"https://ik.imagekit.io/7cwvsazak/17.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619648935",
"https://ik.imagekit.io/7cwvsazak/11.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619615316",
"https://ik.imagekit.io/7cwvsazak/12.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619619773",
"https://ik.imagekit.io/7cwvsazak/15.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619630499",

"https://ik.imagekit.io/7cwvsazak/14.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619622157",
"02.jpg",
"https://ik.imagekit.io/7cwvsazak/13.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619619876",
"https://ik.imagekit.io/7cwvsazak/21.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619640577",
"20.jpeg",
"https://ik.imagekit.io/7cwvsazak/10.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1669619614918",
"https://ik.imagekit.io/7cwvsazak/09.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619616585",
"https://ik.imagekit.io/7cwvsazak/07.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619615669",
"https://ik.imagekit.io/7cwvsazak/04.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619613756",
"https://ik.imagekit.io/7cwvsazak/08.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619646207",    
"https://ik.imagekit.io/7cwvsazak/05.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619639344",
"https://ik.imagekit.io/7cwvsazak/03.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619628916",
"https://ik.imagekit.io/7cwvsazak/01.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669619616027",
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
                                        <a href="${images[i]}" data-lightbox="image-1"><div class="hover-effect max">
                                            <div class="hover-content">
                                                <h2>Number ${i}</h2>
                                                <p>${descriptions[i]}</p>
                                            </div>
                                        </div></a>
                                        <div class="image">
                                            <img src="${images[i]}">
                                        </div>
                                    </div>
                                </div>
    </div>
    `;
    if (i %3 ==0)element.innerHTML+= `</div>`;
  }
  
