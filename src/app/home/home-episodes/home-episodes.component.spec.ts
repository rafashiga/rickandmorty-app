import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEpisodesComponent } from './home-episodes.component';

describe('HomeEpisodesComponent', () => {
  let component: HomeEpisodesComponent;
  let fixture: ComponentFixture<HomeEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
