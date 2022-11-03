

// Loader
window.addEventListener('load', ()=>{
  setTimeout(() => {
    if(document.querySelector('.loader-bg')){
      $('.loader-bg').fadeOut(700);
      document.querySelector('.main-sec').style.display = 'block';
    }
  }, 1000);
})

// PassWord Show In Setting Page
const iconsPassSet = document.querySelectorAll('.form-content .input-g .input-icon .pass-icon');

if(iconsPassSet){
  iconsPassSet.forEach((ic) =>{
  
    ic.addEventListener('click', function(){
      let input = ic.parentElement.querySelector('.input-Passward');
      showPassword(input, ic);
    });
  });
}

// Function To Show And Hide Password
function showPassword(input, icon){

  if(input.type == 'password'){
    input.setAttribute('type', 'text');
    icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  } else{
    input.setAttribute('type', 'password');
    icon.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  }
}

// Login Upload Imgs
let loginInputs = document.querySelectorAll('.login-upload-input');

loginInputs.forEach((input) =>{
  let uploadContainer = input.parentElement.querySelector('.img-upload-show');
  input.onchange = function(){

    let reader = new FileReader();
    reader.onload = ()=>{
      uploadContainer.innerHTML = '';
      uploadContainer.classList.add('active');

      let imageContainer = document.createElement('div');
      uploadContainer.append(imageContainer);

      // Create Remove Button
      let removeBtn = document.createElement('span');
      removeBtn.classList.add('remove-img');
      removeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  
      // Append The Button To Main Div
      imageContainer.append(removeBtn);
  
      // Remove Parent Div From Page When Click The Button
      removeBtn.onclick= function(e){
        if(e.target.classList.contains('remove-img')){
          e.target.parentElement.remove();
        } else{
          e.target.parentElement.parentElement.remove();
        }
        uploadContainer.classList.remove('active');
      }

      // Create Img
      let img = document.createElement('img');
      img.setAttribute('src', reader.result);
      
      // Append The Img To Main Div
      imageContainer.append(img);
    }
    reader.readAsDataURL(input.files[0]);
  }
})

// Show And Hide SlideBar
const menu = document.getElementById('menu');
const sideBar = document.getElementById('sidebar');
const navbar = document.getElementById('navbar');
const main = document.getElementById('main');
const closeSidebar = document.getElementById('closeSidebar');

if(menu){
  menu.addEventListener('click', ()=>{
    sideBar.classList.toggle('active-side');
    navbar.classList.toggle('active-nav');
    main.classList.toggle('active-main');
  });
}

// Close SideBar
if(closeSidebar){
    closeSidebar.addEventListener('click', ()=>{
      sideBar.classList.remove('active-side')
    })
}

// Chart
var options = {
    series: [{
    name: 'series1',
    data: [10, 30, 20, 45, 25, 35, 20, 45]
  }],
    chart: {
    height: 480,
    stackType: '100%',
    type: 'area',
    toolbar: {
        show: false,
    },
  },
  title: {
    text: 'احصائيات الموقع',
    align: 'right',
    offsetX: -140,
    margin: 30,
    style: {
    fontSize:  '20px',
    fontWeight:  'bold',
    color:  '#263238',
    fontFamily: ['URW DIN Arabic', 'sansSerif']
    },
  },
  fill:{
    colors: ['#CCA898'],
  },
  colors:['#CCA898'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    labels: {
        show: false
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};

if(document.querySelector("#chart")){
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

// DataTable
let myDataTable = document.getElementById('myTable');
if(myDataTable){
  var myTable = $('#myTable').dataTable( {
    "pageLength": 8,
    responsive: true,
    "language": {
        'paginate':{
            'previous': `<i class="fa-solid fa-angles-left"></i>`,
            'next': `<i class="fa-solid fa-angles-right"></i>`
        },
        "sProcessing": "جارٍ التحميل...",
        "sLengthMenu": "أظهر _MENU_ مدخلات",
        "sZeroRecords": "لم يعثر على أية سجلات",
        "sInfo": "إظهار النتائج من _START_ - _END_",
        "sInfoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
        "sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
        "sInfoPostFix": "",
    },
    'bLengthChange':false,
    "ordering": false
  });

  $('#searchTable').on('keyup', function() {
    $('#myTable').DataTable().search($(this).val()).draw();
  });
}



// Show And Hide Menu In Data Table
function sm(el){
  el.parentElement.querySelector('.drop-down').classList.add("show-drop-res");
  document.addEventListener("click", (e)=>{
      if( e.target.tagName != "I" || e.target != el){
          el.parentElement.querySelector('.drop-down').classList.remove("show-drop-res");
      }
  });
}