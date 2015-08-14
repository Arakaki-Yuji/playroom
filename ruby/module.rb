# coding: utf-8
module Hoge
 def self.included(base)
   base.extend ClassMethods
 end
 #
 # Hogeモジュールをincludeしたクラスに以下のmodule ClassMethosで
 # 定義したメソッドをクラスメソッドとして定義する
 # 
 module ClassMethods
   def hello
      'hello world'
   end
 end
end

class Foo
  include Hoge
end

puts Foo.hello #=> 'hello world'
