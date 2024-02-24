document.addEventListener('DOMContentLoaded', function(){
    const Portfolio = {
        Init: function(config){
            this.config = config;

            this.BindEvents();
        },
        BindEvents: function(){
            let here = this.config;

            here.smooth_scroll.forEach(link => {link.addEventListener('click', this.SmoothScroll)});
            here.div_hamburger_icon.addEventListener('click', this.ToggleMenu);
            here.btn_download.addEventListener('click', this.AboutMe.bind(this, {param: 1}));
            here.btn_contact.addEventListener('click', this.AboutMe.bind(this, {param: 2}));
            here.btn_car_live.addEventListener('click', this.Projects.bind(this, {param: 1}));
            here.btn_car_github.addEventListener('click', this.Projects.bind(this, {param: 2}));
            here.btn_sales_live.addEventListener('click', this.Projects.bind(this, {param: 3}));
            here.btn_sales_github.addEventListener('click', this.Projects.bind(this, {param: 4}));
            here.img_github.addEventListener('click', this.AboutMe.bind(this, {param: 3}));
        },
        ToggleMenu: ()=> {
            const self = Portfolio.config;

            self.div_hamburger_icon.classList.toggle('open');
            self.div_menu_links.classList.toggle('open');
        },
        SmoothScroll: (e)=> {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetPosition = '#' + document.querySelector(targetId).offsetTop;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        },
        AboutMe: (e)=> {
            const self = Portfolio.config,
                  route = typeof e == 'object' ?  e.param : e ;

            switch(route){
                case 1:
                    try{
                        window.open('./assets/SEÑO_BERNARD_RESUME_2024_UPDATED.pdf');
                    }
                    catch(error){
                        console.log(`Error: ${error}`);
                    }
                    break;
                case 2:
                    location.href = './#sec-contact';
                    break;
                case 3:
                    window.open('https://github.com/bernardseno12', '_blank');
                    break;
                default:
                    console.log('Please Specify Route');
                    break;
            }
        },
        Projects: (e) => {
            const route = (typeof e == 'object') ? e.param : e;
        
            switch (route) {
                case 1:
                    window.open('https://glowing-biscuit-d486f2.netlify.app/', '_blank');
                    break;
                case 2:
                    window.open('https://github.com/bernardseno12/car-rental', '_blank');
                    break;
                case 3:
                    window.open('https://ubiquitous-heliotrope-353234.netlify.app/', '_blank');
                    break;
                case 4:
                    window.open('https://github.com/bernardseno12/sales-tracker', '_blank');
                    break;
                default:
                    console.log('Please Specify Which Route');
                    break;
            }
        }
    };

    Portfolio.Init({
        smooth_scroll                   :               document.querySelectorAll('.smooth-scroll'),

        div_hamburger_icon              :               document.querySelector('.div-hamburger-icon'),
        div_menu_links                  :               document.querySelector('.div-menu-links'),

        btn_download                    :               document.querySelector('#btn-download'),
        btn_contact                     :               document.querySelector('#btn-contact'),
        btn_car_github                  :               document.querySelector('#btn-car-github'),
        btn_car_live                    :               document.querySelector('#btn-car-live'),
        btn_sales_live                  :               document.querySelector('#btn-sales-live'),
        btn_sales_github                :               document.querySelector('#btn-sales-github'),

        img_github                      :               document.querySelector('.img-github'),
    });
});