//https://drive.google.com/uc?id=xyz
https://drive.google.com/file/d/1TsnMUBktO6wWFSJdJiolEPn2AYuI6vYw/view?usp=share_link
images = [
"https://ik.imagekit.io/Ivyannaroselyn/21.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641998898",
"https://ik.imagekit.io/Ivyannaroselyn/20.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641987058",
"https://ik.imagekit.io/Ivyannaroselyn/19.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641968423",
"https://ik.imagekit.io/Ivyannaroselyn/18.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641957083",
"https://ik.imagekit.io/Ivyannaroselyn/17.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641881445",
"https://ik.imagekit.io/Ivyannaroselyn/16.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641864154",
"https://ik.imagekit.io/Ivyannaroselyn/15.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641850470",
"https://ik.imagekit.io/Ivyannaroselyn/14.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641830022",
"https://ik.imagekit.io/Ivyannaroselyn/13.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641815849",
"https://ik.imagekit.io/Ivyannaroselyn/12.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641805292",
"https://ik.imagekit.io/Ivyannaroselyn/11.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641793968",
"https://ik.imagekit.io/Ivyannaroselyn/10.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641776319",
"https://ik.imagekit.io/Ivyannaroselyn/09.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669643651826",
"https://ik.imagekit.io/Ivyannaroselyn/08.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641764701",
"https://ik.imagekit.io/Ivyannaroselyn/07.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641751316",
"https://ik.imagekit.io/Ivyannaroselyn/06.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641732806",
"https://ik.imagekit.io/Ivyannaroselyn/05.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641716979",
"https://ik.imagekit.io/Ivyannaroselyn/04.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641701029",
"https://ik.imagekit.io/Ivyannaroselyn/03.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641686968",
"https://ik.imagekit.io/Ivyannaroselyn/02.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641667885",
"https://ik.imagekit.io/Ivyannaroselyn/01.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1669641649066",
    
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
  
