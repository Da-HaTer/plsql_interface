import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tabsgroup } from './tabsgroup.component';

describe('tabsgroup', () => {
  let component: tabsgroup;
  let fixture: ComponentFixture<tabsgroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [tabsgroup]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(tabsgroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
