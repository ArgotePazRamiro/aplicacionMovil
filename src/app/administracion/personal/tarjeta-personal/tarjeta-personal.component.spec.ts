import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarjetaPersonalComponent } from './tarjeta-personal.component';

describe('TarjetaPersonalComponent', () => {
  let component: TarjetaPersonalComponent;
  let fixture: ComponentFixture<TarjetaPersonalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaPersonalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
