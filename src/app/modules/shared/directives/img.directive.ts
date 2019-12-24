import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'img'
})
export class ImgDirective implements OnInit {

  constructor(
    private elementRef: ElementRef, private renderer: Renderer
  ) { 
    this.elementRef.nativeElement.onload = (()=>{
      console.log('loaded');
       
        this.updateImage()
     
    })

  }

  updateImage(){
      let src:string = this.elementRef.nativeElement.getAttribute('src');
      console.log(src);
      if(src.indexOf('-1') > -1){
        src = 'assets/img-2.jpg'
        this.elementRef.nativeElement.setAttribute('src',src);
        console.log('c1')
      }

      else if(src.indexOf('-2') > -1){
        src = 'assets/img-3.jpg'
        this.elementRef.nativeElement.setAttribute('src',src);
        console.log('c2')

      }


  }

  ngOnInit(){
    console.log('i am a live', this.elementRef)
  }

}
