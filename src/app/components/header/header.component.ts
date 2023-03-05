import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';

declare var $:any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService) { }


  getComponent(route:any){

    this.apiService.route = route
    console.log(this.apiService.route)

  }

  ngOnInit(): void {

    $.getScript('src/assets/js/jquery-3.6.3.min.js');
    $.getScript('src/assets/js/jquery-migrate-3.0.0.min.js');
    $.getScript('src/assets/js/modernizr-2.6.2.min.js');
    $.getScript('src/assets/js/imagesloaded.pkgd.min.js');
    $.getScript('src/assets/js/jquery.isotope.v3.0.2.js');
    $.getScript('src/assets/js/pace.js');
    $.getScript('src/assets/js/popper.min.js');
    $.getScript('src/assets/js/bootstrap.min.js');
    $.getScript('src/assets/js/scrollIt.min.js');
    $.getScript('src/assets/js/jquery.waypoints.min.js');
    $.getScript('src/assets/js/owl.carousel.min.js');
    $.getScript('src/assets/js/jquery.stellar.min.js');
    $.getScript('src/assets/js/jquery.magnific-popup.js');
    $.getScript('src/assets/js/YouTubePopUp.js');
    $.getScript('src/assets/js/datepicker.js');
    $.getScript('src/assets/js/smooth-scroll.min.js');
    $.getScript('src/assets/js/custom.js');
  }

}
