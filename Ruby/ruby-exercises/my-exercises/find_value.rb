# find_value.rb

hash = {
  apples: 4, 
  oranges: 3, 
  peaches: 5, 
  grapes: 24,
  bananas: 2
}

value = 3

def contains_value(hash, value)
  values = hash.values
  return values.include?(value)
end

puts contains_value(hash, value)