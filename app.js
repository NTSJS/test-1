// 일종의 비동기 코드.
// 코드는 위에서 아래로 흐르지만 지금 당장 실행되는것이 아닌 특정 시점에 호출되라는 것.
// 실제 그 함수의 호출은 다른 프레임에서 이루어진다.

/*
var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    };

    console.log(xhr);
};

console.log(xhr);
// 값
xhr.open('get', 'package.json', true);
xhr.send();

*/

/*

function order(food, callback){
    return new Promise(function(resolve, reject){
        resolve('퐁듀 퐁듀 피자');
        // reject('오토바이 사고가 났어. 미안해. 피자는 없다.');
    });
};

order('pizza').then(function(pizza){ // resolve 되었을 때 넘기는 인자.
    console.log(pizza + '를 먹는다.');

    // then 구문 안에서 return이 가능.
    return pizza;
}, function(err){
    console.error(err);
}).then(function(pizza){ // 성공을 하면 then 뒤에 또 then을 작성이 가능하다.
    console.info(pizza + '소화가 다 됐다.');
    return 'alskjdlaksjd';
}).then(function(str){
    console.warn(str);
});

// 이 코드의 장점 : 애니메이션을 사용할 때 then안에 다른 코드들이 끼어들 수 있다.

console.log('논다');
console.log('티비를 본다');

// console.log(console);

// console.dir(promise);

*/
function order(path){
    /*
    $.ajax('package.json');
    console.log(p);
    p.success(function(res){
        console.info(res);
    }).error(function(err){
        console.error(err);
    });
    */

    return $.ajax(path);
};

order('package.json').success(function(res){
    console.info(res);
}).error(function(err){
    console.error(err);
});


