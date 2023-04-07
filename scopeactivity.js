function outer(){
    let a = 'I am a string.';
    let b = {name: 'Object'};

    console.log('outer a -', a);
    console.log('outer b -', b);
  
    function inner(a,b) {
        a = 'Is this right?';
        b.size = 'small';

        console.log('inner a -', a);
        console.log('inner b -', b);
    }
    inner(a,b);

    console.log('bouncy a -', a);
    console.log('bouncy b -', b);
}
  
  outer();