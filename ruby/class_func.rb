require 'pp'

class Parent
  HOGEHOGE = 'Parent'
  def self.func1
    self::HOGEHOGE
  end
end

class Child1 < Parent
  HOGEHOGE = 'Child1'
end

class Child2 < Parent
  HOGEHOGE = 'Child2'
end

class Child3 < Parent
end

pp Child1.func1 # => 'Child1'
pp Child2.func1 # => 'Child2'
pp Child3.func1
