def caesar_cipher(string, shift)
  coded_string = ""
  coded_char = ""

  string.length.times do |i|
    char = string[i]
    if (96 < char.downcase.ord && char.downcase.ord < 123)
      diff = shift - (123 - char.downcase.ord)
      if char.ord > 96
        if diff >= 0
          coded_char = (97 + diff).chr
        else
          coded_char = (char.ord + shift).chr
        end
      else
        if diff >= 0
          coded_char = (65 + diff).chr
        else
          coded_char = (char.ord + shift).chr
        end
      end
    else
      coded_char = char
    end
    coded_string << coded_char
  end
  puts coded_string
end

caesar_cipher("What a string!", 5)
