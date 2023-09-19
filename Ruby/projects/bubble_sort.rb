def bubble_sort(array)
  array.length.times do 
    (array.length-1).times do |i|
      if array[i] > array[i+1]
        temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
      end
    end
  end
  p array
end


# bubble_sort([4,3,78,2,0,2])
bubble_sort(Array.new(10) { rand(1...100) })
# => [0,2,2,3,4,78]

