/*
デコレータはコードの再利用を目的とした構造に関するデザインパターンです。
デコレータを使えば、あるオブジェクトに機能を追加する際、そのオブジェクトが扱っているコードを大幅に変更することなく
既存システムを修正出来ます。
デコレータパターンの意図はサブクラス化よりも簡単に基底オブジェクトにプロパティやメソッドを追加することにあります。
*/
// 装飾されるオブジェクトのコンストラクタ
function MacBook(){
    this.cost = function(){ return 997 };
    this.screenSize = function(){ return 11.6 };
}

// デコレータ1
function Memory(macbook){
    var v = macbook.cost();
    macbook.cost = function(){
        return v + 75;
    }
}

// デコレータ2
function Engraving(macbook){
    var v = macbook.cost();
    macbook.cost = function(){
        return v + 250;
    }
}

function Insurance(macbook){
    var v = macbook.cost();
    macbook.cost = function(){
        return v + 250;
    };
}

var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);

console.log(mb.cost());
console.log(mb.screenSize());
