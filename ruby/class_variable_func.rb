require 'pp'

class Parent
 @@hogehoge = 'Parent'
  def self.func1
    @@hogehoge
  end
end

class Child1 < Parent
  @@hogehoge = 'Child1'
end

class Child2 < Parent
  @@hogehoge = 'Child2'
end

pp Child1.func1
pp Child2.func1
