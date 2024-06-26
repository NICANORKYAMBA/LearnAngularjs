import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetComposerComponent } from './tweet-composer.component';

describe('TweetComposerComponent', () => {
  let component: TweetComposerComponent;
  let fixture: ComponentFixture<TweetComposerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweetComposerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TweetComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
