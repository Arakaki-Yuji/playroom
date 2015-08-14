# coding: utf-8
module OmniAuth
  module Strategy
    def self.included(base)
      base.extend ClassMethods
    end

    module ClassMethods
      # 動的にメソッドを定義する
      %w(uid info extra credentials).each do |fetcher|
        class_eval <<-RUBY
    
          def #{fetcher}(&block)
            return @#{fetcher}_proc unless block_given?
            @#{fetcher}_proc = block
          end

          #
          # 与えられたcontenxtの中で#{fetcher}メソッドが返す値をすべて含んだ配列を返す
          #
          def #{fetcher}_stack(context)
            compile_stack(self.ancestors, :#{fetcher}, context)
          end
        RUBY
      end
      
      #
      # 与えられたcotextの
      #
      def compile_stack(ancestors, method, context)
        stack = ancestors.inject([]) do |a, ancestor|
          p method
          p ancestor.send(method) if ancestor.respond_to?(method) && ancestor.send(method)
          a << context.instance_eval(&ancestor.send(method)) if ancestor.respond_to?(method) && ancestor.send(method)
          a
        end
        stack.reverse!
      end
    end

    def uid
      self.class.uid_stack(self).last
    end

    def info
      merge_stack(self.class.info_stack(self))
    end

    def credentials
      merge_stack(self.class.credentials_stack(self))
    end

    def extra
      merge_stack(self.class.extra_stack(self))
    end

    def merge_stack(stack)
      stack.inject({}) do |a, e|
        a.merge!(e)
        a
      end
    end
  end
end


class FooStrategy
  include OmniAuth::Strategy
  info do
    { name: "foo" }
  end
end

class BarStrategy < FooStrategy
  info do
    { nickname: 'bar' }
  end

end

bar =  BarStrategy.new
p bar.info
