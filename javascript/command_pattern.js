/*
コマンドパターンの目的は、メソッド呼び出しやリクエスト、あるいはオペレーションを一つのオブジェクトにカプセル化し、
メソッド呼び出しのパラメータ化とメソッド呼び出しをわたすことのどちらも自由に実行できることです。
更にコマンドパターンは、アクションを呼び出すオブジェクトとアクションを実装するオブジェクトを分離できるので、
具象クラス(オブジェクト)の入れ替えが可能になり、全体の柔軟性が向上します。

コマンドパターンの背後にある一般的な考えとは、コマンドを発行するオブジェクトの責任をコマンドを実行するオブジェクトから
切り離し、その責任を異なるオブジェクトに移譲するための方法を提供することです。

アクションとそのアクションを呼び出したいオブジェクトの両方を簡単なコマンドオブジェクトで結合するのが賢い実装です。
*/

(function(){
    var CarManager = {
        // 情報を要求する
        requestInfo: function(model, id){
            return "The information for " + model + " with ID " + id + " si foobar";
        },

        // 車を購入する
        buyVehicle: function(model, id){
            return "You have successfully purchased Item " + id + ", a " + model;
        },

        // 車を見るための手配をする。
        arrangeViewing: function(model, id){
            return "You have successfully booked a viewing of " + model + "(" + id + ")";
        }
    };

    CarManager.execute = function(name){
        return CarManager[name] &&
            CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
    };

    console.log(CarManager.execute('arrangeViewing', 'Ferrari', "14523"));
})();
