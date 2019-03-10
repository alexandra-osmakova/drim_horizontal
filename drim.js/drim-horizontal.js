var ourWorkSlider = document.getElementsByClassName('our_works_content')[0];
var ourWorkSliderPages = document.getElementsByClassName('our_works_content_item');
var sliderCounter = 0;

ourWorkSlider.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('our_works_content_control')) {
        changeSlide()
    }
})

function changeSlide() {
    if (sliderCounter < ourWorkSliderPages.length - 1) {
        sliderCounter++;
        for (var i = 0; i < ourWorkSliderPages.length; i++) {
            ourWorkSliderPages[i].classList.add('invisible_item');
        }
        ourWorkSliderPages[sliderCounter].classList.remove('invisible_item');
        ourWorkSliderPages[sliderCounter].classList.add('slider_anumation');
        removeAnimation()
    } else if (sliderCounter == ourWorkSliderPages.length - 1) {
        sliderCounter = 0;
        for (var i = 0; i < ourWorkSliderPages.length; i++) {
            ourWorkSliderPages[i].classList.add('invisible_item');
        }
        ourWorkSliderPages[sliderCounter].classList.remove('invisible_item');
        ourWorkSliderPages[sliderCounter].classList.add('slider_anumation');
        removeAnimation()
    }
}

function removeAnimation() {
    var timerId = setInterval(function () {
        for (var i = 0; i < ourWorkSliderPages.length; i++) {
            ourWorkSliderPages[i].classList.remove('slider_anumation');
        }
    }, 300);

    setTimeout(function () {
        clearInterval(timerId);
    }, 350);
}

var workers_container = document.getElementsByClassName('worker_pics')[0];
var workersNamesArr = ['Александр<br>Иванов', 'Нияз<br>Тулеуов', 'Александра<br>Осмакова', 
'Машхурбек<br>Эргашев', 'Алина<br>Харисова', 'Ильдар<br>Галеев', 'Азамат<br>Менглиев', 'Александра<br>Якимова',
'Даниил<br>Матков']
var workersPositionsArr = ['руководитель digital-агенства', 'full-stack разработчик', 'front-end разработчик',
'интернет-маркетолог', 'web-дизайнер', 'менеджер по работе с клиентами', 'back-end разработчик', 
'тестировщик', 'системный архитектор',]
var workerName = document.getElementById('worker_name');
var companyPosition = document.getElementById('company_position');
var picId = '';
var workerIcon = document.getElementsByClassName('workers_content_item_pic');

var workersSrills = [
[],
['- Golang', '- Java 6', '- Angular 2.x', '- React', '- Ionic Framework 3', '- Cordova', '- JavaScript', '- Ember.js'],
['- HTML/HTML5', '- CSS/CSS3', '- JavaScript', '- JQuary', '- SASS', '- Bootstrap', '- GIT', '- БЭМ'],
['- контекстная реклама', '- Яндекс.Директ', '- Google.AdWords', '- таргетинговая реклама', '- soсial-media'],
['- Sketch', '- Adobe Photoshop', '- Adobe Illustrator', '- Figma', '- UX/UI', '- HTML/CSS'],
[], 
['- HTML/HTML5','- CSS/CSS3','- JavaScript', '- JQuary', '- GIT', '- SQL', '- Java', '- PHP'],
['- Java', '- SQL', '- HTML/CSS', '- GIT', '- PHP'],
['- Java Spring', '- OSGI', '- Python','- Golang', '- Kubernates', '- Docker']];
var skillsParent = document.getElementsByClassName('workers_skills')[0]; 


workers_container.addEventListener('mouseover', function (event) {
    var target = event.target;
    if (target.classList.contains('workers_content_item_pic')) {
        picId = target.id;
        for(var i = 0; i < workerIcon.length; i++) {
            workerIcon[i].classList.remove('hover');
        }
        switch (picId) {
            case 'first_worker':
                passNewText(1);
                passWorkerSkills(1)
                break;
            case 'second_worker':
                passNewText(2);
                passWorkerSkills(2);
                break;
            case 'third_worker':
                passNewText(3);
                passWorkerSkills(3);
                break;
            case 'fourth_worker':
                passNewText(4);
                passWorkerSkills(4);
                break;
            case 'fifth_worker':
                passNewText(5);
                passWorkerSkills(5)
                break;
            case 'sixth_worker':
                passNewText(6);
                passWorkerSkills(6);
                break;
            case 'seventh_worker':
                passNewText(7);
                passWorkerSkills(7)
                break;
            case 'eighth_worker':
                passNewText(8);
                passWorkerSkills(8)
                break;
            case 'nineth_worker':
                passNewText(9);
                passWorkerSkills(9)
                break;
            default:
                console.log('Some mistake')
        }
    }
});

function passNewText(i) {
    workerName.innerHTML = workersNamesArr[i-1];
    companyPosition.innerHTML = workersPositionsArr[i-1];
    workerIcon[i-1].classList.add('hover');
}

function passWorkerSkills(i) {
    if(workersSrills[i-1].length != 0) {   
        skillsParent.innerHTML = '';
        var skillsSet = workersSrills[i-1]
        for(var j = 0; j < skillsSet.length; j++) {
            var newSkill = document.createElement('li');
            newSkill.innerHTML = skillsSet[j]
            skillsParent.appendChild(newSkill)
        }
    }
    else {
        skillsParent.innerHTML = '';
    }
}

window.onload = function() {
    workerIcon[0].classList.add('hover');
}


var page = document.getElementsByClassName('page')[0];
var last_pane = page.getElementsByClassName('pane');
last_pane = last_pane[last_pane.length-1];
var dummy_x = null;

window.onscroll = function () {
  // Horizontal Scroll.
  var y = document.body.getBoundingClientRect().top;
  page.scrollLeft = -y;
  
  // Looping Scroll.
}
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();

// Reset window-based vars
function resize() {
  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
  document.body.style.height = w + 'px';
  
  dummy_x = last_pane.getBoundingClientRect().left+window.scrollY;
}

var parallaxLayerBack = document.getElementsByClassName('parallax_back_layer');
new simpleParallax(parallaxLayerBack, {
    orientation: 'left'
});