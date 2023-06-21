# hashes.rb

hash = {
  name: "Devin Weikert",
  phone: "4845350546",
  email: "weikert.devin@gmail.com",
  age: 23
}

def print_keys(hash)
  hash.each{|k, v| puts k}
end

def print_values(hash)
  hash.each{|k, v| puts v}
end

def print_hash(hash)
  hash.each{|k, v| puts "#{k}, #{v}"}
end

print_keys(hash)
print_values(hash)
print_hash(hash)