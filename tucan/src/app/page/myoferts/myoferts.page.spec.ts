import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyofertsPage } from './myoferts.page';

describe('MyofertsPage', () => {
  let component: MyofertsPage;
  let fixture: ComponentFixture<MyofertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyofertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyofertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
