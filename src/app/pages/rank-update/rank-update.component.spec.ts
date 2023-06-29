import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankUpdateComponent } from './rank-update.component';

describe('RankUpdateComponent', () => {
  let component: RankUpdateComponent;
  let fixture: ComponentFixture<RankUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
