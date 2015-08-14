# Rubyの魔法の解説
富田さんが出してくれた問題にはRubyの黒魔術がたくさん含まれていました。
結構面白かったので、それらの魔法を解説していきたいと思います。


## Moduleをincludeしたクラスにクラスメソッドを定義する。
以下のようにModuleの定義をするとmodule Hogeの中のmodule ClassMethods内に定義したメソッドが
module HogeをincludeしたClassのクラスメソッドとして定義されます。

``` rb
module Hoge
  def self.included(base)
    base.extend ClassMethods
  end

  module ClassMethods
    def hello
      'HelloWorld'
    end
  end
end

class Foo
  include Hoge
end

Foo.hello #=> 'HelloWorld'

```
