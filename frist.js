
//*! nav-bar bg
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
     
     document.getElementById("navbar").style.background = "#273c75";
  } else {
    document.getElementById("navbar").style.top = "0px";
     document.getElementById("navbar").style.background = "none";
  }
}



// *!navbar servies
// const navLinks = document.querySelectorAll('#navbar a');
// const sections = {
//   about: document.getElementById('about'),
//   services: document.getElementById('services'),
//   contact: document.getElementById('contact')
// };

// var aboutSection = document.getElementById("about");

// // scroll to top of about section
// aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });

// // scroll down 300 pixels from top of page
// window.scrollBy({ top: 600, behavior: "smooth" });


// JavaScript code to move the navbar to a sect

// Get all navbar links
const navbarLinks = document.querySelectorAll("#navbar a");

// Loop through each link and add event listener
navbarLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Get section ID from link href
    const sectionId = link.getAttribute("href");
    
    // Scroll to section
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  });
});






// Get the element you want to scroll to
// const contactSection = document.getElementById('contact');

// // Listen for the scroll event on the window object
// window.addEventListener('scroll', () => {
//   // Check the current scroll position of the page
//   const scrollPosition = window.scrollY;

//   // If the scroll position is greater than or equal to the top position of the contact section
//   if (scrollPosition >= contactSection.offsetTop) {
//     // Scroll to the contact section using the scrollTo() method
//     window.scrollTo({
//       top: contactSection.offsetTop,
//       behavior: 'smooth'
//     });
//   }
// });



//*!section 3  start
//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}

//fullscreen image preview function
//selecting all required elements
// const previewBox = document.querySelector(".preview-box"),
// categoryName = previewBox.querySelector(".title p"),
// previewImg = previewBox.querySelector("img"),
// closeIcon = previewBox.querySelector(".icon"),
// shadow = document.querySelector(".shadow");

// function preview(element){
//   //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
//   document.querySelector("body").style.overflow = "hidden";
//   let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
//   let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
//   previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
//   // categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
//   previewBox.classList.add("show"); //show the preview image box
//   shadow.classList.add("show"); //show the light grey background
//   closeIcon.onclick = ()=>{ //if user click on close icon of preview box
//     previewBox.classList.remove("show"); //hide the preview box
//     shadow.classList.remove("show"); //hide the light grey background
//     document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
//   }
// }


//*! section 3 end

// *! runing number section 5



  



 

    // function runCounter(targetId, maxCount) {
    //   var counter = document.getElementById(targetId);
    //   var count = 0;
  
    //   function updateCounter() {
    //     count++;
    //     counter.textContent = count;
  
    //     if (count < maxCount) {
    //       requestAnimationFrame(updateCounter);
    //     }
    //   }
  
    //   requestAnimationFrame(updateCounter);
    // }
  
    // runCounter("counter", 500);
    // runCounter("countertwo", 300);
    // runCounter("counterThree", 60);
    // var scrollTimeout;
  
    // window.addEventListener("scroll", function() {
    //   // If there is an existing scroll timeout, clear it
    //   if (scrollTimeout) {
    //     clearTimeout(scrollTimeout);
    //   }
  
    //   // Set a new scroll timeout
    //   scrollTimeout = setTimeout(function() {
    //     // Update the counter after the scroll timeout
    //     requestAnimationFrame(function() {
    //       runCounter("counter", 500);
    //       runCounter("counterTwo", 300);
    //       runCounter("counterThree", 60);
    //     });
    //   }, 100);
    // });
  
  // *! timer end 

  //*! card start

  var toggleButton = document.getElementById("toggle");
  // var cards = document.querySelectorAll(".card");
  // var containerOne = document.querySelector(".card-container-one");

  // toggleButton.addEventListener("click", function() {
  //   // Loop through each card and set display to "none" for the first three
  //   for (var i = 0; i < 3; i++) {
  //     cards[i].style.display = cards[i].style.display === "none" ? "block" : "none";
  //   }

  //   // Toggle the second card container
  //   containerOne.style.display = containerOne.style.display === "block" ? "none" : "block";
  // });


  var myButton = document.getElementById("myButton");
  var myDiv = document.getElementById("myDivOne");
  var myDiv = document.getElementById("myDivTwo");
  var myDiv = document.getElementById("myDivThree");


  var currentNumOne= 15;
  var prevNumOne= 150;
  var showCurrentOne= true;


  var currentNumTwo= 35;
  var prevNumTwo= 350;
  var showCurrentTwo= true;




  var currentNumThree = 55;
  var prevNumThree = 550;
  var showCurrentThree = true;
  
  toggleButton.addEventListener("click", function() {
    if (showCurrentOne) {
      myDivOne.innerHTML = '$' + prevNumOne;
      showCurrentOne = false;
    } else {
      myDivOne.innerHTML = '$' + currentNumOne;
      showCurrentOne = true;
    }

    if (showCurrentTwo) {
      myDivTwo.innerHTML = '$' + prevNumTwo;
      showCurrentTwo = false;
    } else {
      myDivTwo.innerHTML = '$' + currentNumTwo;
      showCurrentTwo = true;
    }


    if (showCurrentThree) {
      myDivThree.innerHTML = '$' + prevNumThree;
      showCurrentThree = false;
    } else {
      myDivThree.innerHTML = '$' + currentNumThree;
      showCurrentThree = true;
    }



  });
  














// *! carou



  var slides = document.querySelectorAll('.slide');
var currentIndex = 0;

setInterval(function() {
  // Hide the current slide
  slides[currentIndex].classList.remove('active-slide');
  
  // Increment the index of the current slide
  currentIndex++;
  
  // If the index is greater than the number of slides, reset to 0
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  
  // Show the next slide
  slides[currentIndex].classList.add('active-slide');
}, 5000); // Change slide every 2 seconds







//*!form

// Get the form element and the input fields
var myForm = document.getElementById("myForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");





//*!name
nameInput.addEventListener("keydown", function(event) {
  // Test if the pressed key is a letter
  var regex = /^[a-zA-Z]+$/;
  var key = event.key;
  if (!regex.test(key)) {
    event.preventDefault(); // prevent non-letter key from being entered
  }
});


nameInput.addEventListener("blur", function() {
 
});



// Get the form element
var myForm = document.getElementById("myForm");

// Add event listener to form submit button
myForm.addEventListener("submit", function(event) {
  // Check if any required input fields are empty
  // ...

  // Show confirmation message before submitting form
  var confirmation = confirm("Are you sure you want to submit the form?");
  if (!confirmation) {
    event.preventDefault(); // prevent form submission
  }
});


$('.single-item').slick(
  {
    dots: true,

  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  }
);






//
