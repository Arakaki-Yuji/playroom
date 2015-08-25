/*
 * オブサーバーパターン
 * サブジェクトと呼ばれるオブジェクト自身に依存するオブジェクト(オブザーバー)のリストを保持し、
 * 状態変化の際にオブザーバに自動的に通知します。
 *
 * GoF本による定義
 * ```
 * 一つ以上のオブザーバがあるサブジェクトの状態に関心をもっているとき、オブザーバ自体が自身をサブジェクトに
 * 結びつけることで、その関心をサブジェクトに登録する。オブザーバが興味があるかもしれない何らかの変更がサブジェクトで
 * 発生すると、通知メッセージが送信され、これが各オブザーバの更新メソッドを呼び出す。サブジェクトの状態にオブザーバがもはや関心がなくなると、
 * オブザーバは自身をサブジェクトから切り離す。
 * ```
 *
 * ポイントは通知を受け取る側(オブザーバ)がサブジェクトに対して登録、解除を行い、
 * サブジェクトはそこに関与しないこと。
 *
 * 発行/購読パターン
 * 通知の受け取りを望んでいるオブジェクトとイベントを発生するオブジェクトの中間にあるトピック/チャンネルを利用する
 *
 */

// 発行/購読パターンの実装
var pubsub = {};
(function(q){
    var topic = {},
        subUid = -1;

    q.publish = function(topic, args){
        if(!topics[topic]){
            return false;
        }

        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;

        while(len--){
            subscribers[len].func(topic, args);
        }
        return this;
    };

    q.subscribers = function(topic, func){
        if(!topics[topic]){
            topic[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };

    q.unsubscribe = function(token){
        for(var m in topics){
            if (topics[m]){
                for( var i = 0; j = topics[m].length; i < j; i++){
                    if(topics[m][i].token === token){
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    }
}(pubsub));
