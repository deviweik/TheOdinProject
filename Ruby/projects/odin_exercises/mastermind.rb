module MasterMind
  CODE_LENGTH = 4
  COLOR_OPTIONS = %w[blu grn pnk pur red ylw]

  def self.play_game
    player = Player.new

    print_instructions

    player_codemaker = get_yes_or_no('Would you like to play as the codemaker?')

    if player_codemaker
      hidden_code = input_guess
      player_codemaker_loop(player, hidden_code)
    else
      hidden_code = generate_code
      puts "\nYour opponent has selected a secret code for you to guess..."
      player_codebreaker_loop(player, hidden_code)
    end
  end

  class Code
    attr_accessor :code

    def initialize(computer)
      @code = []
      if computer
        CODE_LENGTH.times do
          @code << COLOR_OPTIONS.sample
        end
      else
        @code = input_code
      end
    end

    def input_code 
      # print color_options and then prompt user for 4 selections
      code = []
      puts "\nOptions: #{COLOR_OPTIONS.join(', ')}"
      puts "Select your code (e.g. 'blu, grn, pur, pur'):"
      puts "\n"
      until code.length == CODE_LENGTH && code.all? { |str| str.length == 3 }
        code = gets.chomp.downcase.split(', ')
        unless code.length == CODE_LENGTH && code.all? { |str| str.length == 3 }
          puts "\nInvalid code. Please try again following this example: 'blu, grn, pnk, pur'" 
        end
      end
      # puts "The code you've entered is #{code.join(', ')}"
      code
    end
  end

  class Player
    attr_accessor :name

    def initialize
      puts "\nHello, welcome to Mastermind. Please enter your name: "
      @name = gets.chomp
    end
  end

  def self.print_instructions
    puts "\nIn Mastermind there is a codemaker and a codebreaker. The codemaker selects a 4 color code which the codebreaker must guess within 8 tries, receiving \ 
    feedback for each guess. The feedback will be in the form of a string of '++' and '+' symbols. A '++' means that one color in your guess is the \ 
    correct color in the correct position. A '+' means that one color in your guess is the correct color in the wrong position."
  end

  def self.get_yes_or_no(prompt)
    loop do
      print "\n#{prompt} (Y/N): "
      input = gets.chomp.downcase
      return true if input == 'y'
      return false if input == 'n'

      puts "Invalid input. Please enter 'Y' or 'N'."
    end
  end

  def self.generate_code
    Code.new(true)
  end

  def self.input_guess
    Code.new(false)
  end

  def self.generate_code_smart(previous_guesses)
    code = Code.new(true)
    last_guess = previous_guesses[-1]
    previous_shifts = previous_turns.count { |turn| turn[1].length > 0 } 
    if last_guess[0].all? { |element| element == last_guess[0][0] } && last_guess[1].length == 0
      color_index = COLOR_OPTIONS.index(last_guess[0][0])
      code.code = Array.new(4, COLOR_OPTIONS[color_index + 1])
      return code
    elsif last_guess[0].all? { |element| element == last_guess[0][0] } && last_guess[1].length > 0
      color_index = COLOR_OPTIONS.index(last_guess[0][0])
      code.code = Array.new(4, COLOR_OPTIONS[color_index + 1])
      i = 0
      last_guess[1].length times do 
        code.code[i] = last_guess[0][i]
        i += 1
      end
    elsif last_guess.uniq.length == 2 && last_guess[1].length == 1
      # code
    end
  end

  # def self.computer_codebreaker(previous_guesses)
  #   colors = COLOR_OPTIONS
  #   previous_guesses.each do |guess|
  #     guess[0].code.each do |color|
  #       guess[1].length.times do 
  #         colors << color
  #       end
  #     end
  #   end
  #   code = generate_code
  #   CODE_LENGTH.times do |i|
  #     code.code[i] = colors.sample
  #   end
  #   code
  # end
  def self.computer_codebreaker(previous_guesses)
    colors = COLOR_OPTIONS.dup
    latest_guess, latest_feedback = previous_guesses.last
    latest_guess.code.each do |color|
      latest_feedback.length.times do |i|
        colors << color
      end
    end
    puts colors.join(', ')
    new_guess = generate_code
    CODE_LENGTH.times do |i|
      new_guess.code[i] = colors.sample
    end
    new_guess
  end



  def self.give_feedback(hidden_code, guess_code)
    # colored key for each code color in correct color AND position
    # white key for each code color with correct color in the wrong position
    feedback = []
    hidden_code_copy = hidden_code.dup
    guess_code_copy = guess_code.dup

    # puts "feedback check hidden: #{hidden_code_copy.join(', ')}"
    # puts "feedback check guess: #{guess_code_copy.join(', ')}"
    CODE_LENGTH.times do |num|
      if hidden_code_copy[num] == guess_code_copy[num]
        feedback << '++'
        hidden_code_copy[num] = guess_code_copy[num] = nil
      end
    end

    CODE_LENGTH.times do |num|
      if guess_code_copy[num] && (index = hidden_code_copy.index(guess_code_copy[num]))
        feedback << '+'
        hidden_code_copy[index] = guess_code_copy[num] = nil
      end
    end
    feedback
  end

  def self.player_codebreaker_loop(player, hidden_code)
    feedback = []
    turns = 0

    until feedback == Array.new(CODE_LENGTH, '++') || turns == 8
      turns += 1
      player_code = input_guess
      feedback = give_feedback(hidden_code.code, player_code.code)
      puts "\nTurn #{turns} Feedback: #{feedback.join(', ')}"
      puts "\n\n"
    end

    if feedback == Array.new(CODE_LENGTH, '++')
      puts "Congrats #{player.name}! You guessed the code in #{turns} guesses!"
    else
      puts "Oh no! You've failed to guess the code in #{turns} guesses!"
      puts "The code was: #{hidden_code.code.join(', ')}"
    end
    puts "\n"
  end

  def self.player_codemaker_loop(player, hidden_code)
    feedback = []
    previous_guesses = []
    turns = 0
    computer_code = generate_code

    until feedback == Array.new(CODE_LENGTH, '++') || turns == 100
      turns += 1
      feedback = give_feedback(hidden_code.code, computer_code.code)
      puts "\nTurn #{turns}\nGuess: #{computer_code.code.join(', ')}\nFeedback: #{feedback.join(', ')}"
      puts "\n\n"
      previous_guesses << [computer_code, feedback]
      computer_code = computer_codebreaker(previous_guesses)
    end

    if feedback == Array.new(CODE_LENGTH, '++')
      puts "Sorry #{player.name}! The computer guessed your code in #{turns} guesses!"
    else
      puts "Congrats #{player.name}! The computer failed to guess your code in #{turns} guesses!"
    end
    puts "\n"
  end
end

MasterMind.play_game

# 1. Create Player
#   1a. get name
# 2. Start game
#   2a. set hidden_code with randomly chosen colors
#   2b. prompt player for a guess
#   2c. interpret guess
#   2d. provide feedback
# 3. repeat until codes match or max guess limit reached
# 4. print result

# Computer Codebreaking:
# 1. random guess
# 2. loop
#   2a. get feedback - save guess and feeback
#   2b. interpret feedback
#   2c. make educated guess
# 3. end condition
# 4. print result