import { Component, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component
     implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,
     AfterViewInit, AfterViewChecked, OnDestroy {

      nombre: string= 'Marcelo'
      segundos:number =0
      timerSubscription!: Subscription


  constructor() { 
    console.log('constructor');

  }

  ngDoCheck(): void {
   console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
   console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
   console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
   console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
   console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
   console.log('ngOnDestroy');
   this.timerSubscription.unsubscribe()
   console.log('Timer Limpiado');
  }

  ngOnInit(): void {
    console.log('ngOninit');
    this.timerSubscription= interval(1000).subscribe( i =>{
      this.segundos=i
      
    })
    
    
  }

  guardar(){}


}
