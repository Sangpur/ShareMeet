import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyEventPage } from './my-event.page';

describe('MyEventPage', () => {
  let component: MyEventPage;
  let fixture: ComponentFixture<MyEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
