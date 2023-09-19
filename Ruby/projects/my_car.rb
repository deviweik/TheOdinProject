module Towable 
  def can_tow?(pounds)
    pounds < 2000
  end
end


class Vehicle
  attr_accessor :color, :speed
  attr_reader :year, :model

  @@number_of_vehicles = 0

  protected
  def years_old
    Time.new.year - self.year.to_i
  end

  public
  def initialize()
    @@number_of_vehicles += 1
  end

  def self.number_of_vehicles
    puts "There are #{@@number_of_vehicles} within this class" 
  end

  def self.gas_mileage(gallons, miles)
    puts "Your gas mileage is #{miles / gallons} mpg"
  end

  def age
    "Your #{self.model} is #{years_old} years old"
  end

  def older_than?(other_vehicle)
    years_old > other_vehicle.years_old
  end

  def accelerate(num)
    self.speed += num
    puts "Current Speed after accelerating: #{self.speed} mph"
  end

  def brake(num)
    self.speed -= num
    puts "Current Speed after braking: #{self.speed} mph"
  end

  def shut_down
    self.speed = 0
    puts "#{self.year} #{self.model} has been turned off"
  end

  def spray_paint(color)
    self.color = color
    puts "The paint color on your #{self.year} #{self.model} has been changed to #{self.color}"
  end

end

class MyCar < Vehicle
  
  def initialize(color, year, model)
    @year = year
    @color = color
    @model = model
    @speed = 0
  end

  MY_CAR = "This is a car"

  def to_s
    "This car is a #{self.color} #{self.year} #{self.model}"
  end

end

class MyTruck < Vehicle
  include Towable

  def initialize(color, year, model)
    @year = year
    @color = color
    @model = model
    @speed = 0
  end

  MY_TRUCK = "This is a truck"

  def to_s
    "This truck is a #{self.color} #{self.year} #{self.model}"
  end
end


devins_car = MyCar.new("Gray", "2017", "Toyota Camry")
puts devins_car.year
puts devins_car.color
puts devins_car.model

devins_car.accelerate(10)
devins_car.accelerate(20)
devins_car.brake(25)
puts devins_car.speed
devins_car.shut_down
puts devins_car.speed

devins_car.color = "Black"
puts devins_car.color
puts devins_car.year

devins_car.spray_paint("hot pink")

MyCar.gas_mileage(3, 60)

puts devins_car

# puts "\nVehicle lookup path:"
# puts Vehicle.ancestors

# puts "\nMyCar lookup path:"
# puts MyCar.ancestors

# puts "\nMyTruck lookup path:"
# puts MyTruck.ancestors

puts devins_car.age

devins_truck = MyTruck.new("blank", "2008", "Toyota Tundra")

puts devins_truck.older_than?(devins_car)