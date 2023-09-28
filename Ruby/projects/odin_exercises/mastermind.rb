module MasterMind
  CODE_LENGTH = 4


  def self.play_game
    player = Player.new

    print_instructions

    hidden_code = generate_code

    puts "\nYour opponent has selected a secret code for you to guess..."

    feedback = []

    turns = 0

    until feedback == Array.new(CODE_LENGTH, '++') || turns == 8
      turns += 1
      player_code = input_guess
      feedback = give_feedback(hidden_code.code, player_code.code)
      puts "Turn #{turns} Feedback: #{feedback.join(', ')}"
      puts "\n\n"
    end

    if feedback == Array.new(CODE_LENGTH, '++')
      puts "Congrats #{player.name}! You guessed the code in #{turns} guesses!"
    else
      puts "Oh no! You've failed to guess the code in #{turns} guesses!"
    end
    puts "\n"
  end

  class Code
    attr_accessor :code

    COLOR_OPTIONS = %w[blu grn pnk pur red ylw]
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
      puts "Select your code (e.g. 'blu, grn, pnk, pur'):"
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

  def self.generate_code
    code = Code.new(true)
    # puts code.code.join(', ')
    # code
  end

  def self.input_guess
    Code.new(false)
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
end

MasterMind.play_game

# 1. Create Player
#   1a. get name
# 2. Start game
#   2a. set hidden_code with randomly chosen colors
#   2b. prompt player for a guess
#   2c. interpret guess
#   2d. provide feedback
#   2e. repeat until codes match or max guess limit reached
#   2f. print result
