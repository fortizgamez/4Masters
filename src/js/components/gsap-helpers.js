/*
Function that "start" a timeline object and "reverse" it
when it an event in a specified element is triggered.
*/
export const startAndReverse = (elem, event, tl) => elem
    .addEventListener(
        event,
        () => tl.reversed() ? tl.play() : tl.reverse()
    );
