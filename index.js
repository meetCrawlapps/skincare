const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
one.onclick = () =>{
  document.getElementById("one-content").classList.toggle("d-none");
  one.firstElementChild.lastElementChild.classList.toggle("reverse")
}
two.onclick = () =>{
  document.getElementById("two-content").classList.toggle("d-none");
  two.firstElementChild.lastElementChild.classList.toggle("reverse")
}
three.onclick = () =>{
  document.getElementById("three-content").classList.toggle("d-none");
  three.firstElementChild.lastElementChild.classList.toggle("reverse")
}

const leftbutton = document.querySelector("#testimonial .left")
const rightbutton = document.querySelector("#testimonial .right")
const cards = document.querySelectorAll(".testimonial-card")
const classes = ['first-testimonial', 'second-testimonial', 'third-testimonial'];
cards.forEach((card, index) => {
  card.classList.add(classes[index]);
});

leftbutton.onclick = () => {
  rotateClasses(-1);
  // if(cards[0].classList.contains("third-testimonial")){
  //   document.querySelector(".third-testimonial").style.bottom="-70px";
  // }
  // else{
  //   document.querySelector(".third-testimonial").style.bottom="";
  // }
}

rightbutton.addEventListener('click', () => {
  rotateClasses(1);
  console.log(cards[0].classList);
});

function rotateClasses(direction) {
  // Remove all classes
  cards.forEach(card => {
      classes.forEach(cls => card.classList.remove(cls));
  });

  if (direction === -1) {
      // Rotate left
      const lastClass = classes.pop();
      classes.unshift(lastClass);
  } else if (direction === 1) {
      // Rotate right
      const firstClass = classes.shift();
      classes.push(firstClass);
  }

  // Re-assign classes
  cards.forEach((card, index) => {
      card.classList.add(classes[index]);
  });
}


const products = document.querySelectorAll('.full-product');
let activeIndex = 0;

const updateActiveProduct = (newIndex, direction) => {
    // Remove all animations classes
    products.forEach(product => {
        product.classList.remove('move-left-in', 'move-left-out', 'move-right-in', 'move-right-out');
    });

    // Determine the out animation class based on the direction
    const outClass = direction === 'left' ? 'move-left-out' : 'move-right-out';
    // Determine the in animation class based on the direction
    const inClass = direction === 'left' ? 'move-left-in' : 'move-right-in';

    // Add the out animation class to the current active product
    products[activeIndex].classList.add(outClass);

    setTimeout(() => {
        // Remove active-product and out animation class from the current active product
        products[activeIndex].classList.remove('active-product', outClass);

        // Add active-product and in animation class to the new active product
        products[newIndex].classList.add('active-product', inClass);

        // Update the active index
        activeIndex = newIndex;
    }, 500); // The timeout should match the CSS animation duration
};

const handleResize = () => {
    if (window.innerWidth < 768) {
        // Set initial active product
        products.forEach((product, index) => {
            if (index === activeIndex) {
                product.classList.add('active-product');
            } else {
                product.classList.remove('active-product');
            }
        });

        // Show navigation buttons
        document.querySelector('.left-product').style.display = 'block';
        document.querySelector('.right-product').style.display = 'block';
    } else {
        // Show all products
        products.forEach(product => product.classList.add('active-product'));

        // Hide navigation buttons
        document.querySelector('.left-product').style.display = 'none';
        document.querySelector('.right-product').style.display = 'none';
    }
};

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

document.querySelector('.right-product').onclick = () => {
    let newIndex = (activeIndex + 1) % products.length;
    updateActiveProduct(newIndex, 'right');
};

document.querySelector('.left-product').onclick = () => {
    let newIndex = (activeIndex - 1 + products.length) % products.length;
    updateActiveProduct(newIndex, 'left');
};


document.querySelectorAll('#offers .increment').forEach(element => {
  element.onclick = () =>{
    if(element.firstElementChild.innerText == "+"){
      element.firstElementChild.innerText = "-"
      console.log(element.firstElementChild.innerText)
    }
    else{
      element.firstElementChild.innerText = "+"
    }
    document.querySelector("#offers .box-content").classList.toggle('d-none');
  }
});
document.querySelector("#offers .main-img").onclick=()=>{
  document.querySelector("#offers .box-content").classList.add('d-none');
  document.querySelectorAll('#offers .increment').forEach(element => {
    element.firstElementChild.innerText = "+"
  })
}