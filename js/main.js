(function(){
  const sliders = [...document.querySelectorAll('.main__room')];
  const buttonAfter = document.querySelector('#after');
  const buttonBefore = document.querySelector('#before');
  console.log(sliders)
  let value;

  buttonAfter.addEventListener('click', ()=>{
    changePosition(1);
  });
  buttonBefore.addEventListener('click', ()=>{
    changePosition(-1);
  });

  const changePosition = (add)=>{
    const currentElement = document.querySelector('.main__room--show').dataset.id;
    value = Number(currentElement);
    value += add;

    sliders[Number(currentElement)-1].classList.remove('main__room--show');
    if(value === sliders.length+1 || value === 0){
      value = value === 0 ? sliders.length :1;
    }
    sliders[value-1].classList.add('main__room--show');
  }

  
})();

// sliderMovil
(function(){
  const sliderMovil = [...document.querySelectorAll('.main__room--movil')];
  const buttonAfter = document.querySelector('#after');
  const buttonBefore = document.querySelector('#before');
  console.log(sliderMovil)
  let value;

  buttonAfter.addEventListener('click', ()=>{
    changePosition(1);
  });
  buttonBefore.addEventListener('click', ()=>{
    changePosition(-1);
  });

  const changePosition = (add)=>{
    const currentElement = document.querySelector('.main__room--show').dataset.id;
    value = Number(currentElement);
    value += add;

    sliderMovil[Number(currentElement)-1].classList.remove('main__room--show');
    if(value === sliderMovil.length+1 || value === 0){
      value = value === 0 ? sliderMovil.length :1;
    }
    sliderMovil[value-1].classList.add('main__room--show');
  }
})();