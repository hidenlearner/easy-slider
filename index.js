console.log("hello");
let allImage = [
  "./image/2.jpg",
  "./image/3.jpg",
  "./image/4.jpg",
  "./image/5.jpg",
  "./image/6.jpg",
  "./image/7.jpg",
];

let leftArrow = document.querySelector("#left-arrow");
let rightArrow = document.querySelector("#right-arrow");
let thamailImg = document.querySelector("#thamail-img");

var left = allImage.length;
let i = 0;
leftArrow.addEventListener("click", () => {
  thamailImg.src = allImage[i];
  if (i <= 0) {
    i = allImage.length - 1;
  } else {
    i--;
  }
});

rightArrow.addEventListener("click", () => {
  thamailImg.src = allImage[i];
  if (allImage.length - 1 <= i) {
    i = 0;
  } else {
    i++;
  }
});

let sourceArea = document.querySelector("textarea");
sourceArea.value = `<body>
<div class="container max-w-5xl mx-auto">
    <div class=" bg-slate-100 max-w-2xl shadow-xl pb-2 rounded-sm">
        <div class=" bg-white py-6">
            <h2 class=" p-5 text-4xl font-light">Slideshow</h2>
            <img src="../image/1.jpg" id="thamail-img" alt="this is nature picture"
                class=" block mx-auto [width:96%] h-56">
            <div class=" text-center mt-1">
                <span id="left-arrow"><i class="fa-solid fa-angles-left"></i></span>
                <span id="right-arrow"><i class="fa-solid fa-angles-right"></i></span>
            </div>
        </div>
        <button class=" px-2 py-1 m-4 border text-blue-600 font-thin rounded-sm border-blue-700">Source
            Code
        </button>

        <div class="  border m-4 text-green-400">
            <textarea class=" w-full m-0 resize-none text-justify bg-transparent " >
               
            </textarea>
        </div>
        
    </div>
    
</div>
<script src="index.js"></script>
</body>`;

let sourceBtn = document.querySelector("#source-btn");
let hiddenSource = document.querySelector("#hidden-source");

let sourceCount = 0;
sourceBtn.addEventListener("click", () => {
  if (sourceCount == 0) {
    hiddenSource.classList.remove("hidden");
    sourceCount++;
  } else if (sourceCount == 1) {
    hiddenSource.classList.add("hidden");
    sourceCount = 0;
  }
});
