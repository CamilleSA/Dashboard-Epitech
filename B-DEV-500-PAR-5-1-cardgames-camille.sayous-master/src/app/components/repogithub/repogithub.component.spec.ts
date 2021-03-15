import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepogithubComponent } from './repogithub.component';

describe('RepogithubComponent', () => {
  let component: RepogithubComponent;
  let fixture: ComponentFixture<RepogithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepogithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepogithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
