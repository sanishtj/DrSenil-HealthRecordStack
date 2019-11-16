import { trigger, transition, style, query, animateChild, group, animate, state } from '@angular/animations';

export const textboxScaleAnimation =
  trigger('textboxscale', [
    state('in', style({
      transform: 'scale(1.1)'
    })),
    state('out',   style({
      transform: 'scale(1)'
    })),
    transition('in => out', animate('300ms ease-out')),
    transition('out => in', animate('600ms ease-in'))
  ]);
