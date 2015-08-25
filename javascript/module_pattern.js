/*
 * モジュールパターン
 * 従来のソフトウェアエンジニアリングでは、クラスにアプリっくとプライベートの両方のカプセル化を行なう方法です。
 * JSにおいて、クラスの概念をエミュレートするためにモジュールパターンを使用します。
 * このパターンによって、一つのオブジェクトにプライベートとパブリックなメソッドと変数を取り込み、
 * グローバルなスコープから隠蔽できます。
 *
 * メリット:
 * - モジュール内だけで利用できるプライベート関数を自由に定義できる。
 * - 一般的な方法で関数に名前をつけて宣言しているので、どの関数が例外をスローしているかをデバッカで調べるのが簡単
 *
 * デメリット:
 * - アクセス方法が異なるため可視性(パブリックかプライベート)を変更するときにはメンバが使われている箇所
 *   すべて変更を加えないといけない
 * - オブジェクトに追加されたメソッドからはプライベートなメンバにアクセス出来ない
 */
var testModule = (function(){
    // グローバルスコープから隠蔽された、プライベート変数
    var counter = 0;

    var privateMethod = function(foo){
        console.log(foo)
    }

    // 公開されたパブリックメソッドと変数
    // プライベート変数やメソッドにはしかアクセス出来ない
    return {
        // パブリック変数
        publicVar: 'foo',

        incrementCounter: function(){
            return ++counter;
        },

        resetCounter: function(){
            console.log('counter value prior to reset: ' + counter);
            counter = 0;
        }
    };
})();

testModule.incrementCounter();
testModule.incrementCounter();
testModule.resetCounter();

testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();
testModule.resetCounter();


/*
 * リビーリングモジュールパターン
 * このパターンでは、すべての関数と変数をプライベートスコープ内で定義し、
 * パブリックメンバとして公開したいプライベートメンバへのポインタを持つ無名オブジェクトを返します。
 *
 * メリット:
 * - スクリプト構文がより一貫する
 * - どの関数や変数にパブリックアクセス可能にするかを指定しやすくなり、可読性があがる
 *
 * デメリット:
 * - パブリックなメンバにパッチを当てると壊れやすい
 */
var myRevealingModule = function(){
    var privateVar = 'Ben Cherry',
        publicVar  = 'Hey there!';

    function privateFunction(){
        console.log("Name:" + privateVar);
    }

    function publicSetName(strName){
        privateVar =  strName;
    }

    function publicGetName(){
        privateFunction();
    }

    // プライベート関数やプロパティへのポインタを公開する
    return {
        setName: publicSetName,
        greenting: publicVar,
        getName: publicGetName
    }
}();

myRevealingModule.getName();
myRevealingModule.setName("Paul Kinlan");
myRevealingModule.getName();
