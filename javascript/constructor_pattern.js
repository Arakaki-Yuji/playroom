/*
 * JS力向上計画ということで、JSの言語機能やデザインパターンなどを勉強していく。
* 今回はコンストラクタパターン。
* コンストラクタとは、新規作成されたオブジェクトにメモリが割り当てられたときにそのオブジェクトを初期化する特別なメソッドです。
*/


/*
 * 基本的なコンストラクタ。
 *
 * 問題点:
 * 1. 継承が難しい.
 * 2. 新規作成されるオブジェクトそれぞれにtoStringのような関数を定義している。
 */
function Car(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function(){
        return this.model + " has doen " + this.miles + ' miles';
    }
}

// インタンスの作成
var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford mondeo', 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());


/*
 * プロトタイプを使ったコンストラクタ
 * JSの関数にはプロトタイプとよばれるプロパティがあります。
 * コンストラクタを呼び出してオブジェクトを作成するとき、コンストラクタのプロトタイプの全プロパティは
 * その新オブジェクトに利用可能になります。
 */
function Car2(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
}
// プロトタイプオブジェクトの再定義をさけるため、Object.prototypeではなく、
// Object.prototype.newMethodを使用している
Car2.prototype.toString = function(){
    return this.model + " has done " + this.miles + " miles";
}
// インタンスの作成
var civic = new Car2('Honda Civic', 2009, 20000);
var mondeo = new Car2('Ford mondeo', 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());
