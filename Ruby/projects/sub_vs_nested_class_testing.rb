class SuperClass
  def initialize
    @superclass_variable = "Superclass Instance Variable"
  end

  def self.superclass_method
    puts "This is a superclass class method"
  end

  def superclass_method
    puts "This is a superclass instance method"
  end

  class NestedClass
    def initialize
      @nested_class_variable = "Nested Class Instance Variable"
    end

    def self.nested_class_method
      puts "This is a nested class class method"
    end

    def nested_class_method
      puts "This is a nested class instance method"
    end
  end
end

class SubClass < SuperClass
  def initialize
    @subclass_variable = "Subclass Instance Variable"
  end

  def self.subclass_method
    puts "This is a subclass class method"
  end

  def subclass_method
    puts "This is a subclass instance method"
  end
end

# Explanation of Relationships

superclass_instance_variable