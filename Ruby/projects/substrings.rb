def substrings(words, dictionary)
  output = Hash.new()
  dictionary.each do |dictionary_word|
    count = 0
    words.split.each do |word|
      if word.downcase.include?(dictionary_word.downcase)
        count += 1
      end
    end
    if count > 0
      output[dictionary_word.downcase] = count
    end
  end
  puts output
end


dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
substrings("below", dictionary)
substrings("Howdy partner, sit down! How's it going?", dictionary)

