import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MailBasicComponent } from './mail-basic.component';

describe('MailBasicComponent', () => {
  let component: MailBasicComponent;
  let fixture: ComponentFixture<MailBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailBasicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MailBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
