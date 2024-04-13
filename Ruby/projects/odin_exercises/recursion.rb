def fibs(num)
  current_num = 0
  sequence = []
  num.times do |i|
    sequence << current_num
    if i == 0
      current_num = 1
    else
      current_num = sequence[i - 1] + sequence[i]
    end
  end
  sequence
end

# def fibs_rec(num)
#   if num == 0
#     [0]
#   elsif num == 1
#     [0, 1]
#   else
#     previous_sequence = fibs_rec(num - 1)
#     current_number = previous_sequence[-1] + previous_sequence[-2]
#     previous_sequence + [current_number]
#   end
# end
def fibs_rec(num, sequence = [0, 1])
  return sequence.take(num) if num <= sequence.length

  fibs_rec(num, sequence + [sequence[-1] + sequence[-2]])
end

# p fibs(20)
# p fibs_rec(20)

# def merge_sort(arr)
#   size = arr.length / 2
#   half1 = arr[0, size]
#   half2 = arr[size, arr.length - size]
#   if half1.length == 1 && half2.length == 1
#     if half1[0] > half2[0]
#       [half2[0], half1[0]]
#     else
#       [half1[0], half2[0]]
#     end
#   else
#     merge_sort(half1)
#     merge_sort(half2)
#   end
# end

# merge_sort([3, 2, 1, 13, 8, 5, 0, 1])
# merge_sort([105, 79, 100, 110])

def merge_sort(array)
  size = array.length
  return array if size == 1

  middle = (size / 2).ceil
  left = array[0, middle]
  right = array[middle..-1]
  sorted_left = merge_sort(left)
  sorted_right = merge_sort(right)
  sorted_array = []
  until sorted_left.empty? || sorted_right.empty?
    if sorted_left[0] < sorted_right[0]
      sorted_array << sorted_left.shift
    else
      sorted_array << sorted_right.shift
    end
  end
  sorted_array.concat(sorted_left).concat(sorted_right)
end

p merge_sort([2, 5, 4, 3])

=begin

1. Split array evenly, tack extra onto first array if odd
2. continue until reaching an array size of 1
3. take the first value of each array and compare them
3. select the smaller value, then take the smallest value from that array and add it to a new sorted array
4. continue until one list becomes empty, then add the rest of the other array into the sorted one
5. 


=end
